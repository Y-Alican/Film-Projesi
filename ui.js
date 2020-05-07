


class UI{
    
    static showAlert(type,message){
        const alert = document.createElement("div");
        alert.className=`alert alert-${type}`;
        alert.textContent = `${message}`;
        cardBody1.appendChild(alert);

        setTimeout(() => {
            alert.remove();
        }, 1500);
        

    }

    static addFilmtoUI(newFilm){
        films.innerHTML += 
        `
        <tr>
            <td><img src="${newFilm.url}" class="img-fluid img-thumbnail"></td>
            <td>${newFilm.name}</td>
            <td>${newFilm.director}</td>
            <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
       </tr>
        `;

    }


}