# NLW
 <h2>Proffy - Plataforma de Aulas </h2>
 
 <h3>RocketSeat NLW course repository - Omni Stack</h3>
 
 > Status do Projeto: Concluido :heavy_check_mark:
 
 <h4>Descrição</h4> 
Este projeto é um sistema web dividido em três partes, sendo backend, frontend e mobile. Sendo uma plataforma online de aulas/cursos ead, com a intenção de que qualquer usuário que deseje ministrar uma aula de um assunto especifico possa divulgar seu perfil online, e assim ser contato por meio do whatsapp ou outros canais. O professor pode deixar seu contato, seu preço por hora trabalhada e os horários disponíveis que pode trabalhar durante a semana.

<h4>Layout do projeto</h4>
<img src="https://github.com/lucaslimaax/Source-Projects/blob/master/NLW%20assets/main.PNG?raw=true" title="Página Inicial"/>
<img src="https://github.com/lucaslimaax/Source-Projects/blob/master/NLW%20assets/formulario.PNG?raw=true" title="Formulário do Professor"/>
<img src="https://github.com/lucaslimaax/Source-Projects/blob/master/NLW%20assets/formulario%20for%20mobile%20nav.PNG?raw=true" title="Formulário do Professor - navegador Mobile"/>
<img src="https://github.com/lucaslimaax/Source-Projects/blob/master/NLW%20assets/proffys%20list.PNG?raw=true" title="Lista de Professores"/>
<img src="https://github.com/lucaslimaax/Source-Projects/blob/master/NLW%20assets/proffys%20mobile%20nav%20list.PNG?raw=true" title="Lista de professores- navegador Mobile"/>


<h4> Sobre o proejeto</h4>

### Projeto construído com:
- Node
 - React
  - React-Native
  
 ## Libs e dependências utilizadas :books:

- [React](https://react-pdf.org/): versão xx.xxx 
- [React Router](https://reactrouter.com/web/guides/quick-start): versão 16.13.1
- [Axios](https://github.com/axios/axios): versão 0.19.2
- [knex](http://knexjs.org/): versão 0.21.2
- [Express](https://expressjs.com/pt-br/): versão 4.17.1
- [Cors](https://www.npmjs.com/package/cors): versão 4.17.12.8.5

## Fontes :pencil:
- [Fontes](https://fonts.google.com/):
expo install @expo-google-fonts/archivo @expo-google-fonts/poppins

## Como executar o projeto na sua máquina :gear:

<h5>Front End</h5>

1 - Instalar as depêndencias:

#Instalar modulos de rotas do app

	yarn add @types/react-router-dom -D
	
#Instalar biblioteca axios

	yarn add axios
	
#Intalar fontes do expo - google

	expo install @expo-google-fonts/archivo @expo-google-fonts/poppins
	
	
<h5>Back end</h5>

1-instalar as depêndencias:

#micro framework 

	yarn add express

 	
#instalação do driver do bando de dados

	yarn add knex sqlite3
(knex permite escrever as query em javascript)

2-Add ao package json

colocar nos scripts o comando knex para subistituir o seu uso em javascript por typescript

"knex:migrate": "knex --knexfile knexfile.ts migrate:latest",
    "knex:migrate:rollback": "knex --knexfile knexfile.ts migrate:rollback"


#Permite que outras aplicações e endereços diferentes acessem a api

	yarn add cors (erro de tipagem usar yarn add @types/cors -d)

Atenção: Para iniciar ambos executar o comando yarn(ou npm) start

<h5>Aplicação com React Native</h5>


1-Instalar as depêndencias:

#Intalar fontes do expo - google

	expo install @expo-google-fonts/archivo @expo-google-fonts/poppins

#Instalar a biblioteca de navegação do react-app

	yarn add @react-navigation/native (ou com npm)
	
#Installing dependencies into an Expo managed project

	expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
	
#Installing the stack navigator library

	yarn add @react-navigation/stack

#Tab navigation

	yarn add @react-navigation/bottom-tabs
		


## Possíveis Erros :triangular_flag_on_post:

#Instalando o cors - Erro de tipagem: 
 -Executar o seguinte comando:
	 erro de tipagem usar yarn add @types/cors -d
	
#Tela Branca ao excutar projeto - Erro assets frontend:
 -Instalar novamente o projeto com o comando:
	yarn create react-app







