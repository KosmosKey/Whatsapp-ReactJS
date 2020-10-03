import React from "react";

export const ChatMessage: React.FC = () => {
  return (
    <p className="Chat__message">
      <span className="chat__name">Rafeh Qazi</span>
      This is a message
      <span className="chat__timestamp">{new Date().toUTCString()}</span>
    </p>
  );
};
