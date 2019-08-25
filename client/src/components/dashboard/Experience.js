import React, { Component } from "react";
import Moment from "react-moment";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
class Experience extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const experience = this.props.experience.map((exp, id) => {
      return (
        <tr key={id}>
          <td>{exp.company}</td>
          <td>{exp.title}</td>
          <td>
            <Moment format="YYYY/MM/DD">{exp.from}</Moment> -
            {exp.to === null ? (
              " Now"
            ) : (
              <Moment format="YYYY/MM/DD">{exp.to}</Moment>
            )}
          </td>
          <td>
            <button className="btn btn-danger">Delete</button>
          </td>
        </tr>
      );
    });
    return (
      <div>
        <h4 className="mb-2">Experiences</h4>
        <table className="table">
          <thead>
            <tr>
              <th>Company</th>
              <th>Title</th>
              <th>Years</th>
              <th />
            </tr>
          </thead>
          <tbody>{experience}</tbody>
        </table>
      </div>
    );
  }
}
Experience.propTypes = {
  experience: PropTypes.array.isRequired
};
const mapStateToProps = state => ({
  experience: state.profile.profile
});
export default connect(null)(withRouter(Experience));
