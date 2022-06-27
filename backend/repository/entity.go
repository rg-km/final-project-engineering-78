package repository
	type User struct {
		Id int `db:"id"`
		Nim int `db:"nim"`
		Username string `db:"nama"`
		kelamin string `db:"kelamin"`
		Email string `db:"email"`
		Jurusan string `db:"jurusan"`
		Fakultas string `db:"fakultas"`
		NoHp string `db:"noHp"`
		Password string `db:"password"`
		Role string `db:"role"`
		Logged bool `db:"logged"`
		Gambar string `db:"gambar"`
	}

	type Buku struct {
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
	}
	



