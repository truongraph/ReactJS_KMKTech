import clsx from "clsx";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useTranslation } from "react-i18next";
import { LANGUAGES } from "../../constants";
import MobileMenu from "./mobile.menu";
import ProgressBar from "../component/progressBar";
import { Link } from "react-router-dom";
gsap.registerPlugin(ScrollToPlugin);
const Navbar = () => {
  const { i18n, t } = useTranslation();

  const onChangeLang = (lang_code: string) => {
    i18n.changeLanguage(lang_code);
  };

  const Menulist = [
    { name: "introduce", link: "#introduce" },
    { name: "products", link: "#products" },
    { name: "services", link: "#services" },
    { name: "clients", link: "#clients" },
    { name: "contact", link: "#contact" }
  ];

  const completion = ProgressBar();

  const handleScrollTo = (target: string) => {
    gsap.to(window, {
      duration: 1.5,
      scrollTo: {
        y: target,
        autoKill: true
      },
      ease: "power2.out"
    });
  };

  return (
    <>
      <header
        className={clsx([
          "fixed top-0 w-full z-30 transition-all border-b bg-[#ffff]"
        ])}
      >
        <span
          style={{ transform: `translateX(${completion - 100}%)` }}
          className="absolute bg-[#0859D8]  h-0.5 w-full bottom-0"
        />
        <nav className="max-w-screen-lg mx-auto flex justify-between py-2 px-10 lg:px-0">
         
             <Link
                to="/"
              >
                 <img
            src={"/logo/longlogo.png"}
            alt="Logo"
            className={clsx(["w-70 lg:w-60 h-20 lg:h-15 flex object-contain"])}
          />
              </Link>
          <div className="hidden lg:flex gap-3 items-center">
            <ul className="flex gap-8">
              {Menulist.map((link) => (
                <li
                  key={link.name}
                  className="font-medium hover:text-[#2176F5] outline-0 cursor-pointer"
                  onClick={() => handleScrollTo(link.link)}
                >
                  {t(`${link.name}`)}
                </li>
              ))}
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
          <MobileMenu />
        </nav>
      </header>
    </>
  );
};

export default Navbar;
