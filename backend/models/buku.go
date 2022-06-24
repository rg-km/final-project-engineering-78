package models
type buku struct {
	ID       int64  `db:"id_buku"`
	ISBN int64 `db:"isbn_buku"`
	Judul    string `db:"judul"`
	Penerbit string `db:"penerbit"`
	Pengarang string `db:"pengarang"`
	Tahun    string `db:"tahun_terbit"`
	Stok     string `db:"jumlah_buku"`
	kategori string `db:"kategori"`
	Deskripsi string `db:"description"`
}