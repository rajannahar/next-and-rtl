import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Button } from ".";

describe("Button component", () => {
  const mockOnClick = jest.fn();

  it("renders a simple button", () => {
    render(
      <Button variant="primary" disabled={false} onClickHandler={mockOnClick}>
        This is a button
      </Button>
    );

    expect(
      screen.getByRole("button", { name: /this is a button/i })
    ).toBeInTheDocument();
  });

  it("handles a button onClick event", async () => {
    render(
      <Button variant="primary" disabled={false} onClickHandler={mockOnClick}>
        This is a button
      </Button>
    );

    await userEvent.click(screen.getByRole("button"));

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  it("renders a disabled button", () => {
    render(
      <Button variant="primary" disabled={true} onClickHandler={mockOnClick}>
        This is a button
      </Button>
    );

    expect(
      screen.getByRole("button", { name: /this is a button/i })
    ).toBeDisabled();
  });
});
