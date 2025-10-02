import { useState, useEffect } from "react";

export default function MessagingUI({ otherUserId }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    async function fetchMessages() {
      const res = await fetch(`/api/messages?user=${otherUserId}`);
      const data = await res.json();
      setMessages(data);
    }
    fetchMessages();
  }, [otherUserId]);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const res = await fetch("/api/messages", {
      method: "POST",
      body: JSON.stringify({ to: otherUserId, text: input }),
      headers: { "Content-Type": "application/json" },
    });
    const newMessage = await res.json();
    setMessages((msgs) => [...msgs, newMessage]);
    setInput("");
  };

  return (
    <div className="border p-4 max-w-md">
      <div className="h-64 overflow-y-auto mb-4">
        {messages.map((m, idx) => (
          <div key={idx} className={`p-2 my-1 rounded ${m.fromSelf ? "bg-blue-300 self-end" : "bg-gray-200 self-start"}`}>
            {m.text}
          </div>
        ))}
      </div>
      <div className="flex">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border flex-grow p-2 rounded-l"
          placeholder="Type a message"
        />
        <button
          onClick={sendMessage}
          className="bg-blue-600 text-white px-4 rounded-r"
        >
          Send
        </button>
      </div>
    </div>
  );
}
