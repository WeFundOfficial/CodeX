/* eslint-disable @next/next/no-img-element */
import { themeState } from "@/state/theme";
import { Dispatch, SetStateAction, useState } from "react";
import { useRecoilValue } from "recoil";

interface Props {
  open: boolean;
  toggleOpen: Dispatch<SetStateAction<boolean>>;
}
const Login: React.FC<Props> = ({ open, toggleOpen: setOpen }) => {
  const dark = useRecoilValue(themeState);
  const [isPasswordVisible, togglePasswordVisibility] = useState(false);

  return (
    <div className={`${open ? "fixed" : "hidden"} inset-0 backdrop-blur-md overflow-y-scroll`}
      onClick={() => setOpen(false)}
    >
      <div className={`absolute flex flex-col lg:flex-row gap-16 w-[369px] lg:w-[859px] h-auto lg:h-[554px] ${dark ? "bg-black" : "bg-white"} top-4 lg:top-1/2 left-1/2  -translate-x-1/2 lg:-translate-y-1/2 rounded-md ${dark ? "border border-[#009DFF]" : "drop-shadow-xl"} p-8
      text-[#999999]]
      `}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-[305px]" style={{ minWidth: "305px" }}>
          <h1 className="text-base lg:text-xl text-[#009DFF] font-semibold text-center">Login</h1>
          <h2 className="text-sm lg:text-base mt-8">Email</h2>
          <input
            className="w-full px-2 py-2 mt-4 rounded-sm bg-transparent border border-[#FFFFFF1A]"
            placeholder="Your Email"
            style={{ WebkitTextFillColor: "#999999" }}
          />
          <h2 className="text-sm lg:text-base mt-4">Password</h2>
          <div className="relative w-full mt-4">
            <input
              type={isPasswordVisible ? "text" : "password"}
              className="w-full px-2 py-2 rounded-sm bg-transparent border border-[#FFFFFF1A]"
              placeholder="Your Password"
              style={{ WebkitTextFillColor: "#999999" }}
            />
            <button
              className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-600"
              onClick={() => togglePasswordVisibility(!isPasswordVisible)}
            >
              {isPasswordVisible ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 9C11.2044 9 10.4413 9.31607 9.87868 9.87868C9.31607 10.4413 9 11.2044 9 12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7956 9 12 9ZM12 17C10.6739 17 9.40215 16.4732 8.46447 15.5355C7.52678 14.5979 7 13.3261 7 12C7 10.6739 7.52678 9.40215 8.46447 8.46447C9.40215 7.52678 10.6739 7 12 7C13.3261 7 14.5979 7.52678 15.5355 8.46447C16.4732 9.40215 17 10.6739 17 12C17 13.3261 16.4732 14.5979 15.5355 15.5355C14.5979 16.4732 13.3261 17 12 17ZM12 4.5C7 4.5 2.73 7.61 1 12C2.73 16.39 7 19.5 12 19.5C17 19.5 21.27 16.39 23 12C21.27 7.61 17 4.5 12 4.5Z" fill="white" fill-opacity="0.3" />
                  <path d="M20 4L4 20" stroke="white" stroke-opacity="0.3" stroke-width="3" stroke-linecap="round" />
                </svg>
              ) : (
                <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11 5C10.2044 5 9.44129 5.31607 8.87868 5.87868C8.31607 6.44129 8 7.20435 8 8C8 8.79565 8.31607 9.55871 8.87868 10.1213C9.44129 10.6839 10.2044 11 11 11C11.7956 11 12.5587 10.6839 13.1213 10.1213C13.6839 9.55871 14 8.79565 14 8C14 7.20435 13.6839 6.44129 13.1213 5.87868C12.5587 5.31607 11.7956 5 11 5ZM11 13C9.67392 13 8.40215 12.4732 7.46447 11.5355C6.52678 10.5979 6 9.32608 6 8C6 6.67392 6.52678 5.40215 7.46447 4.46447C8.40215 3.52678 9.67392 3 11 3C12.3261 3 13.5979 3.52678 14.5355 4.46447C15.4732 5.40215 16 6.67392 16 8C16 9.32608 15.4732 10.5979 14.5355 11.5355C13.5979 12.4732 12.3261 13 11 13ZM11 0.5C6 0.5 1.73 3.61 0 8C1.73 12.39 6 15.5 11 15.5C16 15.5 20.27 12.39 22 8C20.27 3.61 16 0.5 11 0.5Z" fill="white" fill-opacity="0.3" />
                </svg>
              )}
            </button>
          </div>
          <button
            className="w-full py-2 rounded-sm text-base text-white font-semibold mt-4"
            style={{ background: "linear-gradient(261deg, #089DF1 11.69%, #082DF1 59.3%, #08ABF1 104.96%)" }}
            onClick={(e) => { e.stopPropagation(); console.log("button") }}
          >
            Login
          </button>
          <h2 className="text-sm lg:text-base text-center text-[#009DFF] mt-4">Forgot Your Password?</h2>
          <h2 className="text-sm lg:text-base text-center mt-4">Or Via</h2>
          <div className="flex justify-between mt-4">
            <button className="flex gap-2 justify-center w-32 py-2 text-sm lg:text-base rounded-md bg-black">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C1.99977 14.0992 2.65958 16.1454 3.88679 17.8484C5.114 19.5515 6.84631 20.8249 8.83798 21.488C9.33798 21.575 9.52598 21.275 9.52598 21.012C9.52598 20.775 9.51298 19.988 9.51298 19.15C7.00098 19.613 6.35098 18.538 6.15098 17.975C6.03798 17.687 5.55098 16.8 5.12598 16.562C4.77598 16.375 4.27598 15.912 5.11298 15.9C5.90098 15.887 6.46298 16.625 6.65098 16.925C7.55098 18.437 8.98798 18.012 9.56298 17.75C9.65098 17.1 9.91298 16.663 10.201 16.413C7.97598 16.163 5.65098 15.3 5.65098 11.475C5.65098 10.387 6.03798 9.488 6.67598 8.787C6.57598 8.537 6.22598 7.512 6.77598 6.137C6.77598 6.137 7.61298 5.875 9.52598 7.163C10.34 6.93706 11.1811 6.82334 12.026 6.825C12.876 6.825 13.726 6.937 14.526 7.162C16.439 5.862 17.276 6.138 17.276 6.138C17.826 7.513 17.476 8.538 17.376 8.788C18.013 9.488 18.401 10.375 18.401 11.475C18.401 15.313 16.064 16.163 13.838 16.413C14.201 16.725 14.514 17.325 14.514 18.263C14.514 19.6 14.501 20.675 14.501 21.013C14.501 21.275 14.689 21.587 15.189 21.487C17.1738 20.8166 18.8985 19.5408 20.1203 17.8389C21.3421 16.1371 21.9995 14.095 22 12C22 6.475 17.525 2 12 2H12.001Z" fill="white" />
              </svg>
              <span className="text-white">Github</span>
            </button>
            <button className="flex gap-2 justify-center w-32 py-2 text-sm lg:text-base rounded-md bg-[#009DFF]">
              <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.6467 0.510852C22.6073 0.504684 22.5675 0.501083 22.5276 0.500071H1.48075C1.07809 0.494446 0.75559 0.822571 0.749965 1.23835C0.748153 1.28238 0.751774 1.32646 0.760747 1.3696L3.82168 20.6469C3.85997 20.8803 3.97552 21.0941 4.14981 21.254C4.32223 21.4119 4.54742 21.4996 4.78122 21.5001H19.4615C19.6373 21.5003 19.8072 21.4367 19.9395 21.3209C20.0718 21.2052 20.1575 21.0453 20.1806 20.871L22.0031 9.25023H15.2432L14.3779 14.5002H9.61918L8.41309 7.56273H22.2684L23.2415 1.37523C23.3011 0.965071 23.0362 0.576477 22.6467 0.510852Z" fill="white" />
              </svg>
              <span className="text-white">Bitbucket</span>
            </button>
          </div>
          <div className="flex justify-between mt-4">
            <button className="flex gap-2 justify-center w-32 py-2 text-sm lg:text-base rounded-md bg-[#B3BAE5]">
              <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.1628 7.9862L20.1348 7.9142L17.4158 0.820204C17.3609 0.680247 17.2629 0.561356 17.136 0.480663C17.0091 0.39997 16.8599 0.361643 16.7098 0.371204C16.5596 0.377889 16.4154 0.432015 16.2979 0.525806C16.1804 0.619597 16.0957 0.748224 16.0558 0.893204L14.2198 6.5192H6.78185L4.94285 0.894204C4.9035 0.749165 4.8192 0.620324 4.70206 0.52618C4.58492 0.432036 4.44096 0.377431 4.29085 0.370204C4.14078 0.36204 3.99192 0.401041 3.86513 0.48174C3.73834 0.562439 3.63998 0.680791 3.58385 0.820204L0.861847 7.9242L0.833848 7.9942C0.443059 9.01734 0.394991 10.1397 0.696873 11.1925C0.998754 12.2453 1.63427 13.1716 2.50785 13.8322L2.51785 13.8392L2.54185 13.8582L6.68885 16.9622L8.73885 18.5152L9.98585 19.4592C10.1322 19.5697 10.3105 19.6295 10.4938 19.6295C10.6772 19.6295 10.8555 19.5697 11.0018 19.4592L12.2488 18.5152L14.2988 16.9622L18.4708 13.8392L18.4808 13.8312C19.3576 13.1715 19.9958 12.2444 20.2993 11.19C20.6027 10.1355 20.5548 9.01102 20.1628 7.9862Z" fill="white" />
              </svg>
              <span className="text-white">Gitlab</span>
            </button>
            <button className="flex gap-2 justify-center w-32 py-2 text-sm lg:text-base rounded-md bg-[#FDC129]">
              <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.5 9V7C17.5 4.2 15.3 2 12.5 2C9.7 2 7.5 4.2 7.5 7V9C5.8 9 4.5 10.3 4.5 12V19C4.5 20.7 5.8 22 7.5 22H17.5C19.2 22 20.5 20.7 20.5 19V12C20.5 10.3 19.2 9 17.5 9ZM9.5 7C9.5 5.3 10.8 4 12.5 4C14.2 4 15.5 5.3 15.5 7V9H9.5V7ZM13.6 15.5L13.5 15.6V17C13.5 17.6 13.1 18 12.5 18C11.9 18 11.5 17.6 11.5 17V15.6C10.9 15 10.8 14.1 11.4 13.5C12 12.9 12.9 12.8 13.5 13.4C14.1 13.9 14.2 14.9 13.6 15.5Z" fill="white" />
              </svg>
              <span className="text-white">SAML SSO</span>
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-base lg:text-xl text-[#009DFF] text-center">Add Account Via Qr</h1>
          <img className="mt-8" src="/images/account/qr.png" alt="qr" />
          <p className="text-sm lg:text-base text-center text-[#999999] !leading-[150%] mt-8">
            Provide the account QR from the module/external application for scanning. Once detected as valid, you will be taken to the next step to add the account to your list.
          </p>
        </div>
      </div>
    </div >
  )
};

export default Login;