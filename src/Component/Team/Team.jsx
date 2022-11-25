import { FacebookOutlined, Instagram, Twitter } from "@mui/icons-material"
import "./team.css"

const Team = () => {
  return (
    <div className="team">
      <div className="teamText">
        <h1>Our Team</h1>
        <p>Lorem ipsum dolor sit amet, consectetur</p>
      </div>
      <div className="teamBox">
      <div className="teamMembar">
          <div className="img">
            <img src="https://picsum.photos/536/354" alt="" />
          
          <div className="PersonText">
            <h4>Moria Korim</h4>
            <div className="socialIcon">
              <FacebookOutlined  style={{color:"#44D63B",padding:"0 0.3rem"}}/>
              <Twitter  style={{color:"#44D63B",padding:"0 0.3rem"}}/>
              <Instagram  style={{color:"#44D63B",padding:"0 0.3rem"}}/>
            </div>
          </div>
          </div>
        </div>
        <div className="teamMembar">
          <div className="img">
            <img src="https://picsum.photos/536/354" alt="" />
          
          <div className="PersonText">
            <h4>Moria Korim</h4>
            <div className="socialIcon">
              <FacebookOutlined  style={{color:"#44D63B",padding:"0 0.3rem"}}/>
              <Twitter  style={{color:"#44D63B",padding:"0 0.3rem"}}/>
              <Instagram  style={{color:"#44D63B",padding:"0 0.3rem"}}/>
            </div>
          </div>
          </div>
        </div>
        <div className="teamMembar">
          <div className="img">
            <img src="https://picsum.photos/536/354" alt="" />
          
          <div className="PersonText">
            <h4>Moria Korim</h4>
            <div className="socialIcon">
              <FacebookOutlined style={{color:"#44D63B",padding:"0 0.3rem"}}/>
              <Twitter  style={{color:"#44D63B",padding:"0 0.3rem"}}/>
              <Instagram  style={{color:"#44D63B",padding:"0 0.3rem"}}/>
            </div>
          </div>
          </div>
        </div>
        <div className="teamMembar">
          <div className="img">
            <img src="https://picsum.photos/536/354" alt="" />
          
          <div className="PersonText">
            <h4>Moria Korim</h4>
            <div className="socialIcon">
              <FacebookOutlined  style={{color:"#44D63B",padding:"0 0.3rem"}}/>
              <Twitter  style={{color:"#44D63B",padding:"0 0.3rem"}}/>
              <Instagram  style={{color:"#44D63B",padding:"0 0.3rem"}}/>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Team