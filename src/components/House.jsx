import Gallery from './Gallery'
import Reviews from './Reviews'
import NavBar from './Nav'

function House() {
  return (
    <div>
      <NavBar />
      <div className="grid grid-cols-2 gap-2 bg-pink-200">
        <div className="bg-pink-600">1</div>
        <div>
          <Gallery />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-32 bg-pink-200">
        <div className="bg-pink-600 col-span-2 ">3</div>
        <div className="bg-pink-600">4</div>
      </div>
      <div className="grid grid-cols-3 gap-32">
        <div className=" col-span-2 ">
          <div>
            <div className=" mt-2 mb-2 text-2xl font-bold">
              Phuket, Thailand
            </div>
            <div className=" mt-2 mb-2 text-md text-gray-400">
              2 rooms · 2 bathrooms
            </div>
          </div>
          <div className="mt-2 mb-2 flex gap-2 justify-start">
            <div className=" inline bg-blue-600 col-span-2">3.1</div>
            <div className=" block">
              <div className="text-sm text-gray-400">Hosted by</div>
              <div className="text-md">Linda Smith</div>
            </div>
          </div>
          <div>
            <div className="mt-2 mb-2 text-sm">
              Nested on a serene beachfront, this charming Airbnb house offers a
              picturesque escape. The exterior boasts a classic beach house
              aethetic withwathered wood siding and spacious wrap-around deck,
              perfect for savoring the ocean breeze. Inside, you're greeted by
              an open-concept living area bathed in natural light, complemented
              by cozy furnishings and nautical accents. The house features three
              comfortable bedrooms, each with a unique coastal theme, and two
              modern bathrooms.
            </div>
          </div>
        </div>
        <div className=" mt-2 mb-10 grid grid-cols-1 grid-rows-2 ">
          <div className=" border-2 border-gray-300 rounded p-2 flex justify-between">
            <div className="">
              <div className="text-m font-bold">
                <strong>$120 </strong>
                <span className=" text-gray-400">/night</span>
              </div>
              3 nights = <strong>$360</strong>
            </div>
            <div className="bg-blue-600">4.2</div>
          </div>
        </div>
      </div>
      <Reviews />
    </div>
  )
}

export default House
