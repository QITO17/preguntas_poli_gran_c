import React, { useState } from "react";
import "./../App.css";
const Main = ({ respuestaMala, siguientePregunta, pregunta, posibles_respuestas, respuesta_correcta }) => {
  const respuesta_correcta1 = respuesta_correcta;
  const [res_usuario, setRes_usuario] = useState();

  const paso = ( posibles_respuestas ) => {
    setRes_usuario(posibles_respuestas)
  }

  const confirma_respuesta = () => {
    if( res_usuario === respuesta_correcta ){
      siguientePregunta()
    }else{
      respuestaMala()
    }
  }

  return (
    <>
      <div>
        <div className="flex flex-col items-center justify-center h-screen gap-8 border">
          <div className="border h-[600px] p-2   sm:w-[500px] w-[300px] bg-white/30 text-center flex justify-center flex-col gap-12 rounded-md">
            <h1 className=" font-semibold text-[1.3rem] ">{ pregunta }</h1>
            <div className="flex flex-col gap-5 p-2">
              <p className={` h-[50px] p-2 flex justify-center border hover:bg-white/50 gap-6 ${res_usuario === posibles_respuestas.res_1 ? 'bg-white/50' : ''}`} onClick={ () => paso(posibles_respuestas.res_1) } >A: { posibles_respuestas.res_1 }</p>

              <p className={` h-[50px] p-2 flex justify-center border hover:bg-white/50 gap-6 ${res_usuario === posibles_respuestas.res_2 ? 'bg-white/50' : ''}`} onClick={ () => paso(posibles_respuestas.res_2) } >B: { posibles_respuestas.res_2 }</p>

              <p className={` h-[50px] p-2 flex justify-center border hover:bg-white/50 gap-6 ${res_usuario === posibles_respuestas.res_3 ? 'bg-white/50' : ''}`} onClick={ () => paso(posibles_respuestas.res_3) } >C: { posibles_respuestas.res_3 }</p>

              <p className={` h-[50px] p-2 flex justify-center border hover:bg-white/50 gap-6 ${res_usuario === posibles_respuestas.res_4 ? 'bg-white/50' : ''}`} onClick={ () => paso(posibles_respuestas.res_4) } >D: { posibles_respuestas.res_4 }</p>

              <p className={` h-[50px] p-2 flex justify-center border hover:bg-white/50 gap-6 ${res_usuario === posibles_respuestas.res_5 ? 'bg-white/50' : ''}`} onClick={ () => paso(posibles_respuestas.res_5) } >E: { posibles_respuestas.res_5 }</p>
            </div>
            <button onClick={ () => confirma_respuesta() } className=" border h-10 font-semibold text-[1.3rem] hover:bg-white/50 transition-all ">Siguiente</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
