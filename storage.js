class Storage {

    static addFilmtoStorage(newFilm){
        const films = Film.getStorage(); 
        films.push(newFilm);

        localStorage.setItem("films",JSON.stringify(films))
    }

    static deleteFromStorage(element){
        let films = Film.getStorage(); 
        films.forEach((e,i) => {
            if (e.name === element){
                films.splice(i,1)
            }
        });
        localStorage.setItem("films",JSON.stringify(films))
    }
}