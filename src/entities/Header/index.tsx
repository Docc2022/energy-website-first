import { ThemeProvider } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { menuLinks } from "src/shared/static/menu-links";
import { whiteTheme } from "src/shared/themes/white-theme";
import MenuItem from "./MenuItem";

const Header = () => {
  const { pathname } = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  //Fix bug when loading page
  useEffect(() => {
    setIsLoading(true);
  }, []);

  return (
    <>
      {isLoading && (
        <div className="bg-slate-900">
          <div className="max-w-6xl mx-auto px-10 py-5 flex flex-col gap-y-5">
            <div className="flex justify-between flex-wrap gap-5">
              <Link href={"/"}>
                <h1 className="text-4xl font-bold text-yellow-500">
                  ТОВ &quot;ЕК &quot;МЕТЕЗА&quot;
                </h1>
              </Link>
              <span className="text-white flex items-center">
                Тел.: +38(067)606-88-66
              </span>
            </div>

            <nav>
              <ThemeProvider theme={whiteTheme}>
                <ul className="flex gap-x-8 align-middle justify-between flex-wrap">
                  {menuLinks.map((item, index) => (
                    <li key={`${item.link}_${index}`}>
                      {item.link ? (
                        <Link href={item.link}>
                          <MenuItem pathname={pathname} item={item} />
                        </Link>
                      ) : (
                        <MenuItem
                          key={`${item.name}_${index}`}
                          pathname={pathname}
                          item={item}
                        />
                      )}
                    </li>
                  ))}
                </ul>
              </ThemeProvider>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
