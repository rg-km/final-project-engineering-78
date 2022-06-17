package main

import (
	"database/sql"

	_ "github.com/mattn/go-sqlite3"
)

// Run This Script for migration db
func main() {
	db, err := sql.Open("sqlite3", "backend/db/migrations.db")
	if err != nil {
		panic(err)
	}

	_, err = db.Exec(`
	CREATE TABLE IF NOT EXISTS users (
    id_user integer not null primary key AUTOINCREMENT,
    username varchar(255) not null,
    password varchar(255) not null,
    role varchar(255) not null,
    loggedin boolean not null
);


	CREATE TABLE IF NOT EXISTS admin (
	id_admin integer not null primary key AUTOINCREMENT,
	username varchar(255) not null,
	password varchar(255) not null,
	role varchar(255) not null,
	loggedin boolean not null
);

	CREATE TABLE IF NOT EXISTS buku (
	id_buku integer not null primary key AUTOINCREMENT,
	ISBN integer not null primary key AUTOINCREMENT,
	judul varchar(255) not null,
	pengarang varchar(255) not null,
	penerbit varchar(255) not null,
	tahun_terbit integer not null,
	jumlah_buku integer not null,
	kategori varchar(255) not null
	description varchar(255) not null
);

	CREATE TABLE IF NOT EXISTS peminjaman (
	id_peminjaman integer not null primary key AUTOINCREMENT,
	tanggal_pinjam date not null,
	tanggal_kembali date not null,
	status boolean not null
	foreign key(id_buku) references buku(id_buku)
	foreign key(id_user) references users(id_user)
);

	CREATE TABLE IF NOT EXISTS pengembalian (
	id_pengembalian integer not null primary key AUTOINCREMENT,
	tanggal_kembali date not null,
	status boolean not null
	foreign key(id_buku) references buku(id_buku)
	foreign key(id_user) references users(id_user)
);

	CREATE TABLE IF NOT EXISTS denda (
	id_denda integer not null primary key AUTOINCREMENT,
	tanggal_denda date not null,
	jumlah_denda integer not null,
	foreign key(id_peminjaman) references peminjaman(id_peminjaman)
	foreign key(id_user) references users(id_user)
);)


INSERT INTO users(username, password, role, loggedin) VALUES
    ('aditira', '1234', 'admin', false),
    ('dina', '4321', 'employee', false),
    ('dito', '2552', 'employee', false),
	('aris', '2910', 'admin', false);

`)

	if err != nil {
		panic(err)
	}
}
