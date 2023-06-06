import { useState } from "react";
import "./Contact.css"
function Contact(){

    const [msg , setMsg] = useState(false);
    const handleSubmit = (e) =>{
        e.preventDefault();
        setMsg(true);
    }
    return(
        <div className="contact" id="contact">
            <div className="leftc">
                <img src="asset/bank.jpg" alt="" />
            </div>
            <div className="rightc">
                <h2>Contact</h2>
                <form className="formc" onSubmit={handleSubmit}>
                    <input type="text" placeHolder="email" name="" id="" />
                    <textarea placeHolder="Message"name="" id="" cols="30" rows="10"></textarea>
                    <button type="submit">Send</button>
                    {
                        msg && <span>Thnaks!!!</span>
                    }
                </form>
            </div>
            </div>
        )
}
export default Contact;