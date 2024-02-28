function Reviews() {
  return (
    <div>
      <div className="grid grid-cols-3 gap-x-32 p-2">
        <div className="col-span-2">
          <h3 className="text-lg font-bold">Reviews</h3>
          <p className="text-xs">4.5</p>
        </div>
        <div className="border p-4">
          <p className="text-sm font-bold">Leave a review</p>
          <div>
            <p className="text-xs">0</p>
          </div>
        </div>
        <Review />
      </div>
    </div>
  )
}

function Review() {
  return (
    <div className="border col-span-2 p-2 ">
      <div className="flex gap-2 justify-start">
        <div className="bg-blue-600">5.1</div>
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
