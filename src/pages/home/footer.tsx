import clsx from "clsx";
import moment from "moment";

const Footer = () => {
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
              Ready to Partner with Us?
            </p>
            <p
              data-aos="zoom-in-up"
              data-aos-once="true"
              className="text-center text-[#E0E0ED] mb-10 px-20"
            >
              Take the first step today and enhance your brand with our
              professional design solutions. Reach out to us and let’s explore
              how we can assist you in achieving your goals.
            </p>
            <div
              data-aos="zoom-in"
              data-aos-once="true"
              className="max-w-screen-md mx-auto flex items-center justify-center"
            >
              <button className="bg-[#0859D8] hover:bg-[#0C5DDD] p-4 text-lg px-10 rounded-2xl font-medium text-white">
                Contact Us Now
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
              We simplify your business operations by streamlining processes and
              reducing complexity, allowing you to focus on core activities. KMK
              innovates continuously to deliver cutting-edge solutions and
              exceed industry standards.
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
            <p className="my-2  ">
              <b>Address</b>: 17 Street 24B, Binh Tri Dong B Ward, Binh Tan
              District, Ho Chi Minh City
            </p>
            <p className="my-2">
              <b>Mail:</b> trung.ht@kmk-tech.vn
            </p>
            <p>
              <b>Phone:</b> 0938 220 711 - Trung Huynh Tan
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
          {/* <iframe
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D61571784489341&tabs=timeline&width=300&height=130&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=165611498166179"
            width="300"
            height="130"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          ></iframe> */}
        </div>
        <p className="pb-5 border-t border-[#0d2a53]  pt-5 text-center text-[#E0E0ED] text-base lg:text-sm">
          © {moment().format("YYYY")} - All rights reserved by{" "}
          <span className="font-semibold">KMK TECHNOLOGY</span>
        </p>
      </section>
    </footer>
  );
};

export default Footer;
