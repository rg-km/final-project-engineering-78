import React from "react";
import "../App.css";
import "@popperjs/core";
import "../bootstrap.min.css";
import {Button, Image} from "react-bootstrap";
import "../Style/Profile.css";

const Profile = () =>{
    return(
        <>
        <div className="tata">
        <div class="flex-container">
            <h3 className="head">Profil Saya</h3>
            <Image className="image-profile" src="woman.png"/>
            <Button className="button-profile">Ganti Foto Profile</Button>
        </div>
        <div className="form">
            <div class="input-container ic1">
                <p>Nama Lengkap</p>
                <input id="firstname" class="input" type="text" placeholder=" " />
                <p>Jenis Kelamin</p>
                {/* <input type="radio">Laki-laki</input>    */}
            </div>
            {/* <div class="form-check">
                <label class="form-check-label" for="radio2">
                <input type="radio" class="form-check-input" id="radio2" name="optradio" value="option2">Option 2</input>
                </label>
            </div> */}
        </div>
        </div>
        </>
    )
}
export default Profile;
