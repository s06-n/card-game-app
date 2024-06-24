# Project 1 - Higher or Lower

Higher or Lower is a card game application created using React and based on the British TV programme "Play Your Cards Right".

## Description:

A card game “Higher or Lower” ("Hi-Lo") created with React and the "Deck of cards" API. The application allows users to play the card game and save their scores to the leaderboard. The application contains four pages, these include the Homepage, The Game page, Leaderboard and a Team page.

## Table of Contents:

- [Installation](#installation)
- [Usage](#usage)
- [Instructions](#instructions)
- [Credits](#credits)
- [FAQ](#FAQ)
- [Screenshots](#screenshots)
- [Video](#video)

## Installation:

To install the application, download the content or fork the repository. Navigate into the folder containing the files or open the integrated terminal and run “npm install” to install Node. The application uses several npm packages including "React Router DOM" (npm I react-router-dom), "React Transition Group" (npm install react-transition-group --save), "Bulma" (npm install react-bulma-components) and "Font Awesome" (npm i --save @fortawesome/fontawesome-svg-core) which may need to be ran before launching the app. Lastly “npm start” to launch the React application in the browser. NPM test run will run the test strategy.

## Usage:

The instructions of how to play the game are detailed on the landing page (and below in the instructions section). Once the user understands the rules of the game they can navigate into the Game page to play the game. The Game includes three buttons, a start button to run the game, and higher and lower buttons to make guesses. If the user wants to save their scores they can navigate into the leaderboard page to enter their name and score to the leaderboard. The Team page is an introduction to those that took part in the creation of the application.

## Instructions:

The aim of the game is to guess whether the next card will be higher or lower than the card that was previously drawn. To play Higher or Lower, navigate into the game page and press the start button. This will trigger the countdown of the 60-second timer, the user should then select the "higher" and "lower" buttons to guess. If the user has incorrectly guessed or the timer has ran out, the game will stop. Scores can be saved by visiting the Leaderboard page and entering the details into the provided inputs.

## Credits:

#### Sado: https://github.com/s06-n

#### Alice: https://github.com/AliceAngelica

#### Natalia: https://github.com/midnightsnidget

#### Shubby: https://github.com/Shubby29

#### Siobhan: https://github.com/siobhanjones9

#### Yanxin: https://github.com/liya2021

#### The "Deck of Cards" API: https://www.deckofcardsapi.com/

## FAQ:

### What is the concept/ what are you building? Think exactly about what needs to be built.

We are building a card game based on the tv show play your cards right. It is a card game of higher or lower. We will include a shuffling animation, buttons for clicking higher or lower, animation that displays whether you have lost or not (lost money), a tally of the score and a display of the final score.

### Who will this help? Who’s your target audience?

The card game will primarily cater to people who enjoy casual and entertaining card games. The target audience includes individuals who are fans of the original TV show, as well as those who appreciate simple yet engaging gameplay. This game could be suitable for a wide range of people, including:

1. **Game Enthusiasts:** People who enjoy playing card games and are looking for a fun and quick gaming experience.

2. **TV Show Fans:** Fans of the original "Play Your Cards Right" TV show who want to relive the show's concept in a digital card game format.

3. **Casual Gamers:** Individuals who are not necessarily avid gamers but are interested in casual games that can be played during short breaks or leisure time.

4. **Puzzle Solvers:** People who enjoy the strategy and decision-making involved in predicting whether the next card will be higher or lower.

5. **Social Gamers:** Those who like to play games with friends or family, as the game's simplicity and quick rounds make it suitable for group entertainment.

6. **Mobile Users:** The game's simplicity and short play sessions could make it appealing to mobile users looking for games to play on their smartphones or tablets.

By targeting these audiences, your card game aims to provide entertainment, a sense of nostalgia for TV show fans, and a chance for players to test their intuition and decision-making skills in a light-hearted setting.

### How will you be working? What tools will help with that?

We are currently working as a team each day planning and completing tasks. We attend meetings in the evenings to discuss our next tasks and track our progress. The team has been divided into three groups (front-end, the game and back-end). We will work on our own individual branches on GitHub and send pull requests to be approved before integrating work into the main branch.

The tools that we are using include:
Slack for written communication and Zoom to host meetings.
Miro to write down ideas and plan our next tasks.
The website Balsamiq and hand-drawn wireframes to visualize the webpage design and layout.
Visual Studio, PyCharm, MySQLWorkbench for writing code.
Git and GitHub for version control

The languages used include: React.js and CSS for front-end. React/JavaScript for the game and Python and SQL for the backend and the database.

### How are you going to organise the workload? Who does what and when?

Steps have already been taken to organise the workload. During our initial planning sessions, a venn diagram was created asking members of the group to place their names in areas they felt stronger in. We also created a weekly timesheet that informs the group of everyone's availability. We also made sure to note everyone's communication style, strengths and weaknesses in a bid to understand how each individual works. 
We understand that everyone has other commitments and responsibilities, so a lot of these workload delegations are not set in stone, which is why we do daily, weekly, and impromptu check-ins.

### What are the main features of your project?

The main feature of our project is the card game 'higher or lower'. This will include a game page that shuffles and deals a deck of cards onto a specific template (maybe multiple) to play the game higher or lower. It will have buttons for you to play the game. These will include higher, lower and swap (for the first card if you don't like it).

## Wireframe:
<img width="1043" alt="image" src="https://github.com/liya2021/cfg-group-project-3/assets/126535113/e190f2cb-3cc6-43e9-a103-7ec31f767929">
<img width="1046" alt="image" src="https://github.com/liya2021/cfg-group-project-3/assets/126535113/a71f1558-07dc-413b-9d0a-f9daa9521346">
<img width="1043" alt="image" src="https://github.com/liya2021/cfg-group-project-3/assets/126535113/2bb8f581-78ef-4f28-9643-a186cf27aa6d">
<img width="1043" alt="image" src="https://github.com/liya2021/cfg-group-project-3/assets/126535113/ea73e9b3-0e86-4baf-85cd-0cb66b1d78fa">
<img width="1041" alt="image" src="https://github.com/liya2021/cfg-group-project-3/assets/126535113/3f12bb83-5472-42ea-8206-c6a647f211e8">
<img width="1045" alt="image" src="https://github.com/liya2021/cfg-group-project-3/assets/126535113/d38a1098-d6f5-4639-b6a9-2ea726dd9e58">
<img width="1043" alt="image" src="https://github.com/liya2021/cfg-group-project-3/assets/126535113/da6fd8fb-c774-45e6-95ca-5f753eecdd93">
<img width="1042" alt="image" src="https://github.com/liya2021/cfg-group-project-3/assets/126535113/2af4e2e3-efa5-41e1-949e-07d7ee14b7e0">

## Screenshots:
<img width="1779" alt="image" src="https://github.com/liya2021/cfg-group-project-3/assets/126535113/94618380-5eeb-4089-82ba-b0483da4027e">
<img width="1981" alt="image" src="https://github.com/liya2021/cfg-group-project-3/assets/126535113/f6dac49b-7b9d-4e7e-80fe-76b42f7af2f3">
<img width="1975" alt="image" src="https://github.com/liya2021/cfg-group-project-3/assets/126535113/9b48f1b2-760e-4313-acbb-127db59dfc1d">
<img width="1971" alt="image" src="https://github.com/liya2021/cfg-group-project-3/assets/126535113/50bffc71-a666-4aa4-891e-960473b59ffb">
<img width="1982" alt="image" src="https://github.com/liya2021/cfg-group-project-3/assets/126535113/3d9837a0-c52d-47ab-b8e6-6b8ff0244ccc">
<img width="1985" alt="image" src="https://github.com/liya2021/cfg-group-project-3/assets/126535113/2cb1584a-40fb-40e3-b54a-e287f2ddce6b">
<img width="1979" alt="image" src="https://github.com/liya2021/cfg-group-project-3/assets/126535113/be3942db-ea04-45e8-bf4a-ea435e33161e">
<img width="1976" alt="image" src="https://github.com/liya2021/cfg-group-project-3/assets/126535113/32d1ab19-d428-40d5-8135-7d5a948d518d">
<img width="1009" alt="image" src="https://github.com/liya2021/cfg-group-project-3/assets/126535113/e374f3ed-7aa8-4e9b-b0f7-479166d41626">
<img width="1976" alt="image" src="https://github.com/liya2021/cfg-group-project-3/assets/126535113/79fdc140-3e75-4b5f-a0eb-5b0f76fc9c9f">


Project log link: https://docs.google.com/spreadsheets/d/1mbXAnN7Ptfgv3MQT3ohSFYy__kdjf_dP/edit?usp=sharing&ouid=106434203105134246403&rtpof=true&sd=true


