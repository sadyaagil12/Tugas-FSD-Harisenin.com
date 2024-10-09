/* eslint-disable react/react-in-jsx-scope */
import React from "react";
import { useNavigate } from "react-router-dom";
import "../form/Form.scss";
const Login = () => {
  const navigate = useNavigate();
  return (
    <div style={{ backgroundImage: "url('../asset/bg.jpg')" }}>
      <div className="container d-flex justify-content-center align-items-center vh-100">
        <div className="row justify-content-center">
          <div className="col-md-12 d-flex justify-content-center">
            <div className="form login">
              <div className="card-body">
                <div className="header-login text-center">
                  <img
                    src="../asset/Logo.png"
                    style={{ marginBottom: "37px" }}
                  />
                  <h2 style={{ fontWeight: "700" }}>Masuk</h2>
                  <p style={{ fontWeight: "400" }}>Selamat datang kembali!</p>
                </div>
                <div className="form-login">
                  <form>
                    <div className="mb-3">
                      <label htmlFor="username" className="form-label">
                        Username
                      </label>
                      <input
                        type="text"
                        className=" w-100 form-control"
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
                      <label htmlFor="Password" className="form-label">
                        Password
                      </label>
                      <input
                        type="text"
                        className="w-100 form-control eye-icon"
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

                    <div className="footer-login text-center">
                      <div className="row align-items-center ">
                        <div className="col-md-6 col-12 mb-3 mb-md-0">
                          <p style={{ fontWeight: "300", marginBottom: "0" }}>
                            Belum punya akun?{" "}
                            <a
                              href="#"
                              style={{
                                textDecoration: "none",
                                color: "#ffffff",
                                fontWeight: "500",
                              }}
                            >
                              Daftar
                            </a>
                          </p>
                        </div>
                        <div className="col-md-6 col-12 text-md-end text-start">
                          <a
                            href="#"
                            style={{ textDecoration: "none", color: "#ffffff" }}
                          >
                            Lupa kata sandi?
                          </a>
                        </div>
                      </div>

                      <button
                        onClick={() => navigate("/home")}
                        type="submit"
                        className=" w-100 btn-login"
                        style={{ marginBottom: "5px", marginTop: "30px" }}
                      >
                        {" "}
                        <p
                          style={{
                            fontWeight: "400",
                            color: "white",
                            marginBottom: "5px",
                          }}
                        >
                          Masuk
                        </p>
                      </button>
                    </div>
                  </form>
                  <p
                    className="text-center"
                    style={{ fontWeight: "300", marginTop: "5px" }}
                  >
                    Atau
                  </p>
                  <button type="submit" className="w-100 login-google">
                    Masuk dengan google
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
