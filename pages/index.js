import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "reactstrap";
import Image from "next/image";

function Home() {
  return (
    <div>
      <Container>
        <Row className="text-center">
          <Col>
            <h2 className="mt-5">Ambiente de produção</h2>
            <Image
              src="/images/construct-production.png"
              alt="Ambiente de desenvolvimento"
              width={500}
              height={500}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
