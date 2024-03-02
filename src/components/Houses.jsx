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
    }
  ]
  return (
    <div className="container mx-auto">
      <NavBar />
      <Filter />
      <div className=" grid grid-cols-5 grid-rows-2 gap-3 mt-3">
        <div>
          {houses.map((house, index) => (
            <HouseCard key={index} house={house} />
          ))}
        </div>
        <div>
          {houses.map((house, index) => (
            <HouseCard key={index} house={house} />
          ))}
        </div>
        <div>
          {houses.map((house, index) => (
            <HouseCard key={index} house={house} />
          ))}
        </div>
        <div>
          {houses.map((house, index) => (
            <HouseCard key={index} house={house} />
          ))}
        </div>
        <div>
          {houses.map((house, index) => (
            <HouseCard key={index} house={house} />
          ))}
        </div>
        <div>
          {houses.map((house, index) => (
            <HouseCard key={index} house={house} />
          ))}
        </div>
        <div>
          {houses.map((house, index) => (
            <HouseCard key={index} house={house} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Houses
