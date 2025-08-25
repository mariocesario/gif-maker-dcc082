document.addEventListener('DOMContentLoaded', () => {
    const uploadForm = document.getElementById('upload-form');
    const videoFile = document.getElementById('video-file');
    const videoContainer = document.getElementById('video-container');
    const videoPlayer = document.getElementById('video-player');
    const startTimeInput = document.getElementById('start-time');
    const endTimeInput = document.getElementById('end-time');
    const convertBtn = document.getElementById('convert-btn');
    const statusMessage = document.getElementById('status-message');
    const downloadContainer = document.getElementById('download-container');
    const gifPreview = document.getElementById('gif-preview');
    const downloadLink = document.getElementById('download-link');
    const uploadBtn = document.getElementById('upload-btn');

    // Oculta os elementos no início
    videoContainer.classList.add('hidden');
    downloadContainer.classList.add('hidden');

    // --- Lógica para o Upload do Vídeo ---
    uploadForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const file = videoFile.files[0];
        if (!file) {
            alert('Por favor, selecione um arquivo de vídeo.');
            return;
        }
        
        // Exibe o player de vídeo localmente
        const videoURL = URL.createObjectURL(file);
        videoPlayer.src = videoURL;
        videoContainer.classList.remove('hidden');

        // Configura os tempos inicial e final do vídeo
        videoPlayer.addEventListener('loadedmetadata', () => {
            endTimeInput.value = videoPlayer.duration.toFixed(1);
        });

        uploadBtn.disabled = true;
        uploadBtn.textContent = 'Vídeo Carregado!';
    });

    // --- Lógica para a Conversão do GIF ---
    convertBtn.addEventListener('click', async () => {
        const file = videoFile.files[0];
        const startTime = startTimeInput.value;
        const endTime = endTimeInput.value;
        
        if (!file || !startTime || !endTime) {
            alert('Por favor, selecione um vídeo e defina os tempos de início e fim.');
            return;
        }

        const formData = new FormData();
        formData.append('video', file);
        formData.append('startTime', startTime);
        formData.append('endTime', endTime);

        statusMessage.textContent = 'Gerando GIF... Isso pode levar alguns segundos.';
        convertBtn.disabled = true;

        try {
            const response = await fetch('/upload', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                const blob = await response.blob();
                const gifURL = URL.createObjectURL(blob);
                
                gifPreview.src = gifURL;
                downloadLink.href = gifURL;
                downloadLink.download = 'meu_gif.gif';
                downloadContainer.classList.remove('hidden');
                statusMessage.textContent = 'GIF gerado com sucesso!';

            } else {
                statusMessage.textContent = 'Erro ao gerar o GIF. Tente novamente.';
            }
        } catch (error) {
            console.error('Erro:', error);
            statusMessage.textContent = 'Erro de conexão com o servidor.';
        } finally {
            convertBtn.disabled = false;
        }
    });
});