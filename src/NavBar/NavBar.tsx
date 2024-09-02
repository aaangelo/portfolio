import { useState } from "react";
import "./NavBar.css";

interface NavBarProps {
  onSelectItem: (item: string) => void;
}

export default function NavBar({ onSelectItem }: NavBarProps) {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  let items = ["hello", "goodbye", "hibye", "nocry"];

  return (
    <div className="div">
      {items.length === 0 && <p>no items found</p>}
      <ul className="list">
        {items.map((item, index) => (
          <li
            className={selectedIndex === index ? "listItem active" : "listItem"}
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
