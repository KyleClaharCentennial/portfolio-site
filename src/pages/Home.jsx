import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Welcome message goes here</h1>

      <Link to="/about">Learn more about me</Link>
    </div>
  );
}

export default Home;

