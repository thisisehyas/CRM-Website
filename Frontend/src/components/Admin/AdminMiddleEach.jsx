import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/middleEach.css";
import "../../styles/fontSize.css";
import { Row, Col, Image, Container, Button } from "react-bootstrap";

const MiddleEach = (props) => {
  const handleTitleChange = (event) => {
    // Implement the logic to update the product title
    console.log("Title changed:", event.target.value);
  };

  const handlePhotoChange = () => {
    // Implement the logic to update the product photo
    console.log("Photo changed");
  };

  const handleDescriptionChange = (event) => {
    // Implement the logic to update the product description
    console.log("Description changed:", event.target.value);
  };

  return (
    <>
      <div className="d-flex justify-content-end mb-4 mt-1">
        <Button variant="primary" onClick={handleTitleChange}>
          تغییر عنوان محصول
        </Button>
      </div>
      <Container className="mt-3">
        <Row>
          <Col className="d-flex align-items-stretch">
            <p
              className="change-font first-p"
              style={{ direction: "rtl", textAlign: "right" }}
            >
              <Button variant="primary" onClick={handleDescriptionChange}>
                تغییر توضیحات
              </Button>
              <h5 className="text-center">توضیحات</h5>
              <br />
              {props.description}
              <br />
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

          <Col className="d-flex align-items-stretch">
            <Image
              style={{ marginBottom: "10px", width: "80%", marginLeft: "20%" }}
              // src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/111/750/original/produkt_g64-1_1.png?1705960740"
              src={props.picture}
              alt="عکس محصول"
            ></Image>
          </Col>
        </Row>
        <div className="d-flex justify-content-end">
          <Button
            className="mb-5"
            variant="primary"
            onClick={handlePhotoChange}
          >
            تغییر تصویر
          </Button>
        </div>

        <Row>
          <Col className="d-flex align-items-row d-flex align-items-stretch">
            <Row>
              <Col className="mb-3">
                <Image
                  className="sub-image "
                  src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/111/753/original/ruttmann_sortierprodukt_03-300x300_1.png?1705962952"
                ></Image>
              </Col>
              <Col className="mb-3">
                <Image
                  className="sub-image"
                  src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/111/754/original/ruttmann_sortierprodukt_07-300x300_1.png?1705962961"
                ></Image>
              </Col>
            </Row>
            <Row>
              <Col className="ml-2">
                <Image
                  className="sub-image"
                  src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/111/755/original/ruttmann_sortierprodukt_04-300x300_1.png?1705962968"
                ></Image>
              </Col>
              <Col className="ml-">
                <Image
                  className="sub-image"
                  src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/111/756/original/ruttmann_sortierprodukt_02-300x300_1.png?1705962979"
                ></Image>
              </Col>
            </Row>
          </Col>
          <Col className="d-flex align-items-stretch">
            <p
              className="second-p change-font"
              style={{ direction: "rtl", textAlign: "right" }}
            >
              <h5 className="text-center">مشخصات فنی</h5>
              <p>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
                نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
                کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
                جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را
                برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در
                زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و
                دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و
                زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات
                پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
              </p>
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default MiddleEach;
