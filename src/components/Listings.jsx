import HouseCard from './HouseCard'
import NavBar from './Nav'

function Listings() {
  return (
    <div className="container mx-10">
      <div className="flex flex-col">
        <NavBar />
        <div className="border-2 rounded-sm p-4">
          <h1 className="text-sm mb-4">List a House</h1>
          <form>
            <div className="grid grid-cols-2 gap-32">
              <div>
                <label className="text-xs text-gray-400 ">Location</label>
                <input className="w-full border-2 rounded-sm p-2"></input>
                <label className="text-xs text-gray-400 ">Bedrooms</label>
                <input className="w-full border-2 rounded-sm p-2"></input>
                <label className="text-xs text-gray-400 ">Bathrooms</label>
                <input className="w-full border-2 rounded-sm p-2"></input>
                <label className="text-xs text-gray-400 ">
                  Price per Night
                </label>
                <input className="w-full border-2 rounded-sm p-2"></input>
                <label className="text-xs text-gray-400 ">Description</label>
                <textarea
                  rows="3"
                  className="w-full border-2 rounded-sm p-2"
                ></textarea>
                <button className="bg-[#FB7185] text-white p-2 rounded-sm mt-2">
                  List house
                </button>
              </div>
              <div>
                <label className="text-xs text-gray-400">Photos</label>
                <input
                  type="link"
                  className="w-full border-2 rounded-sm p-2 mb-1"
                ></input>
                <input
                  type="link"
                  className="w-full border-2 rounded-sm p-2 mb-1"
                ></input>
                <input
                  type="link"
                  className="w-full border-2 rounded-sm p-2 mb-1"
                ></input>
                <input
                  type="link"
                  className="w-full border-2 rounded-sm p-2 mb-1"
                ></input>
                <input
                  type="link"
                  className="w-full border-2 rounded-sm p-2 mb-1"
                ></input>
                <input
                  type="link"
                  className="w-full border-2 rounded-sm p-2 mb-1"
                ></input>
                <input
                  type="link"
                  className="w-full border-2 rounded-sm p-2 mb-1"
                ></input>
                <input
                  type="link"
                  className="w-full border-2 rounded-sm p-2 mb-1"
                ></input>
                <input
                  type="link"
                  className="w-full border-2 rounded-sm p-2 mb-1"
                ></input>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className=" grid grid-cols-5 grid-rows-2 gap-3 mt-3">
        <HouseCard />
        <HouseCard />
        <HouseCard />
        <HouseCard />
        <HouseCard />
        <HouseCard />
        <HouseCard />
      </div>
    </div>
  )
}

export default Listings
