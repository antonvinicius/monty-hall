import React, { useEffect, useState } from "react";
import Porta from "../components/Porta";
import { criarPortas, atualizarPortas } from "../functions/portas";
import PortaModel from "../model/porta";
import Link from "next/link";

import styles from "../styles/Jogo.module.css";

export default function jogo() {
  const [portas, setPortas] = useState([]);

  const attPortas = (novaPorta: PortaModel) => {
    setPortas(atualizarPortas(portas, novaPorta));
  };

  const renderizarPortas = () =>
    portas.map((porta, i) => {
      return <Porta key={i} porta={porta} onChange={attPortas} />;
    });

  useEffect(() => {
    const nPortas = +localStorage.getItem('nPortas')
    const portaSelecionada = +localStorage.getItem('portaSelecionada')
    setPortas(criarPortas(nPortas, portaSelecionada))
  }, [])

  return (
    <>
      <div id={styles.jogo}>
        <div className={styles.portas}>{renderizarPortas()}</div>
        <div className={styles.botoes}>
          <Link href="/">
            <button>REINICIAR JOGO</button>
          </Link>
        </div>
      </div>
    </>
  );
}
