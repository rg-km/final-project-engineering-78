package main

import (
	"database/sql"

	_ "github.com/mattn/go-sqlite3"
)

// Run This Script for migration db
func main() {
	db, err := sql.Open("sqlite3", "db/migrations/finalprovision.db")
	if err != nil {
		panic(err)
	}

	_, err = db.Exec(`
	CREATE TABLE IF NOT EXISTS users (
   id_user INTEGER PRIMARY KEY
   nama varchar (255) not null
   jenis_kelamin varchar (255) not null
   no_telepon varchar (255) not null
   alamat varchar (255) not null
   loggedin boolean not null
);

CREATE TABLE IF NOT EXISTS buku (
   id_buku integer not null primary key AUTOINCREMENT,
   judul varchar(255) not null,
   pengarang varchar(255) not null
   tahun integer not null
   katagori varchar (255) not null,

);

CREATE TABLE IF NOT EXISTS peminjaman (
    id_pinjam integer not null primary key AUTOINCRE
	tgl_pinjam integer not null
	tgl_kembali integer not null
	tgl_kembali integer not null
);

CREATE TABLE IF NOT EXISTS denda(
	id_denda integer not null primary key AUTOINCRE
	
)
CREATE TABLE IF NOT EXISTS petugas (
    id_petugas integer not null primary key AUTOINCRE
	nama varchar(255) not null
	jenis_kelamin varchar (255) not null
	no_telepon varchar (255) not null
	alamat varchar (255) not null
	loggedin boolean not nul
);

INSERT INTO petugas(id_petugas,nama,jenis_kelamin,no_telepon,alamat,loggedin) VALUES
    ('0001,'ilmi','laki-laki','085787053102','banjarmasin','false');`)

	if err != nil {
		panic(err)
	}
}
