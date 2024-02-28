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
      <Reviews />
    </div>
  )
}

export default House
