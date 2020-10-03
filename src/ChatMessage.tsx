import React from "react";

type names = {
  name: string;
  message: string;
  recieved: boolean;
};
interface Props {
  message: names;
}

export const ChatMessage: React.FC<Props> = ({ message }) => {
  return (
    <p className={`Chat__message ${message.recieved && "Chat__reciever"}`}>
      <span className="chat__name">{message.name}</span>
      {message.message}
      <span className="chat__timestamp">{new Date().toUTCString()}</span>
    </p>
  );
};
