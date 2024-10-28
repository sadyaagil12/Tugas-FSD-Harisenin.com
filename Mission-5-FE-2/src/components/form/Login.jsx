import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../form/Form.scss";

const Login = () => {
  const [input, setInput] = useState({
    name: "",
    password: "",
  });

  const [error, setError] = useState(""); // Menyimpan pesan error jika ada

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const storedUser = localStorage.getItem(`user_${input.name}`);

    if (storedUser) {
      const user = JSON.parse(storedUser);
      if (user.password === input.password) {
        setError("");
        alert("Login berhasil!");
        // Simpan nama pengguna yang sedang login
        localStorage.setItem("currentUser", input.name);
        navigate("/home");
      } else {
        setError("Kata sandi salah!");
      }
    } else {
      setError("Pengguna tidak ditemukan!");
    }
  };
  return (
    <div style={{ backgroundImage: "url('../asset/bg.jpg')" }}>
      <div className="container d-flex justify-content-center align-items-center vh-100">
        <div className="row justify-content-center">
          <div className="col-md-12 d-flex justify-content-center">
            <div className="form login">
              <div className="card-body">
                <div className="text-center header-login">
                  <img
                    src="../asset/Logo.png"
                    style={{ marginBottom: "37px" }}
                    alt="Logo"
                  />
                  <h2 style={{ fontWeight: "700" }}>Masuk</h2>
                  <p style={{ fontWeight: "400" }}>Selamat datang kembali!</p>
                </div>
                <div className="form-login">
                  <form onSubmit={handleLogin}>
                    <div className="mb-3">
                      <label htmlFor="username" className="form-label ">
                        Username
                      </label>
                      <input
                        name="name"
                        value={input.name}
                        onChange={handleInputChange}
                        type="text"
                        className="form-control w-100"
                        id="username"
                        placeholder="&emsp;Masukan username"
                        style={{
                          background: "#181a1c",
                          borderRadius: "24px",
                          width: "449px",
                          height: "47px",
                          color: "#C1C2C4",
                          fontWeight: "300",
                        }}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="password" className="form-label">
                        Password
                      </label>
                      <input
                        name="password"
                        value={input.password}
                        onChange={handleInputChange}
                        type="password"
                        className="form-control eye-icon w-100"
                        id="password"
                        placeholder="&emsp;Masukan kata sandi"
                        style={{
                          background: "#181a1c",
                          borderRadius: "24px",
                          width: "449px",
                          height: "47px",
                          color: "#C1C2C4",
                          fontWeight: "300",
                        }}
                      />
                    </div>

                    {/* Tampilkan pesan error jika ada */}
                    {error && <div className="mb-3 text-danger">{error}</div>}

                    <div className="text-center footer-login">
                      <div className="row align-items-center ">
                        <div className="mb-3 col-md-6 col-12 mb-md-0">
                          <p
                            style={{ fontWeight: "300", marginBottom: "0" }}
                            className="text-start"
                          >
                            Belum punya akun?{" "}
                            <a
                              href="#"
                              style={{
                                textDecoration: "none",
                                color: "#ffffff",
                                fontWeight: "500",
                              }}
                              onClick={() => navigate("/regis")}
                            >
                              Daftar
                            </a>
                          </p>
                        </div>
                        <div className="col-md-6 col-12 text-md-end">
                          <a
                            href="#"
                            style={{ textDecoration: "none", color: "#ffffff" }}
                            onClick={() => navigate("/update")}
                          >
                            Lupa kata sandi?
                          </a>
                        </div>
                      </div>
                      <button
                        type="submit"
                        className="w-100 btn-login"
                        style={{ marginBottom: "5px", marginTop: "30px" }}
                      >
                        Masuk
                      </button>
                    </div>
                  </form>
                  <p className="text-center" style={{ fontWeight: "300" }}>
                    Atau
                  </p>
                  <button type="button" className="w-100 login-google">
                    Masuk dengan Google
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
