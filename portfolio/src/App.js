import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <header class="header">
        <h1 id="name"> Michael Taraschi </h1>
        <nav>
          <section>
              <a href="#aboutMe">About Me</a>
          </section>

          <section>
              <a href="#myWork">Work</a>
          </section>

          <section>
              <a href="#contactMe">Contact Me</a>
          </section>
        </nav>
        </header>
      <aside>
        <p>Photo of Me!</p>
        <img src="./assets/images/me2 (2).jpg" alt="me"/>
        <ul>
            <p>This is where you'll find me all over the internet!</p>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Twitter</li>
            <li><a href="https://www.youtube.com/@therealphiljenkins/featured">YouTube</a></li>
        </ul>
      </aside>

      <section id="aboutMe">
      <p>
          I'm a 27 year old full-stack developer, cake decorator, an avid gamer, and an anime enthusiast. I love learning new things and polishing my available talents. Stick around and watch how I grow! 
      </p>
      </section>

      <section id="myWork">
        <article>
          <h3>ARC: Anime Release Calendar</h3>
          <a href="https://jakrau.github.io/ARC/">
            <img src="./assets/images/ARC.png" alt="the ARC website main page"/>
          </a>
        </article>
        <article>
          <h3>Quizimation</h3>
          <a href="https://github.com/TheMikal/Quizimation">
            <img src="./assets/images/Quizimation.png" alt="the Quizimation website"/>
          </a>
        </article>
        <article>
          <h3>Chatty Cat: A blogging site about cats</h3>
          <a href="http://https://chatty-cat-d7c479363922.herokuapp.com/">
            <img src="./assets/images/ChattyCat.png" alt="the Chatty Cat main page"/>
          </a>
        </article>
        <article>
          <h3>Project 4: TBD</h3>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4eclYcgCGhbl_d3fJ0Yrt1tfKAAR115KJzQ&usqp=CAU" alt="place holder "/>
        </article>
        <article>
          <h3>Project 5: TBD</h3>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4eclYcgCGhbl_d3fJ0Yrt1tfKAAR115KJzQ&usqp=CAU" alt="place holder "/>
        </article>
        <article>
          <h3>Project 6: TBD</h3>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4eclYcgCGhbl_d3fJ0Yrt1tfKAAR115KJzQ&usqp=CAU" alt="place holder "/>
        </article>
      </section>

      <section id="contactMe">
        <ul>
          <p>Contact Me Here:</p>
          <li>Email: Mikeyt940@gmail.com</li>
          <li>Facebook</li>
          <li>Instagram</li>
          <li><a href="https://twitter.com/mikal_the_twit">Twitter</a></li>
          <li><a href="https://www.youtube.com/@therealphiljenkins/featured">YouTube</a></li>
        </ul>
      </section>
      <footer>
        Website made by Michael Taraschi with ♥
      </footer>
    </div>
  );
}

export default App;
