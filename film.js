class Film {
    constructor(name,director,url){
        this.name = name;
        this.director = director;
        this.url = url;
    }

    static getStorage(){
        let films;
        if(localStorage.getItem("films")=== null){
            films = [];
        } else {
            films = JSON.parse(localStorage.getItem("films"))
        }
        return films;
    }
}