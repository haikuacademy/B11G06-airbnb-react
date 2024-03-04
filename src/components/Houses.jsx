import Filter from './Filter'
import HouseCard from './HouseCard'
import NavBar from './Nav'

function Houses() {
  const houses = [
    {
      location: 'Phuket, Thailand',
      bedrooms: 2,
      bathrooms: 2,
      price: 120,
      rating: 4,
      reviews: 1,
      photo:
        'https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295019/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_08.png'
    },
    {
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
  const listOfHouses = houses.map((house, index) => (
    <HouseCard key={index} house={house} />
  ))

  return (
    <div className="container mx-auto">
      <NavBar />
      <Filter />
      <div className=" grid grid-cols-5 grid-rows-2 gap-3 mt-3">
        {listOfHouses}
      </div>
    </div>
  )
}

export default Houses
