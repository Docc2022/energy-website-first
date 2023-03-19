import React from "react";
import PriceTable from "./PriceTable";

const PricesView = () => {
  return (
    <main className="max-w-6xl mx-auto px-10 py-5 flex flex-col gap-y-5">
      <h1 className="text-4xl font-bold">Ціни</h1>
      <PriceTable />
    </main>
  );
};

export default PricesView;
