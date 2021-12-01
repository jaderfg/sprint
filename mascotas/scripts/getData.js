let btnGato = document.getElementById('btnGato');
let btnPerro = document.getElementById('btnperro');

const getMascota = async (url) => {
    let muestraMascota = document.querySelector(".grid-mascotas");
    muestraMascota.innerHTML = "";
    const resp = await fetch(url);
    const data = await resp.json();
    data.forEach((mascota) => {
      const { id, imagen, nombre, raza } = mascota;
      muestraMascota.innerHTML += `
          <div class="col mascotas">
          <a href="javascript:getMascotaDetalle ('${url}/${id}');" class="enlace-detalle-mascota">
              <div class="card bg-dark text-white gradiente">                
                  <img src="${imagen}" class="card-img" alt="...">
                  <div class="card-img-overlay">
                          <h5 class="card-title body2Bold">${nombre}</h5>
                          <p class="card-text body2Regular">${raza}</p>
                  </div>
              </div>
          </a>
      </div>
          `;
    });
  };

btnGato.addEventListener('click', () => {
    getMascota('http://localhost:3000/gatos');
})

btnPerro.addEventListener('click', (e) => {
    getMascota('http://localhost:3001/perros');
})

const getMascotaDetalle = async (url) => {
    let muestraMascotaDetalle = document.querySelector(".detalle-mascota");
    let muestraMascota = document.querySelector(".grid-mascotas");
    let muestraMascotas = document.querySelector("header");
    muestraMascota.classList.add("ocultarmascotas");
    muestraMascotas.classList.add("ocultarmascotas");
    muestraMascotaDetalle.innerHTML = "";
    const resp = await fetch(url);
    const data = await resp.json();
    const {
      id,
      imagen,
      nombre,
      raza,
      edad,
      ubicacion,
      personalidad,
      historia,
      genero,
      
    } = data;
    muestraMascotaDetalle.innerHTML  += `
        <div class="col mascotas-info">
        <a href="#" class="enlace-detalle-mascota"></a>

            <div class="card gradiente">
            <a href=/index.html> <img id="Atras" src=.img/Atras.png" alt"">                
                <img src="${imagen}" class="card-img" alt="...">

                <div class="card-info">
                <div id="info2">
                        <h1 class="card-text body2Bold">${nombre}  <img id"raza" src="${genero}" </h1>
                        <buttom id="btn-fav"><img id=""
                        </buttom>
                </div>
                <div class="row row-col-2 row-col-md-2" id="raza-edad">        
                        <p class="card-text"> <img id="raza" src="">${raza}</p>
                        <p class="card-text"> <img id="raza" src="">${edad}</p>
                </div>
                <div class="ubi">
                <img id="ubicacion" src=/"" alt"">
                <p class="card-text" id="ubi">${ubicacion}</p>
                </div>
                <h5 class="perso">Personalidad <br> ${personalidad}</h5>
                <div class="data_historia">
                <h6 class="card-text history">Historia de${nombre}</h6> <br>
                <p class="card-text history2">Historia de${historia}</p>        

                </div>
            </div>
        </a>
    </div>
        `
        document.getElementById("btn-fav").addEventListener('click', () =>{
            const favoritesString = localStorage.getItem("favorites") || "[]"
            const favorites = JSON.parse(favoritesString)
            toggleArrayItem(favorites.data)
            localStorage.setItem("favorites", JSON.stringify(favorites))
        })
    };

    function toggleArrayItem(array,value){
        const indice = array.finIndex(element => element.id === value.id);
        if(indice === -1)
        array.push(value);
        else
            array.splice(indice,1);
    }
