import { useEffect, useState } from "react";

const ResendEmailButton = () => {
  const [timeLeft, setTimeLeft] = useState(30);
  const [active, setActive] = useState(true);

  useEffect(() => {
    if(!active){
        const interval = setInterval(() => {
            setTimeLeft((prev) => prev - 1)
            if(timeLeft < 1){
                setTimeLeft(30)
                setActive(true)
            }
        }, 1000)
        return () => clearInterval(interval);
    }
    
  }, [active, timeLeft])

  return (
    <div>
      {!active ? (
        <button disabled={!active}>Resend Email in {timeLeft}</button>
      ) : (
        <button disabled={!active} onClick={() => setActive(false)}>Send</button>
      )}
    </div>
  );
};

export default ResendEmailButton;
