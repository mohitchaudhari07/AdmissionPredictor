
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const userData = {
      fullName: formData.get("fullName"),
      email: formData.get("email"),
      password: formData.get("password"),
    };

      try {
      const response = await axios.post("http://localhost:3000/api/auth/register", {
        fullName: userData.fullName,
        email: userData.email,
        password: userData.password         
      }, {
        withCredentials: true
      });
      console.log(response.data);
      navigate("/");
    } catch (error) {
      console.error("Registration error:", error);
    }
  };
  return (
    <div className="w-full h-screen bg-linear-to-br from-[#e6d3b3] via-[#d2b48c] to-[#a67c52] flex justify-center items-center">
      <div className="auth-container bg-[#e5cec1] p-12 rounded-lg shadow-md w-full max-w-md">
        <div className="auth-header mb-8  ">
          <h1 className="auth-title text-2xl mr-2">Create Account</h1>
          <p className="auth-sub text-md m-0">
            Sign up to continue to your account.
          </p>
        </div>
        <form className="flex flex-col gap-3 mt-3.5" onSubmit={handleSubmit}>
            <div>
            <label className="text-sm ">Full Name</label>
            <input
              className="w-full p-2 border border-orange-900 rounded-md"
              type="text"
              name="fullName"
              placeholder="Your full name"
            />
          </div>
          <div>
            <label className="text-sm ">Email</label>
            <input
              className="w-full p-2 border border-orange-900 rounded-md"
              type="email"
              name="email"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="text-sm ">Password</label>
            <input
              className="w-full p-2 border border-orange-900 rounded-md"
              type="password"
              name="password"
              placeholder="Your password"
            />
          </div>
          <button className="bg-[#EFBF04] transition-all ease-in-out  hover:bg-orange-300 hover:text-amber-50 text-yellow-900  py-2 px-4 rounded-full cursor-pointer">Sign up</button>
        </form>
        <p className="muted mt-1.5 text-sm">
          Already have an account? <Link to="/login">Sign in</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
