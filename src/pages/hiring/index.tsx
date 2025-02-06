import InfoHiring from "./info.hiring";
import { useTranslation } from "react-i18next";

const ContentHiring = () => {
  const { t } = useTranslation(); // Khởi tạo i18n hook
  
  const items = [
    {
      imgSrc: "images/home/ic-quality.svg",
      title: t("hiring_positive_title"),
      description: t("hiring_positive_description"),
    },
    {
      imgSrc: "images/home/ic-client-based.svg",
      title: t("hiring_connect_title"),
      description: t("hiring_connect_description"),
    },
    {
      imgSrc: "images/home/ic-learn.svg",
      title: t("hiring_growth_title"),
      description: t("hiring_growth_description"),
    },
  ];

  return (
    <>
      <section className="interactive-header flex items-center py-25 pb-15 ">
        <div className=" text-center px-4">
          <h1 className="font-extrabold text-6xl mt-5 text-[#252525]">
            {t("hiring_header")}
          </h1>
          <p className="text-xl text-center text-[#4b4b4c] mt-10">
            {t("hiring_subheader")}
          </p>
        </div>
      </section>
      <InfoHiring />
      <section className="border-t latest-projects relative -top-20 py-20 pt-25 pb-40 px-20 lg:px-30 !bg-white">
        <div className="max-w-screen-lg mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-15">
            {items.map((item, index) => (
              <div className="text-[#000] text-center" key={index}>
                <img
                  src={item.imgSrc}
                  data-aos="fade-up"
                  data-aos-once="true"
                  className="w-17 h-17 block m-auto bg-[#2779E612] rounded-xl p-4"
                  alt={item.title}
                />
                <p
                  className="mt-3 font-bold text-2xl"
                  data-aos="fade-up"
                  data-aos-once="true"
                >
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

export default ContentHiring;
