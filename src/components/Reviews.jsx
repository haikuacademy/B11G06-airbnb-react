import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faCommentDots } from '@fortawesome/free-regular-svg-icons'

function Reviews(props) {
  let reviews = [
    {
      content:
        'Very good service, English skills by the concierge have been appreciated. Breakfast and dinner were particularly refined and had surprising variety.',
      rating: 5,
      date: '23-01-2023',
      author: {
        firstName: 'Phil',
        lastName: 'Collins',
        picture: 'https://randomuser.me/api/portraits/men/23.jpg'
      }
    },
    {
      content:
        'Very bad service, English skills by the concierge have been real baaaaad. Breakfast sucks.',
      rating: 2,
      date: '24-03-2023',
      author: {
        firstName: 'Karen',
        lastName: 'Anno Ying',
        picture: 'https://randomuser.me/api/portraits/women/72.jpg'
      }
    },
    {
      content: 'Meh!',
      rating: 3,
      date: '26-06-2023',
      author: {
        FirstName: 'John',
        lastName: 'Pitt',
        picture: 'https://randomuser.me/api/portraits/men/29.jpg'
      }
    }
  ]
  let totReviews = reviews.length
  return (
    <div>
      <div className="grid grid-cols-3 gap-x-32 p-2">
        <div className="col-span-2">
          <div className="flex items-center gap-1">
            <FontAwesomeIcon icon={faCommentDots} className="text-gray-400" />
            <h3 className="text-lg font-bold">{totReviews} Reviews</h3>
          </div>
          <div className=" flex items-center gap-1 mb-8">
            <FontAwesomeIcon icon={faStar} className="text-[#FBBF24] text-xs" />
            <FontAwesomeIcon icon={faStar} className="text-[#FBBF24] text-xs" />
            <FontAwesomeIcon icon={faStar} className="text-[#FBBF24] text-xs" />
            <FontAwesomeIcon icon={faStar} className="text-[#FBBF24] text-xs" />
            <p className="text-xs">{props.rating}</p>
          </div>
          {reviews.map((review, index) => (
            <Review key={index} user={review} />
          ))}
        </div>
        <div className="border p-4">
          <p className="text-sm font-bold">Leave a review</p>
          <div className="flex gap-1 items-center my-2">
            <FontAwesomeIcon icon={faStar} className="text-[#FBBF24] text-xs" />
            <FontAwesomeIcon icon={faStar} className="text-[#FBBF24] text-xs" />
            <FontAwesomeIcon icon={faStar} className="text-[#FBBF24] text-xs" />
            <FontAwesomeIcon icon={faStar} className="text-[#FBBF24] text-xs" />
            <FontAwesomeIcon icon={faStar} className="text-[#FBBF24] text-xs" />
            <p className="text-xs">0</p>
          </div>
          <div className=" my-2">
            <form className="text-sm">
              <textarea
                className="border w-80 p-1"
                name="house-review"
                placeholder="Please leave a review for this house.."
                cols="30"
                rows="10"
              ></textarea>
              <button className="flex justify-center w-40 p-2 border rounded my2 text-white bg-[#FB7185]">
                Submit Review
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

function Review(props) {
  return (
    <div className="border col-span-2 p-2 mb-4 ">
      <div className="flex gap-2 justify-start">
        <img
          src={props.user.author.picture}
          alt="profile pic"
          className="rounded-full w-8"
        />
        <div>
          <p className="text-xs text-gray-400">22 Jan 2024</p>
          <h6 className="text-xs">
            {props.user.author.firstName} {props.user.author.lastName}
          </h6>
        </div>
      </div>
      <div className="flex gap-1 items-center pt-2">
        {[...new Array(props.user.rating)].map((i, index) => (
          <FontAwesomeIcon icon={faStar} className="text-[#FBBF24] text-xs" />
        ))}
        <p className="text-xs">{props.user.rating}</p>
      </div>
      <div className="pt-2">
        <p className="text-xs leading-1 ">{props.user.content}</p>
      </div>
    </div>
  )
}

export default Reviews
