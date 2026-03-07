// ContactInfo.jsx
import "./ContactInfo.css";

function ContactInfo() {
  return (
    <section className="contact-info-section">
      <div className="contact-info-container">

        <div className="contact-info-left">
          <h2>Contact Information</h2>
          <p className="contact-subtext">
            Visit us, call us, or send us an email. We’re always happy to serve you.
          </p>

          <div className="info-cards">

            <div className="info-card">
              <h4>📍 Address</h4>
              <p>
                <a
                  href="https://www.google.com/maps/place/Coco+Vanilla+Restaurant+Adjiringanor/@5.6531624,-0.1269877,17z/data=!4m6!3m5!1s0xfdf83644518e675:0x8609fe85e4b81471!8m2!3d5.6531624!4d-0.1244074!16s%2Fg%2F11b73slsp6?entry=ttu&g_ep=EgoyMDI2MDIxOC4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  128 Tropical Sips
  </a></p>
            </div>

            <div className="info-card">
              <h4>📞 Phone</h4>
              <p>
                <a href="tel:+233123456789">+233 123 456 789</a>
              </p>
            </div>

            <div className="info-card">
              <h4>📧 Email</h4>
              <p>
                <a href="mailto:info@tropicalsips.com">info@tropicalsips.com</a>
              </p>
            </div>

            <div className="info-card">
              <h4>🕒 Opening Hours</h4>
              <p>
                Mon – Fri: 10:00 AM – 10:00 PM <br />
                Sat – Sun: 12:00 PM – 12:00 AM
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default ContactInfo;