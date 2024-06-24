# Part 1


## What is the concept/ what are you building? Think exactly about what needs to be built.

We are building a card game based on the tv show play your cards right. It is essentially a card game of higher or lower.

The concept is the card game of higher and lower. Card games are played to relax and a very popular pastime, engaging and easy to play for all ages. There is an element of luck involved due to the random nature of card games which make them very compelling. We want the user to experience a sleek card game, as what will set our card game apart is the design and overall look as many card game websites are very cluttered and littered with ads. We will also focus on the overall user experience of playing the game and navigating around the website.

## Who will this help? Who’s your target audience?
The card game will primarily cater to people who enjoy casual and entertaining card games. The target audience includes individuals who are fans of the original TV show, as well as those who appreciate simple yet engaging gameplay. This game could be suitable for a wide range of people, including:

1. **Game Enthusiasts:** People who enjoy playing card games and are looking for a fun and quick gaming experience.

2. **TV Show Fans:** Fans of the original "Play Your Cards Right" TV show who want to relive the show's concept in a digital card game format.

3. **Casual Gamers:** Individuals who are not necessarily avid gamers but are interested in casual games that can be played during short breaks or leisure time.

4. **Puzzle Solvers:** People who enjoy the strategy and decision-making involved in predicting whether the next card will be higher or lower.

5. **Social Gamers:** Those who like to play games with friends or family, as the game's simplicity and quick rounds make it suitable for group entertainment.

6. **Mobile Users:** The game's simplicity and short play sessions could make it appealing to mobile users looking for games to play on their smartphones or tablets.

By targeting these audiences, our card game aims to provide entertainment, a sense of nostalgia for TV show fans, and a chance for players to test their intuition and decision-making skills in a light-hearted setting.


## How will you be working? What tools will help with that?
We are currently working as a team each day planning and completing tasks. We attend meetings in the evenings to discuss our next tasks and track our progress. The team has been divided into three groups (front-end, the game and back-end). We will work on our own individual branches on GitHub and send pull requests to be approved before integrating work into the main branch.

The tools that we are using include:
Slack for written communication and Zoom to host meetings.
Miro to write down ideas and plan our next tasks.
The website Balsamiq and hand-drawn wireframes to visualize the webpage design and layout.
Visual Studio, PyCharm, MySQLWorkbench for writing code.
Git and GitHub for version control

The languages used include: React.js and CSS for front-end. React/JavaScript for the game and Python and SQL for the backend and the database.


## How are you going to organise the workload? Who does what and when?
Steps have already been taken to organise the workload. During our initial planning sessions, a venn diagram was created asking members of the group to place their names in areas they felt stronger in. We also created a weekly timesheet that informs the group of everyone's availability. We also made sure to note everyone's communication style, strengths and weaknesses in a bid to understand how each individual works. 

We understand that everyone has other commitments and responsibilities, so a lot of these workload delegations are not set in stone, which is why we do daily, weekly, and impromptu check-ins.


## What are the main features of your project?
### Main feature - game
The main feature of our project is the card game 'higher or lower'. This will include a game page that shuffles and deals a deck of cards onto a specific template (maybe multiple templates) to play the game higher or lower (play your cards right). It will have buttons for you to play the game. These will include higher, lower and swap (only once per game).

### Landing page
The app will have a landing page that takes you to different parts of the site. These will include: meet the team, game rules, leaderboard and the actual game itself. All pages will be linked via either a button or a link.

### Meet the team
Meet the team is a page including the bios of each member of our team to get to know the team behind the app.

### Game rules
Game rules will include a description of how to play the game, including how to save your score and access the leaderboard.

### Game page
The game page will include a deck of cards that uses a shuffling animation on the right hand side. The cards will then be 'dealt' onto the frame on the left hand side of the page. There will be a start game button to initiate the shuffle and deal. Each card will flip in turn, from bottom to top. The aim of the game is to correctly guess whether the next card is higher or lower until you reach the last card. To make a leaderboard for this game, the game needs to be scored. Once the game is over and you have your score, there will be an option to save your score, which will require an account login.

### Account page
The account page will include details about the player including: username, name, email, birthday and bio. There will also be game statistics on the page such as total time played, high score, top 5 scores, win to loss ratio and a score strea (number of wins in a row).

### Scoring
Correct guess: 5 points (this may be a cumulative score)
Incorrect guess: -10 points
Pair: 0 points
If your score becomes negative you are out.
There will be a maximum score for this game, so need to take this into consideration for the leaderboard, maybe time-based as well.
You are allowed one swap per game, but this will cost you 5 points.

### Leaderboard page
The leaderboard page will include a list of the top 10 scores achieved in the game. Each row will include the rank, username of the player, the date the score was obtained, the score/points and the time in which the score was obtained, so that if there are multiple players with the top score, it will be ranked by time in ascending order (shortest time wins).