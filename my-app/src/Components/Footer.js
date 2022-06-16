import React from "react";
// import { Link } from "react-router-dom";
import {
  Image,
  Container,
  Row,
  Col,
  Stack,
} from "react-bootstrap";

export const Footer = () => {
  return (
    <>
    {/* Belum responsive */}
      <footer className="bg-dark text-white pt-5 px-4">
        <Container fluid>
          <section>
            <Row>
              <Col className="col-md-3 col-lg-4 col-xl-3 mx-auto">
                <Stack direction="vertical" gap={2}>
                  <Image src="./Logo/white-line.png" width="200" />
                  <div>
                    <p>Gedung Perpustakaan EasyPerpus beralamat di Kampus Universitas Andalas Limau Manis, Kec. Pauh, Kota Padang, Sumatera Barat.</p>
                    <div>
                        <a href="" className="me-4 text-reset">
                          <i className="fab fa-facebook-f fa-xl"></i>
                        </a>
                        <a href="" className="me-4 text-reset">
                          <i className="fab fa-twitter fa-xl"></i>
                        </a>
                        <a href="" className="me-4 text-reset">
                          <i className="fab fa-instagram fa-xl"></i>
                        </a>
                      </div>
                  </div>
                </Stack>
              </Col>
              <Col className="col-md-3 col-lg-4 col-xl-3 mx-auto">
                <h5>Jam Operasional Layanan Perpustakaan</h5>
                <ul className="list-unstyled">
                  <li>Senin-Jumat 08.00 - 16.00 WIB</li>
                  <li>Sabtu-Minggu 09.00 - 15.30 WIB</li>
                  <li>Cuti bersama dan libur nasional TUTUP</li>
                </ul>
              </Col>
              <Col className="col-md-3 col-lg-2 col-xl-2 mx-auto">
                <h5>Links</h5>
                <ul className="list-unstyled">
                  {/* route link ntar diperbaiki menyesuaikan route fix!! */}
                  {/* <li><Link to="/">Beranda Pustaka</Link></li>
                  <li><Link to="">List Buku Pustaka</Link></li>
                  <li><Link to="">Leaderboard Pustaka</Link></li> */}
                  <li>Beranda Pustaka</li>
                  <li>List Buku Pustaka</li>
                  <li>Leaderboard Pustaka</li>
                </ul>
              </Col>
              <Col className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0">
                <h5>Hubungi Kami</h5>
                <ul className="list-unstyled">
                  <li><i className="fas fa-phone me-3"></i> (0751) 931122</li>
                  <li><i className="fas fa-print me-3"></i> (0751) 938345</li>
                </ul>
              </Col>
            </Row>
          </section>
          <section>
            <Row>
              <Col>
                <p className="text-center">&#169; 2022 Copyright: <a href="" className="text-reset fw-bold text-decoration-none">EasyPerpus.com</a></p>
              </Col>
            </Row>
          </section>
        </Container>
      </footer>
    </>
    
  );
};
export default Footer;
