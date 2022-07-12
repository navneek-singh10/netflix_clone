

import React from "react";
import { Link } from "react-router-dom";
import "./LandingPageContent.css";
import {useAuth0} from '@auth0/auth0-react';


function LandingPageContent() {

const {loginWithRedirect} = useAuth0();

  return (
    <div className="landingpagecontent_container"
    style={{
      //background: `url(https://img.scoop.it/bkC3sgRi3SaKWQQxPxNyJ4XXXL4j3HpexhjNOf_P3YmryPKwJ94QGRtDb3Sbc6KY)`,
      background: "linear-gradient(to left, rgba(20, 19, 19, 1), rgba(185, 22, 22, 1), rgba(20, 19, 19, 1)",
      
      backgroundPosition: "center",
    backgroundSize: "cover",
    }}
    
    >
      <p className="landingpagecontent_title">
        Unlimited films, TV programmes and more.
      </p>
      <p className="landingpagecontent_subtitle">
        Watch from anywhere. Cancel at anytime
      </p>
      <p className="landingpagecontent_description">
        Ready to watch? Enter your email to create or restart your membership.{" "}
      </p>
      <div className="landingpagecontent_input">
        <input type="text" placeholder="Email Address"/>
        <Link to="/sign-in">
          <button onClick={() => loginWithRedirect()} className="landingpagecontent_button">GET STARTED</button>
        </Link>
      </div>
    </div>
  );
}

export default LandingPageContent;