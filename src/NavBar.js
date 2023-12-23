import './NavBar.css';
import audiLogo from './audi-1-logo-black-and-white.png';

const NavBar = () => {
    const websiteTitle = "Audi RS4 B7 Registry";
    return (
        <nav className="navbar">
            <img src={audiLogo} className='AudiLogo' alt='Audi Logo' />
            <h1>{websiteTitle}</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/avant">Avants</a>
                <a href="/sedan">Sedans</a>
                <a href="/cabriolet">Cabriolets</a>
                <a href="/about">About</a>
                <a href="/contact">Contact</a>
                <a href="/adminPanel">Admin Panel</a>
            </div>
        </nav>
    );
}

export default NavBar;