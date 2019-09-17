import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import avatar from "./../../img/avatar.jpg";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faLinkedin,
  faYoutube
} from "@fortawesome/free-brands-svg-icons";
class ProfileItem extends Component {
  render() {
    const profile = this.props.profile;
    return (
      <div className="col-lg-4">
        <div className="text-center card-box">
          <div className="member-card pt-2 pb-2">
            <div className="thumb-lg member-thumb mx-auto">
              <Link to={profile.handle}>
                <img
                  src={profile.user.avatar || avatar}
                  alt={profile.user.name}
                  className="rounded-circle img-thumbnail"
                  alt="profile-image"
                />
              </Link>
            </div>
            <div className="">
              <h4>{profile.user.name}</h4>
              <p className="text-muted">
                <div> {profile.user.email}</div>
                <div>
                  <a
                    className="text-pink"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={profile.website && "https://" + profile.website}
                  >
                    {profile.website}
                  </a>
                </div>
              </p>
            </div>
            <ul className="social-links list-inline">
              <li className="list-inline-item">
                <a
                  title=""
                  data-placement="top"
                  data-toggle="tooltip"
                  className="tooltips"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={profile.social && "https://" + profile.social.facebook}
                  data-original-title="Facebook"
                >
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  title=""
                  data-placement="top"
                  data-toggle="tooltip"
                  className="tooltips"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={profile.social && "https://" + profile.social.instagram}
                  data-original-title="Instagram"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  title=""
                  data-placement="top"
                  data-toggle="tooltip"
                  className="tooltips"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={profile.social && "https://" + profile.social.twitter}
                  data-original-title="Twitter"
                >
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  title=""
                  data-placement="top"
                  data-toggle="tooltip"
                  className="tooltips"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={profile.social && "https://" + profile.social.linkedin}
                  data-original-title="Linked In"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  title=""
                  data-placement="top"
                  data-toggle="tooltip"
                  className="tooltips"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={profile.social && "https://" + profile.social.youtube}
                  data-original-title="Youtube"
                >
                  <FontAwesomeIcon icon={faYoutube} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      // <div className="row">
      //   <div className="col-sm-6 col-md-4">
      //     <img
      //       src={profile.user.avatar}
      //       alt={profile.user.name}
      //       className="img-rounded img-responsive"
      //     />
      //   </div>
      //   <div className="col-sm-6 col-md-8">
      //     <h4>{profile.user.name}</h4>
      //     <small>
      //       <cite title={profile.location}>
      //         {profile.location}{" "}
      //         <i className="glyphicon glyphicon-map-marker" />
      //       </cite>
      //     </small>
      //     <p>
      //       <FontAwesomeIcon className="mr-2" icon={faEnvelope} />
      //       {profile.location}
      //       <br />
      //       <FontAwesomeIcon className="mr-2" icon={faGlobe} />
      //       <a href={profile.website}>{profile.website}</a>
      //       <br />
      //     </p>
      //   </div>
      // </div>
    );
  }
}

export default ProfileItem;
