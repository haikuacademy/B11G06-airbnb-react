import NavBar from './Nav'

function HouseEdit() {
  return (
    <div className=" mx-20 mt-2">
      <NavBar />
      <div className="border">
        <div className="grid grid-cols-2 gap-28">
          <div className=" p-2">
            <span className=" text-base ">Edit your listing</span>
            <form className="mt-2">
              <div className="text-sm text-gray-400">Location</div>
              <input
                className="border rounded p-1 w-full"
                type="text"
                placeholder="Bali.."
              />
              <div className="text-sm text-gray-400">Bedrooms</div>
              <input
                className="border rounded p-1 w-full"
                type="number"
                placeholder="2"
              />
              <div className="text-sm text-gray-400">Bathrooms</div>
              <input
                className="border rounded p-1 w-full"
                type="number"
                placeholder="2"
              />
              <div className="text-sm text-gray-400">Price per Night</div>
              <input
                className="border rounded p-1 w-full"
                type="number"
                placeholder="140"
              />
              <div className="text-sm text-gray-400">Description</div>
              <textarea
                className="border h-20 p-1 w-full"
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
            </form>
          </div>
          <div className="p-5">
            <div className="text-sm text-gray-400">Photos</div>
            <form className=" flex flex-col">
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
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
export default HouseEdit
