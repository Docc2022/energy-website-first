import React from "react";
import { priceRow } from "src/shared/types";
import PriceTable from "./PriceTable";

interface Props {
  rows: priceRow[];
}

const PricesView: React.FC<Props> = (props) => {
  const { rows } = props;
  return (
    <main className="max-w-6xl mx-auto px-10 py-5 flex flex-col gap-y-5">
      <h1 className="text-4xl font-bold">Ціни</h1>
      <PriceTable rows={rows} />
    </main>
  );
};

export default PricesView;
