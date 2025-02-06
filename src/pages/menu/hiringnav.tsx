import clsx from "clsx";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { LANGUAGES } from "../../constants";
import ProgressBar from "../component/progressBar";
import MobileHiringMenu from "./mobile.hiringmenu";

gsap.registerPlugin(ScrollToPlugin);

const Hiringnavbar = () => {
  const { i18n,t } = useTranslation();
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
    }
  }, [i18n]);

  const onChangeLang = (lang_code: string) => { 
     i18n.changeLanguage(lang_code);
     localStorage.setItem("language", lang_code);
  };
  const completion = ProgressBar();


  return (
    <>
      <header className={clsx(["fixed top-0 w-full z-30 transition-all border-b bg-[#ffff]"])}>
        <span
          style={{ transform: `translateX(${completion - 100}%)` }}
          className="absolute bg-[#0859D8]  h-0.5 w-full bottom-0"
        />
        <nav className="max-w-screen-lg mx-auto flex justify-between py-2 px-10 lg:px-0">
          <Link to="/">
            <img
              src={"/logo/longlogo.png"}
              alt="Logo"
              className={clsx(["w-70 lg:w-60 h-20 lg:h-15 flex object-contain"])}
            />
          </Link>
          <div className="hidden lg:flex gap-3 items-center">
            <ul className="flex gap-8">
              <Link to="/">
                <li className="font-medium hover:text-[#2176F5] outline-0 cursor-pointer">
                  {t("home")} 
                </li>
              </Link>
              <Link to="/hiring">
                <li className="font-medium text-[#2176F5] outline-0 cursor-pointer">
                  {t("hiring")} 
                </li>
              </Link>
            </ul>
               <div className="justify-end flex items-center gap-4 px-8">
                          {LANGUAGES.map(({ code, label, flag }) => (
                            <button
                              key={code}
                              onClick={() => onChangeLang(code)}
                              className={clsx([
                                "flex items-center p-1 px-2 rounded",
                                i18n.language === code && "bg-[#2176F520] text-white"
                              ])}
                            >
                              <img
                                src={flag}
                                alt={`${label} flag`}
                                className="object-fill rounded w-7 h-7"
                              />
                            </button>
                          ))}
                        </div>
          </div>
          <MobileHiringMenu />
        </nav>
      </header>
    </>
  );
};

export default Hiringnavbar;
