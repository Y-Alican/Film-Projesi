
const form = document.querySelector("#film-form");
const filmName =document.querySelector("#title");
const filmDirector =document.querySelector("#director");
const filmLink = document.querySelector("#url");
const cardBody1 = document.querySelector(".card-body");
const cardBody2 = document.querySelectorAll(".card-body")[1];
const tBody = document.querySelector("#films");






function addFilm(e){
     
    if(filmName.value === "" || filmDirector.value === "" || filmLink.value === ""){

        UI.showAlert("danger","Tüm alanları doldurun");
    }else{
        const newFilm = new Film(filmName.value,filmDirector.value,filmLink.value);
        UI.addFilmtoUI(newFilm);
        Storage.addFilmtoStorage(newFilm);

        UI.showAlert("success","Film başarıyla eklendi");
        
        
        
    }
   
    filmLink.value = "";
    filmDirector.value = "";
    filmName.value = "";
    e.preventDefault();
}

function getFilmtoUI(){
    let filmsStorage = Film.getStorage(); 
    filmsStorage.forEach((element) => {
        UI.addFilmtoUI(element)
    });
}


function deleteFilm(e){
    if(e.target.id === "delete-film" ){
        Storage.deleteFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
        
        e.target.parentElement.parentElement.remove();
        
        

    }

    else if (e.target.id ==="clear-films"){
        localStorage.removeItem("films");
        while(tBody != null){
         tBody.firstChild.remove();
     }
       
    }
}




(function(){
    form.addEventListener("submit", addFilm);
    document.addEventListener("DOMContentLoaded", getFilmtoUI);
    cardBody2.addEventListener("click", deleteFilm);
})();

