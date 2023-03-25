import React from "react";
import PricesView from "src/views/PricesView";

const rows = [
  {
    title: "Послуги з постачання електроенергії",
    items: ["Найменування", "Вартість", "-", "-"],
  },
  {
    title: "Електрична енергія",
    items: ["Найменування", "Вартість", "-", "-"],
  },
];

const Prices = () => {
  return <PricesView rows={rows} />;
};

export default Prices;
