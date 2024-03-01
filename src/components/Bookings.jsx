import HouseCard from './HouseCard'
import NavBar from './Nav'

function Bookings() {
  return (
    <div className="container mx-auto">
      <NavBar />
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

export default Bookings
