import React, { useState } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { editProfile } from "../redux/actions/index";

const ProfileForm = ({ profile, user, editProfile }) => {
  const [newProfile, setProfile] = useState({
    first_name: "",
    last_name: "",
    phone: "",
    username: "",
    email: ""
  });
  // Component Will unmount
let done=false;
  const submitProfile = (event) => {
    event.preventDefault();
    editProfile(newProfile);
  };
  const handleChange = (event) => {
    setProfile({ ...newProfile, [event.target.name]: event.target.value });
  };

  return (
    <div className="mt-5 p-2">
      <form onSubmit={submitProfile}>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">First Name</span>
          </div>
          <input
            type="text"
            className="form-control"
            name="first_name"
            onChange={handleChange}
            defaultValue={user.first_name}
          />
        </div>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">Last Name</span>
          </div>
          <input
            type="text"
            className="form-control"
            name="last_name"
            onChange={handleChange}
            defaultValue={user.last_name}
          />
        </div>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">username</span>
          </div>
          <input
            type="text"
            className="form-control"
            name="username"
            onChange={handleChange}
            defaultValue={user.username}
          />
        </div>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">Email</span>
          </div>
          <input
            type="text"
            className="form-control"
            name="email"
            onChange={handleChange}
            defaultValue={user.email}
          />
        </div>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">Phone</span>
          </div>
          <input
            type="number"
            className="form-control"
            name="phone"
            onChange={handleChange}
            defaultValue={profile.phone}
          />
        </div>
        <input type="submit" />
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    profile: state.profile.profile,
    user: state.profile.user,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    editProfile: (updatedProfile) => dispatch(editProfile(updatedProfile)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileForm);
