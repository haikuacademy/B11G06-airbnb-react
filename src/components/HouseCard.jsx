function HouseCard() {
  return (
    <>
      <div className="border p-2">
        <h3 className="text-sm font-bold"> House Name</h3>
        <div>
          <span className="text-xs text-gray-400 pr-2">2 bedrooms</span>
          <span className="text-xs text-gray-400 pr-2">·</span>
          <span className="text-xs text-gray-400">2 bathrooms</span>
        </div>
        <div className="pt-1">
          <p className=" text-lg font-bold">price</p>
        </div>
        <div className="flex justify-between pt-2">
          <span className="text-xs">rating</span>
          <span className="text-xs">n</span>
        </div>
      </div>
    </>
  )
}

export default HouseCard
