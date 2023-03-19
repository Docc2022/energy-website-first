import React from "react";

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

const PriceTable = () => {
  return (
    <div className="flex flex-col border-2 max-w-2xl mx-auto w-full rounded-lg">
      <ul className="p-4">
        {rows.map((item, index) => (
          <li className="grid gap-y-2" key={`${item.title}_${index}`}>
            <h3 className="text-lg">{item.title}</h3>
            <ul className="grid grid-cols-2 gap-1">
              {item.items.map((text, index) => (
                <li
                  className="border-2 flex justify-center"
                  key={`${text}_${index}`}
                >
                  {text}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PriceTable;
