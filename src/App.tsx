import React, { useEffect, useState } from "react";
import Pusher from "pusher-js";
import "./App.scss";
import Chat from "./Chat";
import SideBar from "./SideBar";
import axios from "./axios";

const App: React.FC = () => {
  const [messages, setMessages] = useState<Array<Object>>([]);

  useEffect(() => {
    axios.get("/messages/new").then((response) => {
      setMessages(response.data);
    });
  }, []);

  useEffect(() => {
    const pusher = new Pusher("34c948866fd8ec957c68", {
      cluster: "eu",
    });

    const channel = pusher.subscribe("messages");
    channel.bind("inserted", (newMessage: any) => {
      setMessages([...messages, newMessage]);
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [messages]);

  return (
    <div className="App">
      <div className="app-body">
        <SideBar />
        <Chat messages={messages} />
      </div>
    </div>
  );
};

export default App;
