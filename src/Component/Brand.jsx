import logo from "../assets/image/logo.png"
import logo1 from "../assets/image/logo1.png"
import logo3 from "../assets/image/logo3.png"
import logo4 from "../assets/image/logo4.png"
import logo5 from "../assets/image/logo5.png"
import logo6 from "../assets/image/logo6.png"
import logo7 from "../assets/image/logo7.png"
import "./Footer/footer.css"


const Brand = () => {
 const logos = [
  {
    img:logo
  },
  {
    img:logo1
  },
  {
    img:logo3
  },
  {
    img:logo4
  },
  {
    img:logo5
  },
  {
    img:logo6
  },
  {
    img:logo7
  }
 ]
  return (
    <div className="brand">
      <div className="brandBox">
        <h1>Here Are Some off our Client</h1>
        <div className="brandLogo">
        {logos.map((item)=>(
          
          <img src={item.img} alt="" />
          
        
        ))}
        </div>
      </div>
    </div>
  )
}

export default Brand