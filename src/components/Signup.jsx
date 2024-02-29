function Signup() {
  return (
    <div className="container mx-auto">
      <div className="flex justify-center">
        <div className="flex flex-col justify-center border-2 p-5 rounded-md w-80 mt-8">
          <form className="grid">
            {/* Logo */}
            <div className="flex justify-center py-4">
              <img
                src="https://res.cloudinary.com/dsko6ntfj/image/upload/v1642399114/portal/web%20development%20beginners/05%20Project%20Airbnb/assets/logo-airbnb.png
"
                alt="logo"
                className="w-20"
              />
            </div>
            <label
              type="text"
              className="flex-auto text-xs font-semibold text-gray-600 pr-2"
            >
              First Name
            </label>
            <input type="text" className="border-2 rounded-sm p-2 mb-2" />
            <label className="text-xs font-semibold text-gray-600 pr-2">
              Last Name
            </label>
            <input type="text" className="border-2 rounded-sm p-2 mb-2" />
            <label className="block text-xs font-semibold text-gray-600 pr-2">
              Email
            </label>
            <input type="text" className="border-2 rounded-sm p-2 mb-2" />
            <label className="block text-xs font-semibold text-gray-600 pr-2">
              Password
            </label>
            <input type="password" className="border-2 rounded-sm p-2 mb-2" />
            <label className="text-xs font-semibold text-gray-600 pr-2">
              Profile Picture
            </label>
            <input
              type="link"
              placeholder="https://.."
              className="border-2 rounded-sm p-2 mb-2"
            />
            <button className="bg-[#FB7185] text-white py-3 rounded-sm mb-4">
              Register
            </button>
          </form>
          <p className="text-xs font-semibold">
            Already have an account?
            <a href="/login" className="text-[#FB7185] underline pl-2">
              Login here
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Signup
