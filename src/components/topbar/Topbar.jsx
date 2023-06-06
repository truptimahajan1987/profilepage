import "./Topbar.css"

export default function topbar({menuOpen,setMenuOpen}) {
  
  return (
    <div className= {"topbar " + (menuOpen && 'active')} id="topbar" >
      <div className="wrapper">
        <div className="left">
          <a href="#intro1" className="logo">logo</a>
            <div className="itemContainer">
            <i class="fa-solid fa-person"></i>
            <span>+91 234 234 55</span>
            </div>
            <div className="itemContainer">
            <i class="fa-sharp fa-solid fa-envelope"></i>
            <span>Jimmy@gmail.com</span>
            </div>
        </div>
        <div className="right">
            <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
               <span className="line1"></span>
              <span className="line2"></span>
              <span className="line3"></span>
            </div>
        </div>
      </div>
    </div>
  )
}
