import React from "react";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { SelectListBox } from ".";

describe("Select component", () => {
  const people = [
    { id: 1, value: "Durward Reynolds" },
    { id: 2, value: "Kenton Towne" },
    { id: 3, value: "Therese Wunsch" },
    { id: 4, value: "Benedict Kessler" },
    { id: 5, value: "Katelyn Rohan" },
  ];

  it("renders the default Select component", async () => {
    const props = {
      label: "Choose a car",
      id: "cars",
      options: [
        { id: 1, value: "BMW" },
        { id: 2, value: "Audi" },
        { id: 3, value: "Mercedes" },
        { id: 4, value: "Volvo" },
        { id: 5, value: "Vauxhall" },
      ],
    };

    render(<SelectListBox options={people} />);

    expect(screen.getByRole("button", { name: "Durward Reynolds" }))
      .toBeInTheDocument;

    await userEvent.click(screen.getByRole("button"));
    await userEvent.click(screen.getByText("Katelyn Rohan"));

    expect(screen.getByRole("button", { name: "Katelyn Rohan" }))
      .toBeInTheDocument;
  });

  it.each(people)("should render %p in the select dropdown list", async (person) => {
    render(<SelectListBox options={people} />);

    await userEvent.click(screen.getByRole("button"));

    expect(screen.getByRole("option", { name: person.value })).toBeInTheDocument();
  });
});
