import HouseCard from './HouseCard'
import NavBar from './Nav'

function Bookings() {
  let bookings = [
    {
      bookingsID: 1,
      location: 'Phuket, Thailand',
      checkIn: '24-4-2024',
      bookingPrice: 220,
      rating: 3,
      reviews: 1,
      photo:
        'https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295019/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_08.png'
    },
    {
      bookingsID: 2,
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
  return (
    <div className="container mx-auto">
      <NavBar />
      <div className=" grid grid-cols-5 grid-rows-2 gap-3 mt-3">
        {bookings.map((booking, index) => (
          <HouseCard key={index} house={booking} />
        ))}
      </div>
    </div>
  )
}

export default Bookings
