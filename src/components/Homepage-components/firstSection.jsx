import { Link } from "react-router-dom"
import Button from "../common/buttonlink"
import Picture from "../common/picture"
import { source, pic } from "../../data/first-section-picture_data"
import './firstSection.css'
import rightArrow from "../../assets/patterns/right-arrow.svg"
import circles from "../../assets/patterns/white-circles.svg"

export default function HeroSection() {

  const button = { path: "/Home", classname: "button", label: "Get Scootin" }
  return (
    <section className="wrapper hero">
      <Picture pclass={'hero-picture fullbleed'} source={source} pic={pic} />

      <div className="hero-content">
        <h1>Scooter sharing made simple</h1>
        <p>
          Scoot takes the hassle out of urban mobility. Our bikes are placed in convenient
          locations in each of our cities. Use our app to locate the nearest bike, unlock
          it with a tap, and you’re away!
        </p>
        <Button button={button} />
      </div>
      <img className="hero-r-arrow fullbleed" src={rightArrow} alt="" width="452" height="151" />

      <img className="hero-circles fullbleed" src={circles} width="234" height="63" />

    </section>
  )

}