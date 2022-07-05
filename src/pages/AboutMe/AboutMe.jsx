import Headshot from "../../assets/images/Headshot.jpg";
import "./AboutMe.css";

export default function AboutMe() {
  return (
    <div>
      <div className="flex justify-center ">
        <img class="mask mask-squircle w-48 headshot" src={Headshot} />
      </div>

      <h1 className="intro-heading normal-case text-xl">About Me</h1>
      <p className="intro-paragraph">
        We all go through crazy times after High School, I was no different.
        After graduation, I took on a career in acting and modeling, which
        caused me to move to Los Angeles. Here, I ran across a neighbor who was
        a software engineer. He knew I was a model, actor, and a salesman at a
        local suit shop. This was during the height of the stay at home order
        and I was about to loose my job at the suit shop (which was the only
        thing keeping me off the streets). He suggested making an inventory app
        to make myself more of an asset. This sparked my path to coding. I
        researched it heavily and saw how it was a beautiful combination of arts
        and analytics. Complex puzzles being molded into life. I was hooked.
        Shortly after I decided to move back to Colorado and join up with DU's
        Full Stack program. Now that I have graduated, I am searching for that
        first step into this amazing industry.
      </p>
    </div>
  );
}
