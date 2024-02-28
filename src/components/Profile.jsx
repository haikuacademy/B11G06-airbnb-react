import NavBar from './Nav'

function Profile() {
  return (
    <div>
      <NavBar />
      <div className="flex flex-row bg-blue-200 gap-2">
        <div className=" bg-blue-600">1</div>
        <div className=" bg-blue-600">2</div>
      </div>
    </div>
  )
}

export default Profile
