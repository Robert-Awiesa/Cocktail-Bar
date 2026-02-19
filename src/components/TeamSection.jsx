import "./TeamSection.css";

const teamMembers = [
  {
    name: "Alice Johnson",
    role: "Head Mixologist",
    photo: "/assets/team/alice.jpg",
    bio: "Passionate about creating signature cocktails with fresh ingredients.",
    socials: {
      instagram: "https://instagram.com/alice",
      linkedin: "https://linkedin.com/in/alicejohnson",
    },
  },
  {
    name: "David Mensah",
    role: "Juice Specialist",
    photo: "/assets/team/david.jpg",
    bio: "Loves crafting refreshing and healthy juice blends.",
    socials: {
      instagram: "https://instagram.com/david",
      linkedin: "https://linkedin.com/in/davidmensah",
    },
  },
  {
    name: "Sofia Clarke",
    role: "Bar Manager",
    photo: "/assets/team/sofia.jpg",
    bio: "Ensures smooth operations and an amazing customer experience.",
    socials: {
      instagram: "https://instagram.com/sofia",
      linkedin: "https://linkedin.com/in/sofiaclarke",
    },
  },
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
            </div>
            <div className="team-info">
              <h3>{member.name}</h3>
              <p className="role">{member.role}</p>
              <p className="bio">{member.bio}</p>
              <div className="team-socials">
                {member.socials.instagram && (
                  <a
                    href={member.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instagram
                  </a>
                )}
                {member.socials.linkedin && (
                  <a
                    href={member.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TeamSection;
