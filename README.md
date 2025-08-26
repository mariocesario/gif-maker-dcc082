Visão Geral do Projeto
Este projeto, intitulado "Criador de GIFs Animados a partir de Vídeo", é o Trabalho Prático 2 (TP2) da disciplina de Sistemas Multimídia da Universidade Federal de Juiz de Fora (UFJF). O objetivo é demonstrar a integração de técnicas de codificação, processamento e distribuição audiovisual em uma aplicação web funcional.

A aplicação permite que um usuário faça o upload de um arquivo de vídeo, selecione um trecho específico e converta-o em um GIF animado.

Requisitos Atendidos
O projeto foi desenvolvido para atender aos seguintes requisitos do trabalho:

Aplicação baseada na Web: A interface do usuário é totalmente funcional em um navegador, permitindo o upload e a interação diretamente no site.

Codificação e Transcodificação: O sistema utiliza a ferramenta FFmpeg para transcodificar o vídeo original em um arquivo de imagem animada (GIF).

Tecnologias e Arquitetura
O projeto é dividido em duas partes principais: o frontend (interface do usuário) e o backend (servidor).

Frontend
index.html: A estrutura base da página web, incluindo o formulário de upload, o player de vídeo, os seletores de tempo e os botões de controle.

style.css: O arquivo de estilização que torna a interface visualmente agradável.

script.js: A lógica JavaScript que lida com a interação do usuário. Ele gerencia o upload do arquivo, exibe a pré-visualização do vídeo, envia o arquivo e os parâmetros para o servidor e processa a resposta para exibir e disponibilizar o GIF para download.

Backend
O servidor, construído com Node.js e o framework Express, gerencia a comunicação com o frontend e o processamento do arquivo.

server.js: O arquivo principal do servidor. Ele configura um endpoint para o upload de arquivos, usa o Multer para processar o formulário, e executa o FFmpeg via linha de comando para realizar a transcodificação. Após a conversão, o servidor envia o arquivo GIF de volta ao cliente.

Fluxo de Execução
O usuário seleciona e faz o upload de um vídeo através do formulário na página web.

O script.js exibe o vídeo no player localmente.

O usuário define os tempos de início e fim do trecho a ser convertido.

Ao clicar em "Gerar GIF", o script.js envia o vídeo e os tempos para o endpoint /upload no servidor.

O server.js recebe os dados e executa um comando FFmpeg para cortar o vídeo e convertê-lo para GIF.

O servidor envia o arquivo GIF de volta para o cliente.

O script.js exibe a pré-visualização do GIF na página e disponibiliza um link para download.

Como Rodar o Projeto
Siga os passos abaixo para configurar e executar o projeto em sua máquina local.

Pré-requisitos
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