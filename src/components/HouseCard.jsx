import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faCommentDots } from '@fortawesome/free-solid-svg-icons'

function HouseCard() {
  return (
    <>
      <Link to={'/houses/1'} className=" hover:shadow-md rounded-md">
        <div className="border">
          <div>
            <img
              src="https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295026/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_01.png"
              alt="house"
            />
          </div>
          <div className="p-2">
            <h3 className="text-sm font-bold"> House Name</h3>
            <div>
              <span className="text-xs text-gray-400 pr-2">2 bedrooms</span>
              <span className="text-xs text-gray-400 pr-2">·</span>
              <span className="text-xs text-gray-400">2 bathrooms</span>
            </div>
            <div className="pt-1">
              <p className=" text-lg font-bold">price</p>
            </div>
            <div className="flex flex-wrap justify-between pt-2">
              <div className="flex items-center justify-center">
                <FontAwesomeIcon
                  icon={faStar}
                  className="text-[#FBBF24] text-sm"
                />
                <FontAwesomeIcon
                  icon={faStar}
                  className="text-[#FBBF24] text-sm"
                />
                <FontAwesomeIcon
                  icon={faStar}
                  className="text-[#FBBF24] text-sm"
                />
                <FontAwesomeIcon
                  icon={faStar}
                  className="text-[#FBBF24] text-sm"
                />
                <FontAwesomeIcon
                  icon={faStar}
                  className="text-[#FBBF24] text-sm"
                />
                <p className="ml-2 text-sm">5</p>
              </div>
              <div className="flex items-center justify-center">
                <p className="ml-2 text-sm">12</p>
                <FontAwesomeIcon
                  icon={faCommentDots}
                  className="text-gray-400 ml-2"
                />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  )
}

export default HouseCard
