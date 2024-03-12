import { useEffect, useState } from 'react'
import axios from 'axios'
axios.defaults.withCredentials = true

function Booking(props) {
  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)
  const [nights, setNights] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0)

  useEffect(() => {
    if (startDate && endDate) {
      const oneDay = 24 * 60 * 60 * 1000
      const nights = ((startDate - endDate) / oneDay) * -1
      setNights(nights)
      setTotalPrice(nights * props.house.price)
    }
    // eslint-disable-next-line
  }, [startDate, endDate])
  return (
    <div className="border-2 mt-5 p-2">
      <div>
        <span className=" font-bold">${props.house.price} </span>
        <span className=" text-sm text-gray-400 font-bold">/ night</span>
      </div>
      <div>
        <form>
          <input
            type="date"
            className="border mr-1 mb-2"
            onChange={(event) => setStartDate(new Date(event.target.value))}
          />
          <input
            type="date"
            className="border"
            onChange={(event) => {
              setEndDate(new Date(event.target.value))
            }}
          />
          <textarea
            className="border w-96 text-sm p-1"
            placeholder="Please send a message to the host.."
            name="comments-to-host"
            cols="30"
            rows="10"
          ></textarea>
          <div className=" flex justify-between items-center">
            <div>
              {nights} nights = <span className="font-bold">${totalPrice}</span>
            </div>
            <div>
              <button className="border rounded p-2 text-white bg-[#FB7185]">
                Reserve
              </button>
            </div>
          </div>
        </form>
      </div>
      {/* here is going to be the new div */}
    </div>
  )
}

export default Booking
