import ImageGrand from "../../assets/images/GrandmasSecrets.jpg";
import Abode from "../../assets/images/Abode.jpg";
import "./Home.css";

export default function AboutMe() {
  return (
    <div>
      <h1 className="intro-heading normal-case text-xl">Introduction</h1>
      <p className="intro-paragraph">
        Hello and welcome to my portfolio! My name is John Lundy and I am a
        software developer that has recently graduated from The University of
        Denver's BootCamp. I excel in React, JavaScript and back end frameworks,
        such as Node.js or MongoDB.
      </p>
      <h2 className="intro-heading normal-case text-xl">
        A few of my favorite projects
      </h2>
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
      </div>
    </div>
  );
}
