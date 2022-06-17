package repository


type admin struct {
	ID       int64  `db:"id"`
	Username string `db:"username"`
	Password string `db:"password"`
	Role     string `db:"role"`
	Loggedin bool   `db:"loggedin"`
	Token    string `db:"token"`
}

type buku struct {
	ID       int64  `db:"id"`
	Judul    string `db:"judul"`
	Penerbit string `db:"penerbit"`
	Pengarang string `db:"pengarang"`
	Tahun    string `db:"tahun"`
	Stok     string `db:"stok"`
	description string `db:"description"`
}

type peminjaman struct {
	ID       int64  `db:"id"`
	Nama     string `db:"nama"`
	Judul    string `db:"judul"`
	Status   string `db:"status"`
	tanggal_pinjam string `db:"tanggalPinjam"`
	tanggal_kembali string `db:"tanggalKembali"`
}

type denda struct {
	ID       int64  `db:"id"`
	



