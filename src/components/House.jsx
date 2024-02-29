import Gallery from './Gallery'
import Reviews from './Reviews'
import NavBar from './Nav'

function House() {
  return (
    <div className="m-2">
      <NavBar />

      <Gallery />
      <div className=" border-b-2 border-gray-400 pb-5 grid grid-cols-3 gap-28">
        <div className=" col-span-2">
          <div className="text-xl font-bold mt-5">Phuket, Thailand</div>
          <div className="text-sm text-gray-400 mt-5">
            2 rooms · 2 bathrooms
          </div>
          <div className=" flex gap-2 mt-5">
            <div>
              <img
                className="rounded-full w-12 h-12"
                src="https://randomuser.me/api/portraits/women/85.jpg"
                alt="Host Profile"
              />
            </div>
            <div className=" block">
              <div className="text-sm text-gray-400">Hosted by</div>
              <div>Linda Smith</div>
            </div>
          </div>
          <div className="text-sm mt-5">
            Nestled on a serene beachfront, this charming Airbnb house offers a
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
            spot for beach lovers and those seeking a tranquil getaway.
          </div>
        </div>
        <div>
          <div className="border-2 border-gray-400 mt-5 p-4">
            <div>
              <span className=" font-bold">$120</span>
              <span className=" text-sm text-gray-400 font-bold">/ night</span>
            </div>
            <div className=" flex justify-between">
              <div>
                3 nights = <span className="font-bold">$360</span>
              </div>
              <div className=" bg-blue-600">4.2</div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Reviews />
      </div>
    </div>
  )
}

export default House
