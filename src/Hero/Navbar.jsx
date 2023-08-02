
function Navbar() {
    return (
        <nav className="navbar">
            <header className="nav">

                <a href="/" className="logo">LOGO</a>

                <ul className="nav-items">
                    <li className="nav-links "><a className="active" href="/">Home</a></li>
                    <li className="nav-links"><a href="/">About-us</a></li>
                    <li className="nav-links"><a href="/">Our Service</a></li>
                    <li className="nav-links"><a href="/">Projects</a></li>
                    <li className="nav-links"><a href="/">Contact-us</a></li>
                </ul>
            </header>

            <header className="nav-action">
                <ul className="nav-actions-items">
                    <li className="nav-action-links"><a href="/">WhatsApp</a></li>
                    <a href="/" className="nav-btn">Download CV</a>
                  </ul>
            </header>

        </nav>
    )
}

export default Navbar