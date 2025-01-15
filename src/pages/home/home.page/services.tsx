const Services = () => {
  return (
    <>
      <section id="services" className="services mx-10 lg:mx-30 py-20 pt-15 px-20 lg:px-30 z-20 border !bg-white position-relative border-sm-0">
        <p  data-aos="fade-down" data-aos-once="true" className="text-center font-bold text-5xl mb-3 text-[#252525]">
          Services
        </p>
        <p  data-aos="fade-up" data-aos-once="true" className="text-lg text-center text-[#4b4b4c] mb-10">
          Our products are highly valued for their efficiency, particularly our
          supportive services.
        </p>
        <div className="max-w-screen-lg mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-9">
            <div  className="text-center p-5 border rounded-xl bg-white card-style card-animation">
              <img
                src="images/home/1.png"
                className="w-17 h-17  block mx-auto  border rounded-xl p-4"
                alt=""
              />
              <p className="mt-3 font-bold text-xl">Software Development</p>
              <p className="mt-2 text-[#4b4b4c] text-lg lg:text-base">
                Building and developing software
              </p>
            </div>
            <div className="text-center p-5 border rounded-xl bg-white card-style card-animation">
              <img
                src="images/home/2.png"
                className="w-17 h-17  block mx-auto border rounded-xl p-4"
                alt=""
              />
              <p className="mt-3 font-bold text-xl">Consultant</p>
              <p className=" text-lg lg:text-base mt-2">
                Consulting ERP solutions (Oracle EBS, SAP)
              </p>
            </div>
            <div className="text-center p-5 border rounded-xl bg-white card-style card-animation">
              <img
                src="images/home/3.png"
                className="w-17 h-17  block mx-auto border rounded-xl p-4"
                alt=""
              />
              <p className="mt-3 font-bold text-xl">Cloud Server </p>
              <p className="mt-2  text-lg lg:text-base">Providing IT infrastructure equipment</p>
            </div>
            <div className="text-center p-5 border rounded-xl bg-white card-style card-animation">
              <img
                src="images/home/ic-client-based.svg"
                className="w-17 h-17  block mx-auto border rounded-xl p-4"
                alt=""
              />
              <p className="mt-3 font-bold text-xl">Outsourcing</p>
              <p className="mt-2  text-lg lg:text-base">Provide IT service Outsourcing</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
