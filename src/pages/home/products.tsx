import { useTranslation } from "react-i18next";

const Products = () => {
  const { t } = useTranslation();
  const products = [
    {
      name: t("medifam_title"),
      image: "images/product/medical.jpg",
      description: t("medifam_description"),
      link: "https://medifam.vn/",
      key_features: [
        t("medifam_feature_register"),
        t("medifam_feature_pharma"),
        t("medifam_feature_report"),
      ],
    },
    {
      name: t("kmksales_title"),
      image: "images/product/sales.webp",
      description: t("kmksales_description"),
      link: "https://kmksales.vn/",
      key_features: [
        t("kmksales_feature_stock"),
        t("kmksales_feature_sales"),
        t("kmksales_feature_catalog"),
      ],
    },
    {
      name: t("kmkwms_title"),
      image: "images/product/wms.png",
      description: t("kmkwms_description"),
      link: "#",
      key_features: [
        t("kmkwms_feature_inventory"),
        t("kmkwms_feature_order"),
        t("kmkwms_feature_storage"),
      ],
    },
    {
      name: t("yhgd_title"),
      image: "images/product/yhgd.webp",
      description: t("yhgd_description"),
      link: "https://yhgd.vn/",
      key_features: [
        t("yhgd_feature_stock"),
        t("yhgd_feature_sales"),
        t("yhgd_feature_catalog"),
      ],
    },
  ];

  return (
    <section id="products" className="latest-projects py-20 px-20 lg:px-30 position-relative border-sm-0">
      <div className="max-w-screen-lg mx-auto">
        <p data-aos="fade-down" data-aos-once="true" className="text-center font-bold text-5xl mb-4 text-[#252525]">
          {t("products_title")}
        </p>
        <p data-aos="fade-up" data-aos-once="true" className="text-lg text-center text-[#4b4b4c]">
          {t("products_description")}
        </p>
        <div className="grid grid-cols-1 gap-10 mt-10">
          {products.map((product, index) => {
            const isReversed =
              product.name === t("kmksales_title") ||
              product.name === t("yhgd_title");
            return (
              <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-10 p-5 border rounded-xl bg-white card-style card-animation">
                {isReversed ? (
                  <>
                    <div className="flex flex-col gap-10">
                      <div className="flex-grow mb-5 lg:mb-0">
                        <p className="font-bold text-2xl">
                          <span className="text-[#0859D8]">{product.name}</span>
                        </p>
                        <p className="mb-7 mt-2 text-[#7c7c7c]">
                          {product.description}
                        </p>
                        <a href={product.link} className="font-medium text-[#000] outline-none border rounded-full border-[#969696dd] p-3 text-base px-5">
                          {t("visit_site")} <span className="">→</span>
                        </a>
                      </div>
                      <div className="hidden lg:block">
                        <p className="text-[#747474dd] text-sm">{t("key_features")}:</p>
                        <div className="flex gap-3 mt-3 items-end">
                          {product.key_features.map((feature, idx) => (
                            <p key={idx} className="rounded-full p-2 font-medium px-3 border text-sm">
                              {feature}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                    <img src={product.image} className="rounded-xl border w-full h-70 lg:h-90" alt={product.name} />
                  </>
                ) : (
                  <>
                    <img src={product.image} className="rounded-xl border w-full h-70 lg:h-90" alt={product.name} />
                    <div className="flex flex-col gap-10">
                      <div className="flex-grow mb-5 lg:mb-0">
                        <p className="font-bold text-2xl">
                          <span className="text-[#0859D8]">{product.name}</span>
                        </p>
                        <p className="mb-7 mt-2 text-[#7c7c7c]">
                          {product.description}
                        </p>
                        <a href={product.link} className="font-medium text-[#000] outline-none border rounded-full border-[#969696dd] p-3 text-base px-5">
                          {t("visit_site")} <span className="">→</span>
                        </a>
                      </div>
                      <div className="hidden lg:block">
                        <p className="text-[#747474dd] text-sm">{t("key_features")}:</p>
                        <div className="flex gap-3 mt-3 items-end">
                          {product.key_features.map((feature, idx) => (
                            <p key={idx} className="rounded-full p-2 font-medium px-3 border text-sm">
                              {feature}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Products;
