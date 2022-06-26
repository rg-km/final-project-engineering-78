import React from "react";
import { Image, Card, CardGroup } from "react-bootstrap";
import Buku from "./Buku";
import Footer from "./Footer";
import NavigationBar from "./NavigationBar";

const Hero = () => {
  return (
    <div>
      <NavigationBar />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div class="row justify-content-md-center">
              <div class="col">
                <Image src="./Logo/black.png" fluid />
              </div>
              <div class="col-md-auto">
                <br></br>
                <br></br>
                <p class="text-center">
                  <h3>BANGUN MASA DEPANMU</h3>
                  <h3> DENGAN MEMBACA</h3>
                  Ayo telusuri buku di EasyPerpus
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <br></br>
          <br></br>
        </div>
        <Buku />
        <div className="row">
          <div className="col-md-12">
            <CardGroup>
              <Card>
                <Card.Img variant="top" src="./Buku/laskar-pelangi.jpg" />
                <Card.Body>
                  <Card.Title>Laskar Pelangi</Card.Title>
                  <Card.Text>
                    Penulis :<br></br>
                    Tersedia :<br></br>
                    Tahun Terbit :
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img variant="top" src="./Buku/bulan.jpg" />
                <Card.Body>
                  <Card.Title>Bulan</Card.Title>
                  <Card.Text>
                    Penulis :Tere Liye<br></br>
                    Tersedia :<br></br>
                    Tahun Terbit :
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img variant="top" src="./Buku/bumi.jpg" />
                <Card.Body>
                  <Card.Title>Bumi</Card.Title>
                  <Card.Text>
                    Penulis : Tere Liye<br></br>
                    Tersedia :<br></br>
                    Tahun Terbit :
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img variant="top" src="./Buku/negeri-diujung-tanduk.jpg" />
                <Card.Body>
                  <Card.Title>Negeri Di Ujung Tanduk</Card.Title>
                  <Card.Text>
                    Penulis : Tere Liye<br></br>
                    Tersedia :<br></br>
                    Tahun Terbit :
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img variant="top" src="./Buku/halo-koding.jpg" />
                <Card.Body>
                  <Card.Title>Halo Koding</Card.Title>
                  <Card.Text>
                    Penulis : Hilman Ramadhan<br></br>
                    Tersedia :<br></br>
                    Tahun Terbit :
                  </Card.Text>
                </Card.Body>
              </Card>
            </CardGroup>
            <CardGroup>
              <Card>
                <Card.Img variant="top" src="./Buku/negeri-para-bedebah.jpg" />
                <Card.Body>
                  <Card.Title>Negeri Para Bedebah</Card.Title>
                  <Card.Text>
                    Penulis : Tere Liye<br></br>
                    Tersedia :<br></br>
                    Tahun Terbit :
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img variant="top" src="./Buku/pulang-pergi.jpg" />
                <Card.Body>
                  <Card.Title>Pulang Pergi</Card.Title>
                  <Card.Text>
                    Penulis : Tere Liye<br></br>
                    Tersedia :<br></br>
                    Tahun Terbit :
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img variant="top" src="./Buku/selamat-tinggal.jpg" />
                <Card.Body>
                  <Card.Title>Selamat Tinggal</Card.Title>
                  <Card.Text>
                    Penulis : Tere Liye<br></br>
                    Tersedia :<br></br>
                    Tahun Terbit :
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img variant="top" src="./Buku/si-putih.jpg" />
                <Card.Body>
                  <Card.Title>Si Putih</Card.Title>
                  <Card.Text>
                    Penulis : Tere Liye<br></br>
                    Tersedia :<br></br>
                    Tahun Terbit :
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img variant="top" src="./Buku/tentang-kamu.jpg" />
                <Card.Body>
                  <Card.Title>tentang Kamu</Card.Title>
                  <Card.Text>
                    Penulis : Tere Liye<br></br>
                    Tersedia :<br></br>
                    Tahun Terbit :
                  </Card.Text>
                </Card.Body>
              </Card>
            </CardGroup>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Hero;
