import React, { useState } from "react";
import useUserStore from "../../store/userStore";
import { useNavigate } from "react-router-dom";
import "./Form.scss";

const Regisform = () => {
  const [name, setName] = useState("");

  const [password, setPassword] = useState("");
  const { registerUser, error } = useUserStore();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validasi input form
    if (!name || !password) {
      alert("Harap isi semua data sebelum mendaftar!");
      return;
    }

    registerUser({ name, password }).then(() => {
      setName("");
      setPassword("");
      navigate("/login");
    });
  };

  return (
    <div className="background">
      <div className="container d-flex justify-content-center align-items-center vh-100">
        <div className="row justify-content-center">
          <div className="col-md-12 d-flex justify-content-center">
            <div className="form login" style={{ height: "670px" }}>
              <div className="card-body">
                <div className="text-center header-login">
                  <img
                    src="../asset/Logo.png"
                    style={{ marginBottom: "37px" }}
                  />
                  <h2 style={{ fontWeight: "700" }}>Daftar</h2>
                  <p style={{ fontWeight: "400" }}>Selamat datang kembali!</p>
                </div>
                <div className="form-login">
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label htmlFor="username" className="form-label">
                        Username
                      </label>
                      <input
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                        className="form-control"
                        id="username"
                        placeholder="&emsp;Masukan username"
                        style={{
                          background: "#181a1c",
                          borderRadius: "24px",
                          width: "487px",
                          height: "47px",
                          color: "#C1C2C4",
                          fontWeight: "300",
                        }}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="Password" className="form-label">
                        Kata Sandi
                      </label>
                      <input
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        className="form-control eye-icon"
                        id="password"
                        placeholder="&emsp;Masukan kata sandi"
                        style={{
                          background: "#181a1c",
                          borderRadius: "24px",
                          width: "487px",
                          height: "47px",
                          color: "#C1C2C4",
                          fontWeight: "300",
                        }}
                      />
                    </div>

                    {/* Tampilkan pesan error jika ada */}
                    {error && <div className="mb-3 text-danger">{error}</div>}

                    <div className="text-center footer-login">
                      <div className="row">
                        <div
                          className="col-md-6 text-start icon-label"
                          style={{ fontSize: "16px", marginBottom: "25px" }}
                        >
                          <p style={{ fontWeight: "300" }}>
                            Sudah punya akun?{" "}
                            <a
                              href="#"
                              style={{
                                textDecoration: "none",
                                color: "#ffffff",
                                fontWeight: "500",
                              }}
                              onClick={() => navigate("/login")}
                            >
                              Masuk
                            </a>
                          </p>
                        </div>
                      </div>
                      <button
                        type="submit"
                        className=" w-100 btn-login"
                        style={{ marginBottom: "5px" }}
                      >
                        <p
                          style={{
                            fontWeight: "400",
                            color: "white",
                            marginTop: "10px",
                          }}
                        >
                          Daftar
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
                  <button type="submit" className=" w-100 login-google">
                    Daftar dengan google
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

export default Regisform;
