import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

class ProfileItem extends Component {
  render() {
    const profile = this.props.profile;
    return (
      <div className="row">
        <div className="col-sm-6 col-md-4">
          <img
            src={profile.avatar}
            alt={profile.name}
            className="img-rounded img-responsive"
          />
        </div>
        <div className="col-sm-6 col-md-8">
          <h4>{profile.handle}</h4>
          <small>
            <cite title={profile.location}>
              {profile.location}{" "}
              <i className="glyphicon glyphicon-map-marker" />
            </cite>
          </small>
          <p>
            <FontAwesomeIcon className="mr-2" icon={faEnvelope} />
            {profile.location}
            <br />
            <FontAwesomeIcon className="mr-2" icon={faGlobe} />
            <Link to={profile.website}>{profile.website}</Link>
            <br />
          </p>
        </div>
      </div>
    );
  }
}

export default ProfileItem;
