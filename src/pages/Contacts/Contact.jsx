import { SocialIcon } from "react-social-icons"
export default function Contact() {
  function ContactCard() {
    return (
      <div className="contact-card">
        <h1> Contact Card Details</h1>
        <div className="phone-contact">
          <ul>
            <li>Phone number</li>
            < br />
            <li> +234 123 456 </li>
            <br />
            <li> +234 789 324 </li>
          </ul>
        </div>
        <div className="email-contact">
          <ul>
            <li> Email Address</li>
            <br />
            <li> JohnDoe@gmail.com</li>
          </ul>
        </div>
        <div className="location-contact">
          <ul>
            <li> City, State</li>
            <li> ZIP CODE </li>
          </ul>
        </div>
        <div className="social-media-icons">
          <ul>
            <li><SocialIcon url="https://instagram.com" /></li>
            <li><SocialIcon url="https://twitter.com" /> </li>
          </ul>
        </div>
      </div>
    )
  }
  return (
    <>
      {/**Navbar */}
      <ContactCard />
      {/**Footer*/}
    </>
  )
}
