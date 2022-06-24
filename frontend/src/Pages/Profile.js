import React from "react";
import "../App.css";
import "@popperjs/core";
import "../bootstrap.min.css";
// import {Button, Image} from "react-bootstrap";
import "../Style/Profile.css";

const Profile = () =>{
    return(
        <>
    <div className="tata">
        <div className="flex-container">
            <h3 className="head">Profil Saya</h3>
            <img className="image-profile" src="woman.png"/>
            <button className="button-profile" type="file">Ganti Foto Profile</button>
        </div>
        <div className="flex-container-ic2">
            <div className="form-group">
                <label className="col-form-label">Nama Lengkap</label>
                <input type="text" className="form-control" id="name" placeholder="Ketik nama anda"/>
            </div>
            <div className="form-group">
                <label className="col-form-label">Jenis Kelamin</label>
                <div class="form-check">
                    <input class="form-check-input"type="radio" name="flexRadioDefault" id="male"/>
                    <label class="form-check-label">Laki-laki</label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="female"/>
                    <label class="form-check-label">Perempuan</label>
                </div>
            </div>
            <div className="form-group">
                <label className="col-form-label">NIM</label>
                <input type="type" className="form-control" id="nim" placeholder="NIM anda"/>
            </div>
            <div className="form-group">
                <label className="col-form-label">Email</label>
                <input type="email" className="form-control" id="email" placeholder="email"/>
            </div>
            <div className="form-group">
                <label className="col-form-label">Jurusan</label>
                <input type="text" className="form-control" id="jurusan" placeholder="jurusan anda"/>
            </div>
            <div className="form-group">
                <label className="col-form-label">Fakultas</label>
                <input type="text" className="form-control" id="fakultas" placeholder="Fakultas anda"/>
            </div>
            <div className="form-group">
                <label className="col-form-label">Nomor Handphone</label>
                <input type="text" className="form-control" id="nohp" placeholder="Nomor handphone"/>
            </div>
            <button className="btn-simpan">Simpan Perubahan</button>
            <div className="flex-container-ic3">
                <h3>Ganti Password</h3>
                <div className="form-group">
                    <label className="col-form-label">Password Baru</label>
                    <input type="password" className="form-control" id="nohp" placeholder="Masukan Password Baru"/>
                </div>
                <div className="form-group">
                    <label className="col-form-label">Konfirmasi Password</label>
                    <input type="password" className="form-control" id="nohp" placeholder="Masukan Password Baru"/>
                </div>
                <button className="btn-simpan">Simpan Perubahan</button>
            </div>
        </div>
    </div>
        </>
    )
}
export default Profile;