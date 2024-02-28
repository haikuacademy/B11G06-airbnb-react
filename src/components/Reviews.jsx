function Reviews() {
  return (
    <div>
      <div className="grid grid-cols-3 gap-32 bg-pink-200">
        <Review />
        <div className="bg-pink-600">6</div>
      </div>
    </div>
  )
}

function Review() {
  return (
    <div className="bg-pink-600 col-span-2 ">
      <div className="flex gap-2 justify-start bg-blue-200">
        <div className="bg-blue-600">5.1</div>
        <div className="bg-blue-600">5.2</div>
      </div>
    </div>
  )
}

export default Reviews
