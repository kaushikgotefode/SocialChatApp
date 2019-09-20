import React, { Component } from "react";

class ProfileView extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-9">

            {// User profile
            }
            <div className="panel panel-default">
              <div className="panel-heading">
                <h4 className="panel-title">User profile</h4>
              </div>
              <div className="panel-body">
                <div className="profile__avatar">
                  <img src="https://bootdey.com/img/Content/avatar/avatar5.png" alt="..." />
                </div>
                <div className="profile__header">
                  <h4>Richard Roe <small>Administrator</small></h4>
                  <p className="text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non nostrum odio cum repellat veniam eligendi rem cumque magnam autem delectus qui.
              </p>
                  <p>
                    <a href="#">bootdey.com</a>
                  </p>
                </div>
              </div>
            </div>

            {// User info
            }
            <div className="panel panel-default">
              <div className="panel-heading">
                <h4 className="panel-title">User info</h4>
              </div>
              <div className="panel-body">
                <table className="table profile__table">
                  <tbody>
                    <tr>
                      <th><strong>Location</strong></th>
                      <td>United States</td>
                    </tr>
                    <tr>
                      <th><strong>Company name</strong></th>
                      <td>Simpleqode.com</td>
                    </tr>
                    <tr>
                      <th><strong>Position</strong></th>
                      <td>Front-end developer</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {// Community
            }
            <div className="panel panel-default">
              <div className="panel-heading">
                <h4 className="panel-title">Community</h4>
              </div>
              <div className="panel-body">
                <table className="table profile__table">
                  <tbody>
                    <tr>
                      <th><strong>Comments</strong></th>
                      <td>58584</td>
                    </tr>
                    <tr>
                      <th><strong>Member since</strong></th>
                      <td>Jan 01, 2016</td>
                    </tr>
                    <tr>
                      <th><strong>Last login</strong></th>
                      <td>1 day ago</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            { //Latest posts
            }
            <div className="panel panel-default">
              <div className="panel-heading">
                <h4 className="panel-title">Latest posts</h4>
              </div>
              <div className="panel-body">
                <div className="profile__comments">
                  <div className="profile-comments__item">
                    <div className="profile-comments__controls">
                      <a href="#"><i className="fa fa-share-square-o"></i></a>
                      <a href="#"><i className="fa fa-edit"></i></a>
                      <a href="#"><i className="fa fa-trash-o"></i></a>
                    </div>
                    <div className="profile-comments__avatar">
                      <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="..." />
                    </div>
                    <div className="profile-comments__body">
                      <h5 className="profile-comments__sender">
                        Richard Roe <small>2 hours ago</small>
                      </h5>
                      <div className="profile-comments__content">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, corporis. Voluptatibus odio perspiciatis non quisquam provident, quasi eaque officia.
                  </div>
                    </div>
                  </div>
                  <div className="profile-comments__item">
                    <div className="profile-comments__controls">
                      <a href="#"><i className="fa fa-share-square-o"></i></a>
                      <a href="#"><i className="fa fa-edit"></i></a>
                      <a href="#"><i className="fa fa-trash-o"></i></a>
                    </div>
                    <div className="profile-comments__avatar">
                      <img src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="..." />
                    </div>
                    <div className="profile-comments__body">
                      <h5 className="profile-comments__sender">
                        Richard Roe <small>5 hours ago</small>
                      </h5>
                      <div className="profile-comments__content">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero itaque dolor laboriosam dolores magnam mollitia, voluptatibus inventore accusamus illo.
                  </div>
                    </div>
                  </div>
                  <div className="profile-comments__item">
                    <div className="profile-comments__controls">
                      <a href="#"><i className="fa fa-share-square-o"></i></a>
                      <a href="#"><i className="fa fa-edit"></i></a>
                      <a href="#"><i className="fa fa-trash-o"></i></a>
                    </div>
                    <div className="profile-comments__avatar">
                      <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="..." />
                    </div>
                    <div className="profile-comments__body">
                      <h5 className="profile-comments__sender">
                        Richard Roe <small>1 day ago</small>
                      </h5>
                      <div className="profile-comments__content">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, esse, magni aliquam quisquam modi delectus veritatis est ut culpa minus repellendus.
                  </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <div className="col-xs-12 col-sm-3">

            {// Contact user
            }
            <p>
              <a href="#" className="profile__contact-btn btn btn-lg btn-block btn-info" data-toggle="modal" data-target="#profile__contact-form">
                Contact user
          </a>
            </p>

            <hr className="profile__contact-hr" />

            {// Contact info
            }
            <div className="profile__contact-info">
              <div className="profile__contact-info-item">
                <div className="profile__contact-info-icon">
                  <i className="fa fa-phone"></i>
                </div>
                <div className="profile__contact-info-body">
                  <h5 className="profile__contact-info-heading">Work number</h5>
                  (000)987-65-43
            </div>
              </div>
              <div className="profile__contact-info-item">
                <div className="profile__contact-info-icon">
                  <i className="fa fa-phone"></i>
                </div>
                <div className="profile__contact-info-body">
                  <h5 className="profile__contact-info-heading">Mobile number</h5>
                  (000)987-65-43
            </div>
              </div>
              <div className="profile__contact-info-item">
                <div className="profile__contact-info-icon">
                  <i className="fa fa-envelope-square"></i>
                </div>
                <div className="profile__contact-info-body">
                  <h5 className="profile__contact-info-heading">E-mail address</h5>
                  <a href="mailto:admin@domain.com">admin@domain.com</a>
                </div>
              </div>
              <div className="profile__contact-info-item">
                <div className="profile__contact-info-icon">
                  <i className="fa fa-map-marker"></i>
                </div>
                <div className="profile__contact-info-body">
                  <h5 className="profile__contact-info-heading">Work address</h5>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileView;
