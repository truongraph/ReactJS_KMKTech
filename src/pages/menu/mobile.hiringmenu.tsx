import clsx from "clsx";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { LANGUAGES } from "../../constants";

gsap.registerPlugin(ScrollToPlugin);

const MobileHiringMenu = () => {
  const { i18n, t } = useTranslation();

  const onChangeLang = (lang_code: string) => {
    i18n.changeLanguage(lang_code);
  };


  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {!isOpen ? (
        <button
          className="items-center block lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-10 h-10"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      ) : (
        <button
          className="z-[9999999] text-[#0859D8]"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-10 h-10"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      )}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed inset-0 bg-[#000E2350] z-[999999] ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } ease-in-out duration-[400ms]`}
      ></div>
      <div
        className={`top-0 right-0 p-1 fixed w-[80%] bg-white h-full z-[999999] font-dasfont
        ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } ease-in-out duration-300`}
      >
        <h2 className="font-bold text-[#0859D8] uppercase text-3xl fixed top-3 w-full left-2 right-4 p-5">
          Menu
        </h2>
        <div className="pt-30 pb-10 px-6 min-h-screen flex flex-col">
          <div className="flex-grow border-b pb-6 mb-10">
            <ul className="font-semibold inline-grid text-black-500 w-full items-center">
            <Link to="/">
                <li  className={
                    "py-3 text-left font-bold cursor-pointer text-4xl animation-hover w-full mb-5 rounded-full animation-active"
                    
                  }>
                {t("home")}
                </li>
              </Link>
                    <Link to="/hiring">
                <li  className={
                    "py-3 text-left font-bold cursor-pointer text-4xl animation-hover w-full mb-5 rounded-full animation-active"
                    
                  }>
                {t("hiring")}
                </li>
              </Link>
            </ul>
          </div>
          <div className="">
          {LANGUAGES.map(({ code, label, flag }) => (
            <button
              key={code}
              onClick={() => onChangeLang(code)}
              className={clsx([
                "flex p-6 px-5 rounded mb-3 gap-3 text-3xl font-medium w-full items-center justify-center",
                i18n.language === code ? "bg-[#2176F520] text-black" : "bg-[#eee]"
              ])}
            >
              <img
                src={flag}
                alt={`${label} flag`}
                className="object-fill rounded w-10 h-10"
              />{" "}
              {label}
            </button>
          ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileHiringMenu;
