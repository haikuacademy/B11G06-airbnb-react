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
            <div className="flex justify-between pt-2">
              <div className="flex items-center justify-center">
                {[...new Array(props.house.rating)].map((star, index) => (
                  <FontAwesomeIcon
                    key={index}
                    start={star}
                    icon={faStar}
                    className="text-[#FBBF24] text-sm"
                  />
                ))}
                <p className="ml-2">{props.house.rating}</p>
              </div>
              <p className="ml-2 text-sm">
                {props.house.reviews}
                <FontAwesomeIcon
                  icon={faCommentDots}
                  className="text-gray-400 ml-2"
                />
              </p>
            </div>
          </div>
          {props.isBooking && (
            <div className="grid bg-[#ECFDF5] rounded-2 p-2 m-2 place-content-center">
              <div className="flex">
                <p className="text-xs ">{props.house.checkIn} -</p>
                <p className="text-xs pl-1"> {props.house.checkOut}</p>
              </div>
              <p className="flex text-xs font-bold gap-1 justify-center">
                {props.house.totNights} nights = $
                {props.house.totNights * props.house.price}
              </p>
            </div>
          )}
          {props.isListing && (
            <div className="flex gap-2 m-2 mt-0 text-xs">
              <Link to={'/houses/1'}>
                <button className="border rounded p-0.5 px-2 hover:shadow">
                  View
                </button>
              </Link>
              <Link to={'/houses/1/edit'}>
                <button className="border rounded p-0.5 px-2 hover:shadow">
                  Edit
                </button>
              </Link>
            </div>
          )}
        </div>
      </Link>
    </div>
  )
}

export default HouseCard
