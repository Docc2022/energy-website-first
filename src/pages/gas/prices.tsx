import React from "react";
import PricesView from "src/views/PricesView";

const rows = [
  {
    title: "Послуги з транспортування",
    items: ["Послуга 1", "Послуга 2", "- грн", "- грн"],
  },
  {
    title: "Природний газ",
    items: [
      "1 гатунок",
      "2 гатунок",
      "- грн",
      "- грн",
      "3 гатунок",
      "",
      "- грн",
    ],
  },
];

const Prices = () => {
  return <PricesView rows={rows} />;
};

export default Prices;
