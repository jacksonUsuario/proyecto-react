import { useState } from "react";
import ListaPersonasCP from "./components/Listapersonas";

export interface iPersona {
  name: String;
  mail: String;
  password: String;
}

function App() {
  const [count, setCount] = useState(10);

  const handlerCount = (count: number) => {
    setCount(count);
  };

  const [personaSeleccionada, setPersonaSeleccionada] =
    useState<String>("jackson");

  const [listaPersonas, setListaPersonas] =useState<iPersona[]> ([
    {
      name: "jackson",
      mail: "jackson@ham,eil",
      password: "kilo",
    },
    {
      name: "arley",
      mail: "jackson@ham,eil",
      password: "kilo",
    },
    {
      name: "emanuel",
      mail: "jackson@ham,eil",
      password: "kilo",
    },
    {
      name: "erick",
      mail: "jackson@ham,eil",
      password: "kilo",
    },
    {
      name: "daniel",
      mail: "jackson@ham,eil",
      password: "kilo",
    },
  ]);

  return (
    <div>
      <p>{personaSeleccionada}</p>
      <ListaPersonasCP
        listaPekrsonas={listaPersonas}
        setPersonaSeleccionada={setPersonaSeleccionada}
      />
      <form onSubmit={(ev) => {
        ev.preventDefault()
        let nuevaPersona:iPersona = {
          mail:"",
          name:"",
          password:""
        }

        ev.currentTarget.childNodes.forEach((input:any, index, nodes) => {
          if(nodes.length - 1 !== index ){
            nuevaPersona[input.name as keyof iPersona] = input.value
          }
        });
       setListaPersonas([...listaPersonas, nuevaPersona])
      }} className="flex flex-col gap-1 items-start">
        <input type="text" name="name" placeholder="mombre" className="border" />
        <input type="text" name="mail" placeholder="correo" className="border" />
        <input type="text" name="password" placeholder="contraseña" className="border" />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default App;
