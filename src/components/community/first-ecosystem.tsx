import "./community.css";
const Ecosystem = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full pb-12 px-4 lg:px-40 items-center relative right-markbar"
      style={{ background: "linear-gradient(280.57deg, rgba(10, 35, 252, 0.5) 0%, rgba(0, 8, 77, 0) 35%)" }}
    >
      <h1 className="text-3xl lg:text-5xl font-semibold mt-12">
        The First Ecosystem provides No-Code for developers
      </h1>
      <div className="mt-12">
        <span className="text-2xl lg:text-3xl font-semibold">
          The Future-proof Network
        </span>
        <p className="text-sm lg:text-xl  mt-6 w-[300px] lg:w-[500px]" style={{ maxWidth: "500px" }}>
          With a unique combination of safety, user experience, upgradeability, and performance, the Codex infrastructure and its Move programming language empower developers to build web3 applications that solve today’s consumer needs on a network that can evolve for anything to come.
        </p>
      </div>
    </div>
  )
}

export default Ecosystem;