import NavBar from './Nav'
import { useEffect, useState } from 'react'
import axios from 'axios'
axios.defaults.withCredentials = true
import { useNavigate } from 'react-router-dom'

function Profile() {
  const [user, setUser] = useState({})
  const [picture, setPicture] = useState('')
  const navigate = useNavigate()

  const getData = async () => {
    try {
      const response = await axios.get('https://haiku-bnb.onrender.com/profile')
      if (response.data.error) {
        navigate('/')
      } else {
        setUser(response.data)
        setPicture(response.data.picture)
      }
    } catch (e) {
      alert(e.message)
    }
  }

  const modifyUser = async (e) => {
    e.preventDefault()
    const form = new FormData(e.target)
    const formObj = Object.fromEntries(form.entries())
    console.log(formObj)
    try {
      const { data } = await axios.patch(
        'https://haiku-bnb.onrender.com/profile',
        formObj
      )
      alert('changes done')
    } catch (e) {
      alert(e.message)
    }
  }

  const logout = async (e) => {
    e.preventDefault()
    try {
      const { data } = await axios.get('https://haiku-bnb.onrender.com/profile')
      console.log({ data })
      localStorage.removeItem('isLoggedIn')
      navigate('/')
    } catch (err) {
      alert(err.message)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className="container mx-auto px-32">
      <NavBar />
      <div className=" border-2 p-6">
        {/*Your profile */}
        <div className="py-4">
          <h2 className="font-bold text-lg">Your Profile</h2>
        </div>
        <form onSubmit={modifyUser}>
          {/*Image and url */}
          <div className="flex flex-row items-center">
            <div>
              {
                <img
                  src={picture}
                  alt="Profile pic"
                  className="rounded-full w-14 mr-4"
                />
              }
            </div>
            <div className="flex-auto border-2 rounded-sm my-4">
              <input
                type="text"
                name="picture"
                onChange={(e) => setPicture(e.target.value)}
                defaultValue={user.picture}
                className="p-2 w-full"
                placeholder="https://..."
              />
            </div>
          </div>
          {/* First Name*/}
          <label className="text-sm font-semibold text-gray-500">
            First Name
          </label>
          <div className="flex-auto border-2 rounded-sm mb-4">
            <input
              name="first_name"
              className="p-2 w-full"
              defaultValue={user.first_name}
            />
          </div>
          {/* Last Name*/}
          <label className="text-sm font-semibold text-gray-500">
            Last Name
          </label>
          <div className="flex-auto border-2 rounded-sm mb-4">
            <input
              name="last_name"
              className="p-2 w-full"
              defaultValue={user.last_name}
            />
          </div>
          {/* Email Name*/}
          <label className="text-sm font-semibold text-gray-500">Email</label>
          <div className="flex-auto border-2 rounded-sm mb-4">
            <input
              name="email"
              className="p-2 w-full"
              defaultValue={user.email}
            />
          </div>
          <div className="flex flex-row justify-between">
            <button className="bg-[#FB7185] px-8 py-2 text-white rounded-sm">
              Save Changes
            </button>
            <button onClick={logout} className="border-2 px-8 py-2">
              Logout
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Profile
