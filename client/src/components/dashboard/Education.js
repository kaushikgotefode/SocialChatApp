import React, { Component } from "react";
import Moment from "react-moment";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
class Education extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const education = this.props.education.map((exp, id) => {
      return (
        <tr key={id}>
          <td>{exp.school}</td>
          <td>{exp.degree}</td>
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
      <div style={{ overflow: "auto" }}>
        <h5 className="mb-2">Educations</h5>
        <table className="table">
          <thead>
            <tr>
              <th>School</th>
              <th>Degree</th>
              <th>Years</th>
              <th />
            </tr>
          </thead>
          <tbody>{education}</tbody>
        </table>
      </div>
    );
  }
}
Education.propTypes = {
  education: PropTypes.array.isRequired
};
const mapStateToProps = state => ({
  education: state.profile.profile.education
});
export default connect(mapStateToProps)(withRouter(Education));
