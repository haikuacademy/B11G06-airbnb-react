import HouseCard from './HouseCard'
import NavBar from './Nav'

function Bookings() {
  let bookings = [
    { bookingID: 1, houseID: 2 },
    { bookingID: 2, houseID: 4 },
    { bookingID: 3, houseID: 3 },
    { bookingID: 3, houseID: 3 }
  ]
  return (
    <div className="container mx-auto">
      <NavBar />
      <div className=" grid grid-cols-5 grid-rows-2 gap-3 mt-3">
        {bookings.map((booking, index) => (
          <Booking key={index} houseID={booking} />
        ))}
      </div>
    </div>
  )
}

function Booking() {
  return <HouseCard />
}

export default Bookings
