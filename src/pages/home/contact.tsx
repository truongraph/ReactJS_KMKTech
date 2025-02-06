import { useState } from "react";
import { ref, set } from "firebase/database";
import { database } from "../../../firebase";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation(); // Khởi tạo i18n hook
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

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);

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
      })
      .finally(() => {
        setIsSubmitting(false);
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
        {t("contact_title")}
      </p>
      <p
        data-aos="fade-up"
        data-aos-once="true"
        className="text-lg text-center text-[#4b4b4c] mb-10"
      >
        {t("contact_description")}
      </p>
      <div className="max-w-screen-lg mx-auto lg:mt-10 py-5 lg:py-10">
        <div className="grid grid-cols-6 gap-5">
          {/* Thông tin liên hệ */}
          <div className=" col-span-6 lg:col-span-3 lg:border-r lg:pr-5">
            <div className="border-b pb-5 mb-5">
              <p className="font-bold text-xl">{t("contact_corporate")}</p>
              <p className="my-2 text-[#696969]">
                {t("contact_address")}
              </p>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.749004480032!2d106.60836617613867!3d10.753817359608126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752c347a6bcbfb%3A0x85e373a0c96d9f13!2zMTcgxJDGsOG7nW5nIHPhu5EgMjRCLCBCw6xuaCBUcuG7iyDEkMO0bmcgQiwgQsOsbmggVMOibiwgSOG7kyBDaMOtIE1pbmgsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1738672115514!5m2!1svi!2s"
                width="100%"
                height="110"
                loading="lazy"
              ></iframe>
            </div>
            <div>
              <p className="font-bold text-xl">{t("contact_info")}</p>
              <p className="my-2 text-[#696969]"><b>{t("contact_mail")}</b> trung.ht@kmk-tech.vn</p>
              <p className="my-2 text-[#696969]"><b>{t("contact_phone")}</b> (+84) 938 220 711</p>
            </div>
          </div>
          {/* Form nhập thông tin */}
          <div className=" col-span-6 lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-5">
                <input
                  type="text"
                  name="fullName"
                  placeholder={t("form_full_name")}
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-1 focus:ring-blue-500"
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder={t("form_phone")}
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-1 focus:ring-blue-500"
                  required
                />
              </div>
              <input
                type="text"
                name="subject"
                placeholder={t("form_subject")}
                required
                value={formData.subject}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              <textarea
                name="message"
                placeholder={t("form_message")}
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-1 focus:ring-blue-500"
                required
              />
              <button
                type="submit"
                className="bg-[#0859D8] w-full hover:bg-[#0C5DDD] p-4 px-10 rounded-2xl font-medium text-white"
                disabled={isSubmitting}
              >
                {t("form_send")}
              </button>
            </form>
            {isSuccess && (
              <p className="text-center text-[#25b838] mt-4 font-bold border w-full p-2 rounded-2xl border-[#25b838]">
                {t("form_success")}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
