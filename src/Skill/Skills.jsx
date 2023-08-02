import corel from '../Asset/corel.png'
import css from '../Asset/css.png'
import github from '../Asset/github.png'
import html from '../Asset/html.png'
import node from '../Asset/node.png'
import mongodb from '../Asset/mongodb.png'
import react from '../Asset/react.png'
const Skills = () => {
  return (
     <>
         <div className="hero-box">
              <div></div>
           </div>
        <div className="skill">
          
           <header>
              <h1 className='underline'>My Expertise</h1>
              {/* <div className="underline"></div> */}
              <span>
                 I am from nigeria and currently living in Gombe State,  A Fullstack Developer and <br /> also Graphic Designer.
              </span>
          </header>
       <div className="container-fluid">
      <div className="skill-container">
      <div className="skill-box">
                 <img src={css} alt="css" />
                 <span>CSS</span>
      </div>
      <div className="skill-box">
                 <img src={html} alt="css" />
                 <span>HTML</span>
              </div>
              <div className="skill-box">
                 <img src={react} alt="css" />
                 <span>REACT JS</span>
              </div>
              <div className="skill-box">
                 <img src={node} alt="css" />
                 <span>NODE JS</span>
              </div>
              <div className="skill-box">
                 <img src={mongodb} alt="css" />
                 <span>MONGODB</span>
              </div>
              <div className="skill-box">
                 <img src={github} alt="css" />
                 <span>GITHUB</span>
              </div>
              <div className="skill-box">
                 <img src={corel} alt="css" />
                 <span>COREL DRAW</span>
      </div>
     </div>
    </div>
   </div>
     </>
  );
};

export default Skills;
