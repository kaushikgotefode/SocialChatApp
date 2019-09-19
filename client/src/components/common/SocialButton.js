import React, { Fragment } from 'react';
import { PropTypes  } from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SocialButton = ({
    title,
    icon,
    link,
    target,
}) => {
    return (
        link ?
            <li className="list-inline-item">
                <a
                    title={title}
                    data-placement="top"
                    data-toggle="tooltip"
                    className="tooltips"
                    target={target}
                    rel="noopener noreferrer"
                    href={"https://" + link}
                    data-original-title={title}
                >
                    <FontAwesomeIcon icon={icon} />
                </a>
            </li>
            : <Fragment></Fragment>
    )
};

SocialButton.propTypes = {
    title: PropTypes.string,
    link: PropTypes.string.isRequired,
    icon: PropTypes.object.isRequired,
    target: PropTypes.string
};

export default SocialButton;