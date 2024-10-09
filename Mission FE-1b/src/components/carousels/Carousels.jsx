import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./Carousel.scss";

function Carousels() {
  return (
    <Carousel data-bs-theme="white">
      {/* First Slide */}
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../asset/duty.png"
          alt="Duty After School"
          style={{
            width: "100%",
            height: "525px",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              "linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0))",
          }}
        />
        <Carousel.Caption
          className="text-start"
          style={{ marginBottom: "100px" }}
        >
          <h1 style={{ fontWeight: 700 }}>Duty After School</h1>
          <p style={{ fontWeight: 400 }}>
            Sebuah benda tak dikenal mengambil alih dunia. Dalam keputusasaan,
            <br /> Departemen pertahanan mulai merekrut banyak tentara, termasuk
            siswa
            <br /> sekolah menengah. Mereka pun segera menjadi pejuang garis
            depan dalam perang.
          </p>
          <div className="carousel-btn">
            <a className=" btn btn-md btn-primary" href="#">
              Mulai
            </a>
            <a className="btn btn-md1 btn-secondary" href="#">
              <img
                src="../../../asset/Vector.png"
                alt="Icon"
                className="btn-icon"
              />
              Selengkapnya
            </a>

            <a className="btn btn-md2 btn-secondary" href="#">
              18+
            </a>
            <a className="btn btn-md3 btn-secondary" id="btn-mute" href="#">
              <img src="../asset/volume-off.png" alt="Mute" />
            </a>
          </div>
        </Carousel.Caption>
      </Carousel.Item>

      {/* Second Slide */}
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../asset/dino.png"
          alt="Duty After School"
          style={{
            width: "100%",
            height: "525px",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              "linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0))",
          }}
        />
        <Carousel.Caption
          className="text-start"
          style={{ marginBottom: "100px" }}
        >
          <h1 style={{ fontWeight: 700 }}>Jurasic World</h1>
          <p style={{ fontWeight: 400 }}>
            membahas lebih dalam ihwal konsep rekayasa genetika dinosaurus
            <br /> dan dampaknya terhadap umat manusia, kendati para
            <br />
            tokohnya berusaha menyempurnakan percobaan mereka.
          </p>
          <div className="carousel-btn">
            <a className=" btn btn-md btn-primary" href="#">
              Mulai
            </a>
            <a className="btn btn-md1 btn-secondary" href="#">
              <img
                src="../../../asset/Vector.png"
                alt="Icon"
                className="btn-icon"
              />
              Selengkapnya
            </a>

            <a className="btn btn-md2 btn-secondary" href="#">
              18+
            </a>
            <a className="btn btn-md3 btn-secondary" id="btn-mute" href="#">
              <img src="../asset/volume-off.png" alt="Mute" />
            </a>
          </div>
        </Carousel.Caption>
      </Carousel.Item>

      {/* Third Slide */}
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../asset/oto.png"
          alt="Duty After School"
          style={{
            width: "100%",
            height: "525px",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              "linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0))",
          }}
        />
        <Carousel.Caption
          className="text-start"
          style={{ marginBottom: "100px" }}
        >
          <h1 style={{ fontWeight: 700 }}>A Man Called Otto</h1>
          <p style={{ fontWeight: 400 }}>
            bercerita tentang seorang pria tua bernama Otto yang mengalami
            trauma
            <br /> dan sulit berdamai dengan kenyataan yang dihadapinya.
          </p>
          <div className="carousel-btn">
            <a className=" btn btn-md btn-primary" href="#">
              Mulai
            </a>
            <a className="btn btn-md1 btn-secondary" href="#">
              <img
                src="../../../asset/Vector.png"
                alt="Icon"
                className="btn-icon"
              />
              Selengkapnya
            </a>

            <a className="btn btn-md2 btn-secondary" href="#">
              18+
            </a>
            <a className="btn btn-md3 btn-secondary" href="#">
              <img src="../asset/volume-off.png" alt="Mute" />
            </a>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousels;
