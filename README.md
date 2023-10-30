# Desafio Front-End da Desbravador Software
Desafio para a vaga de Front-End na empresa Desbravador Software
Link para acessar o projeto em produção: https://desafio-front-cyan.vercel.app

**Rota de Busca**
https://desafio-front-cyan.vercel.app
![buscar](https://github.com/MylennaAlcantara/desafioFront/assets/93752575/f5cdf81a-742f-46ac-904c-6f3dbff09aaa)

**Rota de Perfil**
https://desafio-front-cyan.vercel.app/perfil
![perfil](https://github.com/MylennaAlcantara/desafioFront/assets/93752575/e2dbce75-405f-4c5d-9d19-d6fbf8b3143e)

**Rota do Repositorio Aberto**
https://desafio-front-cyan.vercel.app
![Repositorio](https://github.com/MylennaAlcantara/desafioFront/assets/93752575/6c11926d-6b8d-44ad-a438-ff32296947bc)


**Instalação:**  
* Passo 1:
  Caso ainda não possua o Node instalado em sua maquina, por favor realizar o download e instalação do mesmo através do link: https://nodejs.org/en/download
* Passo 2:
  * Acessar o repositorio: https://github.com/MylennaAlcantara/desafioFront , caso não possua IDE para executar o projeto, realize o download do arquivo zip, após feito o download, descompacte a pasta e entre na pasta "desafio-desbravador", com a pasta aberta, segure a tecla SHIFT+Botão direito do mouse, abra o terminal do powerShell, e execute o comando: nmp install, após concluir a instalação, digite o comando: npm start, e em seguida será aberta uma nova janela com com a págnina.
  * Caso utilize IDE, acesse o repositorio e realize o clone do repositorio, abra o terminal na pasta "desafio-desbravado", digite o comando: npm install, e após concluir digite: npm start.
  * Caso a página não abra, basta abrir o navegador e digital http://localhost:3000 ou http://seuIpAqui:3000

### **Tecnologias Utilizada** ###
* React Js.
* TypeScript.
* React Router Dom.
* Redux.
* React Hooks.
* Fetch
* Styled Components.
* Reponsividade.

### **Funcionalidades** ###

* Na rota https://desafio-front-cyan.vercel.app é possivel buscar um usario do GitHub, caso não encontre, será retornado uma mensagem de erro.
* Eu, como usuário, desejo **ver os detalhes do usuário** buscado (número de seguidores, número de seguidos, imagem do avatar, e-mail e bio);
* Ao pesquisar um usuario e esse usuário for encontrado, será direcionado para a rota https://desafio-front-cyan.vercel.app/perfil.
* Na rota https://desafio-front-cyan.vercel.app/perfil é exibido as informações de Nome, Login, Email, Bio, Seguidores e Seguidos caso essas informações existam, também temos os primeiros 6 repositorios considerando os que tem a menor quantidade de estrelas.
* Na rota https://desafio-front-cyan.vercel.app/perfil é possivel ordenar de acordo com a maior ou menor quantidade de estrelas, também é possível visualizar todos os repositorios clicando no botão "Listar Todos".
* Ao clicar em um dos repositorios listados, será direcionado para a rota https://desafio-front-cyan.vercel.app/{nome do repositorio}, com Nome, Descrição, número de estrelas, linguagem e o link para acessar a pagina externa do GitHub.
* Existe uma verificação que identifica se existe algum usuario armazenado no redux, caso recarregue a pagina, ou tente acessar alguma rota sem ser a principal e ainda não fez a pesquisa, irá aparecer para fazer a busca.
  
Rotas:
* https://desafio-front-cyan.vercel.app
* https://desafio-front-cyan.vercel.app/perfil
* https://desafio-front-cyan.vercel.app/{nome do repositorio}


A aplicação deve estar hospedada (bônus) ([Heroku](https://www.heroku.com/), [Firebase](https://www.firebase.com/), [Plunker](https://plnkr.co/), [Surge](http://surge.sh/), etc) As URLs deve ser enviada por email.

Qualquer dúvida em relação ao desafio, responderemos por e-mail.

Bom trabalho!
