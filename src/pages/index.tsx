import { useState } from "react";
import Presente from "../components/Presente";
import Porta from "../components/Porta";
import PortaModel from "../model/porta";
import { atualizarPortas, criarPortas } from "./../functions/portas";
import Cartao from "./../components/Cartao";
import InputsNumeros from "../components/InputsNumeros";
import Link from "next/link";

export default function Index() {
  const [nPortas, setNPortas] = useState(3);
  const [portaSelecionada, setPortaSelecionada] = useState(1);

  const iniciarJogo = () => {
    localStorage.setItem("nPortas", `${nPortas}`);
    localStorage.setItem("portaSelecionada", `${portaSelecionada}`);
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        flexDirection: "column",
      }}
    >
      <div style={{ display: "flex" }}>
        <Cartao bgColor="#fa3c42">
          <h1 style={{ fontSize: 40 }}>Monty Hall</h1>
        </Cartao>
        <Cartao>
          <InputsNumeros
            value={nPortas}
            onChange={(novoNPortas) => {
              if (novoNPortas >= 3 && novoNPortas <= 100)
                setNPortas(novoNPortas);
            }}
            text="Quantidade de portas?"
          />
        </Cartao>
      </div>
      <div style={{ display: "flex" }}>
        <Cartao>
          <InputsNumeros
            value={portaSelecionada}
            onChange={(novaPortaSelecionada) => {
              if (novaPortaSelecionada <= nPortas && novaPortaSelecionada >= 1)
                setPortaSelecionada(novaPortaSelecionada);
            }}
            text="Porta com presente?"
          />
        </Cartao>
        <Cartao bgColor="#2dad1c" justifyCenter>
          <Link href="/jogo">
            <a
              style={{
                fontSize: 40,
                cursor: "pointer",
                padding: 50,
                fontWeight: "bold"
              }}
              onClick={iniciarJogo}
            >
              Iniciar
            </a>
          </Link>
        </Cartao>
      </div>
    </div>
  );
}
