import React from "react"; 

export interface ListProps {
  items: {
    id: number
    title: string
  }[]
}

export const List = ({ items = [{id: 1, title: 'title'}] }): JSX.Element => (

  <ul>
    {items.map(item => (
      <li key={item?.id}>
        {item?.title}
      </li>
    ))}
  </ul>

)