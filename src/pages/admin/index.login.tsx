import clsx from "clsx";
import { Link } from "react-router-dom";

const LoginAdmin = () => {
  return (
    <div className="h-full flex items-center justify-center bg-[#f7faff]">
      <div className="bg-white p-10 rounded-xl shadow-lg w-110">
        <Link to="/">
          <img
            src={"/logo/longlogo.png"}
            alt="Logo"
            className={clsx(["w-70 h-17 block m-auto mb-3 object-contain"])}
          />
        </Link>
        <p className="font-bold text-xl text-center mb-4 border-b pb-3 border-dashed">
          Đăng nhập tài khoản
        </p>
        <>
          <div className="mb-4">
            <input
              type="text"
              name="Email"
              placeholder="Email hoặc tài khoản"
              required
              className="w-full p-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              name="password"
              placeholder="Mật khẩu"
              required
              className="w-full p-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="bg-[#0859D8] mb-3 w-full hover:bg-[#0C5DDD] p-4 px-10 rounded-2xl font-bold text-white"
          >
            Đăng nhập quản trị
          </button>
          <Link to="/">
            <p className="bg-[#0859D812] text-[#0C5DDD] w-full hover:bg-[#0C5DDD20] p-4 px-10 rounded-2xl font-bold text-center">
              Về trang chủ
            </p>
          </Link>
        </>
      </div>
    </div>
  );
};

export default LoginAdmin;
