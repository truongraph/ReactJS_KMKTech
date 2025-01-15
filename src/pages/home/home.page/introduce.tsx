import { useTranslation } from "react-i18next";

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

  return (
    <>
      <section className="interactive-header flex items-center h-[89vh]">
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
          <p data-aos="fade-up" className="text-xl leading-8 text-[#4b4b4c]" dangerouslySetInnerHTML={{ __html: t('business_simplification') }} />
          </div>
          <div className="max-w-screen-md mx-auto mt-15 flex items-center justify-center">
            <button
              data-aos="zoom-out"
              className="bg-[#0859D8] hover:bg-[#0C5DDD] p-4 text-lg px-10 rounded-2xl font-medium text-white"
            >
              Contact Us
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
           x-data="{}"
           x-init="$nextTick(() => {
               let ul = $refs.logos;
               ul.insertAdjacentHTML('afterend', ul.outerHTML);
               ul.nextSibling.setAttribute('aria-hidden', 'true');
           })"
          className="logos-wrapper flex gap-10">
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
      <section
        id="introduct"
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
        <div className="block lg:flex gap-30 justify-between items-center">
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
            src="images/home/Innovation-amico.svg"
            alt=""
            className="w-120 img-animation"
          />
        </div>
      </section>
      <section className="why-us py-20 px-20 lg:px-30 position-relative border-sm-0">
        <div className="max-w-screen-lg mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-15">
            <div className="text-[#e0e0ed] text-left">
              <img
                src="images/home/ic-integrity.svg"
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
                Constantly Expanding
              </p>
              <p
                className="text-lg lg:text-base mt-2"
                data-aos="fade-up"
                data-aos-once="true"
              >
                Technology in the age of Industry 4.0 is transforming the world
                daily. More than ever, it is reshaping how we connect and
                collaborate. It empowers us to work more efficiently, manage
                operations intelligently
              </p>
            </div>
            <div className="text-[#e0e0ed] text-left">
              <img
                data-aos="fade-up"
                data-aos-once="true"
                src="images/home/ic-collaboration.svg"
                className="w-17 h-17  bg-[#0a1c36] rounded-xl p-4"
                alt=""
              />
              <p
                className="mt-3 font-bold text-2xl"
                data-aos="fade-up"
                data-aos-once="true"
              >
                Work is happiness
              </p>
              <p
                className="text-lg lg:text-base mt-2"
                data-aos="fade-up"
                data-aos-once="true"
              >
                We believe that every business is built by the burning
                aspirations of everyone - founders, leaders, employees and
                anyone else who is working shoulder to shoulder every day to
                create good values for society
              </p>
            </div>
            <div className="text-[#e0e0ed] text-left">
              <img
                src="images/home/ic-target.svg"
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
                Companion & Development
              </p>
              <p
                className="text-lg lg:text-base mt-2"
                data-aos="fade-up"
                data-aos-once="true"
              >
                With easier collaboration, smarter tools that simplify tasks,
                and unwavering support from KMK, we’re here to help you overcome
                challenges and find happiness in your daily work.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Introduce;
