import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { App } from "./app";

describe("App tests", () => {
  it("should contains the heading 1", () => {
    render(<App />);
    const text = screen.getByText(/Search/i);
    expect(text).toBeDefined();
  });
});
