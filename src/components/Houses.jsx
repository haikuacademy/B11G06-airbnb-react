import Filter from './Filter'
import HouseCard from './HouseCard'
import NavBar from './Nav'

function Houses() {
  return (
    <div className="container mx-auto">
      <NavBar />
      <Filter />
      <div className=" grid grid-cols-5 grid-rows-2 gap-3 ">
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
