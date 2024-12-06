/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Cardmovie.scss";

function Cardmovie() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };

  const cardmovie = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
    ],
  };

  return (
    <>
      <div className="slider-container">
        {/* row1 */}
        <h2>Melanjutkan Tontonan Film </h2>
        <Slider {...settings}>
          {/* pic 1 */}
          <div className="box">
            <img src="../../asset/allofdead.png" className="w-100 img" />
            <div className="gradient" />
            <div className="cardtitle">
              &emsp;All of us dead{" "}
              <img src="../asset/star.png" className="title" />{" "}
              <div style={{ marginRight: "10px" }}>4.1/5</div>
            </div>
          </div>
          {/* pic 2 */}
          <div className="box">
            <img src="../asset/dntup.png" className="w-100 img" />
            <div className="gradient" />
            <div className="cardtitle">
              &emsp;Don't Look Up{" "}
              <img src="../asset/star.png" className="title" />{" "}
              <div style={{ marginRight: "10px" }}>4.2/5</div>
            </div>
          </div>
          {/* pic 3 */}
          <div className="box">
            <img src="../asset/blu.png" className="w-100 img" />
            <div className="gradient" />
            <div className="cardtitle">
              &emsp;Blue Lock <img src="../asset/star.png" className="title" />{" "}
              <div style={{ marginRight: "10px" }}>4.3/5</div>
            </div>
          </div>
          {/* pic 4 */}
          <div className="box">
            <img src="../asset/oto.png" className="w-100 img" />
            <div className="gradient" />
            <div className="cardtitle">
              &emsp;A Man Called Otto{" "}
              <img src="../asset/star.png" className="title" />{" "}
              <div style={{ marginRight: "10px" }}>4.8/5</div>
            </div>
          </div>
        </Slider>
        <div className="row">
          {/* row2 */}

          <h2 style={{ marginTop: "40px" }}>Film Baru</h2>
          <Slider {...cardmovie}>
            {/* pic1 */}
            <div className="boxs">
              <div style={{ position: "relative" }}>
                <img src="../asset/suzu.png" className=" cardtrend" />
                <h6 className="card-title pin">
                  <span className="badge text-bg-primary">Episode Baru</span>
                </h6>
              </div>
            </div>
            {/* pic2 */}
            <div className="boxs">
              <img src="../asset/dino.png" className="cardtrend" />
            </div>
            {/* pic3 */}
            <div className="boxs">
              <img src="../asset/duyungitem.png" className=" cardtrend" />
            </div>
            {/* pic4 */}
            <div className="boxs">
              <div style={{ position: "relative" }}>
                <img src="../asset/sonic.png" className=" cardtrend" />
                <h6 className="card-title pin">
                  <span className="badge text-bg-primary">Episode Baru</span>
                </h6>
              </div>
            </div>
            {/* pic5 */}
            <div className="boxs">
              <img src="../asset/big6.png" className=" cardtrend" />
            </div>
            {/* pic6 */}
            <div className="boxs">
              <div style={{ position: "relative" }}>
                <img src="../asset/missing.png" className=" cardtrend" />
                <h6 className="card-title pin">
                  <span className="badge text-bg-primary">Episode Baru</span>
                </h6>
              </div>
            </div>
          </Slider>
        </div>
        <div className="row">
          {/* row3 */}

          <h2 style={{ marginTop: "40px" }}>Film Trending</h2>
          <Slider {...cardmovie}>
            {/* pic1 */}
            <div className="boxs">
              <div style={{ position: "relative" }}>
                <img src="../asset/war.png" className=" cardtrend" />
                <h6 className="card-title top">
                  <span className="badge text-bg-danger">
                    Top <br></br> 10
                  </span>
                </h6>
              </div>
            </div>
            {/* pic2 */}
            <div className="boxs">
              <div style={{ position: "relative" }}>
                <img src="../asset/ant.png" className=" cardtrend" />
                <h6 className="card-title top">
                  <span className="badge text-bg-danger">
                    Top <br></br> 10
                  </span>
                </h6>
              </div>
            </div>
            {/* pic3 */}
            <div className="boxs">
              <div style={{ position: "relative" }}>
                <img src="../asset/gotg.png" className=" cardtrend" />
                <h6 className="card-title top">
                  <span className="badge text-bg-danger">
                    Top <br></br> 10
                  </span>
                </h6>
              </div>
            </div>
            {/* pic4 */}
            <div className="boxs">
              <div style={{ position: "relative" }}>
                <img src="../asset/oto1.png" className=" cardtrend" />
                <h6 className="card-title top">
                  <span className="badge text-bg-danger">
                    Top <br></br> 10
                  </span>
                </h6>
              </div>
            </div>
            {/* pic5 */}
            <div className="boxs">
              <div style={{ position: "relative" }}>
                <img src="../asset/duyungitem.png" className=" cardtrend" />
                <h6 className="card-title top">
                  <span className="badge text-bg-danger">
                    Top <br></br> 10
                  </span>
                </h6>
              </div>
            </div>
            {/* pic6 */}
            <div className="boxs">
              <div style={{ position: "relative" }}>
                <img src="../asset/suzu.png" className=" cardtrend" />
                <h6 className="card-title top">
                  <span className="badge text-bg-danger">
                    Top <br></br> 10
                  </span>
                </h6>
              </div>
            </div>
          </Slider>
        </div>
        <div className="row">
          {/* row4 */}

          <h2 style={{ marginTop: "40px" }}>Rilis Terbaru</h2>
          <Slider {...cardmovie}>
            {/* pic1 */}
            <div className="boxs">
              <div style={{ position: "relative" }}>
                <img src="../asset/duyungitem.png" className=" cardtrend" />
                <h6 className="card-title top">
                  <span className="badge text-bg-danger">
                    Top <br></br> 10
                  </span>
                </h6>
              </div>
            </div>
            {/* pic2 */}
            <div className="boxs">
              <div style={{ position: "relative" }}>
                <img src="../asset/duty1.png" className=" cardtrend" />
                <h6 className="card-title pin">
                  <span className="badge text-bg-primary">Episode baru</span>
                </h6>
              </div>
            </div>
            {/* pic3 */}
            <div className="boxs">
              <div style={{ position: "relative" }}>
                <img src="../asset/big6.png" className=" cardtrend" />
              </div>
            </div>
            {/* pic4 */}
            <div className="boxs">
              <div style={{ position: "relative" }}>
                <img src="../asset/allofdead1.png" className=" cardtrend" />
                <h6 className="card-title pin">
                  <span className="badge text-bg-primary">Episode Baru</span>
                </h6>
              </div>
            </div>
            {/* pic5 */}
            <div className="boxs">
              <div style={{ position: "relative" }}>
                <img src="../asset/missing.png" className=" cardtrend" />
              </div>
            </div>
            {/* pic6 */}
            <div className="boxs">
              <div style={{ position: "relative" }}>
                <img src="../asset/suzu.png" className=" cardtrend" />
                <h6 className="card-title pin">
                  <span className="badge text-bg-primary">Episode Baru</span>
                </h6>
                <h6 className="card-title top">
                  <span className="badge text-bg-danger">
                    Top <br></br> 10
                  </span>
                </h6>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Cardmovie;
