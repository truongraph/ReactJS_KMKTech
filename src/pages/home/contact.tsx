import { useState } from "react";
import { ref, set } from "firebase/database";
import { database } from "../../../firebase";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formRef = ref(database, "contacts/" + Date.now());
    set(formRef, formData)
  .then(() => {
    setIsSuccess(true);
    setTimeout(() => setIsSuccess(false), 4000);
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    });
  })
  .catch((error) => {
    console.error("Error writing to Firebase:", error);
    // Bạn có thể hiển thị lỗi cho người dùng nếu cần
  });
  };

  return (
    <section
      id="contact"
      className="border-sm-0 -top-50 relative !bg-white !rounded-none p-5"
    >
      <p
        data-aos="fade-down"
        data-aos-once="true"
        className="text-center font-bold text-5xl mb-3 text-[#252525]"
      >
        Contact
      </p>
      <p
        data-aos="fade-up"
        data-aos-once="true"
        className="text-lg text-center text-[#4b4b4c] mb-10"
      >
        Let KMK be your trusted companion on the journey to success.
      </p>
      <div className="max-w-screen-lg mx-auto lg:mt-10 py-5 lg:py-10">
        <div className="grid grid-cols-6 gap-5">
          {/* Thông tin liên hệ */}
          <div className=" col-span-6 lg:col-span-3 lg:border-r lg:pr-5">
            <div className="border-b pb-5 mb-5">
              <p className="font-bold text-xl">Corporate Headquarters</p>
              <p className="my-2 text-[#696969]">
                17 Street 24B, Binh Tri Dong B Ward, Binh Tan District, Ho Chi
                Minh City
              </p>
            </div>
            <div>
              <p className="font-bold text-xl">Contact Information</p>
              <p className="my-2 text-[#696969]">Mail: trung.ht@kmk-tech.vn</p>
              <p className="my-2 text-[#696969]">Fone: (+84) 938 220 711</p>
            </div>
          </div>
          {/* Form nhập thông tin */}
          <div className=" col-span-6 lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-5">
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full name"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-1 focus:ring-blue-500"
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Fone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-1 focus:ring-blue-500"
                  required
                />
              </div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              <textarea
                name="message"
                placeholder="Message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-1 focus:ring-blue-500"
                required
              />
              <button
                type="submit"
                className="bg-[#0859D8] w-full hover:bg-[#0C5DDD] p-4 px-10 rounded-2xl font-medium text-white"
              >
                Send Information
              </button>
            </form>
            {isSuccess && <p className="text-center text-[#25b838] mt-4 font-bold border w-full p-2 rounded-2xl border-[#25b838]">
              Thank you! Your information has been sent successfully!
            </p>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
