import HouseCard from './HouseCard'
import NavBar from './Nav'

function Houses() {
  return (
    <div>
      <NavBar />
      <div className=" flex justify-between bg-blue-200">
        <div className="bg-blue-600">1</div>
        <div className="bg-blue-600">2</div>
        <div className="bg-blue-600">3</div>
        <div className="bg-blue-600">4</div>
        <div className="bg-blue-600">5</div>
        <div className="bg-blue-600">6</div>
      </div>
      <div className=" grid grid-cols-5 grid-rows-2 bg-pink-200 gap-2">
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

export default Houses
