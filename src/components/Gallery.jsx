function Gallery(props) {
  return (
    <div className=" grid grid-cols-2 gap-8">
      <div className="border rounded">
        <img src={props.image[0]} alt="house-1" />
      </div>
      <div className=" grid grid-cols-3 gap-2">
        <div className="border rounded">
          <img src={props.image[0]} alt="house-1" />
        </div>
        <div className="border rounded">
          <img src={props.image[1]} alt="house-2" />
        </div>
        <div className="border rounded">
          <img src={props.image[2]} alt="house-3" />
        </div>
        <div className="border rounded">
          <img src={props.image[3]} alt="house-4" />
        </div>
        <div className="border rounded">
          <img src={props.image[4]} alt="house-5" />
        </div>
        <div className="border rounded">
          <img src={props.image[5]} alt="house-6" />
        </div>
        <div className="border rounded">
          <img src={props.image[6]} alt="house-7" />
        </div>
        <div className="border rounded">
          <img src={props.image[7]} alt="house-8" />
        </div>
        <div className="border rounded">
          <img src={props.image[8]} alt="house-9" />
        </div>
      </div>
    </div>
  )
}

export default Gallery
