import React from "react";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Counter } from ".";

describe("Counter component", () => {

  it("renders the Counter component", async () => {

    render(<Counter />);

    screen.getByRole('button', { name: /add one/i })
    expect(screen.getByRole('contentinfo')).toHaveTextContent('Count is 0')
  })
  
  it('updates the Counter with user actions', async () => {

    render(<Counter />);
    
    await userEvent.click(screen.getByRole('button'))
    
    expect(screen.getByRole('contentinfo')).toHaveTextContent('Count is 1')


  })

  
})