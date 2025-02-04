import { useTranslation } from "react-i18next";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin);
const Introduce = () => {
  const { t } = useTranslation();
  const CorporateItems = [
    { name: "Pepsico", logo: "images/svg/corporate/pepsico-logo.svg" },
    { name: "An Cường", logo: "images/svg/corporate/an-cuong.svg" },
    { name: "OFI", logo: "images/logo/ofi-logo.png" },
    { name: "SHIMMER", logo: "images/logo/shimmer-logo.png" },
    { name: "Quảng Hưng Long", logo: "images/logo/qhl-logo.png" },
    { name: "TCSC", logo: "images/logo/tcsc-logo.png" },
    { name: "VIETTIEN", logo: "images/svg/corporate/viettien.svg" },
    { name: "JIA HSIN", logo: "images/logo/jiahsin-logo.png" },
    { name: "LUCKY GROUP", logo: "images/logo/lucky-logo.png" }
  ];

  const scrollDown = () => {
    window.scrollTo({
      top: 700,
      behavior: "smooth"
    });
  };

  const items = [
    {
      imgSrc: "images/home/ic-integrity.svg",
      title: t("ic_integrity_title"),
      description: t("ic_integrity_description")
    },
    {
      imgSrc: "images/home/ic-collaboration.svg",
      title: t("ic_collaboration_title"),
      description: t("ic_collaboration_description")
    },
    {
      imgSrc: "images/home/ic-target.svg",
      title: t("ic_target_title"),
      description: t("ic_target_description")
    }
  ];

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
      <section id="home" className="interactive-header flex items-center h-[89vh]">
        <div className="header-hero text-center px-4">
          <div
            data-aos="fade-up"
            className="accent-text flex items-center justify-center gap-3 text-center mb-10 text-[#303131] uppercase text-xl font-bold"
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 3C16 10.1797 21.8203 16 29 16C21.8203 16 16 21.8203 16 29C16 21.8203 10.1797 16 3 16C10.1797 16 16 10.1797 16 3Z"
                stroke="currentColor"
                stroke-width="1.5"
              ></path>
            </svg>
            <div className="relative top-0.5 text-[#0a0a0a]">
              <span className="text-[#3878E8]">KMK</span> Techonology
            </div>
          </div>
          <h1 data-aos="fade-down" className="headline font-extrabold my-10 ">
            {t("simplify_business")} <br />
            {t("innovate_excellence")}
          </h1>
          <div className="max-w-screen-md mx-auto">
            <p
              data-aos="fade-up"
              className="text-xl leading-8 text-[#4b4b4c]"
              dangerouslySetInnerHTML={{ __html: t("business_simplification") }}
            />
          </div>
          <div className="max-w-screen-md mx-auto mt-15 flex items-center justify-center">
            <button
              data-aos="zoom-out"
              onClick={() => handleScrollTo("#contact")}
              className="bg-[#0859D8] hover:bg-[#0C5DDD] p-4 text-lg px-10 rounded-2xl font-medium text-white"
            >
              {t("contact_us")}
            </button>
          </div>
        </div>
        <div onClick={scrollDown} className="scrolldown"></div>
      </section>
      <div className="py-6 relative block">
        <img
          className="logo-bridge"
          src="images/home/svg-viewer.svg"
          width="255"
          height="110"
        />
        <div className="flex justify-center items-center w-full overflow-hidden">
          <div          
            className="logos-wrapper"
          >
              <div className="logos flex gap-10">
              {CorporateItems.concat(CorporateItems).map((item, index) => (
              <div key={index} className="flex-shrink-0 mx-4">
                <img
                  className="h-12 logo-corporate object-fill rounded"
                  src={item.logo}
                  alt={item.name}
                />
              </div>
            ))}
              </div>
          </div>
        </div>
      </div>
      <section
        id="introduce"
        className="intro block mx-auto max-w-screen-lg py-20 px-20 position-relative border-sm-0"
      >
        <p
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-once="true"
          className="text-center font-bold text-4xl lg:text-5xl mb-10 text-[#252525]"
        >
          {t("empowering_innovation")}
        </p>
        <div className="block lg:flex gap-10 justify-between items-center">
          <div className="mb-20 lg:mb-0">
            <p
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-once="true"
              className="text-lg text-[#4b4b4c]"
            >
              {t("vision")}
            </p>
            <button className="bg-[#fff] p-4 px-10 rounded-xl font-medium text-black border border-[#a3a3a3] mt-3">
              {t("see_more_about_us")}
            </button>
          </div>
          <img
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-once="true"
            src="logo/bg.jpeg"
            alt=""
            className="w-140 h-110 rounded-lg"
          />
        </div>
      </section>
      <section className="why-us py-20 px-20 lg:px-30 position-relative border-sm-0">
        <div className="max-w-screen-lg mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-15">
            {items.map((item, index) => (
              <div className="text-[#e0e0ed] text-left" key={index}>
                <img
                  src={item.imgSrc}
                  data-aos="fade-up"
                  data-aos-once="true"
                  className="w-17 h-17 bg-[#0a1c36] rounded-xl p-4"
                  alt=""
                />
                <p
                  className="mt-3 font-bold text-2xl"
                  data-aos="fade-up"
                  data-aos-once="true"
                >
                  {" "}
                  {item.title}
                </p>
                <p
                  className="text-lg lg:text-base mt-2"
                  data-aos="fade-up"
                  data-aos-once="true"
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Introduce;
