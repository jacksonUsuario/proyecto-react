import React from "react";
import { iPersona } from "../App";

interface iListaPersonasCP {
  listaPekrsonas: iPersona[];
  setPersonaSeleccionada: React.Dispatch<React.SetStateAction<String>>;
}

const ListaPersonasCP = ({
  listaPekrsonas,
  setPersonaSeleccionada,
}: iListaPersonasCP) => {
  return (
    <div>
      {listaPekrsonas.map(({ name, mail, password }, index) => {
        return (
          <div
            key={index}
            className="flex gap-2"
            onClick={() => setPersonaSeleccionada(name)}
          >
            <span>{name}</span>
            <span>{mail}</span>
            <span>{password}</span>
          </div>
        );
      })}
    </div>
  );
};

export default ListaPersonasCP;
