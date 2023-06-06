import { themeState } from "@/state/theme";
import { useRecoilValue } from "recoil";

const Search = () => {
  const dark = useRecoilValue(themeState)
  return (
    <div className="flex w-full lg:w-1/3 gap-4 rounded-lg mt-5">
      <input
        className="w-full border border-[#272B2A]  bg-transparent focus-visible:outline-0 px-2"
        placeholder="Block Hash or Number to Query"
      />
      <button className="p-1 lg:px-4 rounded-lg text-sm lg:text-lg"
        style={{
          background: "linear-gradient(125.84deg, rgba(50, 181, 255, 0.7) 6.42%, rgba(0, 26, 255, 0.7) 49.21%, rgba(50, 181, 255, 0.7) 94.38%)",
        }}
      >
        Hash
      </button>
    </div>
  )
}

export default Search;