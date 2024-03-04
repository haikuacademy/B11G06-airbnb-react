import NavBar from './Nav'

function Profile() {
  const user = {
    fristName: 'Linda',
    lastName: 'Smith',
    email: 'Lindasmith@example.com',
    picture: 'https://randomuser.me/api/portraits/women/85.jpg'
  }
  return (
    <div className="container mx-auto px-32">
      <NavBar />
      <div className=" border-2 p-6">
        {/*Your profile */}
        <div className="py-4">
          <h2 className="font-bold text-lg">Your Profile</h2>
        </div>
        {/*Image and url */}
        <div className="flex flex-row items-center">
          <div>
            <img
              src={user.picture}
              alt="Profile pic"
              className="rounded-full w-14 mr-4"
            />
          </div>
          <div className="flex-auto border-2 rounded-sm my-4">
            <input type="link" value={user.picture} className="p-2 w-full  " />
          </div>
        </div>
        {/* First Name*/}
        <label className="text-sm font-semibold text-gray-500">
          First Name
        </label>
        <div className="flex-auto border-2 rounded-sm mb-4">
          <input className="p-2 w-full" value={user.fristName} />
        </div>
        {/* Last Name*/}
        <label className="text-sm font-semibold text-gray-500">Last Name</label>
        <div className="flex-auto border-2 rounded-sm mb-4">
          <input className="p-2 w-full" value={user.lastName} />
        </div>
        {/* Email Name*/}
        <label className="text-sm font-semibold text-gray-500">Email</label>
        <div className="flex-auto border-2 rounded-sm mb-4">
          <input className="p-2 w-full" value={user.email} />
        </div>
        <div className="flex flex-row justify-between">
          <button className="bg-[#FB7185] px-8 py-2 text-white rounded-sm">
            Save Changes
          </button>
          <button className="border-2 px-8 py-2">Logout</button>
        </div>
      </div>
    </div>
  )
}

export default Profile
