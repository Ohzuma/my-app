import Porfile from '../Asset/profile.jpg'
function HeroPage() {
    return(
        <section className="hero-section">
            <div className="hero">
                <div className="hero-rh">
                    <header>
                        <small>
                            <span>I'm </span>
                            <span>Ozuma Friday</span>
                        </small>
                        <h1>
                            <span>Hiring Your Dream</span>
                            <span>Team Just Got Easier</span>
                        </h1>
                    </header>
                    <article>
                        <p>Our team is test and trusted by our client who love our work</p>
                        <div>
                            <span>We are trusted</span>
                            <span>We are reliable</span>
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
                        <div className='hero-box'>
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroPage