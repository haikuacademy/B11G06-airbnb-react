function Filter() {
  return (
    <form>
      {/* he form should wrap all elements, therefore it 
  should wrap the "grid" too, to avoid breaking it. */}
      <div className=" flex bg-[#E5E7EB] p-2 rounded-sm gap-2">
        {/* Location */}
        <select className="flex-auto text-xs font-semibold rounded-sm p-1 w-250">
          <option selected className="text-xs">
            Any Location
          </option>
          <option>Rome</option>
          <option>Cagliari</option>
          <option>Iglesias</option>
          <option>Tokyo</option>
        </select>
        {/* Rooms */}
        <select className=" flex-auto text-xs font-semibold rounded-sm p-1">
          <option selected className="text-xs">
            Any Rooms
          </option>
          <option>1 Room</option>
          <option>2 Rooms</option>
          <option>3 Rooms</option>
          <option>4 Rooms</option>
        </select>
        {/* Max Price */}
        <input
          type="number"
          placeholder="max price"
          className=" flex-auto text-xs rounded-sm p-1 font-semibold"
        />
        {/* sort by */}
        <select className=" flex-auto text-xs font-semibold rounded-sm p-1">
          <option selected className="text-xs">
            Sort by
          </option>
          <option>Location</option>
          <option>Price</option>
          <option>Number of Rooms</option>
          <option>number of Bathrooms</option>
        </select>
        {/* seach by keywords */}
        <input
          type="text"
          placeholder="keywords.."
          className=" flex-auto text-xs rounded-sm p-2 font-semibold"
        />
        <button className="bg-[#FF385C] p-2 text-white rounded-sm px-4">
          Search
        </button>
        {/* end seach */}
      </div>
    </form>
  )
}
export default Filter
