import "../App.css";
import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <div className="LandingPageContainer">
      <nav>
        <div className="navHeader">
          <h2>Apna Video Call</h2>
        </div>
        <div className="navList">
          <p>Join as Guest</p>
          <p>Register</p>
          <div role="button">
            <p>Login</p>
          </div>
        </div>
      </nav>

      <div className="landingMainContainer">
        <div>
          <h1>
            <span style={{ color: "#FF9839" }}>Connect</span> with your loved once
          </h1>
          <p>Cover a distance by Apan Video Call</p>
          <div role="button">
           <Link to={"/auth"}>GET Started</Link>
          </div>
        </div>
        <div>
          <img src="/mobile.png" alt="mobile-image" />
        </div>
      </div>
    </div>
  );
}
