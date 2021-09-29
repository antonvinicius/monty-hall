interface CartaoProps {
  bgColor?: string;
  children?: any;
  justifyCenter?: boolean;
}

export default function Cartao(props: CartaoProps) {
  const { bgColor, justifyCenter } = props;

  return (
    <div
      style={{
        width: 200,
        height: 200,
        backgroundColor: bgColor ? bgColor : "#fff",
        margin: 5,
        color: "#fff",
        display: "flex",
        alignItems: "center",
        padding: 20,
        justifyContent: justifyCenter ? "center" : "normal",
      }}
    >
      {props.children}
    </div>
  );
}
