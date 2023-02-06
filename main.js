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
    anioRandom: 0,
    anioIngresado: 1985,
    contador: 0,
    mensajeMayor: false,
    mensajeMenor: false,
    ganador: false,
    pista: false,
    perdio: false,

  },
  methods: {
    generarAño(){
      let random = Math.floor(Math.random()*(this.usuarios.length));
      this.anioRandom = this.usuarios[random].year
      localStorage.setItem("anioRandom", this.anioRandom);
    },
    jugar() {
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
      }
      
      console.log("año "+this.anioRandom);
      console.log("es mayor "+this.mensajeMayor);
      console.log("es menor "+this.mensajeMenor);
      console.log("ganaste "+this.ganador);
      console.log("pista "+this.pista);
      console.log(localStorage.getItem("anioRandom"));
      console.log("perdió? "+this.perdio);
    }
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
})