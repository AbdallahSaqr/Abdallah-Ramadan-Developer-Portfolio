const experience = [
  {
    title: "Full Stack Web Development Training",
    organization: "Information Technology Institute (ITI)",
    period: "Mar 2025 – Present",
    description: "Intensive training in full stack development with Python, Django, Flask, React, and more."
  },
  {
    title: "Team Leader",
    organization: "AIESEC in Egypt",
    period: "Feb 2019 – Jan 2020",
    description: "Led a team managing volunteer exchanges and operations."
  },
  {
    title: "Bachelor's Degree",
    organization: "Beni Suef University",
    period: "Sep 2018 – May 2023",
    description: "Faculty of Navigation Science and Space Technology. GPA: 3.2"
  }
];

const Experience = () => (
  <section className="experience-section" id="experience">
    <h2 className="section-title">
      Experience & Education
    </h2>
    <div className="experience-list">
      {experience.map(({ title, organization, period, description }) => (
        <div className="experience-card" key={title}>
          <h3 className="experience-title">{title}</h3>
          <p className="experience-org">{organization} | {period}</p>
          <p className="experience-desc">{description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Experience;
