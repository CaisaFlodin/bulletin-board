import "./App.css";
import BulletinBoard from "./components/BulletinBoard";
import React from "react";

function App() {
  let data = [
    {
      question: "Vad är tre fördelar med att använda React?",
      answer: [
        "M.h.a. Virtual DOM kan vi på ett enkelt sätt skapa Single Page Apps, vilket resulterar i ett smidigt UI och därmed bättre UX.",
        "Komponentbaserat - varje del av en webbsida kan skapas, underhållas och återanvändas individuellt. Ändringar som görs i en komponent behöver inte påverka de andra.",
        "Data förvaras i JS-variabler istället för i DOM:en där den måste hittas innan den kan användas.",
      ],
    },
    {
      question: `Vad betyder Single Page Application och vad skiljer det från en "vanlig" webbplats?`,
      answer: [
        "Att servern endast behöver skicka en enda HTML-sida till webbläsaren för att webbplatsen ska kunna köras fullt ut. Alla ändringar av innehållet sker i webbläsaren. I traditionella webbplatser skickas en förfrågan till servern om en ny HTML-sida varje gång användaren gör en ändring på sidan.",
      ],
    },
    {
      question: "Nämn tre skillnader mellan React och Angular.",
      answer: [
        "React är ett JavaScript-bibliotek och Angular är ett ramverk.",
        "React uppdaterar endast den virtuella DOM:en, medan Angular uppdaterar den riktiga.",
        "React är skrivet i JavaScript och Angular i TypeScript.",
      ],
    },
  ];
  return (
    <div className="App">
      <BulletinBoard list={data} />
    </div>
  );
}

export default App;
