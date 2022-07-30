import React from "react";
import { render, screen, within } from "@testing-library/react";

import { List } from ".";

describe("List component", () => {

  it("renders the default List component", () => {
    render(<List />);

    const list = screen.getByRole('list')
    expect(list).toBeInTheDocument()
    
    const { getAllByRole } = within(list)
    const listItems = getAllByRole('listitem')
    expect(listItems).toHaveLength(1)
    expect(listItems[0]).toHaveTextContent(/title/i)

    
  });
});

describe("List component with dynamic data", () => {

  const itemsArray = [
    { id: 1, title: "Apples" },
    { id: 2, title: "Oranges" },
    { id: 3, title: "Bananas" },
    { id: 4, title: "Pears" },
    { id: 5, title: "Grapes" },
  ];

  it("renders List component with dynamic list items props", () => {
    render(<List items={itemsArray} />);
    
    const list = screen.getByRole('list')
    expect(list).toBeInTheDocument()
    
    const { getAllByRole } = within(list)
    const listItems = getAllByRole('listitem')
    expect(listItems).toHaveLength(itemsArray.length)
    expect(listItems[0]).toHaveTextContent(/apples/i)
  });

  it.each(itemsArray)('should render %p in the list', (itemArray) => {
    render(<List items={itemsArray} />);

    expect(screen.getByText(itemArray.title)).toBeInTheDocument()
  })
});
