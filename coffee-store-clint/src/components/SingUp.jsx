import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import Swal from "sweetalert2";

const SingUp = () => {
  const { createUser } = useContext(AuthContext);
  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newUser = Object.fromEntries(formData.entries());
    const { email, password, ...userProflie } = newUser;

    console.log(userProflie);

    console.log(email, password);

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        // send user to Database save

        fetch("http://localhost:3000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(newUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(" after post ", data);
            if (data.insertedId) {
              Swal.fire({
                position: "center",
                title: "User created successfully! ",
                icon: "success",
                showConfirmButton: false,
                timer: 1000,
              });
            }
          });
      })
      .catch((error) => {
        console.error(error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      });
  };

  return (
    <div>
      <div className="flex flex-col justify-center sm:h-screen p-4">
        <div className="max-w-md w-full mx-auto border border-slate-300 rounded-2xl p-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-semibold text-slate-800">Sing Up</h1>
            <p>Please fill in the form to create an account</p>
          </div>

          <form onSubmit={handleSignUp}>
            <div className="space-y-6">
              <div>
                {/* Email Field */}

                <label
                  htmlFor="email"
                  className="text-slate-800 text-sm font-medium mb-2 block"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="text-slate-800 bg-white border border-slate-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                  placeholder="Enter email"
                />
              </div>

              {/* Phone Field */}

              <label
                htmlFor="phone"
                className="text-slate-800 text-sm font-medium mb-2 block"
              >
                Phone
              </label>
              <input
                id="phone"
                name="phone"
                type="text"
                required
                className="text-slate-800 bg-white border border-slate-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                placeholder="Enter Your Phone Number"
              />
              {/* Photo Field */}

              <label
                htmlFor="photoURL"
                className="text-slate-800 text-sm font-medium mb-2 block"
              >
                Photo URL
              </label>
              <input
                id="photoURL"
                name="photoURL"
                type="text"
                required
                className="text-slate-800 bg-white border border-slate-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                placeholder="Enter Your Photo URL"
              />

              {/* Password Field */}
              <div>
                <label
                  htmlFor="password"
                  className="text-slate-800 text-sm font-medium mb-2 block"
                >
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="text-slate-800 bg-white border border-slate-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                  placeholder="Enter password"
                />
              </div>

              {/* Terms Checkbox */}
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  required
                  className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-slate-300 rounded"
                />
                <label
                  htmlFor="remember-me"
                  className="text-slate-800 ml-3 block text-sm"
                >
                  I accept the{" "}
                  <a
                    href="#"
                    className="text-blue-600 font-medium hover:underline ml-1"
                  >
                    Terms and Conditions
                  </a>
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-12">
              <button
                type="submit"
                className="w-full py-3 px-4 text-sm tracking-wider font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none cursor-pointer"
              >
                Create an account
              </button>
            </div>

            {/* Login Link */}
            <p className="text-slate-800 text-sm mt-6 text-center">
              Already have an account?{" "}
              <a
                href="#"
                className="text-blue-600 font-medium hover:underline ml-1"
              >
                Login here
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SingUp;
