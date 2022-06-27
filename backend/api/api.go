package api

import (
	"fmt"
	"net/http"

	"github.com/rg-km/final-project-engineering-78/backend/repository"
)

type API struct {
	usersRepo       repository.UserRepository
	bukuRepo 	  repository.BukuRepository
	mux             *http.ServeMux
}

func NewAPI(usersRepo repository.UserRepository, bukuRepo repository.BukuRepository) API {
	mux := http.NewServeMux()
	api := API{
		usersRepo, bukuRepo, mux,
	}

	mux.Handle("/api/user/login", api.POST(http.HandlerFunc(api.login)))
	mux.Handle("/api/user/logout", api.POST(http.HandlerFunc(api.logout)))
	mux.Handle("/api/user/register", api.POST(http.HandlerFunc(api.register)))

	//handlerbuku
	// mux.Handle("/api/buku", api.GET(http.HandlerFunc(api.FetchBukus)))
	// mux.Handle("/api/buku/", api.GET(http.HandlerFunc(api.FetchBuku)))
	// mux.Handle("/api/buku/", api.POST(http.HandlerFunc(api.CreateBuku)))
	// mux.Handle("/api/buku/", api.PUT(http.HandlerFunc(api.UpdateBuku)))
	// mux.Handle("/api/buku/", api.DELETE(http.HandlerFunc(api.DeleteBuku)))

	// //handleruser
	// mux.Handle("/api/user", api.GET(http.HandlerFunc(api.FetchUsers)))
	// mux.Handle("/api/user/", api.GET(http.HandlerFunc(api.FetchUser)))
	// mux.Handle("/api/user/", api.POST(http.HandlerFunc(api.CreateUser)))
	// mux.Handle("/api/user/", api.PUT(http.HandlerFunc(api.UpdateUser)))
	// mux.Handle("/api/user/", api.DELETE(http.HandlerFunc(api.DeleteUser)))
	 

	return api
}

func (api *API) Handler() *http.ServeMux {
	return api.mux
}

func (api *API) Start() {
	fmt.Println("starting web server at http://localhost:8080/")
	http.ListenAndServe(":8080", api.Handler())
}
