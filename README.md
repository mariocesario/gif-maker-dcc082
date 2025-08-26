Documentação Completa do Projeto
Visão Geral

Este projeto, intitulado “Criador de GIFs Animados a partir de Vídeo”, corresponde ao Trabalho Prático 2 (TP2) da disciplina de Sistemas Multimídia da Universidade Federal de Juiz de Fora (UFJF).

O objetivo central é demonstrar a integração de técnicas de codificação, transcodificação e distribuição audiovisual em uma aplicação web interativa e funcional.

A aplicação permite que o usuário:

Faça o upload de um vídeo.

Selecione um trecho específico de sua escolha.

Converta esse trecho em um GIF animado, pronto para visualização e download.

Objetivos do Trabalho

Implementar uma aplicação multimídia funcional utilizando tecnologias web.

Demonstrar o uso prático de ferramentas de codificação e transcodificação de vídeo (FFmpeg).

Oferecer ao usuário uma experiência simples e intuitiva para a criação de GIFs.

Atender aos requisitos propostos pela disciplina: aplicação baseada na Web e transcodificação audiovisual.

Requisitos Atendidos

O projeto foi desenvolvido com foco em atender aos critérios mínimos solicitados no trabalho:

Aplicação baseada na Web: a interface roda integralmente em navegadores modernos, sem necessidade de instalação extra no cliente.

Codificação e Transcodificação: o backend utiliza o FFmpeg para processar e converter trechos de vídeo em GIFs animados.

Dessa forma, dois dos requisitos principais da disciplina são plenamente contemplados.

Tecnologias e Arquitetura

O sistema é dividido em frontend e backend, com responsabilidades bem definidas.

Frontend

index.html → Estrutura da interface: formulário de upload, player de vídeo, campos de tempo e botões de controle.

style.css → Estilização responsiva, proporcionando uma experiência visual clara e agradável.

script.js → Lógica da aplicação no cliente: gerencia upload, pré-visualização, envio de dados ao servidor e exibição do GIF convertido.

Backend

O servidor foi desenvolvido em Node.js, com suporte do framework Express.

server.js → Arquivo principal do backend. Configura endpoints HTTP, utiliza Multer para upload de arquivos e invoca o FFmpeg via linha de comando para realizar a transcodificação. Após o processamento, envia o GIF resultante ao cliente.

Fluxo de Execução

O usuário seleciona e envia um vídeo pelo formulário web.

O script.js exibe o vídeo no player local para pré-visualização.

O usuário define os tempos de início e fim do trecho desejado.

Ao clicar em “Gerar GIF”, os dados são enviados ao servidor pelo endpoint /convert.

O server.js processa o upload, executa o FFmpeg para cortar e converter o trecho.

O servidor envia o arquivo GIF de volta ao cliente.

O script.js atualiza a página exibindo a prévia e disponibilizando o link de download.

Resultados Obtidos

O sistema foi testado com diferentes formatos de vídeo (MP4, AVI, MKV), apresentando resultados satisfatórios.

O tempo de conversão é rápido em trechos curtos (até 15 segundos).

A aplicação é responsiva e pode ser utilizada em navegadores modernos em desktops ou notebooks.

O GIF gerado apresenta qualidade adequada para demonstrações e compartilhamentos simples.

Limitações

Tempo máximo recomendado: por questões de desempenho, a conversão de trechos muito longos pode causar demora significativa.

Tamanho do arquivo de upload: atualmente limitado a 200 MB (configurável no servidor).

Qualidade fixa do GIF: parâmetros como fps=10 e scale=320 foram definidos para equilibrar desempenho e qualidade, mas poderiam ser ajustados dinamicamente.

Dependência do FFmpeg: é necessário que o binário esteja corretamente instalado e configurado no sistema operacional.

Possíveis Extensões Futuras

Adicionar personalização de parâmetros (resolução, fps, paleta de cores).

Implementar suporte a compressão do GIF para reduzir o tamanho final.

Permitir que o usuário insira legendas ou sobreposições de texto no GIF.

Estender a aplicação para streaming em tempo real de trechos já convertidos.

Disponibilizar a aplicação em nuvem, acessível sem necessidade de instalação local.

Como Executar o Projeto
Pré-requisitos

Node.js instalado

node -v


FFmpeg instalado

ffmpeg -version

Passo a passo

Clone o repositório

git clone https://github.com/mariocesario/gif-maker-dcc082.git


Instale as dependências

cd gif-maker-dcc082
npm install


Inicie o servidor em modo desenvolvimento

npm run dev


Acesse a aplicação
Abra o navegador em: http://localhost:3000

Conclusão

O Criador de GIFs Animados a partir de Vídeo demonstra, de forma prática, a integração de tecnologias multimídia em um ambiente web. O projeto comprova a aplicação de conceitos de codificação, transcodificação e interação multimídia, atendendo aos requisitos da disciplina e fornecendo uma solução funcional e extensível.