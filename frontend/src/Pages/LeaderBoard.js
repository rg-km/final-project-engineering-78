import NavBarDaftar from "../Components/NavBarDaftar";
import Footer from "../Components/Footer";
const LeaderBoard = () => {
  return (
    <div className="container-fluid">
      <NavBarDaftar />
      <div className="Leaderboard">
        <div className="container flex">
          <div className="row justify-content-md-center">
            <div className="col-md-12">
              <h1 className="text-center">Leaderboard Pustaka</h1>
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Nama</th>
                    <th>Total Buku</th>
                    <th>Total Peminjaman</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Rizky</td>
                    <td>10</td>
                    <td>10</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Rizky</td>
                    <td>10</td>
                    <td>10</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Rizky</td>
                    <td>10</td>
                    <td>10</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Rizky</td>
                    <td>10</td>
                    <td>10</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <Footer />
    </div>
  );
};

export default LeaderBoard;
