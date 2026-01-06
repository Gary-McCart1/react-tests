import { useState, useEffect } from "react";

const TextStatus = () => {
  const [text, setText] = useState("");
  const [status, setStatus] = useState<"idle" | "saving" | "saved" | "error">(
    "idle"
  );

  useEffect(() => {
    if (!text) return;

    setStatus("saving");
    const timeout = setTimeout(() => {
      setStatus("saved");
    }, 30000);
    return () => clearTimeout(timeout);
  }, [text]);
  return (
    <div style={{ display: "flex", alignItems: "top" }}>
      <textarea onChange={(e) => setText(e.target.value)}>{text}</textarea>
      <button
        style={{
            width: "20px",          // same as height
            height: "20px",
            borderRadius: "50%",    // makes it a perfect circle
            backgroundColor:
              status === "saving"
                ? "blue"
                : status === "idle"
                ? "gray"
                : "green",
            border: "none",         // optional, removes default button border
            padding: 0,             // optional, removes extra space
          }}
      ></button>
    </div>
  );
};

export default TextStatus;
