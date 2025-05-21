"use client";
import React, { useState } from "react";

const ChatInput = ({ onSend }: { onSend: (text: string) => void }) => {
  const [input, setInput] = useState("");

  const handleSend = () => {
    const trimmed = input.trim();
    if (!trimmed) return;

    onSend(trimmed);
    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="flex items-end border-t px-4 py-3 bg-white">
      <textarea
        rows={1}
        className="flex-1 px-4 py-2 text-black border rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-400 resize-none"
        placeholder="Type your message..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button
        onClick={handleSend}
        className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg cursor-pointer hover:bg-blue-600 transition"
      >
        Send
      </button>
    </div>
  );
};

export default ChatInput;
