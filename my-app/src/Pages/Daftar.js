// import React, { useState } from "react";
// import axios from "axios";
// const Daftar = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [name, setName] = useState("");
//   const [phone, setPhone] = useState("");
//   const [address, setAddress] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (password !== confirmPassword) {
//       alert("Password tidak sama");
//     } else {
//       const data = {
//         email,
//         password,
//         name,
//         phone,
//         address,
//       };
//       console.log(data);
//       axios
//         .post("http://localhost:3001/api/v1/users", data)
//         .then((res) => {
//           console.log(res);
//           alert("Berhasil daftar");
//           window.location.href = "/";
//         })
//         .catch((err) => {
//           console.log(err);
//           alert("Gagal daftar");
//         });
//     }
//   };

//   return (
//     <div className="container">
//       <div className="row">
//         <div className="col-md-6">
//           <div className="card">
//             <div className="card-header">
//               <h3>Daftar</h3>
//             </div>
//             <div className="card-body">
//               <form onSubmit={handleSubmit}>
//                 <div className="form-group">
//                   <label>Email</label>
//                   <input
//                     type="email"
//                     className="form-control"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                   />
//                 </div>
//                 <div className="form-group">
//                   <label>Password</label>
//                   <input
//                     type="password"
//                     className="form-control"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                   />
//                 </div>
//                 <div className="form-group">
//                   <label>Confirm Password</label>
//                   <input
//                     type="password"
//                     className="form-control"
//                     value={confirmPassword}
//                     onChange={(e) => setConfirmPassword(e.target.value)}
//                   />
//                 </div>
//                 <div className="form-group">
//                   <label>Nama</label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                   />
//                 </div>
//                 <div className="form-group">
//                   <label>Phone</label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     value={phone}
//                     onChange={(e) => setPhone(e.target.value)}
//                   />
//                 </div>
//                 <div className="form-group">
//                   <label>Address</label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     value={address}
//                     onChange={(e) => setAddress(e.target.value)}
//                   />
//                 </div>
//                 <button type="submit" className="btn btn-primary">
//                   Daftar
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Daftar;
