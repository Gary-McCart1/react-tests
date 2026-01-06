import { useState } from "react";

const ToField = () => {
  const [text, setText] = useState("");
  const [tags, setTags] = useState<string[]>([]);

  const addTag = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if(!text) return
    setTags((prev) => [...prev, text])
    
  };

  const filterTags = (removeIndex: number) => {
    setTags(tags.filter((tag, index) => index != removeIndex))
  }
  return (
    <div>
      <form onSubmit={addTag}>
        <label>To: </label>
        <input
          onChange={(e) => {
            setText(e.target.value);
          }}
          value={text}
        />
      </form>
      <div>
        {tags.map((tag, index) => (
            <div key={index} style={{display: "flex"}}>
                <p >{tag}</p>
                <button onClick={() => filterTags(index)}>x</button>
            </div>
            
        ))}
      </div>
    </div>
  );
};

export default ToField;
