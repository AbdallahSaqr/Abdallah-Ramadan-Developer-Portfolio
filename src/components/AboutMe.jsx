const About = () => (
  <section className="about-section" id="about">
    <div className="bubble-container">
      <h2 className="section-title">
        About Me
      </h2>
      <p className="about-desc">
        I'm a passionate and results-driven <span className="highlight">Full-Stack Developer</span> with a strong focus on Python-based frameworks such as <span className="highlight">Django</span>, <span className="highlight">Flask</span>, and <span className="highlight">Odoo</span>. I specialize in building scalable, high-performance web applications that are both functional and intuitive.
        <br /><br />
        My expertise covers robust REST APIs, complex database models, and business logic integration within enterprise platforms like Odoo<sup>*</sup>. On the frontend, I craft responsive interfaces using <span className="highlight">React</span> and <span className="highlight">Tailwind CSS</span>, ensuring a seamless user experience across devices.
        <br /><br />
        I'm especially drawn to clean architecture, code maintainability, and performance optimization. Whether it's a dynamic e-commerce app, an AI-powered tool, or an ERP extension, I always prioritize usability, clarity, and attention to detail.
      </p>
      <blockquote className="about-quote">
        "Great software is built at the intersection of technology, design, and real-world needs."
      </blockquote>
      <p className="about-note">
        <sup>*</sup> I customize Odoo modules and views for business automation and reporting.
      </p>
    </div>
  </section>
);

export default About;
