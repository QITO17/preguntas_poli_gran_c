import { useState } from "react";
import Main from "./components/Main.jsx";
import { datosDesordenados } from "./components/Preguntas_respuestas.js";
import swal from "sweetalert";

function App() {
  const [indicePregunta, setIndicePregunta] = useState(0);
  const [nivel, setNivel] = useState(1);
  const [nombreConcursante, setNombreConcursante] = useState("Agregar Nombre");
  const cambiaNombre = () => {
    swal("Escribe tu nombre:", {
      content: "input",
    })
    .then((value) => {
      setNombreConcursante("Mucha Suerte " +value)
    });
  }
  const siguientePregunta = () => {
    setIndicePregunta(indicePregunta + 1);
    swal({
      title: "Buen Trabajo Correcto!",
      text: "Haz click en en boton!",
      icon: "success",
      button: "Continuar!",
    });

    if (
      indicePregunta === 4 ||
      indicePregunta === 9 ||
      indicePregunta === 14 ||
      indicePregunta === 19
    ) {
      setNivel(nivel+1);
      swal("Nivel superado!", `Felicidades estas en el nivel: ${nivel}`);
    }

    if (indicePregunta === 24) {
      swal(
        "Felicidades haz ganado!",
        `Eres lo maximo ${nombreConcursante} haz ganado FELICIDADES!!!!!!!!`
      );
    }
  };

  const respuestaMala = () => {
    setIndicePregunta(0);
    
    swal({
      title: "Incorrecto!",
      text: "Haz click en en boton!",
      icon: "error",
      button: "Continuar!",
    });
  };


  return (
    <>
      <div className=" h-44 sm:h-0 relative flex items-center">
        <div className=" absolute top-1 max-w-[150px]">
          <img src="./../public/logo.png" alt="" />
        </div>
        <p onClick={ cambiaNombre } className=" border absolute right-6 top-14 hover:cursor-pointer hover:bg-white/50 transition-all p-2 rounded-md ">{ nombreConcursante }</p>
      </div>
      {datosDesordenados.map(
        (dato, index) =>
          index === indicePregunta && (
            <Main
              respuestaMala={respuestaMala}
              siguientePregunta={siguientePregunta}
              key={dato.pregunta}
              pregunta={dato.pregunta}
              posibles_respuestas={dato.posibles_respuestas}
              respuesta_correcta={dato.respuesta_correcta}
            />
          )
      )}
    </>
  );
}

export default App;
