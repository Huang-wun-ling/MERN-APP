import React, { useState, useEffect } from "react";
import AuthService from "../services/auth-service";

const ProfileComponent = (props) => {
  let { currentUser, setCurrentUser } = props;

  return (
    <div className="body3" style={{ padding: "3rem" }}>
      {!currentUser && (
        <div className="jumbotron bg-danger text-white">
          <h1>You must login first before getting your profile.</h1>
        </div>
      )}
      {currentUser && (
        <div>
          <table className="table">
            <thead>
              <tr>
                <h1>個人資料</h1>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1. Username: {currentUser.user.username} </th>
              </tr>
              <tr>
                <th scope="row">2. Email: {currentUser.user.email}</th>
              </tr>
              <tr>
                <th scope="row">3. ID: {currentUser.user._id}</th>
              </tr>
              <tr>
                <th scope="row">4. Token: {currentUser.token}</th>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ProfileComponent;
