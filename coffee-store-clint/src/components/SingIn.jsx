import React from "react";

const SingIn = () => {
  return (
    <div>
      <div className="font-sans">
        <div className="relative min-h-screen flex flex-col sm:justify-center items-center bg-gray-100">
          <div className="relative   sm:max-w-sm w-full">
            <div className="card  bg-blue-400 shadow-lg w-full h-full rounded-3xl absolute transform -rotate-6"></div>
            <div className="card  bg-red-400 shadow-lg w-full h-full rounded-3xl absolute transform rotate-6"></div>
            <div className="relative  w-full rounded-3xl px-6 py-4 bg-gray-100 shadow-md">
              <label
                htmlFor=""
                className="block font-bold mt-3 text-2xl text-gray-700 text-center"
              >
                Sing In
              </label>
              <form method="#" action="#" className="mt-10">
                <div>
                  <input
                    type="email"
                    required
                    placeholder="Email Address"
                    className="mt-1 px-3 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                  />
                </div>

                <div className="mt-7">
                  <input
                    required
                    type="password"
                    placeholder="Password"
                    className="mt-1 px-3 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                  />
                </div>

                <div className="mt-7 flex">
                  <label
                    htmlFor="remember_me"
                    className="inline-flex items-center w-full cursor-pointer"
                  >
                    <input
                      id="remember_me"
                      type="checkbox"
                      className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                      name="remember"
                    />
                    <span className="ml-2 text-sm text-gray-600">
                      Remember me
                    </span>
                  </label>

                  <div className="w-full text-right">
                    <a
                      className="underline text-sm text-gray-600 hover:text-gray-900"
                      href="#"
                    >
                      Forgot password?
                    </a>
                  </div>
                </div>

                <div className="mt-7">
                  <button
                    type="submit"
                    className="bg-blue-500 w-full py-3 rounded-xl duration-500 text-white shadow-xl font-bold  
                    hover:bg-blue-600 hover:shadow-lg focus:outline-none transition  ease-in-out  "
                  >
                    Login
                  </button>
                </div>

                <div className="flex mt-7 items-center text-center">
                  <hr className="border-gray-300 border-1 w-full rounded-md" />
                  <label className="block font-medium text-sm text-gray-600 w-full">
                    Sign in with
                  </label>
                  <hr className="border-gray-300 border-1 w-full rounded-md" />
                </div>

                <div className="flex mt-7 justify-center w-full">
                  <button
                    className="mr-5 bg-blue-500 border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105"
                    type="button"
                  >
                    Facebook
                  </button>

                  <button
                    className="bg-red-500 border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105"
                    type="button"
                  >
                    Google
                  </button>
                </div>

                <div className="mt-7">
                  <div className="flex justify-center items-center">
                    <label className="mr-2">New here?</label>
                    <a
                      href="#"
                      className="text-blue-500 transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105"
                    >
                      Create an account
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingIn;
