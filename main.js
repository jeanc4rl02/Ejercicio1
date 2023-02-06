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
    anioRandom: 0,
    anioIngresado: 1985,
    contador: 0,
    mensajeMayor: false,
    mensajeMenor: false,
    ganador: false,
    pista: false,

  },
  methods: {
    jugar() {
      let random = Math.floor(Math.random()*(this.usuarios.length));
      this.anioRandom = this.usuarios[random].year
      if(this.anioIngresado > this.anioRandom){
        this.mensajeMenor = false;
        this.mensajeMayor = true;
        this.ganador = false;
      } else if(this.anioIngresado < this.anioRandom){
        this.mensajeMenor = true;
        this.mensajeMayor = false;
        this.ganador = false;
      } else {
        this.mensajeMenor = false;
        this.mensajeMayor = false;
        this.ganador = true;
      }
      this.contador += 1

      if(this.contador >= 2){
        this.pista = true;
      }

    }
  }
})