import React from "react";

const ContactsView = () => {
  return (
    <main className="max-w-6xl mx-auto px-10 py-5 flex flex-col gap-y-5">
      <h1 className="text-4xl font-bold">Контакти</h1>
      <p className="text-base font-bold">
        ТОВ &quot;ЕНЕРГЕТИЧНА КОМПАНІЯ &quot;МЕТЕЗА&quot;
      </p>
      <p className="title-text">
        <span>Керівник:</span> Даценко Ігор Васильович
        <br />
        <br />
        <span>ЕДРПОУ:</span> 42679854
        <br />
        <br />
        <span>Графік роботи:</span> <br />
        <br />
        Понеділок - п’ятниця: з 9:00 до 18:00
        <br />
        Субота - неділя: вихідний
        <br />
        <br />
        <span>Юридична адреса: </span>
        Україна, 04053 , місто Київ, пров. Киянівський, будинок 3-7, офіс 110
        <br />
        <br />
        <span>Тел.:</span> +38(067)606-88-66
        <br />
        <br />
        <span>E-mail:</span> meteza@ukr.net
      </p>
    </main>
  );
};

export default ContactsView;
