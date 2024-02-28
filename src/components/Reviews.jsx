function Reviews() {
  return (
    <div>
      <div className="grid grid-cols-3 gap-32 bg-pink-200">
        <div className="bg-pink-600 col-span-2 ">
          <div className="flex gap-2 justify-start bg-blue-200">
            <div className="bg-blue-600 col-span-2">3.1</div>
            <div className="bg-blue-600">3.2</div>
          </div>
        </div>
        <div className="bg-pink-600">
          <div className="flex gap-2 justify-between bg-blue-200">
            <div className="bg-blue-600">4.1</div>
            <div className="bg-blue-600">4.2</div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-32 bg-pink-200">
        <div className="bg-pink-600 col-span-2 ">
          <div className="flex gap-2 justify-start bg-blue-200">
            <div className="bg-blue-600">5.1</div>
            <div className="bg-blue-600">5.2</div>
          </div>
        </div>
        <div className="bg-pink-600">6</div>
      </div>
    </div>
  )
}

export default Reviews
