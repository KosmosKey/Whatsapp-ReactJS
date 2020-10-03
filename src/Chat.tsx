import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Avatar, IconButton } from "@material-ui/core";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic";
import { ChatMessage } from "./ChatMessage";
import axios from "./axios";

interface Props {
  messages: any;
}

const Chat: React.FC<Props> = ({ messages }) => {
  const [input, setInput] = useState<string>("");

  const sendMessage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await axios.post("/messages/new", {
      message: input,
      name: "Rafeh Qazi",
      timestamp: "Just now!",
      recieved: false,
    });

    setInput("");
  };

  return (
    <div className="Chat">
      <div className="chat__header">
        <Avatar />
        <div className="chat__headerInfo">
          <h3>Room name</h3>
          <p>Last seen at...</p>
        </div>
        <div className="chat__headerRight">
          <IconButton>
            <SearchIcon />
          </IconButton>
          <IconButton>
            <AttachFileIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="chat__body">
        {messages.map((msg: any) => (
          <ChatMessage key={msg._id} message={msg} />
        ))}
      </div>
      <div className="chat__footer">
        <IconButton>
          <InsertEmoticonIcon />
        </IconButton>
        <form onSubmit={sendMessage}>
          <input
            value={input}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setInput(e.target.value)
            }
            type="text"
            placeholder="Type a message"
          />
          <button type="submit">Send a message</button>
        </form>
        <IconButton>
          <MicIcon />
        </IconButton>
      </div>
    </div>
  );
};
export default Chat;
