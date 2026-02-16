import './WhyUs.css';
const messages = [
  {
    heading: 'Fresh',
    text: 'Tropical Sips use only fresh ingredients directly from the farm, and high quality drinks for every Cocktail and Juice.'
  },
  { 
    heading: 'Hygienic',
    text: 'We put the health of our customers first, everything drink is prepared under hygienic conditions and properly handled.'
  },
  {
    heading: 'Fast Delivery',
    text: 'We deliver our customers favorites on time and at affordable prices.'
  }
]

function WhyUs() {
  return(
    <div className="why-us">
      <h1>Why Choose Us?</h1>
      <div className="messages-container">
         {messages.map((message, index) => (
        <div key = {index} className="message-card">
          <h3>{message.heading}</h3>
          <p>{message.text}</p>
        </div>
      ))}
      </div>
     
    </div>
  )
}
export default WhyUs;