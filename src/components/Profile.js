import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchOrders } from "../redux/actions";

const Profile = ({ profile, user }) => {
  console.log(profile);

  return (
    <>
      <br /> <br /> <br /> <br />
      <br />
      <br />
      <div className="media bg-white">
        <img src={profile.image} className="mr-3" alt="..." />
        <div className="media-body">
          <br />
          <br />
          <h3 className="mt-2 text-monospace text-center">
            username: {user.username}
          </h3>

          <br />
          <h5 className="text-center">
            <Link to="/orders">
              <button className="btn btn-danger">Orders History</button>
            </Link>
            <Link to="/profileEdit">
              <button className="btn btn-info ml-3">Edit Profile</button>
            </Link>
          </h5>
        </div>
      </div>
      <div></div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    profile: state.profile.profile,
    user: state.profile.user,
  };
};
const mapDispatchToProps = (dispatch) => ({
  fetchOrders: () => dispatch(fetchOrders()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
