import { useState } from "react";
import "../../App.css";
import { useNavigate } from "react-router-dom";
import cotraLogo from "../../assets/Costra.png";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isAgreed, setIsAgreed] = useState(false);
  const navigate = useNavigate();
  const [modalMsg, setModalMsg] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [alert, setAlert] = useState("");

  const isNameValid = name.length >= 3;
  const isPhoneNumber = /^(08|62)\d{8,11}$/.test(phone_number);
  const isEmailValid = email.includes("@") && email.includes(".");
  const isPasswordValid = password.length >= 8;
  const passwordMatch = password === confirmPassword;
  const isAgreedValid = isAgreed;
  const canRegisterValid =
    isNameValid &&
    isPhoneNumber &&
    isEmailValid &&
    isPasswordValid &&
    passwordMatch &&
    isAgreedValid;

  const handleCloseModal = () => {
    setShowModal(false);

    // Redirect only when registration is successful.
    if (alert === "REGISTER SUCCESS") {
      navigate("/login");
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("http://localhost:3000/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, username, phone_number, password }),
      });

      const data = await response.json();
      if (response.ok) {
        setAlert("REGISTER SUCCESS");
        setShowModal(true);
        setModalMsg(
          "Your account has been created successfully. Please log in.",
        );
      } else {
        setAlert("REGISTER FAIL");
        setModalMsg(`${data.message}`);
        setShowModal(true);
      }
    } catch (error) {
      setAlert("REGISTER FAIL");
      console.error("Connection Error:", error);
      setModalMsg("Connection error");
      setShowModal(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-white via-slate-50 to-blue-50">
      <div className="border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="max-w-368 mx-auto px-5 sm:px-8 lg:px-10 h-18 flex items-center justify-between">
          <button className="flex items-center" onClick={() => navigate("/")}>
            <img src={cotraLogo} alt="COSTRA" className="h-10 w-auto" />
          </button>
          <div className="flex items-center gap-2">
            <button
              className="btn btn-ghost btn-sm text-slate-700"
              onClick={() => navigate("/login")}
            >
              Login
            </button>
            <button
              className="btn btn-outline btn-sm border-slate-300 text-slate-700"
              onClick={() => navigate("/")}
            >
              Back to Home
            </button>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center min-h-[90vh] p-5 sm:p-8">
        <div className="card w-full max-w-2xl bg-white border border-slate-200 shadow-sm rounded-2xl">
          <div className="card-body">
            <h2 className="card-title text-3xl font-bold justify-center mb-6">
              Register
            </h2>

            <form onSubmit={handleRegister}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Nama Lengkap */}
                <div className="form-control md:col-span-2">
                  <label className="label">
                    <span className="label-text font-semibold">Full Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Full name"
                    className="input input-bordered w-full"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  {!isNameValid && name.length > 0 && (
                    <p className="text-xs text-red-500">
                      Please enter a valid name
                    </p>
                  )}
                </div>

                {/* Username */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">Username</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Username"
                    className="input input-bordered w-full"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>

                {/* Phone */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">
                      Phone Number
                    </span>
                  </label>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="input input-bordered w-full"
                    value={phone_number}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                  {!isPhoneNumber && phone_number.length > 0 && (
                    <p className="text-xs text-red-500">
                      Please enter a valid phone number
                    </p>
                  )}
                </div>

                {/* Email */}
                <div className="form-control md:col-span-2">
                  <label className="label">
                    <span className="label-text font-semibold">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Email"
                    className="input input-bordered w-full"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {!isEmailValid && email.length > 0 && (
                    <p className="text-xs text-red-500">
                      Please enter a valid email
                    </p>
                  )}
                </div>

                {/* Password */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="At Least 8 Character"
                    className="input input-bordered w-full"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  {!isPasswordValid && password.length == 0 && (
                    <p className="label-text-alt text-gray-500">
                      {" "}
                      Use a combination of letters and Symbols
                    </p>
                  )}
                  {!isPasswordValid && password.length > 0 && (
                    <p className="label-text-alt text-red-500">
                      {" "}
                      Password must be at least 8 characters long
                    </p>
                  )}
                </div>

                {/* Confirm Password */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">
                      Confirm Password
                    </span>
                  </label>
                  <input
                    type="password"
                    value={confirmPassword}
                    placeholder="Re-enter password"
                    className="input input-bordered w-full"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                  {!passwordMatch && confirmPassword.length > 0 && (
                    <p className="label-text-alt text-red-500">
                      Passwords do not match
                    </p>
                  )}
                </div>
              </div>

              {/* Terms and Conditions */}
              <div className="form-control mt-6">
                <label className="label cursor-pointer justify-start gap-3">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-primary"
                    checked={isAgreed}
                    onChange={(e) => setIsAgreed(e.target.checked)}
                  />

                  <span className="label-text">
                    I agree to the{" "}
                    <a className="link link-primary">
                      Terms and Conditions
                    </a>{" "}
                  </span>
                </label>
              </div>

              {/* Register Button */}
              <div className="form-control mt-6">
                <button
                  disabled={!canRegisterValid || isLoading}
                  type="submit"
                  className="btn btn-primary w-full"
                >
                  {isLoading ? (
                    <>
                      <span className="loading loading-spinner"></span>
                    </>
                  ) : (
                    "Register"
                  )}
                </button>
              </div>
            </form>

            {/* Divider */}
            <div className="divider">OR</div>

            {/* Social Register Buttons */}
            <div className="space-y-3">
              <button className="btn btn-outline w-full">
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="currentColor"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                Sign up with Google
              </button>
              <button className="btn btn-outline w-full">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                Sign up with GitHub
              </button>
            </div>

            {/* Login Link */}
            <div className="text-center mt-6">
              <p className="text-sm">
                Already have an account?{" "}
                <a
                  onClick={() => navigate("/login")}
                  className="link link-primary font-semibold"
                >
                  Log in here
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={`modal ${showModal ? "modal-open" : ""}`}>
        <div className="modal-box">
          <h3 className="font-bold text-lg ">{alert}</h3>
          <p className="py-4">{modalMsg}</p>
          <div className="modal-action">
            <button className="btn btn-primary" onClick={handleCloseModal}>
              Login
            </button>
          </div>
        </div>
        <div className="modal-backdrop" onClick={handleCloseModal}></div>
      </div>
    </div>
  );
}

export default Register;
