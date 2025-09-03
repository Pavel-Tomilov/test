import React from "react";
import "./ItemCard.css";

interface ItemProps {
  text: string;
  onDelete: () => void;
}

const ItemCard: React.FC<ItemProps> = ({ text, onDelete }) => {
  return (
    <li className="item">
      <span className="item-text">{text}</span>
      <button
        onClick={onDelete}
        className="delete-button"
      >
        Удалить
      </button>
    </li>
  );
};

export default ItemCard;
