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
    perdio: false,
    nombreIngresado: "",

  },
  methods: {
    generarAño(){
      let random = Math.floor(Math.random()*(this.usuarios.length));
      this.anioRandom = this.usuarios[random].year
      localStorage.setItem("anioRandom", this.anioRandom);
    },
    resetAnio(){
      localStorage.removeItem("anioRandom")
      window.location = "./index.html#new";
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
        }

        if(this.contador >= 2){
          this.pista = true;
        } else {
          this.pista = false;
        }
      } else {
        this.perdio = true;
        localStorage.removeItem("anioRandom")
      }
    },

    agregarJugador(){
    this.jugadores.push({
      nombre: this.nombreIngresado,
      intentos: this.contador
    })

    localStorage.setItem("jugadores", JSON.stringify(this.jugadores));
  },
  showCreatedPlayer() {
    this.is = {
      new: true,
      play: false,
    };
  },
  showPlay() {
    this.is = {
      new: false,
      play: true,
    };
  }

  },
  
})