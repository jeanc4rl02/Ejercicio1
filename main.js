var app = new Vue({
  el: '#app',
  data: {
    usuarios: [
      {
        name: "Jasser",
        year: 2000,
      },
      {
        name: "Juan",
        year: 1978,
      },
      {
        name: "Mabel",
        year: 1973,
      },
      {
        name: "Pedro",
        year: 1998,
      },
      {
        name: "Rocio",
        year: 1985,
      },
    ],
    is: {
      new: false,
      play: false,
    },
    jugadores: JSON.parse(localStorage.getItem("jugadores")),
    anioRandom: localStorage.getItem("anioRandom"),
    anioIngresado: null,
    contador: 0,
    mensajeMayor: false,
    mensajeMenor: false,
    ganador: false,
    pista: false,
    pistaRender: "",
    perdio: false,
    mostrarJugadores: false,
    nombreIngresado: "",
    primer: localStorage.getItem("primer"),
    ultimo: localStorage.getItem("ultimo"),
    nombreNuevo: "",
    anioNuevo: null,
  },
  methods: {
    generarAño(){
      let random = Math.floor(Math.random()*(this.usuarios.length));
      this.anioRandom = this.usuarios[random].year
      let anioRandom = this.anioRandom.toString();
      this.primer = anioRandom.charAt(0);
      this.ultimo = anioRandom.charAt(anioRandom.length - 1);
      console.log(this.primer, this.ultimo);
      localStorage.setItem("anioRandom", this.anioRandom);
      localStorage.setItem("primer", this.primer);
      localStorage.setItem("ultimo", this.ultimo);
    },
    resetAnio(){
      localStorage.removeItem("anioRandom")
      window.location = "./index.html#play";
    },
    jugar() {
      if(localStorage.getItem("anioRandom") == null){
        this.generarAño();
        this.validaciones();
      } else {
        this.validaciones();
      }
      
      console.log("click en jugar");
    },
    validaciones(){
      if(this.contador < 7){
        if(this.anioIngresado > this.anioRandom){
        this.mensajeMenor = false;
        this.mensajeMayor = true;
        this.ganador = false;
        this.contador += 1
        } else if(this.anioIngresado < this.anioRandom){
          this.mensajeMenor = true;
          this.mensajeMayor = false;
          this.ganador = false;
          this.contador += 1
        } else {
          this.mensajeMenor = false;
          this.mensajeMayor = false;
          this.ganador = true;
          this.contador += 1
          this.pista = false;
          localStorage.removeItem("anioRandom")
        }

        if(this.contador >= 2){
          this.pista = true;
        } else {
          this.pista = false;
        }
      } else {
        this.perdio = true;
        this.pista = false;
        localStorage.removeItem("anioRandom")
        localStorage.removeItem("primer")
        localStorage.removeItem("ultimo")
      }
    },

    agregarJugador(){
      this.jugadores = [];
      this.jugadores = JSON.parse(localStorage.getItem("jugadores")) || []
      this.jugadores.push({
        nombre: this.nombreIngresado,
        intentos: this.contador
      })
      window.location.reload();
    localStorage.setItem("jugadores", JSON.stringify(this.jugadores));
  },
  showCreatedPlayer() {
    this.is = {
      new: !this.is.new,
    };
  },
  showPlay() {
    this.is = {
      new: false,
      play: true,
    };
  },
  showPlayers() {
    this.mostrarJugadores = !this.mostrarJugadores;
    console.log(this.mostrarJugadores);
  },
  addPlayers() {
    const verificarUsers = () => {
      let existeJugador = this.usuarios.find(
        (el) => el.name.toLowerCase() === this.nombreNuevo.toLowerCase()
      );

      if (this.nombreNuevo === "" || this.anioNuevo === "") {
        alert("Todos los campos son obligatorios");
        return false;
      }
      if (existeJugador) {
        alert("El nombre  ya existe, por favor ingrese otro");
        return false;
      } else {
        this.usuarios.push({
          name: this.nombreNuevo,
          year: this.anioNuevo,
        });

        localStorage.setItem("usuarios", JSON.stringify(this.usuarios));
        this.nombreNuevo = "";
        this.anioNuevo = "";
      }
    };
    verificarUsers();
  },

  },
  
})