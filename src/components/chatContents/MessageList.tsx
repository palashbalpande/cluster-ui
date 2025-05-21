import React from "react";
import MessageBubble from "./MessageBubble";

type Message = {
  id: string;
  senderId: string;
  text: string;
  timestamp: number;
};

interface IMessageListProps {
  messages: Message[];
  currentUserId: string;
}

const MessageList = ({ messages, currentUserId }: IMessageListProps) => {
  return (
    <div className="flex-1 overflow-y-auto px-4 py-2 space-y-2 bg-gray-50">
      {messages.map((msg) => (
        <MessageBubble
          key={msg.id}
          message={msg}
          isCurrentUser={msg.senderId === currentUserId}
        />
      ))}
    </div>
  );
};

export default MessageList;
