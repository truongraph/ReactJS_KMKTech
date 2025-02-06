import clsx from "clsx";
import moment from "moment";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation(); // Khởi tạo i18n hook

  return (
    <footer
      id="contact"
      className="border-sm-0 -top-50 relative !bg-white  !rounded-none p-5"
    >
      <section className=" !bg-[#000E23] rounded-lg relative mx-auto">
        <div className="max-w-screen-2xl mx-auto footer-cta py-10">
          <div className="max-w-screen-md mx-auto">
            <p
              data-aos="zoom-in-down"
              data-aos-once="true"
              className="text-center text-4xl lg:text-5xl font-bold mb-3 text-[#E0E0ED]"
            >
              {t("footer_ready_to_partner")}
            </p>
            <p
              data-aos="zoom-in-up"
              data-aos-once="true"
              className="text-center text-[#E0E0ED] mb-10 px-20"
            >
              {t("footer_description")}
            </p>
            <div
              data-aos="zoom-in"
              data-aos-once="true"
              className="max-w-screen-md mx-auto flex items-center justify-center"
            >
              <button className="bg-[#0859D8] hover:bg-[#0C5DDD] p-4 text-lg px-10 rounded-2xl font-medium text-white">
                {t("footer_contact_us")}
              </button>
            </div>
          </div>
        </div>
        <div className="border-t  border-[#0f3a7a] p-10 pb-4 block lg:flex justify-between gap-5">
          <div
            data-aos="zoom-in"
            data-aos-once="true"
            className="mb-10 lg:mb-0"
          >
            <img
              src={"/logo/whitelonglogo.png"}
              alt="Logo"
              className={clsx(["w-45 h-12 flex object-contain"])}
            />
            <p className="text-[#E0E0ED] mt-3 w-110 text-base lg:text-sm">
              {t("footer_about")}
            </p>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-once="true"
            className="text-left text-[#E0E0ED] text-base lg:text-sm"
          >
            <ul className="text-[#E0E0ED] outline-none text-right text-sm flex gap-10 font-medium">
              <li>
                <a target="blank" href="https://medifam.vn">
                  medifam.vn
                </a>
              </li>
              <li>
                <a target="blank" href="https://kmksales.vn/">
                  kmksales.vn
                </a>
              </li>
              <li>
                <a target="blank" href="https://yhgd.vn/">
                  yhgd.vn
                </a>
              </li>
            </ul>
            <p className="my-2">
              <b>{t("footer_address_label")}</b>: 17 Street 24B, Binh Tri Dong B Ward, Binh Tan District, Ho Chi Minh City
            </p>
            <p className="my-2">
              <b>{t("footer_mail_label")}</b>: trung.ht@kmk-tech.vn
            </p>
            <p>
              <b>{t("footer_phone_label")}</b>: 0938 220 711 - Trung Huynh Tan
            </p>
            <ul className="text-[#E0E0ED] mt-3 outline-none text-right text-sm flex gap-5 font-medium">
              <li>
                <img src="images/home/facebook.svg" alt="Logo" />
              </li>
              <li>
                <img src="images/home/instagram.svg" alt="Logo" />
              </li>
              <li>
                <img src="images/home/messenger.svg" alt="Logo" />
              </li>
              <li>
                <img src="images/home/linkedin.svg" alt="Logo" />
              </li>
            </ul>
          </div>
        </div>
        <p className="pb-5 border-t border-[#0d2a53]  pt-5 text-center text-[#E0E0ED] text-base lg:text-sm">
          © {moment().format("YYYY")} - {t("footer_rights_reserved")}{" "}
          <span className="font-semibold">KMK TECHNOLOGY</span>
        </p>
      </section>
    </footer>
  );
};

export default Footer;
