import "./TeamSection.css";


import pic from "../assets/pic.jpg";
import instagram from "../assets/socials/instagram.png";
import linkedin from "../assets/socials/linkedin.svg";


const teamMembers = [
  {
    name: "Alice Johnson",
    role: "Head Mixologist",
    photo: pic,
    bio: "Passionate about creating signature cocktails with fresh ingredients.",
    socials: [
      {
        name: "instagram",
        icon: instagram,
        link: "https://instagram.com/alice"
      },
      {
        name: "linkedin",
        icon: linkedin,
        link: "https://linkedin.com/alice"
      }
    ]
  },
  {
    name: "David Mensah",
    role: "Juice Specialist",
    photo: pic,
    bio: "Loves crafting refreshing and healthy juice blends.",
    socials: [
      {
        name: "instagram",
        icon: instagram,
        link: "https://instagram.com/david"
      },
      {
        name: "linkedin",
        icon: linkedin,
        link: "https://linkedin.com/david"
      }
    ]
  },
  {
    name: "Sofia Clarke",
    role: "Bar Manager",
    photo: pic,
    bio: "Ensures smooth operations and an amazing customer experience.",
    socials: [
      {
        name: "instagram",
        icon: instagram,
        link: "https://instagram.com/sofia"
      },
      {
        name: "linkedin",
        icon: linkedin,
        link: "https://linkedin.com/sofia"
      }
    ]
  }
];

function TeamSection() {
  return (
    <section className="team-section">
      <div className="team-intro">
        <h2>Meet Our Team</h2>
        <p>
          Our vibrant team combines passion, creativity, and expertise to bring
          you the best cocktails and fresh juices.
        </p>
      </div>

      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div className="team-card" key={index}>
            
            <div className="team-photo">
              <img src={member.photo} alt={member.name} />

              <div className="team-socials">
                {member.socials.map((social, i) => (
                  <a
                    key={i}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={social.icon} alt={social.name} />
                  </a>
                ))}
              </div>
            </div>

            <div className="team-info">
              <h3>{member.name}</h3>
              <p className="role">{member.role}</p>
              <p className="bio">{member.bio}</p>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}
export default TeamSection;
