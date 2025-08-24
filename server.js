const express = require('express');
const multer = require('multer');
const { nanoid } = require('nanoid');
const path = require('path');
const fs = require('fs');
const { exec } = require('child_process');

const app = express();
const port = 3000;

// Configura o armazenamento para os uploads de vídeo
const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
}

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = nanoid();
        const fileExtension = path.extname(file.originalname);
        cb(null, file.fieldname + '-' + uniqueSuffix + fileExtension);
    }
});

const upload = multer({ storage: storage });

// Define a pasta 'public' como a pasta estática do servidor
app.use(express.static('public'));

app.post('/upload', upload.single('video'), (req, res) => {
    if (!req.file) {
        return res.status(400).send('Nenhum arquivo enviado.');
    }
    const videoPath = req.file.path;
    const { startTime, endTime } = req.body;
    
    // Gera um nome único para o arquivo GIF de saída
    const outputDir = path.join(__dirname, 'outputs');
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir);
    }
    const outputFileName = `gif-${nanoid()}.gif`;
    const outputPath = path.join(outputDir, outputFileName);

    // Comando do FFmpeg para converter o vídeo em GIF
    const ffmpegCommand = `ffmpeg -i "${videoPath}" -ss ${startTime} -to ${endTime} -vf "fps=10,scale=320:-1:flags=lanczos" -loop 0 "${outputPath}"`;

    exec(ffmpegCommand, (error, stdout, stderr) => {
        if (error) {
            console.error(`Erro na conversão: ${error.message}`);
            return res.status(500).send('Erro na conversão do vídeo para GIF.');
        }

        // Envia o GIF de volta para o cliente
        res.download(outputPath, (err) => {
            if (err) {
                console.error('Erro no download:', err);
            }
            // Limpa os arquivos temporários após o download
            fs.unlink(videoPath, () => {});
            fs.unlink(outputPath, () => {});
        });
    });
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});