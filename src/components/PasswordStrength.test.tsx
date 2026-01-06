import { render, screen, fireEvent } from "@testing-library/react";
import PasswordStrength from "./PasswordStrength";
import "@testing-library/jest-dom";

describe("PasswordStrength", () => {
  test("Password strength is weak initially", () => {
    render(<PasswordStrength />);
    const strengthTest = screen.getByText("Weak");

    expect(strengthTest).toBeInTheDocument();
    expect(strengthTest).toHaveStyle({ backgroundColor: "rgb(255, 0, 0)" });
  });

  test("Password strength is medium after typing a password of length 7", () => {
    render(<PasswordStrength />);

    const input = screen.getByLabelText(/password/i);

    // Simulate typing
    fireEvent.change(input, { target: { value: "abcdefg" } });

    // Check strength
    const strengthText = screen.getByText("Medium");
    expect(strengthText).toBeInTheDocument();
    expect(strengthText).toHaveStyle({ backgroundColor: "rgb(255, 255, 0)" });
  });

  test("Password strength is strong after typing a strong password", () => {
    render(<PasswordStrength />);

    const input = screen.getByLabelText(/password/i);

    // Simulate typing
    fireEvent.change(input, { target: { value: "abcdefg1!" } });

    // Check strength
    const strengthText = screen.getByText("Strong");
    expect(strengthText).toBeInTheDocument();
    expect(strengthText).toHaveStyle({ backgroundColor: "rgb(0, 128, 0)" });
  });

});
