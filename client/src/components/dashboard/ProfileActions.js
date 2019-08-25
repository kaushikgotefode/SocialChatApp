import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faIndustry,
  faUserCircle
} from "@fortawesome/free-solid-svg-icons";
export default function ProfileActions() {
  return (
    <div>
      <div className="btn-group mb-4" role="group">
        <Link to="/edit-profile" className="btn btn-light">
          <FontAwesomeIcon icon={faUserCircle} className="text-info mr-1" />{" "}
          Edit Profile
        </Link>
        <Link to="/add-experience" className="btn btn-light">
          <FontAwesomeIcon icon={faIndustry} className="text-info mr-1" />
          Add Experience
        </Link>
        <Link to="/add-education" className="btn btn-light">
          <FontAwesomeIcon icon={faGraduationCap} className="text-info mr-1" />
          Add Education
        </Link>
      </div>
    </div>
  );
}
