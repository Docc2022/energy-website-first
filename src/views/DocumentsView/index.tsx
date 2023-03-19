import React from "react";

const documents = [
  {
    name: "Закон України «Про ринок електричної енергії»",
    link: "https://zakon.rada.gov.ua/laws/show/2019-19",
  },
  {
    name: "Закон України «Про захист прав споживачів»",
    link: "https://zakon.rada.gov.ua/laws/show/1023-12#Text",
  },
  {
    name: "Постанова «Про затвердження Ліцензійних умов провадження господарської діяльності з постачання електричної енергії споживачу»",
    link: "https://zakon.rada.gov.ua/laws/show/v1469874-17",
  },
  {
    name: "Постанова «Про затвердження Правил роздрібного ринку електричної енергії»",
    link: "https://zakon.rada.gov.ua/laws/show/v0312874-18#Text",
  },
  {
    name: "Постанова НКРЕКП № 307 Правила ринку",
    link: "https://zakon.rada.gov.ua/laws/show/v0307874-18",
  },
  {
    name: "Постанова НКРЕКП № 308 Правил ринку «на добу наперед» та «внутрішньодобового ринку»",
    link: "https://zakon.rada.gov.ua/laws/show/v0308874-18",
  },
  {
    name: "Постанова НКРЕКП № 309 Кодекс системи передачі",
    link: "https://zakon.rada.gov.ua/laws/show/v0309874-18",
  },
  {
    name: "Постанова НКРЕКП № 310 «Про затвердження Кодексу систем розподілу»",
    link: "https://zakon.rada.gov.ua/laws/show/v0310874-18",
  },
  {
    name: "Постанова НКРЕКП № 311 «Про затвердження Кодексу комерційного обліку електричної енергії»",
    link: "https://zakon.rada.gov.ua/laws/show/v0311874-18",
  },
];

const DocumentsView = () => {
  return (
    <main className="max-w-6xl mx-auto px-10 py-5 flex flex-col gap-y-5">
      <h1 className="text-4xl font-bold">Документи:</h1>
      <ul className="flex flex-col gap-y-2">
        {documents.map((item, index) => (
          <a
            target={"_blank"}
            className=" hover:underline hover:text-sky-700 hover:decoration-sky-700 text-lg"
            key={`${item.name}_${index}`}
            href={item.link}
          >
            {item.name}
          </a>
        ))}
      </ul>
    </main>
  );
};

export default DocumentsView;
