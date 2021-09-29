import React, { useState } from "react";
import Porta from "../components/Porta";
import { criarPortas, atualizarPortas } from "../functions/portas";
import PortaModel from "../model/porta";
import Link from 'next/link'

import styles from "../styles/Jogo.module.css";

export default function jogo() {
  const [portas, setPortas] = useState(criarPortas(3, 2));

  const attPortas = (novaPorta: PortaModel) => {
    setPortas(atualizarPortas(portas, novaPorta));
  };

  const renderizarPortas = () =>
    portas.map((porta) => {
      return <Porta porta={porta} onChange={attPortas} />;
    });

  return (
    <>
      <div id={styles.jogo}>
        <div className={styles.portas}>
            {renderizarPortas()}
        </div>
        <div className={styles.botoes}>
            <Link href="/">
                <button>REINICIAR JOGO</button>
            </Link>
        </div>
      </div>
    </>
  );
}
