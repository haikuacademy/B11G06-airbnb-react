import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faCommentDots } from '@fortawesome/free-regular-svg-icons'

function HouseCard(props) {
  console.log(props)
  return (
    <div className="border rounded-md ">
      <Link to={'/houses/1'} className=" hover:shadow-md rounded-md">
        <div>
          <div>
            <img
              className=" rounded-t-md"
              src={props.house.photo}
              alt="house"
            />
          </div>
          <div className="p-2">
            <h3 className="text-sm font-bold">{props.house.location}</h3>
            <div>
              <span className="text-xs text-gray-400 pr-2">
                {props.house.bedrooms} bedrooms
              </span>
              <span className="text-xs text-gray-400 pr-2">·</span>
              <span className="text-xs text-gray-400">
                {props.house.bathrooms} bathrooms
              </span>
            </div>
            <div className="pt-1">
              <p className=" text-lg font-bold">${props.house.price}</p>
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
                <p className="ml-2 text-sm">{props.house.rating}</p>
              </div>
              <div className="flex items-center justify-center">
                <p className="ml-2 text-sm">{props.house.reviews}</p>
                <FontAwesomeIcon
                  icon={faCommentDots}
                  className="text-gray-400 ml-2"
                />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default HouseCard
