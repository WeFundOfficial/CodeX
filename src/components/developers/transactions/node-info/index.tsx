import Info from "./info";

const NodeInfo = () => {
  return (
    <div style={{ color: "#999999" }}>
      <Info />
      <div className="flex flex-col gap-4 mt-20">
        <div className="flex items-center w-full px-8 h-8 rounded-sm bg-[#F7F7F7]">
          <h1 className="text-base lg:text-xl font-semibold">Connected Peers</h1>
        </div>
        <div className="flex items-center w-full px-8 h-8 rounded-sm bg-[#F7F7F7]">
          <p className="text-xs font-semibold">No Peers Connected</p>
        </div>
        <div className="flex items-center w-full px-8 h-8 mt-4 rounded-sm bg-[#F7F7F7]">
          <h1 className="text-base lg:text-xl font-semibold">Pending Extrinsics</h1>
        </div>
        <div className="flex items-center w-full px-8 h-8 rounded-sm bg-[#F7F7F7]">
          <p className="text-xs font-semibold">No Extrinsics Available</p>
        </div>
      </div>
    </div>
  )
};

export default NodeInfo;