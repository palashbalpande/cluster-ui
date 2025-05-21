import React from "react";

const ChatHeader = ({ roomId }: { roomId: string }) => {
  return (
    <div className="bg-gray-800 text-white px-4 py-3 border">
      <h2 className="text-lg font-semibold">Room:{roomId}</h2>
    </div>
  );
};

export default ChatHeader;
