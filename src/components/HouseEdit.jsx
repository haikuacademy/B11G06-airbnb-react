import NavBar from './Nav'
import { Link } from 'react-router-dom'

function HouseEdit() {
  const house = {
    location: 'Phuket, Thailand',
    bedrooms: 2,
    bathrooms: 2,
    description: `Nestled on a serene beachfront, this charming Airbnb house offers a picturesque escape. The exterior boasts a classic beach house aesthetic with weathered wood siding and a spacious wrap- around deck, perfect for savoring the ocean breeze. Inside, you're greeted by an open-concept living area bathed in natural light, complemented by cozy furnishings and nautical accents. The house features three comfortable bedrooms, each with a unique coastal theme, and two modern bathrooms. The fully equipped kitchen opens to a dining area that's ideal for intimate meals ol entertaining guests. Large glass doors in the living room lead to the deck, where you can enjoy stunning sunset views over the ocean. This idyllic retreat is a stone's throw away from the soft sandy beach, making it the perfect spot for beach lovers and those seeking a tranquil getaway.`,
    price: 120,
    rating: 4,
    host: {
      firstName: 'Linda',
      lastName: 'Smith',
      picture: 'https://randomuser.me/api/portraits/women/85.jpg'
    },
    images: [
      'https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295026/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_01.png',
      'https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295026/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_02.png',
      'https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295019/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_03.png',
      'https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295019/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_04.png',
      'https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295019/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_05.png',
      'https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295019/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_06.png',
      'https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295019/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_07.png',
      'https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295019/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_08.png',
      'https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295019/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_09.png'
    ]
  }
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
            value={house.location}
          />
          <div className="text-sm mt-2 text-gray-400">Bedrooms</div>
          <input
            className="border rounded p-1 w-full"
            type="number"
            value={house.bedrooms}
          />
          <div className="text-sm mt-2 text-gray-400">Bathrooms</div>
          <input
            className="border rounded p-1 w-full"
            type="number"
            value={house.bathrooms}
          />
          <div className="text-sm mt-2 text-gray-400">Price per Night</div>
          <input
            className="border rounded p-1 w-full"
            type="number"
            value={house.price}
          />
          <div className="text-sm mt-2 text-gray-400">Description</div>
          <textarea
            className="border h-28 p-1 w-full"
            name="house-description"
            cols="30"
            rows="10"
            value={house.description}
          ></textarea>
          <div className=" flex gap-2">
            <button className="border rounded p-2 text-white bg-[#FB7185] hover:shadow">
              Save Changes
            </button>
            <Link to="/listings">
              <button className="border rounded p-2 hover:shadow">
                Cancel
              </button>
            </Link>
          </div>
        </div>
        <div className=" flex flex-col p-2 my-5">
          <span className="text-sm text-gray-400">Photos</span>
          <input
            type="url"
            placeholder="http://.."
            className="border rounded mb-2 p-1"
            value={house.images[0]}
          />
          <input
            type="url"
            placeholder="http://.."
            className="border rounded mb-2 p-1"
            value={house.images[1]}
          />
          <input
            type="url"
            placeholder="http://.."
            className="border rounded mb-2 p-1"
            value={house.images[2]}
          />
          <input
            type="url"
            placeholder="http://.."
            className="border rounded mb-2 p-1"
            value={house.images[3]}
          />
          <input
            type="url"
            placeholder="http://.."
            className="border rounded mb-2 p-1"
            value={house.images[4]}
          />
          <input
            type="url"
            placeholder="http://.."
            className="border rounded mb-2 p-1"
            value={house.images[5]}
          />
          <input
            type="url"
            placeholder="http://.."
            className="border rounded mb-2 p-1"
            value={house.images[6]}
          />
          <input
            type="url"
            placeholder="http://.."
            className="border rounded mb-2 p-1"
            value={house.images[7]}
          />
          <input
            type="url"
            placeholder="http://.."
            className="border rounded mb-2 p-1"
            value={house.images[8]}
          />
        </div>
      </form>
    </div>
  )
}

export default HouseEdit
