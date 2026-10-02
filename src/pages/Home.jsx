// Home page: welcome message, mission statement, and a button to the About page.
import { Link } from 'react-router-dom';

function Home() {
  // Text kept in variables so it is easy to edit.
  const siteOwner = 'Kyle Clahar';
  const welcomeMessage = `Welcome to ${siteOwner}'s portfolio`;
  const missionStatement =
    'By studying software engenieering, I am honing my focus and working towards a career in the cybersecurity industry. I care deeply about the people I call loved ones, and becoming somebody I can be proud of.';

  return (
    <section className="home">
      {/* Welcome message */}
      <h1>{welcomeMessage}</h1>

      {/* Short tagline, e.g. your program or focus */}
      <p>Software Engineering Technology student</p>

      {/* Mission statement */}
      <h2>My Mission</h2>
      <p>{missionStatement}</p>

      {/* Button that redirects to the About page */}
      <Link to="/about">
        <button type="button">Learn More About Me</button>
      </Link>
    </section>
  );
}

export default Home;
