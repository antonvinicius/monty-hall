import styles from "../styles/Porta.module.css";
import PortaModel from "./../model/porta";

interface PortaProps {
  porta: PortaModel;
  onChange: (novaPorta: PortaModel) => void;
}

export default function Porta(props: PortaProps) {
  const { porta, onChange } = props;
  const selecionada = porta.selecionada && !porta.aberta ? styles.selecionada : "";

  const abrirPorta = (e) => {
    onChange(porta.abrir())
    e.stopPropagation()
  }

  const alternarSelecao = (e) => onChange(porta.alternarSelecao())

  const renderizarPorta = () => (
    <div className={styles.porta}>
      <div className={styles.numero}>{porta.numero}</div>
      <div className={styles.macaneta} onClick={abrirPorta}></div>
    </div>
  );

  return (
    <div
      className={styles.area}
      onClick={alternarSelecao}
    >
      <div className={`${styles.estrutura} ${selecionada}`}>
        {porta.aberta ? false : renderizarPorta()}
      </div>
      <div className={styles.chao}></div>
    </div>
  );
}
