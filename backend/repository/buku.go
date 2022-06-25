package repository

import (
	"database/sql"
)


/*
		ID          int    `db:"id"`
		ISBN        int    `db:"isbn"`
		Judul       string `db:"judul"`
		Pengarang   string `db:"pengarang"`
		Penerbit    string `db:"penerbit"`
		Tahun       string `db:"tahun"`
		Stok        int    `db:"stok"`
		KotaTerbit  string `db:"kotaTerbit"`
		Deskripsi   string `db:"deskripsi"`
		Gambar      string `db:"gambar"`
	
*/

type BukuRepository interface {
	FetchBukuByID(id int64) (Buku, error)
	FetchBukus() ([]Buku, error)
	InsertBuku(buku Buku) error
	UpdateBuku(buku Buku) error
	DeleteBuku(id int64) error
	
}

type buku struct {
	db *sql.DB
}

func NewBukuRepository (db *sql.DB) BukuRepository {
	return &buku{db}
}

//GetAllBuku
func (b *buku) FetchBukus() ([]Buku, error) {
	var bukus []Buku
	rows, err := b.db.Query("SELECT * FROM buku")
	if err != nil {
		return bukus, err
	}
	defer rows.Close()
	for rows.Next() {
		var buku Buku
		err := rows.Scan(&buku.ID, &buku.ISBN, &buku.Judul, &buku.Pengarang, &buku.Penerbit, &buku.Tahun, &buku.Stok, &buku.KotaTerbit, &buku.Deskripsi, &buku.Gambar)
		if err != nil {
			return bukus, err
		}
		bukus = append(bukus, buku)
	}
	return bukus, nil
}


//GetBukuByID
func (b *buku) FetchBukuByID(id int64) (Buku, error) {
	var buku Buku
	err := b.db.QueryRow("SELECT * FROM buku WHERE id=?", id).Scan(&buku.ID, &buku.ISBN, &buku.Judul, &buku.Pengarang, &buku.Penerbit, &buku.Tahun, &buku.Stok, &buku.KotaTerbit, &buku.Deskripsi, &buku.Gambar)
	if err != nil {
		return buku, err
	}
	return buku, nil
}


//InsertBuku
func (b *buku) InsertBuku(buku Buku) error {
	_, err := b.db.Exec("INSERT INTO buku (isbn, judul, pengarang, penerbit, tahun, stok, kotaTerbit, deskripsi, gambar) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)", buku.ISBN, buku.Judul, buku.Pengarang, buku.Penerbit, buku.Tahun, buku.Stok, buku.KotaTerbit, buku.Deskripsi, buku.Gambar)
	if err != nil {
		return err
	}
	return nil
}


//UpdateBuku
func (b *buku) UpdateBuku(buku Buku) error {
	_, err := b.db.Exec("UPDATE buku SET isbn=?, judul=?, pengarang=?, penerbit=?, tahun=?, stok=?, kotaTerbit=?, deskripsi=?, gambar=? WHERE id=?", buku.ISBN, buku.Judul, buku.Pengarang, buku.Penerbit, buku.Tahun, buku.Stok, buku.KotaTerbit, buku.Deskripsi, buku.Gambar, buku.ID)
	if err != nil {
		return err
	}
	return nil
}


//DeleteBuku
func (b *buku) DeleteBuku(id int64) error {
	_, err := b.db.Exec("DELETE FROM buku WHERE id=?", id)
	if err != nil {
		return err
	}
	return nil
}


//search buku
func (b *buku) SearchBuku(search string) ([]Buku, error) {
	var bukus []Buku
	rows, err := b.db.Query("SELECT * FROM buku WHERE judul LIKE ?", "%"+search+"%")
	if err != nil {
		return bukus, err
	}
	defer rows.Close()
	for rows.Next() {
		var buku Buku
		err := rows.Scan(&buku.ID, &buku.ISBN, &buku.Judul, &buku.Pengarang, &buku.Penerbit, &buku.Tahun, &buku.Stok, &buku.KotaTerbit, &buku.Deskripsi, &buku.Gambar)
		if err != nil {
			return bukus, err
		}
		bukus = append(bukus, buku)
	}
	return bukus, nil
}
