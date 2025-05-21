import { format } from "date-fns";
import React from "react";

type Message = {
  id: string;
  senderId: string;
  text: string;
  timestamp: number;
};

const MessageBubble = ({
  message,
  isCurrentUser,
}: {
  message: Message;
  isCurrentUser: boolean;
}) => {
  return (
    <div
      className={`flex flex-col ${isCurrentUser ? `items-end` : `items-start`}`}
    >
      <div
        className={`px-4 py-2 rounded-lg max-w-xs break-words ${
          isCurrentUser ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"
        }`}
      >
        {message.text}
      </div>
      <span className="text-xs text-gray-500 mt-1">
        {format(message.timestamp, "hh:mm a")}
      </span>
    </div>
  );
};

export default MessageBubble;
