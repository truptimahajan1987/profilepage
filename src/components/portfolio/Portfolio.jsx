import "./Portfolio.css"
import PortfolioList from "../portfolioList/PortfolioList"
import { useState } from "react"

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const list =[

        {
          id:"featured",
          title:"featured"
        },
        
        
        {
          id:"mobile app",
          title:"mobile app"
        },
        {
          id:"branding",
          title:"branding"
        },
        {
          id:"design",
          title:"design"
        }
  ]
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item)=>
        <PortfolioList
         title={item.title} 
         active={selected == item.id} 
         setSelected={setSelected} 
         id={item.id}/>
        )}
      </ul>
      <div className="container">
        <div className="item">
          <img src="asset/bank.jpg" alt="" />
          <h1>Mobile App</h1>
        </div>
        <div className="item">
          <img src="asset/bank.jpg" alt="" />
          <h1>Mobile App</h1>
        </div>
        <div className="item">
          <img src="asset/bank.jpg" alt="" />
          <h1>Mobile App</h1>
        </div>
        <div className="item">
          <img src="asset/bank.jpg" alt="" />
          <h1>Mobile App</h1>
        </div>
        
        <div className="item">
          <img src="asset/bank.jpg" alt="" />
          <h1>Mobile App</h1>
        </div>
        <div className="item">
          <img src="asset/bank.jpg" alt="" />
          <h1>Mobile App</h1>
        </div>

      </div>
    </div>
  )
}
