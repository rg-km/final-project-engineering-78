package api

import (
	"fmt"
	"net/http"

	"github.com/rg-km/final-project-engineering-78/backend/repository"
)

type API struct {
	usersRepo       repository.UserRepository
	bukuRepo        repository.UserRepository
	mux             *http.ServeMux
}

func NewAPI(usersRepo repository.UserRepository, bukuRepo repository.UserRepository) API {
	mux := http.NewServeMux()
	api := API{
		usersRepo,bukuRepo, mux,
	}

	mux.Handle("/api/user/login", api.POST(http.HandlerFunc(api.login)))
	mux.Handle("/api/user/logout", api.POST(http.HandlerFunc(api.logout)))

//handlerbuku
mux.Handle("/api/buku", api.GET(api.AuthMiddleWare(http.HandlerFunc(api.GetAllBuku))))
mux.Handle("/api/buku/", api.GET(api.AuthMiddleWare(http.HandlerFunc(api.GetBukuById))))
mux.Handle("/api/buku/", api.POST(api.AuthMiddleWare(http.HandlerFunc(api.CreateBuku))))
mux.Handle("/api/buku/", api.PUT(api.AuthMiddleWare(http.HandlerFunc(api.UpdateBuku))))
mux.Handle("/api/buku/", api.DELETE(api.AuthMiddleWare(http.HandlerFunc(api.DeleteBuku))))



	return api
}

func (api *API) Handler() *http.ServeMux {
	return api.mux
}

func (api *API) Start() {
	fmt.Println("starting web server at http://localhost:8080/")
	http.ListenAndServe(":8080", api.Handler())
}
