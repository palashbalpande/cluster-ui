"use client";
import React, { useState } from "react";
import ChatHeader from "./ChatHeader";
import MessageList from "./MessageList";
import ChatInput from "./ChatInput";

type Message = {
  id: string;
  senderId: string;
  text: string;
  timestamp: number;
};

const dummyMessages: Message[] = [
  {
    id: "1",
    senderId: "user1",
    text: "Hey there1",
    timestamp: Date.now() - 60000,
  },
  { id: "2", senderId: "me", text: "Hello !!", timestamp: Date.now() - 30000 },
  { id: "3", senderId: "user1", text: "How are you", timestamp: Date.now() },
];

const ChatRoom = ({ roomId }: { roomId: string }) => {
  const [messages, setMessages] = useState(dummyMessages);

  return (
    <div className="flex flex-col h-screen max-w-2xl mx-auto border">
      <ChatHeader roomId={roomId} />
      <MessageList messages={messages} currentUserId="me" />
      <ChatInput
        onSend={(text) => {
          const newMessage = {
            id: Date.now.toString(),
            senderId: "me",
            text,
            timestamp: Date.now(),
          };
          setMessages((prev) => [...prev, newMessage]);
        }}
      />
    </div>
  );
};

export default ChatRoom;
