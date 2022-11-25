
import { Phone, PhoneAndroid } from '@mui/icons-material'
import "./about.css"

const About = () => {
  return (
    <div className="about">
      <div className="aboutBox">
        <div className="image">
          <span className="phone">
            <PhoneAndroid style={{fontSize:"30px",color:"white"}}/>
          </span>
          <img src="https://picsum.photos/536/354" alt="" />
        </div>
        <div className="aboutText">
          <div className="textArea">
          <h1>About</h1>
          <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, non incidunt? Hic sed nam illo molestiae eveniet enim magnam, sit quae laboriosam explicabo harum sequi ducimus, iste, blanditiis eligendi inventore!</small>
          <h5>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad laborum veniam esse. Perspiciatis, in culpa?</h5>
          <div className="aboutNumber">
            <Phone className="tel" style={{color:"#44D63B"}}/>
           <span> +1(254)867-8591</span>

          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About