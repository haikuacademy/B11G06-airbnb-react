function Reviews() {
  return (
    <div>
      <div className="grid grid-cols-3 gap-x-32 p-2">
        <div className="col-span-2">
          <h3 className="text-lg font-bold">Reviews</h3>
          <p className="text-xs mb-4">4.5</p>
          <Review />
        </div>
        <div className="border p-4">
          <p className="text-sm font-bold">Leave a review</p>
          <div className="my-2">
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

function Review() {
  return (
    <div className="border col-span-2 p-2 ">
      <div className="flex gap-2 justify-start">
        <div>
          <img
            className="rounded-full w-10 h-10"
            src="https://randomuser.me/api/portraits/men/84.jpg"
            alt="Host Profile"
          />
        </div>
        <div>
          <p className="text-xs text-gray-400">22 Jan 2024</p>
          <h6 className="text-xs">Mark Lino</h6>
        </div>
      </div>
      <div className="pt-2">
        <p className="text-xs">5</p>
      </div>
      <div className="pt-2">
        <p className="text-xs leading-1 ">
          Great place to stay! The house is very clean and comfortable, and the
          location is perfect. the host was very friendly and helful. Highly
          recommend!
        </p>
      </div>
    </div>
  )
}

export default Reviews
