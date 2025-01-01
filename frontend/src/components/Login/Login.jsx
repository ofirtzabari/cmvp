import { React, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import styles from "../../styles/styles.js";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post(process.env.REACT_APP_SERVER_URL + "/user/login-user", {
      email,
      password,
    }, {withCredentials: true}).then((res) => {
      toast.success("Login successfully");
      navigate("/");
    }).catch((err) => {
      toast.error(err);
    });
      ;
  };

  return (
    <div className="min-h-screeen flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="w-6/12 sm:mx-auto sm:wi-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
          Login your account
        </h2>
        <div className=" mt-8 sm:mx-auto sm:w-full sm:max-w-lg">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email adress
                </label>
                <div className="mt-1">
                  <input
                    type="email"
                    name="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="appearance-none block px-3 py-2 w-full border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <div className="mt-1 relative">
                  <input
                    type={visible ? "text" : "password"}
                    name="password"
                    autoComplete="current-password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="appearance-none block px-3 py-2 w-full border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                  {visible ? (
                    <AiOutlineEye
                      className="absolute right-3 top-2 text-gray-400"
                      size={25}
                      onClick={() => setVisible(!visible)}
                    />
                  ) : (
                    <AiOutlineEyeInvisible
                      className="absolute right-3 top-2 text-gray-400"
                      size={25}
                      onClick={() => setVisible(!visible)}
                    />
                  )}
                </div>
              </div>
              <div className={styles.normalFlex + " justify-between"}>
                <div className={styles.normalFlex}>
                  <input
                    id="remember_me"
                    name="remember_me"
                    type="checkbox"
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="remember_me"
                    className="ml-2 block text-sm text-gray-900"
                  >
                    Remember me
                  </label>
                </div>
                <div className="text-sm">
                  <a
                    href=".forgot-password"
                    className="flex font-medium text-purple-500 hover:text-purple-400"
                  >
                    Forgot your password?
                  </a>
                </div>
              </div>
              <button
                typeof="submit"
                className="group relative w-full h-[40px] flex justify-center py-2 px-4 border border-transparent text-sm font-semibold rounded-md text-black bg-purple-400 hover:bg-purple-300"
              >
                submit
              </button>
              <div className={styles.normalFlex + "w-full"}>
                <h4>Not have any account? </h4>
                <Link to="/sign-up" className="text-purple-500  hover:text-purple-400">
                Sign Up</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
