import { useState } from "react";
import Presente from "../components/Presente";
import Porta from '../components/Porta';
import PortaModel from '../model/porta';

export default function Index() {
  const [p1, setP1] = useState(new PortaModel(1));

  const atualizarPorta = (novaPorta: PortaModel) => {
    setP1(novaPorta)
  }

  return (
    <div style={{display: 'flex'}}>
      <Porta porta={p1} onChange={atualizarPorta} />
    </div>
  )
}