import React from "react";
import "../App.css";
import "@popperjs/core";
import "../bootstrap.min.css";
import {Image, Button} from "react-bootstrap";


const Profile = () => {

    return (
        <>
        <h1>Profil Saya</h1>
        <Image src="woman.png"/>
        <Button>Ganti Profile Saya</Button>
    
        </>
    )
};
export default Profile;
