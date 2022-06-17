package repository

import (
	"database/sql"
	"errors"
)

type UserRepository struct {
	db *sql.DB
}

func NewUserRepository(db *sql.DB) *UserRepository {
	return &UserRepository{db: db}
}

func (u *UserRepository) FetchUserByID(id int64) (User, error) {
	var user User
	sqlStatement  := `SELECT id, username, password, role, loggedin FROM users
	WHERE id = ?`

	row := u.db.QueryRow(sqlStatement)
	err := row.Scan(
		&user.ID,
		&user.Username,
		&user.Password,
		&user.Role,
		&user.Loggedin,
	)

	if err != nil {
		return User{}, err
	}

	return user, nil // TODO: replace this
}

func (u *UserRepository) FetchUsers() ([]User, error) {
	var sqlStatement string
	var users []User

	//TODO: add sql statement here
	//HINT: join table cart_items and products
	sqlStatement = `SELECT id, username, password, role, loggedin FROM users`

	rows, err := u.db.Query(sqlStatement)
	if err != nil {
		return nil , err
	}
	defer rows.Close()
	for rows.Next() {
		var user User

		err := rows.Scan(
			&user.ID,
			&user.Username,
			&user.Password,
			&user.Role,
			&user.Loggedin,
		)
		if err != nil {
			return nil, err
		}
		users = append(users, user)
	}

	return users, nil // TODO: replace this
}

func (u *UserRepository) Login(username string, password string) (*string, error) {

	users, err := u.FetchUsers()

	if err != nil {
		return nil, err
	}

	for _, user := range users {
		if user.Username == username {
			if user.Password == password {
				return &user.Username, nil
			} else {
				return nil, errors.New("email atau password anda tidak valid")
			}
		}
	}
	return nil, errors.New("email atau password anda tidak valid") // TODO: replace this
}

func (u *UserRepository) InsertUser(username string, password string, role string, loggedin bool) error {
	sqlStatement := `INSERT INTO users (username, password, role, loggedin) 
	VALUES (?, ?, ?, ?)`

	_, err := u.db.Exec(sqlStatement, username, password, role, loggedin)
	if err != nil {
		return err
	}
	return nil // TODO: replace this
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

	return &role, nil // TODO: replace this
}
