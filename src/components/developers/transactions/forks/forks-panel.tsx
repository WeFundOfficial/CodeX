import { themeState } from "@/state/theme";
import { useRecoilValue } from "recoil";

const ForksPanel = () => {
  const dark = useRecoilValue(themeState);

  return (
    <div className="flex flex-col font-[Inter] gap-8 mt-10" style={{ color: "#999999" }}>
      <div className="flex items-center gap-4">
        <h1 className="text-sm lg:text-base font-semibold">
          #15,986,879
        </h1>
        <div className={`px-2 py-2 rounded-sm ${dark ? "" : "bg-[#F7F7F7]"}`}>
          <h1 className="text-sm lg:text-base font-semibold">
            0x3197876...
          </h1>
          <h1 className="text-sm lg:text-base font-semibold">
            0x3197876...
          </h1>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <h1 className="text-sm lg:text-base font-semibold">
          #15,986,879
        </h1>
        <div className={`px-2 py-2 rounded-sm ${dark ? "bg-[#333333]" : "bg-[#D9DCF2]"}`}>
          <h1 className="text-sm lg:text-base font-semibold">
            0x3197876...
          </h1>
          <h1 className="text-sm lg:text-base font-semibold">
            0x3197876...
          </h1>
        </div>
        <div className={`px-2 py-2 rounded-sm ${dark ? "" : "bg-[#F7F7F7]"}`}>
          <h1 className="text-sm lg:text-base font-semibold">
            0x3197876...
          </h1>
          <h1 className="text-sm lg:text-base font-semibold">
            0x3197876...
          </h1>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <h1 className="text-sm lg:text-base font-semibold">
          #15,986,879
        </h1>
        <div className={`px-20 py-2 rounded-sm ${dark ? "bg-[#333333]" : "bg-[#D9DCF2]"}`}>
          <h1 className="text-sm lg:text-base font-semibold">
            0x3197876...
          </h1>
          <h1 className="text-sm lg:text-base font-semibold">
            0x3197876...
          </h1>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <h1 className="text-sm lg:text-base font-semibold">
          #15,986,879
        </h1>
        <div className={`px-20 py-2 rounded-sm ${dark ? "bg-[#333333]" : "bg-[#D9DCF2]"}`}>
          <h1 className="text-sm lg:text-base font-semibold">
            0x3197876...
          </h1>
          <h1 className="text-sm lg:text-base font-semibold">
            0x3197876...
          </h1>
        </div>
        <div className={`px-20 py-2 rounded-sm ${dark ? "" : "bg-[#F7F7F7]"}`}>
          <h1 className="text-sm lg:text-base font-semibold">
            0x3197876...
          </h1>
          <h1 className="text-sm lg:text-base font-semibold">
            0x3197876...
          </h1>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <h1 className="text-sm lg:text-base font-semibold">
          #15,986,879
        </h1>
        <div className={`px-80 py-2 rounded-sm ${dark ? "bg-[#333333]" : "bg-[#D9DCF2]"}`}>
          <h1 className="text-sm lg:text-base font-semibold">
            0x3197876...
          </h1>
          <h1 className="text-sm lg:text-base font-semibold">
            0x3197876...
          </h1>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <h1 className="text-sm lg:text-base font-semibold">
          #15,986,879
        </h1>
        <div className={`px-80 py-2 rounded-sm ${dark ? "bg-[#333333]" : "bg-[#D9DCF2]"}`}>
          <h1 className="text-sm lg:text-base font-semibold">
            0x3197876...
          </h1>
          <h1 className="text-sm lg:text-base font-semibold">
            0x3197876...
          </h1>
        </div>
      </div>
    </div>
  )
};

export default ForksPanel;