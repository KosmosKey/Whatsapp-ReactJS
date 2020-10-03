import React from "react";
import { Avatar } from "@material-ui/core";

export const SidebarChat = () => {
  return (
    <div className="sidebarChat">
      <Avatar />
      <div className="sidebarChat__Info">
        <h2>Room name</h2>
        <p>This is the last message</p>
      </div>
    </div>
  );
};
