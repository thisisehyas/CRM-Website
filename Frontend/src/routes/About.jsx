// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Carousel from "react-bootstrap/Carousel";
// import Container from "react-bootstrap/esm/Container";
// import Header from "../components/Header.jsx";
// // import "../styles/about.css";
// import "../styles/fontSize.css";

// const About = () => {
//   return (
//     <>
//       <Header title="درباره ما" />
//       <Container>
//         <div className="row mt-4">
//           <div
//             className="col-12 col-lg-6 order-lg-2 change-font"
//             style={{ direction: "rtl", textAlign: "right" }}
//           >
//             <p className="first-p">
//               لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
//               استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
//               در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
//               نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
//               کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
//               جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای
//               طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان
//               فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری
//               موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد
//               نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل
//               دنیای موجود طراحی اساسا مورد استفاده قرار گیرد. لورم ایپسوم متن
//               ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان
//               گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان
//               که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای
//               متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت
//               و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
//               طلبد.
//             </p>
//           </div>
//           <div className="col-12 col-lg-6 order-lg-1 mt-3 mt-lg-0">
//             <Carousel
//               className="shadow"
//               fade
//               style={{ minWidth: "50%", width: "80%" }}
//             >
//               <Carousel.Item>
//                 <img
//                   src="http://127.0.0.1:8000/machine_pics/carousel2.jpg"
//                   alt="عکس نمونه"
//                   className="d-block w-100"
//                 />
//               </Carousel.Item>
//               <Carousel.Item>
//                 <img
//                   src="http://127.0.0.1:8000/machine_pics/carousel3.jpg"
//                   alt="عکس نمونه"
//                   className="d-block w-100"
//                 />
//               </Carousel.Item>
//               <Carousel.Item>
//                 <img
//                   src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/108/904/original/159f8f_2.png?1704133269"
//                   alt="عکس نمونه"
//                   className="d-block w-100"
//                 />
//               </Carousel.Item>
//             </Carousel>
//           </div>
//         </div>
//         <div className="row mt-4">
//           <div
//             className="col-12 col-lg-6 second-p order-lg-1 change-font"
//             style={{ direction: "rtl", textAlign: "right" }}
//           >
//             لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
//             استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
//             ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
//             و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
//             زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
//             متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان
//             رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد
//             کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه
//             راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل
//             حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود
//             طراحی اساسا مورد استفاده قرار گیرد.
//           </div>
//           <div className="col-12 col-lg-6 order-lg-2 mt-3">
//             <img
//               className="shadow"
//               style={{ width: "80%" }}
//               src="http://127.0.0.1:8000/machine_pics/photoabout.jpg"
//               alt="عکس نمونه"
//             />
//           </div>
//         </div>
//       </Container>
//     </>
//   );
// };

// export default About;

// // THINGS TO SOLVE:

// //  - Make the margin between the .second-p and the
// //    img to look good.

// //  - Also it doesn't look that good when making the page
// //    smaller. So you need to make that right. from 991px and smaller.

// //  - There should be a green line under the navbar showing that
// //    we are on that page.

// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Carousel from "react-bootstrap/Carousel";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import Header from "../components/Header.jsx";
// import "../styles/fontSize.css";

// const About = () => {
//   return (
//     <>
//       <Header title="درباره ما" />
//       <Container>
//         <Row className="mt-4">
//           <Col
//             lg={6}
//             className="order-lg-2 change-font"
//             style={{ direction: "rtl", textAlign: "right" }}
//           >
//             <p className="first-p">
//               لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
//               استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
//               در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
//               نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
//               کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
//               جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای
//               طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان
//               فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری
//               موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد
//               نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل
//               دنیای موجود طراحی اساسا مورد استفاده قرار گیرد. لورم ایپسوم متن
//               ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان
//               گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان
//               که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای
//               متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت
//               و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
//               طلبد.
//             </p>
//           </Col>
//           <Col lg={6} className="order-lg-1 mt-3 mt-lg-0">
//             <Carousel
//               className="shadow"
//               fade
//               style={{ minWidth: "50%", width: "80%" }}
//             >
//               <Carousel.Item>
//                 <img
//                   src="http://127.0.0.1:8000/machine_pics/carousel2.jpg"
//                   alt="عکس نمونه"
//                   className="d-block w-100"
//                 />
//               </Carousel.Item>
//               <Carousel.Item>
//                 <img
//                   src="http://127.0.0.1:8000/machine_pics/carousel3.jpg"
//                   alt="عکس نمونه"
//                   className="d-block w-100"
//                 />
//               </Carousel.Item>
//               <Carousel.Item>
//                 <img
//                   src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/108/904/original/159f8f_2.png?1704133269"
//                   alt="عکس نمونه"
//                   className="d-block w-100"
//                 />
//               </Carousel.Item>
//             </Carousel>
//           </Col>
//         </Row>
//         <Row className="mt-4">
//           <Col
//             lg={6}
//             className="second-p order-lg-1 change-font"
//             style={{ direction: "rtl", textAlign: "right" }}
//           >
//             <p>
//               لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
//               استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
//               در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
//               نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
//               کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
//               جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای
//               طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان
//               فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری
//               موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد
//               نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل
//               دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
//             </p>
//           </Col>
//           <Col lg={6} className="order-lg-2 mt-3">
//             <img
//               className="shadow"
//               style={{ width: "80%" }}
//               src="http://127.0.0.1:8000/machine_pics/photoabout.jpg"
//               alt="عکس نمونه"
//             />
//           </Col>
//         </Row>
//       </Container>
//     </>
//   );
// };

// export default About;

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Header from "../components/Header.jsx";
import "../styles/fontSize.css";

const About = () => {
  return (
    <div style={{ overflowX: "hidden" }}>
      <Header title="درباره ما" />
      <Container className="d-flex flex-wrap align-items-stretch">
        <Row className="mt-4">
          <Col
            lg={6}
            className="order-lg-2 change-font"
            style={{ direction: "rtl", textAlign: "right" }}
          >
            <p className="first-p">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
              جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان
              فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری
              موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد
              نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل
              دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </p>
          </Col>
          <Col lg={6} className="order-lg-1 mt-3 mt-lg-0">
            <Carousel className="shadow" fade>
              <Carousel.Item>
                <img
                  src="http://127.0.0.1:8000/machine_pics/carousel2.jpg"
                  alt="عکس نمونه"
                  className="d-block w-100"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src="http://127.0.0.1:8000/machine_pics/carousel3.jpg"
                  alt="عکس نمونه"
                  className="d-block w-100"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src="http://127.0.0.1:8000/machine_pics/carousel5.jpg"
                  alt="عکس نمونه"
                  className="d-block w-100"
                />
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col
            lg={6}
            className="second-p order-lg-1 change-font"
            style={{ direction: "rtl", textAlign: "right" }}
          >
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
              جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان
              فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری
              موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد
              نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل
              دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.{" "}
            </p>
          </Col>
          <Col lg={6} className="order-lg-2 mt-3">
            <img
              className="shadow"
              style={{ width: "100%" }}
              src="http://127.0.0.1:8000/machine_pics/photoabout.jpg"
              alt="عکس نمونه"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
