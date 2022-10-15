import { render, screen } from "@testing-library/react";
import { Loading } from "./";

describe("Loading", () => {
  it("should render a div with role=status", () => {
    render(<Loading />);
    expect(screen.getByRole("status")).toBeInTheDocument();
  });
  it("should render a loading text with class sr-only", () => {
    render(<Loading />);
    expect(screen.getByText(/loading/i)).toHaveClass("sr-only");
  });
});
