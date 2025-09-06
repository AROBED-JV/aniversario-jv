import React, { useState } from 'react';

export default function App() {
  const [fase, setFase] = useState(0);

  const fases = [
    { texto: "🎉 Oi JV! Bem-vindo ao seu jogo surpresa de aniversário!", opcoes: ["Começar"] },
    { texto: "Você encontra a Débora no mapa mágico. Ela é morena clara, tem cabelo castanho escuro com pontas claras e usa óculos. 👩‍🦰👓", opcoes: ["Continuar"] },
    { texto: "Débora: 'Oi amor! Preparei algo especial pra você 💕'", opcoes: ["Ver presente"] },
    { texto: "🎂 Um bolo mágico aparece com a mensagem: 'Feliz Aniversário JV! Te amo muito! 💖'", opcoes: ["Finalizar"] },
    { texto: "Fim 🎁 Obrigada por jogar, esse foi meu jeitinho de estar perto de você hoje!", opcoes: [] },
  ];

  const handleClick = () => {
    if (fase < fases.length - 1) setFase(fase + 1);
  };

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>Aniversário do JV 🎂</h1>
      <p>{fases[fase].texto}</p>
      {fases[fase].opcoes.map((op, i) => (
        <button key={i} onClick={handleClick}>{op}</button>
      ))}
    </div>
  );
}
