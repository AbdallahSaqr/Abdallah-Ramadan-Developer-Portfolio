const About = () => (
  <section className="about-section" id="about">
    <div className="about-card">
      <h2 className="section-title">
        About Me
        <span className="section-underline"></span>
      </h2>
      <p className="about-desc">
        I’m a passionate and results-driven <span className="about-highlight">Full-Stack Developer</span> with a strong focus on Python-based frameworks such as <span className="about-highlight">Django</span>, <span className="about-highlight">Flask</span>, and <span className="about-highlight">Odoo</span>. I specialize in building scalable, high-performance web applications that are both functional and intuitive.
        <br /><br />
        My expertise covers robust REST APIs, complex database models, and business logic integration within enterprise platforms like Odoo<sup>*</sup>. On the frontend, I craft responsive interfaces using <span className="about-highlight">React</span> and <span className="about-highlight">Tailwind CSS</span>, ensuring a seamless user experience across devices.
        <br /><br />
        I’m especially drawn to clean architecture, code maintainability, and performance optimization. Whether it’s a dynamic e-commerce app, an AI-powered tool, or an ERP extension, I always prioritize usability, clarity, and attention to detail.
      </p>
      <blockquote className="about-quote">
        “Great software is built at the intersection of technology, design, and real-world needs.”
      </blockquote>
      <p className="about-note">
        <sup>*</sup> I customize Odoo modules and views for business automation and reporting[3].
      </p>
    </div>
  </section>
);

export default About;
