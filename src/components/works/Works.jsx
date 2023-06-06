import "./Works.css"

export default function Works() {
  return (
    <div className="works" id="works">
      <div className="slider">
        <div className="container">
          <div className="item">
            <div className="left">
              <div className="leftcontainer">
                <div className="imgcontainer">
                  <img src="./asset/mobile.jpg" alt="" />
                </div>
                <h2>IMAGE</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus animi dignissimos quam maiores ad?</p>
                <span>Project</span>
              </div>
            </div>
            <div className="right">
              <img id="r1" src="asset/img.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
      <img src="asset/right-arrow.png" className="left arrow" alt="" srcset="" />
      <img src="asset/right-arrow.png" className="right arrow" alt="" srcset="" />
    </div>
  )
}
