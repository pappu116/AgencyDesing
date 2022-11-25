
import About from "../About/About"
import Brand from "../Brand"
import Contact from "../Contact/Contact"
import Feature from "../Featur/Feature"
import Footer from "../Footer/Footer"
import Header from "../Header/Header"
import Hire from "../Hire/Hire"
import NavBar from "../NavBar/NavBar"
import Price from "../Price/Price"
import Support from "../Support/Support"
import Team from "../Team/Team"
import Work from "../Work/Work"
import "./home.css"

const Home = () => {
  return (
    <div className="home">
      <NavBar/>
      <Header/>
      <About/>
      <Work/>
      <Feature/>
      <Support/>
      <Hire/>
      <Price/>
      <Team/>
      <Brand/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Home