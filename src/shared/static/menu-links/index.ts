export const menuLinks = [
  { name: "ПРО КОМПАНІЮ", link: "/" },
  {
    name: "ЕЛЕКТРИЧНА ЕНЕРГІЯ",
    link: "",
    submenu: [
      {
        name: "ДОКУМЕНТИ",
        link: "/electricity/documents",
      },
      {
        name: "СПОЖИВАЧАМ",
        link: "/electricity/consumers",
      },
      {
        name: "ЗВІТНІСТЬ",
        link: "/electricity/report",
      },
      {
        name: "ЦІНИ",
        link: "/electricity/prices",
      },
    ],
  },
  {
    name: "ПРИРОДНИЙ ГАЗ",
    link: "",
    submenu: [
      {
        name: "ДОКУМЕНТИ",
        link: "/gas/documents",
      },
      {
        name: "ЗВІТНІСТЬ",
        link: "/gas/report",
      },
      {
        name: "ЦІНИ",
        link: "/gas/prices",
      },
    ],
  },
  { name: "КОНТАКТИ", link: "/contacts" },
];
