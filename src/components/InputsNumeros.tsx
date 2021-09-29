import { useState } from "react";

interface InputNumerosProps {
  value: number,
  onChange: (num: number) => void,
  text: string
}

export default function InputsNumeros(props: InputNumerosProps) {
  const {onChange, text, value} = props

  return (
    <div
      style={{
        color: "black",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <p style={{ fontSize: 15, margin: 0 }}>{text}</p>
      <h1 style={{ fontSize: 40, margin: 0 }}>{value}</h1>
      <div style={{ display: "flex" }}>
        <button
          style={{
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 30,
            height: 30,
            border: "none",
            fontSize: 20,
            backgroundColor: "#ddd",
            borderRadius: 10,
            padding: 10,
            margin: 5,
          }}
          onClick={() => onChange(value + 1)}
        >
          +
        </button>
        <button
          style={{
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 30,
            height: 30,
            border: "none",
            fontSize: 20,
            backgroundColor: "#ddd",
            borderRadius: 10,
            padding: 10,
            margin: 5,
          }}
          onClick={() => onChange(value - 1)}
        >
          -
        </button>
      </div>
    </div>
  );
}
