import NavBar from './Nav'

function HouseEdit() {
  return (
    <div className=" mx-20 mt-2">
      <NavBar />
      <form className="border grid grid-cols-2 gap-28 mt-2 p-3">
        <div>
          <div className="mb-2">Edit your listing</div>
          <div className="text-sm mt-2 text-gray-400">Location</div>
          <input
            className="border rounded p-1 w-full"
            type="text"
            placeholder="Bali.."
          />
          <div className="text-sm mt-2 text-gray-400">Bedrooms</div>
          <input
            className="border rounded p-1 w-full"
            type="number"
            placeholder="2"
          />
          <div className="text-sm mt-2 text-gray-400">Bathrooms</div>
          <input
            className="border rounded p-1 w-full"
            type="number"
            placeholder="2"
          />
          <div className="text-sm mt-2 text-gray-400">Price per Night</div>
          <input
            className="border rounded p-1 w-full"
            type="number"
            placeholder="140"
          />
          <div className="text-sm mt-2 text-gray-400">Description</div>
          <textarea
            className="border h-28 p-1 w-full"
            name="house-description"
            cols="30"
            rows="10"
            placeholder="Please write a description..."
          ></textarea>
          <div className=" flex gap-2">
            <button className="border rounded p-2 text-white bg-[#FB7185]">
              Save Changes
            </button>
            <button className="border rounded p-2">Cancel</button>
          </div>
        </div>
        <div className=" flex flex-col p-2 my-5">
          <span className="text-sm text-gray-400">Photos</span>
          <input
            type="url"
            placeholder="http://.."
            className="border rounded mb-2 p-1"
          />
          <input
            type="url"
            placeholder="http://.."
            className="border rounded mb-2 p-1"
          />
          <input
            type="url"
            placeholder="http://.."
            className="border rounded mb-2 p-1"
          />
          <input
            type="url"
            placeholder="http://.."
            className="border rounded mb-2 p-1"
          />
          <input
            type="url"
            placeholder="http://.."
            className="border rounded mb-2 p-1"
          />
          <input
            type="url"
            placeholder="http://.."
            className="border rounded mb-2 p-1"
          />
          <input
            type="url"
            placeholder="http://.."
            className="border rounded mb-2 p-1"
          />
          <input
            type="url"
            placeholder="http://.."
            className="border rounded mb-2 p-1"
          />
          <input
            type="url"
            placeholder="http://.."
            className="border rounded mb-2 p-1"
          />
        </div>
      </form>
    </div>
  )
}
export default HouseEdit
