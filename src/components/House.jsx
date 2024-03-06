import Gallery from './Gallery'
import Reviews from './Reviews'
import NavBar from './Nav'
import { useState, useEffect } from 'react'

function House() {
  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)
  const [nights, setNights] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0)

  const house = {
    location: 'Phuket, Thailand',
    bedrooms: 2,
    bathrooms: 2,
    description: `Nestled on a serene beachfront, this charming Airbnb house offers a
            picturesque escape. The exterior boasts a classic beach house
            aesthetic with weathered wood siding and a spacious wrap- around
            deck, perfect for savoring the ocean breeze. Inside, you're greeted
            by an open-concept living area bathed in natural light, complemented
            by cozy furnishings and nautical accents. The house features three
            comfortable bedrooms, each with a unique coastal theme, and two
            modern bathrooms. The fully equipped kitchen opens to a dining area
            that's ideal for intimate meals ol entertaining guests. Large glass
            doors in the living room lead to the deck, where you can enjoy
            stunning sunset views over the ocean. This idyllic retreat is a
            stone's throw away from the soft sandy beach, making it the perfect
            spot for beach lovers and those seeking a tranquil getaway.`,
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

  useEffect(() => {
    if (startDate && endDate) {
      const oneDay = 24 * 60 * 60 * 1000
      const nights = ((startDate - endDate) / oneDay) * -1
      setNights(nights)
      setTotalPrice(nights * house.price)
    }
    // eslint-disable-next-line
  }, [startDate, endDate])

  return (
    <div className="m-2">
      <NavBar />
      {[...new Array(house.images)].map((image, index) => (
        <Gallery image={image} key={index} />
      ))}
      <div className=" border-b-2 mb-4 pb-5 grid grid-cols-3 gap-28">
        <div className=" col-span-2">
          <div className="text-xl font-bold mt-5">{house.location}</div>
          <div className="text-sm text-gray-400 mt-5">
            {house.bedrooms} rooms · {house.bathrooms} bathrooms
          </div>
          <div className=" flex gap-2 mt-5">
            <div>
              <img
                className="rounded-full w-12 h-12"
                src={house.host.picture}
                alt="Host Profile"
              />
            </div>
            <div className=" block">
              <div className="text-sm text-gray-400">Hosted by</div>
              <div>
                {house.host.firstName} {house.host.lastName}
              </div>
            </div>
          </div>
          <div className="text-sm mt-5">{house.description}</div>
        </div>
        <div>
          <div className="border-2 mt-5 p-2">
            <div>
              <span className=" font-bold">${house.price} </span>
              <span className=" text-sm text-gray-400 font-bold">/ night</span>
            </div>
            <div>
              <form>
                <input
                  type="date"
                  className="border mr-1 mb-2"
                  onChange={(event) =>
                    setStartDate(new Date(event.target.value))
                  }
                />
                <input
                  type="date"
                  className="border"
                  onChange={(event) => {
                    console.log(new Date(event.target.value))
                    setEndDate(new Date(event.target.value))
                  }}
                />
                <textarea
                  className="border w-96 text-sm p-1"
                  placeholder="Please send a message to the host.."
                  name="comments-to-host"
                  cols="30"
                  rows="10"
                ></textarea>
                <div className=" flex justify-between items-center">
                  <div>
                    {nights} nights ={' '}
                    <span className="font-bold">${totalPrice}</span>
                  </div>
                  <div>
                    <button className="border rounded p-2 text-white bg-[#FB7185]">
                      Reserve
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Reviews rating={house.rating} />
      </div>
    </div>
  )
}

export default House
