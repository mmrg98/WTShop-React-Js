import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchOrders } from "../redux/actions";

const Profile = ({ profile, user }) => {
  console.log(profile);

  return (
    <div>
      <Link to="/orders">
        <button className="btn btn-danger">order</button>
      </Link>
      <hr />

      <div>
        <img src={profile.image} />
      </div>
      {/* <div>{profile.user["username"]}</div> */}
      <div>{user.username}</div>
    </div>
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
