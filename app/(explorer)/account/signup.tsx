import { themeState } from "@/state/theme";
import { Dispatch, SetStateAction, useState } from "react";
import { useRecoilValue } from "recoil";

interface Props {
  open: boolean;
  toggleOpen: Dispatch<SetStateAction<boolean>>;
}
const SignUp: React.FC<Props> = ({ open, toggleOpen: setOpen }) => {
  const dark = useRecoilValue(themeState);
  const [isPasswordVisible, togglePasswordVisibility] = useState(false);

  return (
    <div className={`${open ? "fixed" : "hidden"} inset-0 backdrop-blur-md`}
      onClick={() => setOpen(false)}
    >
      <div className={`absolute w-[369px] h-[554px] ${dark ? "bg-black" : "bg-white"} top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 rounded-md ${dark ? "border border-[#009DFF]" : "drop-shadow-xl"} p-8
      text-[#999999]]
      `}
        onClick={(e) => e.stopPropagation()}
      >
        <h1 className="text-base lg:text-xl text-[#009DFF] font-semibold text-center">Sign Up</h1>
        <h2 className="text-sm lg:text-base mt-8">Full Name</h2>
        <input
          className="w-full px-2 py-2 mt-4 rounded-sm bg-transparent border border-[#FFFFFF1A]"
          placeholder="Your Full Name"
          style={{WebkitTextFillColor: "#999999"}}
        />
        <h2 className="text-sm lg:text-base mt-4">Email</h2>
        <input
          className="w-full px-2 py-2 mt-4 rounded-sm bg-transparent border border-[#FFFFFF1A]"
          placeholder="Your Email"
          style={{WebkitTextFillColor: "#999999"}}
        />
        <h2 className="text-sm lg:text-base mt-4">Password</h2>
        <div className="relative w-full mt-4">
          <input
            type={isPasswordVisible ? "text" : "password"}
            className="w-full px-2 py-2 rounded-sm bg-transparent border border-[#FFFFFF1A]"
            placeholder="Your Password"
            style={{WebkitTextFillColor: "#999999"}}
          />
          <button
            className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-600"
            onClick={() => togglePasswordVisibility(!isPasswordVisible)}
          >
            {isPasswordVisible ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 9C11.2044 9 10.4413 9.31607 9.87868 9.87868C9.31607 10.4413 9 11.2044 9 12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7956 9 12 9ZM12 17C10.6739 17 9.40215 16.4732 8.46447 15.5355C7.52678 14.5979 7 13.3261 7 12C7 10.6739 7.52678 9.40215 8.46447 8.46447C9.40215 7.52678 10.6739 7 12 7C13.3261 7 14.5979 7.52678 15.5355 8.46447C16.4732 9.40215 17 10.6739 17 12C17 13.3261 16.4732 14.5979 15.5355 15.5355C14.5979 16.4732 13.3261 17 12 17ZM12 4.5C7 4.5 2.73 7.61 1 12C2.73 16.39 7 19.5 12 19.5C17 19.5 21.27 16.39 23 12C21.27 7.61 17 4.5 12 4.5Z" fill="white" fill-opacity="0.3" />
                <path d="M20 4L4 20" stroke="white" stroke-opacity="0.3" strokeWidth="3" stroke-linecap="round" />
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
          Sign Up
        </button>
        <h2 className="text-sm lg:text-base text-center mt-4">Or Via</h2>
        <h2 className="text-sm lg:text-base text-center mt-4">Already have an account?{' '}
          <span className="text-[#009DFF]">Login</span>
        </h2>
      </div>
    </div >
  )
};

export default SignUp;