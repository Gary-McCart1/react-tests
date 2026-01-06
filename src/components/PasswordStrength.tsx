import { useEffect, useState } from "react";

const PasswordStrength = () => {
  const [password, setPassword] = useState("");
  const [passwordStrengthColor, setPasswordStrengthColor] = useState("red");
  const [passwordStrength, setPasswordStrength] = useState("");

  useEffect(() => {
    const getPasswordStrength = () => {
      if (password.length < 6) {
        setPasswordStrength("Weak");
        setPasswordStrengthColor("red");
      } else if (
        password.length >= 8 &&
        /\d/.test(password) &&
        /[^a-zA-Z0-9]/.test(password)
      ) {
        setPasswordStrength("Strong");
        setPasswordStrengthColor("green");
      } else {
        setPasswordStrength("Medium");
        setPasswordStrengthColor("yellow");
      }
    };
    getPasswordStrength();
  }, [password]);

  return (
    <div>
      <label htmlFor="password">Password: </label>
      <input
        id="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        type="password"
      />
      <div
        style={{ backgroundColor: `${passwordStrengthColor}` }}
        className={`w-20 h-20`}
      >
        {passwordStrength}
      </div>
    </div>
  );
};

export default PasswordStrength;
