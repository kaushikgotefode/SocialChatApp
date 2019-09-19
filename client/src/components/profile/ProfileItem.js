import React, { Component } from "react";
import { Link } from "react-router-dom";
import avatar from "./../../img/avatar.jpg";
import SocialButton  from './../common/SocialButton';
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
              <SocialButton link={profile.social && profile.social.facebook} icon={faFacebookF} target={'_blank'} title={'Facebook'}></SocialButton>
              <SocialButton link={profile.social && profile.social.instagram} icon={faInstagram} target={'_blank'} title={'Instagram'}></SocialButton>
              <SocialButton link={profile.social && profile.social.twitter} icon={faTwitter} target={'_blank'} title={'Twitter'}></SocialButton>
              <SocialButton link={profile.social && profile.social.linkedin} icon={faLinkedin} target={'_blank'} title={'LinkedIn'}></SocialButton>
              <SocialButton link={profile.social && profile.social.youtube} icon={faYoutube} target={'_blank'} title={'Youtube'}></SocialButton>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileItem;
