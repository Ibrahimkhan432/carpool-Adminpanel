import axios from 'axios';
import React from 'react'
import { AppRoutes } from '../constant/Constant';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const handleSignin = async (e) => {
    e.preventDefault()
    try {
      const obj = {
        email: e.target.email.value,
        password: e.target.password.value,
      }
      const res = await axios.post(AppRoutes.login, obj)
      const token = res.data.data.token
      console.log(token);

      navigate("/dashboard")
      Cookies.set("token", token, { expires: 7 })
      console.log(res)
    } catch (error) {
      alert(error.message)
      console.log(error.message)

    }
    if (Cookies.get("token")) {
      navigate("/dashboard")
    } else {
      navigate("/login")
    }
  }
  return (
    <div className="min-h-screen md:flex ">
      {/* Left div*/}
      <div className="w-1/2">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3570.192461587345!2d67.08377080198129!3d24.862807256220304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f0076d4b085%3A0x96a47cbe863a5833!2sZaitoon%20Ashraf%20IT%20Park%20by%20Saylani!5e0!3m2!1sen!2s!4v1739973482502!5m2!1sen!2s"
          className="w-full h-screen border-none opacity-75"
          loading="eager"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      {/* map */}
      <div className="w-1/2 bg-white flex flex-col justify-center items-center">
        <div className='w-80 mb-10'>
          <img src="src\assets\dashboardLogo.jpg" alt="" srcset="" />
          <h1 className='text-center font-bold md:text-4xl mt-2 text-green-600'>Car Pooling</h1>
        </div>
        <div className="w-[60%] space-y-2">
          <h1 className="text-3xl font-semibold leading-tight tracking-tight text-green-600 md:text-2xl text-center">
            Sign in to your account
          </h1>
          <form onSubmit={handleSignin} className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-green-600"
              >
                Your email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-3"
                placeholder="name@gmail.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-green-600"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-3"
                required
              />
            </div>
            <button
              type="submit"
              className="p-3 w-full rounded-2xl bg-green-600 text-white text-center"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
      
    </div>


  )
}

export default Login