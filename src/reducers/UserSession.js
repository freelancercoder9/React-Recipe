import React from "react";

const UserSession = (state = {}, action) => {
  switch (action.type) {
    case "USER_SESSION":
      return (state = action.payload);

    default:
      return state;
  }
};

export default UserSession;
