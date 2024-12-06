import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    // <div
    //   className="container"
    //   style={{
    //     backgroundColor: "#22282A",
    //     color: "white",
    //     padding: "50px",
    //     maxWidth: "100%",
    //   }}
    // >
    //   <div className="row" style={{ marginBottom: "20px", width: "100%" }}>
    //     <div className="col-md-4">
    //       <img
    //         src="../asset/logo.png"
    //         style={{ width: "163px", height: "44px", marginBottom: "20px" }}
    //         alt="Logo"
    //       />
    //       <p>&copy; 2023 Chill All Rights Reserved.</p>
    //     </div>

    //     <div className="col-md-1">
    //       <h4 className="text-lg font-weight-bold">Genre</h4>
    //       <ul style={{ listStyleType: "none", padding: 0 }}>
    //         <li>
    //           <a href="#" style={{ textDecoration: "none", color: "white" }}>
    //             Aksi
    //           </a>
    //         </li>
    //         <li>
    //           <a href="#" style={{ textDecoration: "none", color: "white" }}>
    //             Drama
    //           </a>
    //         </li>
    //         <li>
    //           <a href="#" style={{ textDecoration: "none", color: "white" }}>
    //             Komedi
    //           </a>
    //         </li>
    //         <li>
    //           <a href="#" style={{ textDecoration: "none", color: "white" }}>
    //             Romantis
    //           </a>
    //         </li>
    //       </ul>
    //     </div>
    //     <div className="col-md-2">
    //       <ul style={{ listStyleType: "none", padding: 0 }}>
    //         <li>
    //           <a href="#" style={{ textDecoration: "none", color: "white" }}>
    //             Aksi
    //           </a>
    //         </li>
    //         <li>
    //           <a href="#" style={{ textDecoration: "none", color: "white" }}>
    //             Drama
    //           </a>
    //         </li>
    //         <li>
    //           <a href="#" style={{ textDecoration: "none", color: "white" }}>
    //             Komedi
    //           </a>
    //         </li>
    //         <li>
    //           <a href="#" style={{ textDecoration: "none", color: "white" }}>
    //             Romantis
    //           </a>
    //         </li>
    //       </ul>
    //     </div>
    //     <div className="col-md-1">
    //       <ul style={{ listStyleType: "none", padding: 0 }}>
    //         <li>
    //           <a href="#" style={{ textDecoration: "none", color: "white" }}>
    //             Aksi
    //           </a>
    //         </li>
    //         <li>
    //           <a href="#" style={{ textDecoration: "none", color: "white" }}>
    //             Drama
    //           </a>
    //         </li>
    //         <li>
    //           <a href="#" style={{ textDecoration: "none", color: "white" }}>
    //             Komedi
    //           </a>
    //         </li>
    //         <li>
    //           <a href="#" style={{ textDecoration: "none", color: "white" }}>
    //             Romantis
    //           </a>
    //         </li>
    //       </ul>
    //     </div>
    //     <div className="col-md-2">
    //       <ul style={{ listStyleType: "none", padding: 0 }}>
    //         <li>
    //           <a href="#" style={{ textDecoration: "none", color: "white" }}>
    //             Aksi
    //           </a>
    //         </li>
    //         <li>
    //           <a href="#" style={{ textDecoration: "none", color: "white" }}>
    //             Drama
    //           </a>
    //         </li>
    //       </ul>
    //     </div>
    //     <div className="col-md-2">
    //       <h4 className="text-lg font-weight-bold">Bantuan</h4>
    //       <ul style={{ listStyleType: "none", padding: 0 }}>
    //         <li>
    //           <a href="#" style={{ textDecoration: "none", color: "white" }}>
    //             Pusat Bantuan
    //           </a>
    //         </li>
    //         <li>
    //           <a href="#" style={{ textDecoration: "none", color: "white" }}>
    //             Hubungi Kami
    //           </a>
    //         </li>
    //         <li>
    //           <a href="#" style={{ textDecoration: "none", color: "white" }}>
    //             Tentang Kami
    //           </a>
    //         </li>
    //         <li>
    //           <a href="#" style={{ textDecoration: "none", color: "white" }}>
    //             Syarat dan Ketentuan
    //           </a>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </div>
    <div>
      <div
        className="container"
        style={{
          backgroundColor: "#22282A",
          color: "white",
          padding: "50px",
          maxWidth: "100%",
        }}
      >
        <div
          className="row d-flex justify-content-between align-items-start"
          style={{ marginBottom: "20px", width: "100%" }}
        >
          <div className="col-md-4">
            <img
              src="../asset/logo.png"
              style={{ width: "163px", height: "44px", marginBottom: "20px" }}
              alt="Logo"
            />
            <p>&copy; 2023 Chill All Rights Reserved.</p>
          </div>

          <div className="col-md-1">
            <h4 className="text-lg font-weight-bold">Genre</h4>
            <ul style={{ listStyleType: "none", padding: 0 }}>
              <li>
                <a href="#" style={{ textDecoration: "none", color: "white" }}>
                  Aksi
                </a>
              </li>
              <li>
                <a href="#" style={{ textDecoration: "none", color: "white" }}>
                  Anak-anak
                </a>
              </li>
              <li>
                <a href="#" style={{ textDecoration: "none", color: "white" }}>
                  Anime
                </a>
              </li>
              <li>
                <a href="#" style={{ textDecoration: "none", color: "white" }}>
                  Britania
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-2">
            <h4
              className="text-lg font-weight-bold"
              style={{ color: "#22282A" }}
            >
              .
            </h4>
            <ul style={{ listStyleType: "none", padding: 0 }}>
              <li>
                <a href="#" style={{ textDecoration: "none", color: "white" }}>
                  Drama
                </a>
              </li>
              <li>
                <a href="#" style={{ textDecoration: "none", color: "white" }}>
                  Fantasi Ilmiah & Fantasi
                </a>
              </li>
              <li>
                <a href="#" style={{ textDecoration: "none", color: "white" }}>
                  Kejahatan
                </a>
              </li>
              <li>
                <a href="#" style={{ textDecoration: "none", color: "white" }}>
                  KDrama
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-1">
            <h4
              className="text-lg font-weight-bold"
              style={{ color: "#22282A" }}
            >
              .
            </h4>
            <ul style={{ listStyleType: "none", padding: 0 }}>
              <li>
                <a href="#" style={{ textDecoration: "none", color: "white" }}>
                  Komedi
                </a>
              </li>
              <li>
                <a href="#" style={{ textDecoration: "none", color: "white" }}>
                  Petualangan
                </a>
              </li>
              <li>
                <a href="#" style={{ textDecoration: "none", color: "white" }}>
                  Perang
                </a>
              </li>
              <li>
                <a href="#" style={{ textDecoration: "none", color: "white" }}>
                  Romantis
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-2">
            <h4
              className="text-lg font-weight-bold"
              style={{ color: "#22282A" }}
            >
              .
            </h4>
            <ul style={{ listStyleType: "none", padding: 0 }}>
              <li>
                <a href="#" style={{ textDecoration: "none", color: "white" }}>
                  Sains & Alam
                </a>
              </li>
              <li>
                <a href="#" style={{ textDecoration: "none", color: "white" }}>
                  Thriller
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-2">
            <h4 className="text-lg font-weight-bold">Bantuan</h4>
            <ul style={{ listStyleType: "none", padding: 0 }}>
              <li>
                <a href="#" style={{ textDecoration: "none", color: "white" }}>
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" style={{ textDecoration: "none", color: "white" }}>
                  Kontak Kami
                </a>
              </li>
              <li>
                <a href="#" style={{ textDecoration: "none", color: "white" }}>
                  Privasi
                </a>
              </li>
              <li>
                <a href="#" style={{ textDecoration: "none", color: "white" }}>
                  Syarat dan Ketentuan
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
