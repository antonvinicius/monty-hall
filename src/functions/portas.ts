import PortaModel from "../model/porta";

export function criarPortas(
  quantidade: number,
  portaComPresente: number
): PortaModel[] {
  return Array.from({ length: quantidade }, (_, i) => {
    const numero = i + 1;
    const temPresente = numero === portaComPresente;
    return new PortaModel(numero, temPresente);
  });
}

export function atualizarPortas(
  portas: PortaModel[],
  portaModificada: PortaModel
): PortaModel[] {
  return portas.map((porta) => {
    const portaIgualAModificada = porta.numero === portaModificada.numero;
    if (portaIgualAModificada) {
      return portaModificada;
    } else {
      return portaModificada.aberta ? porta : porta.desselecionar();
    }
  });
}
