import React from 'react';
import './Team.css';
import 'bulma/css/bulma.min.css';
import Footer from './Footer';
import FlippableCard from './components/flippable-card';


function Team() {
  return (
    <div className='background'>
      <>
        <div>
          <header>
            <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
            <h1 className='title is-1 has-text-white'>Meet The Team</h1>
          </header>
        </div>

        <div className='container'>
          <div className='columns'>
            <div className='column'>
              <FlippableCard
                frontContent={<h2>Sado</h2>}
                backContent={
                  <ul>
                    <li>My favourite hobby is going to the theatre.</li>
                    <li>I have loved watching plays and musicals ever since I watched An Inspector Calls in secondary school.</li>
                    <li>Some of my favourites are Phantom of the Opera and Hamilton.</li>
                  </ul>
                }
              />
            </div>

            <div className='column'>
              <FlippableCard
                frontContent={<h2>Alice</h2>}
                backContent={
                  <ul>
                    <li>My favourite hobby is baking and making desserts, I learned how to bake through several years of practice.</li>
                    <li>I can make foods like homemade pastry, soufflés, puddings, whipped mousse, bundt cakes, tarts, homemade ice cream and homemade caramel (and more).</li>
                    <li>I also like savoury baking and really enjoy making quiches, soufflés and bread.</li>
                    <li>I find baking really fun and relaxing and it helps me to alleviate stress when I am feeling overwhelmed.</li>
                  </ul>
                }
              />
            </div>

            <div className='column'>
              <FlippableCard
                frontContent={<h2>Natalia</h2>}
                backContent={
                  <ul>
                    <li>My current favourite hobby is reading books on the kindle.</li>
                    <li>I like to read books on the kindle because no matter the size of the book, you can read it laying down without bending it!</li>
                    <li>Reading books on the kindle saves space on your bookshelf, and your kindle device can fit in very small handbags too.</li>
                    <li>The best thing about the kindle though, is that you can read it at night time in bed with the light off, and not disturb others.</li>
                    <li>The only exception I have to reading books on the kindle is reading hardback books, as they are basically indestructible.</li>
                  </ul>
                }
              />
            </div>
          </div>
          <Footer />
        </div>

        <div className='container'>
          <div className='columns'>
            <div className='column'>
              <FlippableCard
                frontContent={<h2>Shubby</h2>}
                backContent={
                  <ul>
                    <li>I have a deep appreciation for literature in all its forms, whether it's through books, podcasts, movies, TV shows, video essays, or music.</li>
                    <li>Recently, I've developed a newfound love for jazz, finding it to be incredibly inspiring.</li> 
                    <li>These art forms transcend time and serve as a boundless source of inspiration for various aspects of my life.</li>
                  </ul>
                }
              />
            </div>

            <div className='column'>
              <FlippableCard
                frontContent={<h2>Shiv</h2>}
                backContent={
                  <ul>
                    <li>I spend the majority of my spare time playing football and trying to stay fit for when I play by going to the gym.</li>
                    <li>I've played football for as long as I can remember and was really driven by my dad throughout growing up. For my sins I am a Tottenham fan and have previously played for both the women's team and Newcastle Women.</li>
                    <li>I play because I enjoy the team and competitive aspects.</li>
                    <li>"Football is Life" - Dani Rojas, 2020</li>
                  </ul>
                }
              />
            </div>

            <div className='column'>
              <FlippableCard
                frontContent={<h2>Yanxin</h2>}
                backContent={
                  <ul>
                    <li>I am a cat person. I spend a lot of time scrolling through cat videos. My favorite cat is the Abyssinian.</li>
                    <li>My book list: 'Sorcieres' by Mona Chollet, 'Good Bone' by Margaret Atwood, 'Finite and Infinite Games' by James Carse</li>
                    <li>I like drawing and need to practice more on anatomy illustration.</li>
                  </ul>
                }
              />
            </div>
          </div>
        </div>

        <Footer />
      </>
    </div>  
  );
}

export default Team;