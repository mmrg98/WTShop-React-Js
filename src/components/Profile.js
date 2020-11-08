import React, { useState } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { setCurrentUser } from "../redux/actions/authentication";
//import Loading from "./Loading";
//import { selectChannel, fetchMesseges } from "../redux/actions";

const Profile = ({ profile }) => {
  //const chanels = props.channels;
  console.log(profile);

  /*const filterChannels = () => {
    return chanels.filter((chanel) => {
      return chanel.owner == user.username;
    });
  };

  const handleClick = (chnl) => {
    const draft = localStorage.getItem(`msgInLocalStorage_${chnl.id}`);
    props.selectChannel(chnl.id, draft);
  };

  let chanelCards = filterChannels().map((chnl) => (
    <div key={chnl.name + chnl.id}>
      <p
        className="h5 rounded-pill chnl-menu btn-outline-secondary text-black"
        onClick={() => handleClick(chnl)}
      >
        {chnl.name}
      </p>
    </div>
  ));*/

  //if (props.loadingChannels) return <Loading />;

  return (
    <div>
      <hr />

      <div>
        <img src={profile.profile.image} />
      </div>
      <div>{profile.profile.user['username']}</div>
    </div>
  );
};

const mapStateToProps = ({ profile }) => {
  return {
    profile,
  };
};
/*const mapDispatchToProps = (dispatch) => ({
    setCurrentUser: (token) => dispatch(setCurrentUser(token)),
  });*/

export default connect(mapStateToProps, null)(Profile);
