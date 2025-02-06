import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const Platform = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { t } = useTranslation();
  const platformItems = [
    { icon: "images/svg/platform/SAP.svg", alt: "SAP Power builder" },
    { icon: "images/svg/platform/oracle-logo.svg", alt: "Oracle Database" },
    { icon: "images/svg/platform/angular-icon.svg", alt: "Angular" },
    { icon: "images/svg/platform/react-native-1.svg", alt: "React Native" },
    { icon: "images/svg/platform/nodejs.svg", alt: "Node Js" },
    { icon: "images/svg/platform/react.svg", alt: "React Js" },
    { icon: "images/svg/platform/dot-net-core-7.svg", alt: "Dotnet Core" },
    {
      icon: "images/svg/platform/microsoft-sql-server-1.svg",
      alt: "Microsoft SQL Server"
    },
    { icon: "images/svg/platform/PowerApps_scalable.svg", alt: "Power Apps" },
    { icon: "images/svg/platform/PowerBI_scalable.svg", alt: "Power BI" },
    {
      icon: "images/svg/platform/PowerAutomate_scalable.svg",
      alt: "Power Automate"
    },
    {
      icon: "images/svg/platform/power-virtual-agents-colored.svg",
      alt: "Power Virtual Agent"
    },
    {
      icon: "images/svg/platform/microsoft-office-sharepoint-2018-present--1.svg",
      alt: "Microsoft Sharepoint"
    }
  ];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section id="platform" className="border-sm-0 bg-flatform">
      <div className="max-w-screen-lg relative mx-auto platform-index py-20">
        <div>
          <p
            data-aos="fade-down"
            data-aos-once="true"
            className="text-center text-[#E0E0ED] text-5xl font-bold mb-10"
          >
             {t("tools_we_use")}
          </p>
          <p data-aos="fade-up" data-aos-once="true" className="text-lg w-3/4 block m-auto text-center text-[#E0E0ED] mb-20">
          {t("tools_description")}
          </p>
          <div className="tools-section flex flex-wrap gap-10 items-center justify-center mt-10">
            {platformItems.map((x, i) => {
              const directionX = i % 2 === 0 ? 1 : -1;
              const directionY = i % 2 === 0 ? -1 : 1;

              return (
                <div
                  key={i}
                  className={`tool-item item${i + 1} d-flex gap-1`}
                  style={{
                    transform: `translate(
                        ${
                          directionX *
                          (mousePosition.x - window.innerWidth / 3) *
                          (0.01 + i * 0.001)
                        }px,
                        ${
                          directionY *
                          (mousePosition.y - window.innerHeight / 3) *
                          (0.01 + i * 0.001)
                        }px
                      )`,
                    transition: "transform .2s ease-out"
                  }}
                >
                  <img className="me-1" src={x.icon} alt={x.alt} />
                  <span>{x.alt}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Platform;
