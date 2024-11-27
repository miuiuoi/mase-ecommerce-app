
import logo from '../Components/Assets/logo.png';
import {

  VisibilityOffOutlined,
  VisibilityOutlined,
} from '@mui/icons-material';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 ">
      <div className=" rounded-md bg-white p-8 shadow-md">
        <div className="mb-4 flex justify-center">
          <img src={logo} alt="logo" className="h-16" />{' '}
          {/* Thay đổi kích thước logo nếu cần */}
        </div>

        <h1 className="mb-4 text-center text-2xl font-semibold">Registration Form</h1>

        <form>
          <div className='flex space-x-2'>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-bold text-gray-700"
              >
                Full Name
              </label>
              <input
                type="text"
                placeholder="First Name"
                id="fullname"
                className="focus:shadow-outline w-full appearance-none border px-2 py-3 leading-tight shadow focus:outline-none"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-bold text-gray-700"
              >
                .
              </label>
              <input
                type="text"
                placeholder="Last Name"
                id="fullname"
                className="focus:shadow-outline w-full appearance-none border px-2 py-3 leading-tight shadow focus:outline-none"
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-bold text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              placeholder="email@gmail.com"
              id="email"
              className="focus:shadow-outline w-full appearance-none border px-2 py-3 leading-tight shadow focus:outline-none"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-bold text-gray-700"
            >
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                placeholder="••••••••••••"
                className="focus:shadow-outline w-full appearance-none border px-2 py-3 leading-tight shadow focus:outline-none"
                required
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500"
              >
                {showPassword ? (
                  <VisibilityOffOutlined />
                ) : (
                  <VisibilityOutlined />
                )}
              </button>
            </div>
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-bold text-gray-700"
            >
              Repeat Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                placeholder="••••••••••••"
                className="focus:shadow-outline w-full appearance-none border px-2 py-3 leading-tight shadow focus:outline-none"
                required
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500"
              >
                {showPassword ? (
                  <VisibilityOffOutlined />
                ) : (
                  <VisibilityOutlined />
                )}
              </button>
            </div>
          </div>

          <div className='flex space-x-1 mb-4'>
            <input type="checkbox" />
            <p>I agree to <span className='text-red-600'>terms and conditions.</span></p>
         </div>


          <div className="mb-2 flex items-center justify-center">
            <button
              type="submit"
              className="focus:shadow-outline w-full rounded-md bg-orange-600 py-2 text-white hover:bg-orange-500 focus:outline-none"
            >
              Register Now
            </button>
          </div>

         
          <div className="flex items-center justify-center">
            <p className="text-sm text-gray-500">
              Have an account already? 
              <a href="#" className="text-sm text-blue-500 hover:text-blue-700">
                <Link to="/login">Login</Link>
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
