import { useState, useEffect } from "react";

export default function CountdownButton() {
  const [count, setCount] = useState(10);
  const [running, setRunning] = useState(false);

  const startCountdown = () => {
    setRunning(true);
  };

  // Your countdown logic here
  useEffect(() => {
    if (running){
      const interval = setInterval(() => {
        setCount((prevCount) => {
          if (prevCount <= 1) {
            clearInterval(interval); // stop interval at 0
            setRunning(false); // re-enable button
            return 0;
          }
          return prevCount - 1;
        });
      }, 1000);
  
      return () => clearInterval(interval);
      
    }
  }, [running])
  return (
    <div>
      {count > 0 ?
        (
          <div>Count: {count}</div> 
        ) : 
        (
          <div>Time's up!</div>
        )
      }
      <button onClick={startCountdown} disabled={running}>
        Start Countdown
      </button>
      {/* Bonus: show "Time's up!" when count reaches 0 */}
    </div>
  );
}
