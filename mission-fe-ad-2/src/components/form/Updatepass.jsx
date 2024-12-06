import React, { useState } from "react";
import useUserStore from "../../store/userStore";
import { useNavigate } from "react-router-dom";
import "./Form.scss";

const UpdatePassword = () => {
  const { currentUser, updatePassword, error } = useUserStore();
  const [name, setName] = useState(currentUser?.name || "");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const navigate = useNavigate();

  const handleNameChange = (e) => setName(e.target.value);
  const handleOldPasswordChange = (e) => setOldPassword(e.target.value);
  const handleNewPasswordChange = (e) => setNewPassword(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !oldPassword || !newPassword) {
      alert("Harap isi semua data!");
      return;
    }

    updatePassword({ id: currentUser.id, oldPassword, newPassword }).then(
      () => {
        setOldPassword("");
        setNewPassword("");
        navigate("/login");
      }
    );
  };

  return (
    <div className="background">
      <div className="container d-flex justify-content-center align-items-center vh-100">
        <div className="row justify-content-center">
          <div className="col-md-12 d-flex justify-content-center">
            <div className="form login" style={{ height: "630px" }}>
              <div className="card-body">
                <div className="text-center header-login">
                  <img
                    src="../asset/Logo.png"
                    style={{ marginBottom: "37px" }}
                    alt="Logo"
                  />
                  <h2 style={{ fontWeight: "700" }}>Lupa Password?</h2>
                </div>
                <br />
                <div className="form-login">
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">
                        Nama Pengguna
                      </label>

                      <input
                        name="name"
                        value={name}
                        onChange={handleNameChange}
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
                      <label htmlFor="oldPassword" className="form-label">
                        Password Lama
                      </label>

                      <input
                        name="oldPassword"
                        value={oldPassword}
                        onChange={handleOldPasswordChange}
                        type="password"
                        className="form-control w-100"
                        id="username"
                        placeholder="&emsp;Masukan password lama"
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
                      <label htmlFor="newPassword" className="form-label">
                        Kata Sandi Baru
                      </label>

                      <input
                        name="newPassword"
                        type="password"
                        value={newPassword}
                        onChange={handleNewPasswordChange}
                        className="form-control w-100"
                        id="password"
                        placeholder="&emsp;Masukan password baru"
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
                    {error && <p style={{ color: "red" }}>{error}</p>}
                    <div className="text-center footer-login">
                      <div className="row">
                        <div
                          className="col-md-7 text-start icon-label"
                          style={{ fontSize: "16px", marginBottom: "15px" }}
                        >
                          <p style={{ fontWeight: "300" }}>
                            Password sudah diperbaharui?{" "}
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
                        className="w-100 btn-login"
                        style={{ marginBottom: "5px" }}
                      >
                        <p
                          style={{
                            fontWeight: "400",
                            color: "white",
                            marginTop: "10px",
                          }}
                        >
                          Kirim
                        </p>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdatePassword;
