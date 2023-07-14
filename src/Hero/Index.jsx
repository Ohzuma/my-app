import Navbar from "./Navbar"
import HeroPage from "./Hero"
import Slider from "./slider"
function Hero (){
    return(
        <main>
            <Navbar/>
           <div className="container-fluid">
           <HeroPage/>
            <Slider/>
           </div>
        </main>
    )
}

export default Hero