const Products = () => {
  const products = [
    {
      name: "MEDIFAM - Family Medicine System",
      image: "images/product/medical.jpg",
      description:
        "Comprehensive management solution for general and family doctor clinics. Fully meets the medical examination and treatment management requirements according to the circulars of the Ministry of Health.",
      link: "",
      key_features: [
        "Register examination",
        "Pharma Warehousing",
        "Statistical Report"
      ]
    },
    {
      name: "KMKSALES - Point Of Sale",
      image: "images/product/sales.webp",
      description:
        "Sales management software for business owners. Fully meets sales management requirements to help customers maximize their business capacity. Work anytime, anywhere.",
      link: "",
      key_features: ["Stock warehouse", "Sales Report", "Product Catalog"]
    },
    {
      name: "KMKWMS - Warehouse Management",
      image: "images/product/wms.png",
      description:
        "These solutions help manage inventory, track goods as they move in and out of the warehouse, and ensure efficient storage, retrieval, and shipping of products.",
      link: "",
      key_features: [
        "Inventory management",
        "Order management",
        "Storage optimization"
      ]
    },
    {
      name: "YHGD - Vietnamese Family Medicine",
      image: "images/product/yhgd.webp",
      description:
        "The Family Doctor Center was established in 2002 with the aim of training primary care physicians to practice according to the principles of Family Medicine (FMM) and developing the FMM specialty for the Southern provinces.",
      link: "",
      key_features: ["Stock warehouse", "Sales Report", "Product Catalog"]
    }
  ];

  return (
    <section id="products" className="latest-projects py-20 px-20 lg:px-30 position-relative border-sm-0">
      <div className="max-w-screen-lg mx-auto">
        <p  data-aos="fade-down" data-aos-once="true" className="text-center font-bold text-5xl mb-4 text-[#252525]">
          Products
        </p>
        <p  data-aos="fade-up" data-aos-once="true" className="text-lg text-center text-[#4b4b4c]">
          Discover how our innovative products can streamline your workflow,
          boost efficiency, and drive results.
        </p>
        <div className="grid grid-cols-1 gap-10 mt-10">
          {products.map((product, index) => {
            const isReversed =
              product.name === "KMKSALES - Point Of Sale" ||
              product.name === "YHGD - Vietnamese Family Medicine";
            return (
              <div
                key={index}
                className="grid grid-cols-1 lg:grid-cols-2 gap-10 p-5 border rounded-xl bg-white card-style card-animation"
              >
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
                        <a
                          href={product.link}
                          className="font-medium text-[#000] outline-none border rounded-full border-[#969696dd] p-3 text-base px-5"
                        >
                          Visit site <span className="">→</span>
                        </a>
                      </div>
                      <div className=" hidden lg:block">
                        <p className="text-[#747474dd] text-sm">
                          KEY FEATURES:
                        </p>
                        <div className="flex gap-3 mt-3 items-end">
                          {product.key_features.map((feature, idx) => (
                            <p
                              key={idx}
                              className="rounded-full p-2 font-medium px-3 border text-sm"
                            >
                              {feature}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                    <img
                      src={product.image}
                      className="rounded-xl border w-full h-70 lg:h-90"
                      alt={product.name}
                    />
                  </>
                ) : (
                  <>
                    <img
                      src={product.image}
                      className="rounded-xl border w-full h-70 lg:h-90"
                      alt={product.name}
                    />
                    <div className="flex flex-col gap-10">
                      <div className="flex-grow mb-5 lg:mb-0">
                        <p className="font-bold text-2xl">
                          <span className="text-[#0859D8]">{product.name}</span>
                        </p>
                        <p className="mb-7 mt-2 text-[#7c7c7c]">
                          {product.description}
                        </p>
                        <a
                          href={product.link}
                          className="font-medium text-[#000] outline-none border rounded-full border-[#969696dd] p-3 text-base px-5"
                        >
                          Visit site <span className="">→</span>
                        </a>
                      </div>
                      <div className=" hidden lg:block">
                        <p className="text-[#747474dd] text-sm">
                          KEY FEATURES:
                        </p>
                        <div className="flex gap-3 mt-3 items-end">
                          {product.key_features.map((feature, idx) => (
                            <p
                              key={idx}
                              className="rounded-full p-2 font-medium px-3 border text-sm"
                            >
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
