import { render, screen, fireEvent, act } from "@testing-library/react";
import CountdownButton from "./CountdownTimer";
import { vi, beforeEach, afterEach } from "vitest";
import "@testing-library/jest-dom";

describe("CountdownButton", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.runOnlyPendingTimers(); // clears any remaining timers
    vi.useRealTimers(); // restores real timers
  });
  test("renders the initial count and the button", () => {
    render(<CountdownButton />);
    const countText = screen.getByText("Count: 10");
    expect(countText).toBeInTheDocument();

    const button = screen.getByRole("button", { name: /start countdown/i });
    expect(button).toBeInTheDocument();
    expect(button).toBeEnabled();
  });

  test("clicking the button disables it", () => {
    render(<CountdownButton />);

    const button = screen.getByRole("button", { name: /start countdown/i });

    // The button should be enabled at first
    expect(button).toBeEnabled();

    // Click it
    fireEvent.click(button);

    // After clicking, it should be disabled
    expect(button).toBeDisabled();
  });

  test("count decreases by 1 after 1 second", () => {
    render(<CountdownButton />);

    const button = screen.getByRole("button", { name: /start countdown/i });

    // Click to start countdown
    fireEvent.click(button);

    // The initial count should still be 10
    expect(screen.getByText("Count: 10")).toBeInTheDocument();

    // Simulate 1 second passing
    act(() => {
      vi.advanceTimersByTime(1000);
    });

    // Now the count should decrease to 9
    expect(
      screen.getByText((content) => content.includes("9"))
    ).toBeInTheDocument();
  });

  test("count decreases by 10 seconds and text displays times up!", () => {
    render(<CountdownButton />);

    const button = screen.getByRole("button", { name: /start countdown/i });
    fireEvent.click(button);

    act(() => {
      vi.advanceTimersByTime(10000);
    });

    expect(screen.getByText((content) => content.includes("Time's up!"))).toBeInTheDocument();
  });

  test("count decreases by 10 seconds and text displays times up!", () => {
    render(<CountdownButton />);

    const button = screen.getByRole("button", { name: /start countdown/i });
    fireEvent.click(button);

    act(() => {
      vi.advanceTimersByTime(9000);
    });

    expect(screen.getByText((content) => content.includes("1"))).toBeInTheDocument();
  });
});
