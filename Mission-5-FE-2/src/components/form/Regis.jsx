import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Form.scss";

const Regisform = () => {
  const [input, setInput] = useState({
    name: "",
    password: "",
  });

  const [error, setError] = useState(""); // Untuk menampilkan pesan kesalahan

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Cek apakah pengguna sudah ada di localStorage berdasarkan nama pengguna
    if (localStorage.getItem(`user_${input.name}`)) {
      setError("Nama pengguna sudah dipakai, silakan pilih nama lain.");
      return;
    }

    // Simpan pengguna baru di localStorage dengan nama pengguna sebagai kunci unik
    localStorage.setItem(`user_${input.name}`, JSON.stringify(input));

    // Clear the input fields after saving
    setInput({
      name: "",
      password: "",
    });

    // Reset error message
    setError("");

    console.log("Data pengguna disimpan:", `user_${input.name}`);

    // Arahkan ke halaman login setelah pendaftaran berhasil
    navigate("/login");
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
                        value={input.name}
                        onChange={handleInputChange}
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
                        value={input.password}
                        onChange={handleInputChange}
                        type="password"
                        className="form-control eye-icon"
                        id="username"
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
