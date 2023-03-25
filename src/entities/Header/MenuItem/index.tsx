import { Button } from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";
import { menuLinks } from "src/shared/static/menu-links";

interface Props {
  pathname: string;
  item: typeof menuLinks[0];
}

const MenuItem: React.FC<Props> = (props) => {
  const { pathname, item } = props;

  return (
    <div className="group flex flex-col justify-center relative items-center">
      <Button
        color={pathname === item.link ? "secondary" : "primary"}
        variant="contained"
      >
        {item.name}
      </Button>

      {item.submenu && (
        <div className="absolute -z-10 transition duration-300 ease-in-out top-full opacity-0 group-hover: group-hover:z-10 group-hover:opacity-100">
          <ul className="flex  flex-col bg-slate-900 text-white p-5 gap-y-2">
            {item.submenu.map((item, index) => (
              <Link key={`${item.link}_${index}`} href={item.link}>
                <Button
                  color={pathname === item.link ? "secondary" : "primary"}
                  variant="contained"
                >
                  {item.name}
                </Button>
              </Link>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MenuItem;
