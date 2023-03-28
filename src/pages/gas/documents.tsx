import { useRouter } from "next/router";
import React from "react";
import DocumentsView from "src/views/DocumentsView";

const documents = [
  { title: "Умови продажу та надання послуг" },
  {
    name: "Права і обов’язки постачальника та споживача",
    link: "/documents/PRAVA-I-OBYAZANNOSTI.pdf",
  },
  {
    name: "Загальні умови постачання природного газу",
    link: "/documents/PRAVILA-POSTACHANNYA-PRIRODNOGO-GAZU.docx",
  },
  {
    name: "Договір постачання природнього газу",
    link: "/documents/dohovir газ.docx",
  },
  {
    name: "Процедура вирішення спорів",
    link: "/documents/Protsedura-vyrishennya-sporiv.docx",
  },
  {
    title:
      "Нормативно правові акти, що регулюють діяльність з постачання природнього газу",
  },
  {
    name: "Про затвердження Мінімальних стандартів та вимог до якості обслуговування споживачів та постачання природного газу",
    link: "https://zakon.rada.gov.ua/laws/show/v1156874-17#Text",
  },
  {
    name: "Закон України «Про ринок природного газу»",
    link: "https://zakon.rada.gov.ua/laws/show/329-19#Text",
  },
  {
    name: "Наказ «Про затвердження Правил безпеки систем газопостачання»",
    link: "https://zakon.rada.gov.ua/laws/show/z0674-15#Text",
  },
  {
    name: "Постанова «Про затвердження Кодексу газотранспортної системи»",
    link: "http://zakon.rada.gov.ua/laws/show/z1378-15",
  },
  {
    name: "Постанова «Про затвердження Кодексу газорозподільних систем»",
    link: "https://zakon.rada.gov.ua/laws/show/z1379-15#Text",
  },
  {
    name: "Постанова «Про затвердження Кодексу газосховищ та критеріїв, згідно з якими до певного газосховища застосовується режим договірного доступу або режим регульованого доступу»",
    link: "https://zakon.rada.gov.ua/laws/show/z1380-15#Text",
  },
  {
    name: "Постанова «Про затвердження Правил постачання природного газу»",
    link: "https://zakon.rada.gov.ua/laws/show/z1382-15#Text",
  },
  {
    name: "Постанова «Про затвердження Типового договору транспортування природного газу»",
    link: "https://zakon.rada.gov.ua/laws/show/z1383-15",
  },
  {
    name: "Постанова «Про затвердження Типового договору розподілу природного газу»",
    link: "http://zakon.rada.gov.ua/laws/show/z1384-15",
  },
  {
    name: "Постанова «Про затвердження Типового договору зберігання (закачування, відбору) природного газу»",
    link: "http://zakon.rada.gov.ua/laws/show/z1385-15",
  },
  {
    name: "Постанова «Про затвердження Типового договору постачання природного газу побутовим споживачам»",
    link: "http://zakon.rada.gov.ua/laws/show/z1386-15",
  },
  {
    name: "Постанова «Про затвердження Типового договору постачання природного газу постачальником «останньої надії»»",
    link: "http://zakon.rada.gov.ua/laws/show/z1387-15",
  },
  {
    name: "Постанова «Про затвердження змін до Кодексу газорозподільних систем та Методики визначення та розрахунку тарифів на послуги транспортування природного газу для точок входу і точок виходу на основі багаторічного стимулюючого регулювання»",
    link: "http://zakon.rada.gov.ua/laws/show/z1482-15",
  },
];

const Documents = () => {
  return <DocumentsView documents={documents} />;
};

export default Documents;
