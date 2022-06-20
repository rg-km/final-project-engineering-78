import React, { useState } from "react";
import axios from "axios";
import { Nav } from "react-bootstrap";
import NavBarDaftar from "../Components/NavBarDaftar";
const Daftar = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [nim, setNim] = useState("");
  const [jurusan, setJurusan] = useState("");
  const [fakultas, setFakultas] = useState("");
  const [male, setMale] = useState("");
  const [female, setFemale] = useState("");
  const [foto, setFoto] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Password tidak sama");
    } else {
      const data = {
        email,
        password,
        name,
        phone,
        nim,
        jurusan,
        fakultas,
        male,
        female,
        foto,
      };
      console.log(data);
      axios
        .post("http://localhost:3001/api/v1/users", data)
        .then((res) => {
          console.log(res);
          alert("Berhasil daftar");
          window.location.href = "/";
        })
        .catch((err) => {
          console.log(err);
          alert("Gagal daftar");
        });
    }
  };

  return (
    <Nav>
      <div className="container-fluid">
        <NavBarDaftar />
        <div class="row">
          <div className="col-md-12">
            <div className="container">
              <div class="row justify-content-md-center">
                <div class="col-md-auto">
                  <h3>Daftar</h3>
                </div>
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label className="col-form-label">Nama Lengkap</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Ketik nama anda"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label className="col-form-label">Jenis Kelamin</label>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="male"
                        value={male}
                        onChange={(e) => setMale(e.target.value)}
                      />
                      <label class="form-check-label">Laki-laki</label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="female"
                        value={female}
                        onChange={(e) => setFemale(e.target.value)}
                      />
                      <label class="form-check-label">Perempuan</label>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="col-form-label">
                      Nomor Induk Mahasiswa
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="nim"
                      placeholder="Ketik nomor induk mahasiswa anda"
                      value={nim}
                      onChange={(e) => setNim(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label className="col-form-label">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Ketik email anda"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label className="col-form-label">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="Ketik password anda"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label className="col-form-label">Confirm Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="confirmPassword"
                      placeholder="Ketik password anda kembali"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label className="col-form-label">Jurusan</label>
                    <input
                      type="text"
                      className="form-control"
                      id="jurusan"
                      placeholder="Ketik jurusan anda"
                      value={jurusan}
                      onChange={(e) => setJurusan(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label className="col-form-label">Fakultas</label>
                    <input
                      type="text"
                      className="form-control"
                      id="fakultas"
                      placeholder="Ketik fakultas anda"
                      value={fakultas}
                      onChange={(e) => setFakultas(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label className="col-form-label">Nomor Telepon</label>
                    <input
                      type="text"
                      className="form-control"
                      id="phone"
                      placeholder="Ketik nomor telepon anda"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label className="col-form-label">
                      Upload Foto Profile
                    </label>
                    <input
                      type="file"
                      className="form-control"
                      id="foto"
                      placeholder="Masukan foto anda"
                      value={foto}
                      onChange={(e) => setFoto(e.target.value)}
                    />
                  </div>
                  <br></br>
                  <button type="submit" className="btn btn-dark md-auto">
                    Daftar
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Nav>
  );
};

export default Daftar;
