/* eslint-disable @next/next/no-img-element */
import { themeState } from "@/state/theme";
import { useRecoilValue } from "recoil";

const DATA = {
  sender: {
    address: "14jhjhgug...",
    avatar: "/images/transactions/receiver.png",
  },
  hash: "0xjkgigjbyfyffyf...",
  parent: "0xjkgigjbyfyffyf...",
  state: "0x5jijuhgasbhj..",
  avatars: [
    "/images/transactions/image355.png",
    "/images/transactions/image356.png",
    "/images/transactions/image357.png",
    "/images/transactions/image358.png",
    "/images/transactions/image359.png",
  ]
}
const InfoTable = () => {
  const dark = useRecoilValue(themeState);
  return (
    <table
      className="w-full table-auto mt-12"
      style={{ color: dark ? "white" : "#999999" }}
    >
      <thead>
        <tr className="text-base lg:text-xl text-left items-end px-3">
          <td className="px-6">17,099,978</td>
          <td className="px-6">Hash</td>
          <td className="px-6">Parent</td>
          <td className="px-6">State</td>
          <td className="px-6">CDX/8756</td>
        </tr>
      </thead>
      <tbody>
        <tr className="h-2" />
        <tr className={`${dark ? "" : "bg-[#F7F7F7]"}`}>
          <td className="px-6 py-2">
            <div className="flex gap-10">
              <img src={DATA.sender.avatar} alt="sender" />
              <p className="text-sm lg:text-base">{DATA.sender.address}</p>
            </div>
          </td>
          <td className="px-6 py-2">
            {DATA.hash}
          </td>
          <td className="px-6 py-2 text-[#009DFF]">
            {DATA.parent}
          </td>
          <td className="px-6 py-2">
            {DATA.state}
          </td>
          <td className="px-6 py-2">
            <div className="flex gap-2">
              {DATA.avatars.map((img, index) => (
                <img src={img} alt="img" key={index} />
              ))}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  )
};

export default InfoTable;