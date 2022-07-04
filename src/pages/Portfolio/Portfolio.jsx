import ImageGrand from "../../assets/images/GrandmasSecrets.jpg";
import ImageTech from "../../assets/images/TechBlog.PNG";
import ImageEcom from "../../assets/images/E-Com.PNG";
import ImageNote from "../../assets/images/NoteTaker.PNG";
import ImageWeather from "../../assets/images/Weather.PNG";
import "./Portfolio.css";
import Abode from "../../assets/images/Abode.jpg";

function Portfolio() {
  return (
    <div>
      <h1 className="portfolio-heading normal-case text-xl">
        Welcome! Take a look around!
      </h1>
      <div className="flex-container">
        <div className="image-container">
          <img className="image" src={Abode} alt="Abode" />
          <div className="image-overlay">
            <div className="image-title">Abode Group</div>
            <p className="image-description">
              Full front and backend framework, developed with React and
              Firebase. This website is a landing page for those who want to
              look at the beautiful properties that Abode Group has to offer on
              the airbnb website.
            </p>
            <p class="image-description">Technologies used: Firebase, React</p>
            <a href="https://github.com/irv0735/Abode_Group_V2">GitHub Repo</a>
            <a href="https://abode-group.netlify.app/">Live Site</a>
          </div>
        </div>
        <div className="image-container">
          <img className="image" src={ImageGrand} alt="Grandmas Secrets" />
          <div className="image-overlay">
            <div className="image-title">Grandmas Secrets</div>
            <p className="image-description">
              Our first full stack MERN application, developed to give all you
              foodies out there a place to research your favorite recipes! Just
              search our extensive third party API to find that perfect morning
              breakfast to impress your family. Or maybe a guilty pleasure of
              some delectable cookies. Find all those recipes in one stop, and
              save to refer to later!
            </p>
            <p class="image-description">
              Technologies used: MongoDB, Express, Apollo, Node.js, React
            </p>
            <a href="https://github.com/akerschen-coder/peoples-recipes">
              GitHub Repo
            </a>
            <a href="https://secret-lake-40251.herokuapp.com/">Live Site</a>
          </div>
        </div>
        <div className="image-container">
          <img className="image" src={ImageTech} alt="Tech Blog" />
          <div className="image-overlay">
            <div className="image-title">Tech Blog</div>
            <p className="image-description">
              Full front and backend MVC framework to give all those who love
              tech out there a place to share their interests, comments and
              concerns about any tech under the sun! Create an account and get
              to posting. Take a look at other blogs users have made and give a
              comment. Your one stop shop for everything tech.
            </p>
            <p class="image-description">
              Technologies used: MySQL, Express, Handlebars, Sequelize
            </p>
            <a href="https://github.com/johnlundy94/tech-blog">GitHub Repo</a>
            <a href="https://damp-waters-87930.herokuapp.com/">Live Site</a>
          </div>
        </div>
        <div className="image-container">
          <img className="image" src={ImageEcom} alt="E-Commerce Backend" />
          <div className="image-overlay">
            <div className="image-title">E-Commerce Backend</div>
            <p className="image-description">
              Are you apart of a company that needs to keep track of their
              products and information about each product? This back-end
              application is your key to staying organized and up to date with
              what is in your inventory. Use an API testing platform to Create,
              Read, Update and Delete items that are in your inventory.
            </p>
            <p class="image-description">
              Technologies used: Node.js, MySQL, Sequelize
            </p>
            <a href="https://github.com/johnlundy94/E-Commerce-Back-End">
              GitHub Repo
            </a>
          </div>
        </div>
        <div className="image-container">
          <img className="image" src={ImageNote} alt="Note Taker" />
          <div className="image-overlay">
            <div className="image-title">Note Taker</div>
            <p className="image-description">
              This app was designed for those who might need to take a note down
              for their class, or maybe jot a quick note for them to remember
              something for later. With the ability to create and delete, take
              notes on anything your heart desires!
            </p>
            <p class="image-description">
              Technologies used: JavaScript, Express, db.json
            </p>
            <a href="https://github.com/johnlundy94/note-taker">GitHub Repo</a>
            <a href="https://q-note-taker.herokuapp.com/">Live Site</a>
          </div>
        </div>
        <div className="image-container">
          <img className="image" src={ImageWeather} alt="Weather-App" />
          <div className="image-overlay">
            <div className="image-title">Weather App</div>
            <p className="image-description">
              With this weather app any user can find important information
              pertaining to any cities weather. Want to know the current UV
              index or the humidity level of the place your traveling to? Or if
              you need a five day forecast to see if there is going to be some
              fresh powder where you're going to go skiing, this website is for
              you!
            </p>
            <p class="image-description">
              Technologies used: JavaScript, third party API: OpenWeather One
              Call
            </p>
            <a href="https://github.com/johnlundy94/weather-app">GitHub Repo</a>
            <a href="https://johnlundy94.github.io/weather-app/">Live Site</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
