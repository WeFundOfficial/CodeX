import "./community.css";
const Ecosystem = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full pb-12 px-4 lg:px-40 items-center relative right-markbar">
      <h1 className="text-3xl lg:text-5xl text-white mt-12">
        The First Ecosystem provides No-Code for developers
      </h1>
      <div className="mt-12">
        <span className="text-2xl lg:text-3xl text-white font-semibold">
          The Future-proof Network
        </span>
        <p className="text-sm lg:text-xl text-white mt-6 w-[300px] lg:w-[500px]" style={{maxWidth: "500px"}}>
          With a unique combination of safety, user experience, upgradeability, and performance, the Codex infrastructure and its Move programming language empower developers to build web3 applications that solve today’s consumer needs on a network that can evolve for anything to come.
        </p>
      </div>
    </div>
  )
}

export default Ecosystem;