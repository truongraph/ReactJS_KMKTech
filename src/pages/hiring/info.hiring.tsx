import { useTranslation } from "react-i18next";

const InfoHiring = () => {
  const { t } = useTranslation(); // Khởi tạo i18n hook

  return (
    <>
      <section className="clients relative -top-10 mx-10 lg:mx-30 py-20 pt-15 px-20 lg:px-30 z-20 border !bg-white position-relative border-sm-0">
        <div className="max-w-screen-lg relative mx-auto">
          <div className="block lg:flex justify-between items-end gap-50 border-b pb-5 border-dashed">
            <div>
              <p className="font-bold text-xl">{t("hiring_current_openings")}</p>
              <ul className="text-[#808080] list-disc pl-5">
                <li>{t("hiring_work_environment")}</li>
                <li>{t("hiring_compensation")}</li>
              </ul>
            </div>
            <div>
              <input
                type="text"
                name="job"
                placeholder={t("hiring_search_placeholder")}
                className="w-full lg:w-70 mt-4 lg:mt-0 flex-1 p-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
          </div>
          <div className="py-20 bg-[#f7f7f7] border rounded-xl mt-5">
            <div>
            <img src="images/empty-folder.png" alt="" className="block m-auto w-25 mb-5" />
            <p className="text-center mt-3 text-[#808080]">{t("hiring_no_jobs_found")}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default InfoHiring;
