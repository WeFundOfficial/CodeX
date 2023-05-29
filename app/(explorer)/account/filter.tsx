const Filter = () => {
  return (
    <div className="flex gap-10 text-[#999999] px-1 lg:px-4 mt-8">
      <div className="w-1/3">
        <p className="text-sm lg:text-base font-semibold pl-2 lg:pl-5">Sort By</p>
        <select className="w-full bg-transparent px-4 py-2 border border-[#009DFF] rounded-lg mt-2">
          <option className="">Date</option>
          <option>Parents</option>
          <option>Name</option>
          <option>Balance</option>
        </select>
      </div>
      <div className="w-auto">
        <p className="text-sm lg:text-base font-semibold">Filter By</p>
        <input
          className="w-full bg-transparent border border-[#FFFFFF1A] px-4 py-1 mt-2"
          placeholder="Filter by Name or Tags"
        />
      </div>
    </div>
  )
}

export default Filter;