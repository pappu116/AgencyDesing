import { LightModeOutlined, PhoneAndroidOutlined } from "@mui/icons-material"
import "./price.css"

const Price = () => {
  return (
    <div className="price">
      <div className="priceBox">
        <div className="freePlan">
        <div className="freePlanCard">
        <LightModeOutlined style={{color:"white",fontSize:"40px"}} className="freeLogo"/>
            <h1>$0</h1>
            <p>Per Month</p>
            <ul>
              <li>15 Users</li>
              <li>Features 2</li>
              <li>Feature 3</li>
              <li>Feature 4</li>
            </ul>
            <button className="get-btn"  style={{backgroundColor:"#000000"}}>Get plan</button>
          </div>
        </div>
        <div className="paidPlan">
        <div className="paidPlanCard">
            <PhoneAndroidOutlined style={{color:"white",fontSize:"40px"}} className="planLogo"/>
            <h1>$39</h1>
            <p>Per Month</p>
            <ul>
              <li>15 Users</li>
              <li>Feature 2</li>
              <li>Feature 3</li>
              <li>Feature 4</li>
            </ul>
            <button className="get-btn">Get plan</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Price