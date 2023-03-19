import { Button, ThemeProvider } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { menuLinks } from "src/shared/static/menu-links";
import { whiteTheme } from "src/shared/themes/white-theme";

const Header = () => {
  const { pathname } = useRouter();

  console.log("router", pathname);

  return (
    <div className="bg-slate-900">
      <div className="max-w-6xl mx-auto px-10 py-5 flex flex-col gap-y-5">
        <Link href={"/"}>
          <h1 className="text-4xl font-bold text-yellow-500">ЕК Метеза</h1>
        </Link>
        <nav>
          <ThemeProvider theme={whiteTheme}>
            <ul className="flex gap-x-8 align-middle justify-between flex-wrap">
              {menuLinks.map((item, index) => (
                <Link key={item.name} href={item.link}>
                  <Button
                    sx={{ bgcolor: "secondary.main" }}
                    color={pathname === item.link ? "secondary" : "primary"}
                    variant="contained"
                  >
                    {item.name}
                  </Button>
                </Link>
              ))}
            </ul>
          </ThemeProvider>
        </nav>
      </div>
    </div>
  );
};

export default Header;
