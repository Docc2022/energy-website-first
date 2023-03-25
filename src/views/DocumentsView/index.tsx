import React from "react";

interface Props {
  documents: {
    title?: string;
    name?: string;
    link?: string;
  }[];
}

const DocumentsView: React.FC<Props> = (props) => {
  const { documents } = props;
  return (
    <main className="max-w-6xl mx-auto px-10 py-5 flex flex-col gap-y-5">
      <h1 className="text-4xl font-bold">Документи:</h1>
      <ul className="flex flex-col gap-y-2">
        {documents.map((item, index) => (
          <li
            className="flex flex-col gap-y-5"
            key={`${(item.name || item.title || "").slice(0, 5)}_${index}`}
          >
            {item.title && (
              <h3 className="text-xl font-bold py-5">{item.title}</h3>
            )}
            {item.name && (
              <a
                target={"_blank"}
                className=" hover:underline hover:text-sky-700 hover:decoration-sky-700 text-lg"
                href={item.link}
              >
                {item.name}
              </a>
            )}
          </li>
        ))}
      </ul>
    </main>
  );
};

export default DocumentsView;
