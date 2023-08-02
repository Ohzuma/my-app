import Porfile from "../Asset/profile.jpg";
import { VscWorkspaceTrusted } from "react-icons/vsc";
function HeroPage() {
  return (
    <section className="hero-section">
      <div className="hero">
        <div className="hero-rh">
          <header>
            <small>
              <span>I'm </span>
              <span>Ozuma Friday</span>
            </small>
            <h1>
              <span>Getting Your Dream</span>
              <span>Team Just Got Easier</span>
            </h1>
          </header>
          <article>
            <p>Our team is test and trusted by our client who love our work</p>
            <div>
              <span>
                <VscWorkspaceTrusted />
                We are trusted
              </span>
              <span>
                <VscWorkspaceTrusted />
                We are reliable
              </span>
            </div>
            <div className="btn-container">
              <button>Hire us</button>
              <button>Download CV</button>
            </div>
          </article>
        </div>
        <div className="hero-lh">
          <div className="hero-lh-img">
            <img src={Porfile} alt="" />
            <div className="hero-box">
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroPage;
