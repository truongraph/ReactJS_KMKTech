import { useTranslation } from "react-i18next";

const Services = () => {
  const { t } = useTranslation();

  return (
    <section
      id="services"
      className="services mx-10 lg:mx-30 py-20 pt-15 px-20 lg:px-30 z-20 border !bg-white position-relative border-sm-0"
    >
      <p
        data-aos="fade-down"
        data-aos-once="true"
        className="text-center font-bold text-5xl mb-3 text-[#252525]"
      >
        {t("services_title")}
      </p>
      <p
        data-aos="fade-up"
        data-aos-once="true"
        className="text-lg text-center text-[#4b4b4c] mb-10"
      >
        {t("services_description")}
      </p>
      <div className="max-w-screen-lg mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-9">
          {[
            {
              icon: "images/home/1.png",
              title: t("software_development"),
              desc: t("software_development_desc"),
            },
            {
              icon: "images/home/2.png",
              title: t("consultant"),
              desc: t("consultant_desc"),
            },
            {
              icon: "images/home/3.png",
              title: t("cloud_server"),
              desc: t("cloud_server_desc"),
            },
            {
              icon: "images/home/ic-client-based.svg",
              title: t("outsourcing"),
              desc: t("outsourcing_desc"),
            },
          ].map((service, index) => (
            <div
              key={index}
              className="text-center p-5 border rounded-xl bg-white card-style card-animation"
            >
              <img
                src={service.icon}
                className="w-17 h-17 block mx-auto border rounded-xl p-4"
                alt=""
              />
              <p className="mt-3 font-bold text-xl">{service.title}</p>
              <p className="mt-2 text-[#4b4b4c] text-lg lg:text-base">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
