import { Dispatch, SetStateAction } from "react";

interface Props {
  iTab: number;
  setITab: Dispatch<SetStateAction<number>>;
}

const Tabs: React.FC<Props> = ({ iTab, setITab: setTab }) => {
  return (
    <div className="flex gap-4 lg:gap-8 mt-6">
      {TABS.map((tab, index) => (
        <div
          className={`p-2 rounded-sm cursor-pointer ${iTab == index? "bg-[#999999]" : ""}`}
          key={index}
          onClick = {() => setTab(index)}
        >
          <span className="text-sm lg:text-base text-center">{tab}</span>
        </div>
      ))}
    </div>
  )
};

export default Tabs;

const TABS = [
  "Chain Info", "Block Details", "Latency", "Forks", "Node Info", "API Stats"
]