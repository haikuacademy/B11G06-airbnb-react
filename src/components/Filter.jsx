import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHouse,
  faBed,
  faDollarSign,
  faSort
} from '@fortawesome/free-solid-svg-icons'

function Filter() {
  return (
    <form className=" flex bg-[#E5E7EB] p-2 rounded-md gap-2">
      {/* he form should wrap all elements, therefore it 
  should wrap the "grid" too, to avoid breaking it. */}

      {/* Location */}
      <div className="flex w-full bg-white justify-left items-center text-xs rounded-md h-9 p-2">
        <FontAwesomeIcon icon={faHouse} className="p-2" />
        <select className="w-full">
          <option selected className="text-xs">
            Any Location
          </option>
          <option>Rome</option>
          <option>Cagliari</option>
          <option>Iglesias</option>
          <option>Tokyo</option>
        </select>
      </div>
      {/* Rooms */}
      <div className=" flex w-full bg-white justify-left items-center text-xs rounded-md h-9 p-2">
        <FontAwesomeIcon icon={faBed} className="p-2 " />
        <select className="w-full">
          <option selected className="text-xs">
            Any Rooms
          </option>
          <option>1 Room</option>
          <option>2 Rooms</option>
          <option>3 Rooms</option>
          <option>4 Rooms</option>
        </select>
      </div>
      {/* Max Price */}
      <div className=" bg-white flex w-full justify-left items-center rounded-md h-9">
        <FontAwesomeIcon icon={faDollarSign} className="text-xs p-2" />

        <input
          type="number"
          placeholder="max price"
          className="text-sm rounded-sm p-2"
        />
      </div>
      {/* sort by */}
      <div className=" flex w-full bg-white justify-left items-center text-xs rounded-md h-9 p-2">
        <FontAwesomeIcon icon={faSort} className="p-2" />
        <select className=" flex-auto text-xs font-semibold rounded-sm p-2">
          <option selected className="text-xs">
            Sort by
          </option>
          <option>Location</option>
          <option>Price</option>
          <option>Number of Rooms</option>
          <option>number of Bathrooms</option>
        </select>
      </div>
      {/* seach by keywords */}
      <input
        type="text"
        placeholder="keywords.."
        className=" flex w-full bg-white justify-left items-center text-xs rounded-md h-9 p-2"
      />
      <button className="bg-[#FB7185] p-2 text-white flex items-center rounded-md h-9">
        Search
      </button>
      {/* end seach */}
    </form>
  )
}
export default Filter
