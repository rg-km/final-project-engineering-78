package repository

import (
	"database/sql"

	"github.com/rg-km/final-project-engineering-78/backend/model"
	"github.com/rg-km/final-project-engineering-78/backend/api"
	
)

// repo untuk crud data buku
type BukuRepository interface {
	GetAllBuku() ([]*model.Buku, error)
	GetBukuByID(id int) (*model.Buku, error)
	CreateBuku(buku *model.Buku) error
	UpdateBuku(buku *model.Buku) error
	DeleteBuku(id int) error
	searchBuku(search string) ([]*model.Buku, error)
}

type buku struct {
	db *sql.DB
}

func NewUserRepository (db *sql.DB) buku {
	return buku{db}

//GetAllBuku
func (b *buku) GetAllBuku() ([]*model.Buku, error) {
	var bukus []*model.Buku
	rows, err := b.db.Query("SELECT * FROM buku")
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	for rows.Next() {
	
		var buku model.Buku
		err := rows.Scan(&buku.ID, &buku.Judul, &buku.Penerbit, &buku.Pengarang, &buku.TahunTerbit, &buku.Jumlah, &buku.Harga, &buku.Deskripsi, &buku.Gambar)
		if err != nil {
			return nil, err
		}
		bukus = append(bukus, &buku)
	}
	return bukus, nil
}

//GetBukuByID
func (b *buku) GetBukuByID(id int) (*model.Buku, error) {
	var buku model.Buku
	err := b.db.QueryRow("SELECT * FROM buku WHERE id = ?", id).Scan(&buku.ID, &buku.Judul, &buku.Penerbit, &buku.Pengarang, &buku.TahunTerbit, &buku.Jumlah, &buku.Harga, &buku.Deskripsi, &buku.Gambar)
	if err != nil {
		return nil, err
	}
	return &buku, nil
}

//createBuku
func (b *buku) CreateBuku(buku *model.Buku) error {
	statement, err := b.db.Prepare("INSERT INTO buku (judul, penerbit, pengarang, tahun_terbit, jumlah, harga, deskripsi, gambar) VALUES (?, ?, ?, ?, ?, ?, ?, ?)")
	if err != nil {
		return err
	}
	defer statement.Close()
	_, err = statement.Exec(buku.Judul, buku.Penerbit, buku.Pengarang, buku.TahunTerbit, buku.Jumlah, buku.Harga, buku.Deskripsi, buku.Gambar)
	if err != nil {
		return err
	}
	return nil
}

//UpdateBuku
func (b *buku) UpdateBuku(buku *model.Buku) error {
	statement, err := b.db.Prepare("UPDATE buku SET judul = ?, penerbit = ?, pengarang = ?, tahun_terbit = ?, jumlah = ?, harga = ?, deskripsi = ?, gambar = ? WHERE id = ?")
	if err != nil {
		return err
	}
	defer statement.Close()
	_, err = statement.Exec(buku.Judul, buku.Penerbit, buku.Pengarang, buku.TahunTerbit, buku.Jumlah, buku.Harga, buku.Deskripsi, buku.Gambar, buku.ID)
	if err != nil {
		return err
	}
	return nil
}

//deleteBuku
func (b *buku) DeleteBuku(id int) error {
	statement, err := b.db.Prepare("DELETE FROM buku WHERE id = ?")
	if err != nil {
		return err
	}
	defer statement.Close()
	_, err = statement.Exec(id)
	if err != nil {
		return err
	}
	return nil
}

//searchBuku
func (b *buku) searchBuku(search string) ([]*model.Buku, error) {
	var bukus []*model.Buku
	rows, err := b.db.Query("SELECT * FROM buku WHERE judul LIKE ?", "%"+search+"%")
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	for rows.Next() {
		var buku model.Buku
		err := rows.Scan(&buku.ID, &buku.Judul, &buku.Penerbit, &buku.Pengarang, &buku.TahunTerbit, &buku.Jumlah, &buku.Harga, &buku.Deskripsi, &buku.Gambar)
		if err != nil {
			return nil, err
		}
		bukus = append(bukus, &buku)
	}
	return bukus, nil
}
