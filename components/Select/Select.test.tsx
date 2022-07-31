import React from "react";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Select } from ".";

describe("Select component", () => {
  
  const props = {
    label: 'Choose a car',
    id: 'cars',
    options: [
      {id: 1, value: 'BMW'},
      {id: 2, value: 'Audi'},
      {id: 3, value: 'Mercedes'},
      {id: 4, value: 'Volvo'},
      {id: 5, value: 'Vauxhall'},
    ]
  }

  it("renders the default Select component", async () => {

    render(<Select {...props} />);

    screen.getByRole('combobox', { name: /choose a car/i })

    expect(screen.getByRole('option', {name: 'BMW', selected: true} )).toBeInTheDocument

    await userEvent.selectOptions(screen.getByRole('combobox', {name: /choose a car/i}), 'Audi')
    expect(screen.getByRole('option', {name: 'Audi', selected: true} )).toBeInTheDocument
  })

  it.each(props.options)("should render %p in the select dropdown list", async (option) => {
    render(<Select {...props} />);

    await userEvent.click(screen.getByRole('combobox', { name: /choose a car/i }));

    expect(screen.getByRole("option", { name: option.value })).toBeInTheDocument();
  });
})
