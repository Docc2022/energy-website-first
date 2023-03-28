import React from "react";

const Footer = () => {
  return (
    <footer className="mt-auto mb-0 bg-slate-900 p-5">
      <div className=" max-w-6xl mx-auto flex justify-between flex-wrap gap-x-5">
        <p className="text-gray-200 flex text-lg">
          ТОВ &quot;ЕК &quot;МЕТЕЗА&quot; © 2022
        </p>
        <div className="text-white flex flex-col">
          <p>
            Юридична адреса: <br />
            Україна, 04053 , місто Київ, пров. Киянівський, будинок 3-7, офіс
            110
          </p>
          <p>E-mail: office@meteza.com.ua</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
