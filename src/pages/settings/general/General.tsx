import { FC } from "react";
import InputWithIcon from "./InputwithIcon";

const General: FC = () => {
  return (
    <div className="mx-16 my-10 space-y-5">
      <div className="text-black dark:text-white text-xl font-medium">
        Settings
      </div>
      <div className="grid grid-cols-10 gap-10">
        <div className="col-span-7 ">
          <div className="rounded-sm dark:bg-slate-700 gap-3 space-y-5">
            <p className="dark:text-white border-b p-4">Personal Information</p>
            <form action="#" className="w-full">
              <div className="flex flex-row gap-3">
                <div className="w-1/2 py-4 space-y-3">
                  <label htmlFor="fullName" className="dark:text-white">
                    Full Name
                  </label>
                  <div className="">
                    <InputWithIcon
                      icon={
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-person w-full"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                        </svg>
                      }
                      placeholder="Babageldi"
                      type="text"
                    />
                  </div>
                </div>
                <div className="w-1/2 py-4 space-y-3">
                  <label htmlFor="fullName" className="dark:text-white">
                    Phone Number
                  </label>
                  <div className="">
                    <InputWithIcon placeholder="+993 65 96 61 95" type="tel" />
                  </div>
                </div>
              </div>
              <div className="py-4 space-y-3">
                <label htmlFor="email" className="dark:text-white">
                  Email Address
                </label>
                <div>
                  <InputWithIcon
                    placeholder="hudaynazarovbabegeldi@gmail.com"
                    type="email"
                  />
                </div>
              </div>
              <div className="py-4 space-y-3">
                <label htmlFor="email" className="dark:text-white">
                  Username
                </label>
                <div>
                  <InputWithIcon placeholder="Babageldih4" type="text" />
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="col-span-3 text-black dark:text-white">
          <p>Your Photo</p>
        </div>
      </div>
    </div>
  );
};
export default General;
