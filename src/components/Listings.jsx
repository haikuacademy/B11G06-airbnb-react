import HouseCard from './HouseCard'
import NavBar from './Nav'
import axios from 'axios'
axios.defaults.withCredentials = true

function Listings() {
  function createHouse(e) {
    e.preventDefault()
    try {
    } catch (err) {}
  }

  const houses = [
    {
      location: 'Phuket, Thailand',
      bedrooms: 2,
      bathrooms: 2,
      price: 120,
      rating: 3,
      reviews: 1,
      photo:
        'https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295019/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_08.png'
    },
    {
      location: 'Chiang Mai, Thailand',
      bedrooms: 3,
      bathrooms: 1,
      price: 100,
      rating: 5,
      reviews: 12,
      photo:
        'https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295019/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_09.png'
    },
    {
      location: 'Bangkok, Thailand',
      bedrooms: 2,
      bathrooms: 1,
      price: 105,
      rating: 4,
      reviews: 25,
      photo:
        'https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295019/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_07.png'
    },
    {
      location: 'Koh Lipe, Thailand',
      bedrooms: 4,
      bathrooms: 3,
      price: 320,
      rating: 5,
      reviews: 65,
      photo:
        'https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295019/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_06.png'
    }
  ]
  const listOfHouses = houses.map((house, index) => (
    <HouseCard key={index} house={house} isListing={true} />
  ))

  return (
    <div className="container mx-10">
      <div className="flex flex-col">
        <NavBar />
        <div className="border-2 rounded-sm p-4">
          <h1 className="text-sm mb-4">List a House</h1>
          <form onSubmit={createHouse}>
            <div className="grid grid-cols-2 gap-32">
              <div>
                <label className="text-xs text-gray-400 ">Location</label>
                <input
                  className="w-full border-2 rounded-sm p-2"
                  placeholder="Bali.."
                ></input>
                <label className="text-xs text-gray-400 ">Bedrooms</label>
                <input
                  className="w-full border-2 rounded-sm p-2"
                  placeholder="2"
                ></input>
                <label className="text-xs text-gray-400 ">Bathrooms</label>
                <input
                  className="w-full border-2 rounded-sm p-2"
                  placeholder="1"
                ></input>
                <label className="text-xs text-gray-400 ">
                  Price per Night
                </label>
                <input
                  className="w-full border-2 rounded-sm p-2"
                  placeholder="140"
                ></input>
                <label className="text-xs text-gray-400 ">Description</label>
                <textarea
                  rows="3"
                  className="w-full border-2 rounded-sm p-2"
                  placeholder="wonderfull appartment with stunning views"
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
                  placeholder="http://..."
                ></input>
                <input
                  type="link"
                  className="w-full border-2 rounded-sm p-2 mb-1"
                  placeholder="http://..."
                ></input>
                <input
                  type="link"
                  className="w-full border-2 rounded-sm p-2 mb-1"
                  placeholder="http://..."
                ></input>
                <input
                  type="link"
                  className="w-full border-2 rounded-sm p-2 mb-1"
                  placeholder="http://..."
                ></input>
                <input
                  type="link"
                  className="w-full border-2 rounded-sm p-2 mb-1"
                  placeholder="http://..."
                ></input>
                <input
                  type="link"
                  className="w-full border-2 rounded-sm p-2 mb-1"
                  placeholder="http://..."
                ></input>
                <input
                  type="link"
                  className="w-full border-2 rounded-sm p-2 mb-1"
                  placeholder="http://..."
                ></input>
                <input
                  type="link"
                  className="w-full border-2 rounded-sm p-2 mb-1"
                  placeholder="http://..."
                ></input>
                <input
                  type="link"
                  className="w-full border-2 rounded-sm p-2 mb-1"
                  placeholder="http://..."
                ></input>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className=" grid grid-cols-5 grid-rows-2 gap-3 mt-3">
        {listOfHouses}
      </div>
    </div>
  )
}

export default Listings
