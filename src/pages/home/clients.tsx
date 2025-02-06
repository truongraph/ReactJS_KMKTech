import { useTranslation } from "react-i18next";

const Clients = () => {
   const { t } = useTranslation();
  const CorporateItems = [
    { name: "Pepsico", logo: "images/svg/corporate/pepsico-logo.svg" },
    { name: "An Cường", logo: "images/svg/corporate/an-cuong.svg" },
    { name: "OFI", logo: "images/logo/ofi-logo.png" },
    { name: "SHIMMER", logo: "images//logo/shimmer-logo.png" },
    { name: "Quảng Hưng Long", logo: "images/logo/qhl-logo.png" },
    { name: "TCSC", logo: "images/logo/tcsc-logo.png" },
    { name: "VIETTIEN", logo: "images/svg/corporate/viettien.svg" },
    { name: "JIA HSIN", logo: "images/logo/jiahsin-logo.png" },
    { name: "LUCKY GROUP", logo: "images/logo/lucky-logo.png" }
  ];

  const MedicalItems = [
    { name: "PKDK Tâm An", logo: "images/logo/medical/taman.png" },
    { name: "QUEEN HOSPITAL", logo: "images/logo/medical/queenhopital.png" },
    { name: "MECCARE", logo: "images/logo/medical/meccare.png" },
    { name: "HOANGKHANG MEDICAL CENTER", logo: "images/logo/medical/hoangkhang.png" },
    { name: "PKDK PHƯỚC LINH", logo: "images/logo/medical/phuoclinh.jpg" },
    { name: "PKDK SÀI GÒN 115", logo: "images/logo/medical/pkdk115.jpg" },
    { name: "CTY CP BV Y DƯỢC 115", logo: "images/logo/medical/yduoc115.png" },
    { name: "PK SẢN PHỤ AN PHÚC", logo: "images/logo/medical/aa.png" },
    { name: "PKDK THÀNH CÔNG", logo: "images/logo/medical/thanhcong.jpg" },
    { name: "PHU LAM MEDICAL CENTER", logo: "images/logo/medical/phulam.png" },
    { name: "THIÊN HẬU POLYCLINIC", logo: "images/logo/medical/thienhau.jpg" },
    { name: "HƯNG DŨNG", logo: "images/logo/medical/hungdung.jpg" },
    { name: "PK NHI SÀI GÒN - PHÚC AN", logo: "images/logo/medical/pa+.png" },
    { name: "JT ANGEL", logo: "images/logo/medical/JTAngel.png" },
    { name: "Y HỌC GIA ĐÌNH PHƯỚC HÒA", logo: "images/logo/medical/yhgdPH.png" },
    { name: "NGỌC CHÂU", logo: "images/logo/medical/ngocchau.png" },
    { name: "PKDK LOUKAS HEALTH CARE", logo: "images/logo/medical/loukas.png" },
    { name: "SỞ Y TẾ BỆNH VIỆN HẠNH PHÚC", logo: "images/logo/medical/hanhphuc.png" },
    { name: "THIÊN PHÚC", logo: "images/logo/medical/thienphuc.png" },
    { name: "VIETTIEN", logo: "images//svg/corporate/viettien.svg" },
    { name: "PK TĨNH MẠCH SÀI GÒN", logo: "images/logo/medical/svg.png" },
    { name: "PAIN CLINIC", logo: "images/logo/medical/painclinic.jpg" },
    { name: "SƠN CA", logo: "images/logo/medical/sonca.png" },
    { name: "PKYD SÀI GÒN HƯNG LONG", logo: "images/logo/medical/hunglong.jpg" },
    { name: "PKDK CHỢ CẦU", logo: "images/logo/medical/cclinic.png" },
    { name: "CTY CP BV SÀI GÒN CỬU LONG", logo: "images/logo/medical/saigoncuulong.png" },
    { name: "TIMEC", logo: "images/logo/medical/timec.png" }
  ];

  const getRandomDelay = () => {
    return Math.random() * 2 + 1; 
  };

  return (
    <section id="clients" className="border-sm-0 clients relative -top-50 pt-40 !bg-white !rounded-b-none px-20">
      <div className="max-w-screen-lg relative mx-auto py-20">
        <div>
          <p data-aos="fade-down" data-aos-once="true"  className="text-center text-5xl font-bold mb-3 text-[#252525]">{t("clients_title")}</p>
          <p data-aos="fade-up" data-aos-once="true"  className="text-lg text-center text-[#4b4b4c] mb-10">
          {t("clients_description")}
          </p>

          {/* Corporate Clients */}
          <div className="my-10 border p-10 rounded-2xl">
            <div className="flex flex-wrap gap-6 items-center justify-center">
              {CorporateItems.map((item, index) => (
                <div
                data-aos="zoom-in" data-aos-once="true" 
                  key={index}
                  className="relative"
                  style={{
                    animation: `bounce 6s infinite ease-in-out`,
                    animationDelay: `${getRandomDelay()}s`,
                  }}
                >
                  <img
                    src={item.logo}
                    alt={item.name}
                    className="w-40 h-30 rounded-md border-collapse object-contain bg-white p-2 bouncing-image"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Medical Clients */}
          <div className="my-10 border p-10 rounded-2xl">
            <div className="flex flex-wrap gap-6 items-center justify-center">
              {MedicalItems.map((item, index) => (
                <div
                data-aos="zoom-in" data-aos-once="true" 
                  key={index}
                  className="relative"
                  style={{
                    animation: `bounce 6s infinite ease-in-out`,
                    animationDelay: `${getRandomDelay()}s`,
                  }}
                >
                  <img
                    src={item.logo}
                    alt={item.name}
                    className="w-40 h-30 border-collapse object-contain bg-white p-2 bouncing-image"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
