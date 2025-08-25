
Criador de GIFs Animados a partir de Vídeo
Este projeto é o Trabalho Prático 2 (TP2) da disciplina de Sistemas Multimídia da Universidade Federal de Juiz de Fora (UFJF). O objetivo é consolidar e aplicar os conhecimentos da disciplina, desenvolvendo uma aplicação multimídia que integra técnicas de codificação e processamento audiovisual.




Visão Geral do Projeto
A aplicação é um criador de GIFs animados a partir de vídeos, com uma interface web simples e intuitiva. O usuário pode fazer o upload de um arquivo de vídeo, selecionar um trecho específico e convertê-lo em um GIF animado.

Requisitos Atendidos
O projeto foi desenvolvido para atender aos seguintes requisitos do trabalho:


Aplicação baseada na Web: A interface do usuário é acessível por um navegador, permitindo o upload e a interação diretamente no site.


Codificação e Transcodificação: A ferramenta utiliza o FFmpeg para cortar o vídeo e transcodificá-lo do formato original para um arquivo GIF.

Tecnologias Utilizadas

HTML, CSS e JavaScript: Para a construção da interface do usuário (front-end).

Node.js e Express: Para criar o servidor web (back-end) que gerencia o upload de arquivos e a comunicação com o FFmpeg.

Multer: Uma biblioteca para Node.js utilizada para lidar com o upload de arquivos.

FFmpeg: A ferramenta de linha de comando que realiza a transcodificação do vídeo para GIF.

Como Rodar o Projeto
Siga os passos abaixo para configurar e executar o projeto em sua máquina local.

Pré-requisitos
Certifique-se de que você tem as seguintes ferramentas instaladas:

Node.js: Verifique a instalação com node -v.

FFmpeg: Verifique a instalação com ffmpeg -version.

Configuração e Execução
Clone o Repositório:

Bash

git clone https://github.com/mariocesario/gif-maker-dcc082.git
Instale as Dependências:
Acesse o diretório do projeto e instale as bibliotecas necessárias:

Bash

cd gif-maker-dcc082
npm install
Inicie o Servidor:
Execute o servidor em modo de desenvolvimento para que ele reinicie automaticamente a cada alteração:

Bash

npm run dev
Acesse a Aplicação:
Abra seu navegador e navegue até http://localhost:3000.

Estrutura de Pastas
/public: Contém os arquivos da interface do usuário (index.html, style.css, script.js).

/uploads: Diretório temporário para armazenar os vídeos enviados.

/outputs: Diretório temporário para os GIFs gerados.

server.js: Lógica do servidor Node.js.

package.json: Lista as dependências do projeto.

.gitignore: Ignora arquivos e pastas que não devem ser versionados pelo Git.
