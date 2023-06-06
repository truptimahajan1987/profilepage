import "./Menu.css"

export default function Menu({menuOpen,setMenuOpen}) {
  return (
    // <div className={"menu" +(menuOpen && 'active')}>
            <div className= {"menu " + (menuOpen && 'active')}  >

    {/* // <div className="menu"> */}
        <ul>
            <li>
                <a href="#intro1" onClick={() => setMenuOpen(false)}>Home</a>
            </li>
            <li>
                <a href="#works" onClick={() => setMenuOpen(false)}>Work</a>
            </li>
            <li>
                <a href="#testimonials" onClick={() => setMenuOpen(false)}>Testimonials</a>
            </li>
            <li>
                <a href="#portfolio" onClick={() => setMenuOpen(false)}>Portfolio</a>
            </li>
            <li>
                <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
            </li>
        </ul>
    </div>
  )
}
