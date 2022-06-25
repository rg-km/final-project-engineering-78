package repository

import (
	"database/sql"
)

// type User struct {
// 	Id int `db:"id" json:"id"`
// 	Nim int `db:"nim" json:"nim"`
// 	Username string `db:"username" json:"username"`
// 	Kelamin string `db:"kelamin" json:"kelamin"`
// 	Email string `db:"email" json:"email"`
// 	Jurusan string `db:"jurusan" json:"jurusan"`
// 	Fakultas string `db:"fakultas" json:"fakultas"`
// 	NoHp string `db:"noHp" json:"noHp"`
// 	Password string `db:"password" json:"password"`
// 	Role string `db:"role" json:"role"`
// 	Logged bool `db:"logged" json:"logged"`
// 	Gambar string `db:"gambar" json:"gambar"`
// }

type UserRepository struct {
	db *sql.DB
}

func NewUserRepository(db *sql.DB) *UserRepository {
	return &UserRepository{db: db}
}

//FetchUserByID
func (u *UserRepository) FetchUserByID(id int) (*User, error) {
	var user User
	sqlStatement := `SELECT * FROM users WHERE id = ?`

	row := u.db.QueryRow(sqlStatement, id)
	err := row.Scan(&user.Id, &user.Nim, &user.Username, &user.kelamin, &user.Email, &user.Jurusan, &user.Fakultas, &user.NoHp, &user.Password, &user.Role, &user.Logged, &user.Gambar)
	if err != nil {
		return nil, err
	}
	return &user, nil
}


//FetchUsers
func (u *UserRepository) FetchUsers() ([]User, error) {
	var users []User
	rows, err := u.db.Query("SELECT * FROM users")
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	for rows.Next() {
		var user User
		err := rows.Scan(&user.Id, &user.Nim, &user.Username, &user.kelamin, &user.Email, &user.Jurusan, &user.Fakultas, &user.NoHp, &user.Password, &user.Role, &user.Logged, &user.Gambar)
		if err != nil {
			return nil, err
		}
		users = append(users, user)
	}
	return users, nil
}


//login 
func (u *UserRepository) Login(username string, password string) (*string, error) {
	sqlStatement := `SELECT role FROM users WHERE username = ? AND password = ?`

	row := u.db.QueryRow(sqlStatement, username, password)
	var role string

	err := row.Scan(
		&role,
	)

	if err != nil {
		return nil, err
	}
	
	return &role, nil
}

func (u *UserRepository) InsertUser(username string, password string, role string, loggedin bool) error {
	sqlStatement := `INSERT INTO users (username, password, role, loggedin) 
	VALUES (?, ?, ?, ?)`

	_, err := u.db.Exec(sqlStatement, username, password, role, loggedin)
	if err != nil {
		return err
	}
	return nil 
}

func (u *UserRepository) FetchUserRole(username string) (*string, error) {
	sqlStatement := `SELECT role FROM users WHERE username = ?`

	row := u.db.QueryRow(sqlStatement, username)
	var role string 

	err := row.Scan(
		&role,
	)

	if err != nil {
		return nil, err
	}

	return &role, nil
}
