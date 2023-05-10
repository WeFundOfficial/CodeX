import { themeState } from "@/state/theme";
import { useRecoilValue } from "recoil";

const Search = () => {
  const dark = useRecoilValue(themeState)
  return (
    <div className="flex w-full border border-[#272B2A] px-4 gap-4 rounded-lg mt-5">
      <svg width="35" height="36" viewBox="0 0 35 36"
        fill={`${dark ? "#D4D4D8" : "black"}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M22.6042 20.5766H21.4521L21.0438 20.1828C22.4729 18.5203 23.3333 16.362 23.3333 14.0141C23.3333 8.77866 19.0896 4.53491 13.8542 4.53491C8.61875 4.53491 4.375 8.77866 4.375 14.0141C4.375 19.2495 8.61875 23.4932 13.8542 23.4932C16.2021 23.4932 18.3604 22.6328 20.0229 21.2037L20.4167 21.612V22.7641L27.7083 30.0412L29.8813 27.8682L22.6042 20.5766ZM13.8542 20.5766C10.2229 20.5766 7.29167 17.6453 7.29167 14.0141C7.29167 10.3828 10.2229 7.45158 13.8542 7.45158C17.4854 7.45158 20.4167 10.3828 20.4167 14.0141C20.4167 17.6453 17.4854 20.5766 13.8542 20.5766Z" />
      </svg>

      <input
        className="w-full border-0 bg-transparent focus-visible:outline-0"
        placeholder="Search Explorer"
      />
    </div>
  )
}

export default Search;