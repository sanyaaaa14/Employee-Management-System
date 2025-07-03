import { useState } from "react";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password); // ✅ Now it will call the function from App.jsx
    setEmail("");
    setPassword("");
    setRememberMe(false);
  };

  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <div className="border-none rounded-2xl pb-20 px-0 bg-neutral-800 w-[90%] max-w-md">
        {/* Header Section */}
        <div className="bg-gray-600 text-white rounded-t-2xl pt-5 pb-4 text-center">
          <h2 className="text-2xl font-semibold">Log In</h2>
        </div>

        {/* Login Form */}
        <form
           onSubmit={(e)=>{
            submitHandler(e)
        }}
          className="flex flex-col items-center justify-center px-7 mt-5"
        >
          {/* Email Input */}
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="outline-none bg-transparent border border-gray-600 font-medium text-lg py-2 mt-2 px-6 rounded-full w-full placeholder:text-gray-400 text-white"
            type="email"
            placeholder="Enter your Email"
          />

          {/* Password Input with Show/Hide Toggle */}
          <div className="relative w-full mt-3">
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="outline-none bg-transparent border border-gray-600 font-medium text-lg py-2 px-6 rounded-full w-full placeholder:text-gray-400 text-white pr-12"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your Password"
            />
            <button
              type="button"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "🙈" : "👁️"}
            </button>
          </div>

          {/* Remember Me Checkbox */}
          <div className="flex items-center justify-between w-full mt-4">
            <label className="flex items-center text-gray-400">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
                className="mr-2 accent-gray-600"
              />
              Remember Me
            </label>
            <a href="#" className="text-gray-600 hover:underline text-sm">
              Forgot Password?
            </a>
          </div>

          {/* Login Button */}
          <button
            
            className="mt-10 text-white outline-none hover:bg-gray-600 font-semibold border-none bg-gray-600 text-lg py-2 px-8 w-full rounded-full"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
