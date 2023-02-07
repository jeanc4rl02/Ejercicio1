var app = new Vue({
  el: "#app",
  data: {
    usuarios: [],
    is: {
      new: false,
      play: false,
    },
    jugadores: [],
    anioRandom: 0,
    anioIngresado: 1985,
    contador: 0,
    mensajeMayor: false,
    mensajeMenor: false,
    ganador: false,
    pista: false,
    perdio: false,
    nombreIngresado: "",
    anioJugador: "",
  },
  methods: {
    generarAño() {
      let random = Math.floor(Math.random() * this.usuarios.length);
      this.anioRandom = this.usuarios[random].year;
      localStorage.setItem("anioRandom", this.anioRandom);
    },
    jugar() {
      if (this.contador < 7) {
        if (this.anioIngresado > this.anioRandom) {
          this.mensajeMenor = false;
          this.mensajeMayor = true;
          this.ganador = false;
          this.contador += 1;
        } else if (this.anioIngresado < this.anioRandom) {
          this.mensajeMenor = true;
          this.mensajeMayor = false;
          this.ganador = false;
          this.contador += 1;
        } else {
          this.mensajeMenor = false;
          this.mensajeMayor = false;
          this.ganador = true;
          this.contador += 1;
        }

        if (this.contador >= 2) {
          this.pista = true;
        } else {
          this.pista = false;
        }
      } else {
        this.perdio = true;
      }
    },

    // Funciones aportadas por jasser
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
    },

    addPlayers() {
      const verificarUsers = () => {
        let existeJugador = this.usuarios.find(
          (el) => el.name.toLowerCase() === this.nombreIngresado.toLowerCase()
        );

        if (this.nombreIngresado === "" || this.anioJugador === "") {
          alert("Todos los campos son obligatorios");
          return false;
        }
        if (existeJugador) {
          alert("El nombre  ya existe, por favor ingrese otro");
          return false;
        } else {
          this.usuarios.push({
            name: this.nombreIngresado,
            year: this.anioJugador,
          });

          localStorage.setItem("usuarios", JSON.stringify(this.usuarios));
          this.nombreIngresado = "";
          this.anioJugador = "";
          e.target.reset();
        }
      };
      verificarUsers();
    },
  },

  // Funciones aportadas por jasser
  created() {
    let usuarios = JSON.parse(localStorage.getItem("usuarios"));

    if (usuarios !== null) {
      this.usuarios = usuarios;
    }
  },
});
