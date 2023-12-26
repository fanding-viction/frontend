import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/main";
import Header from "./components/Header";
import { useState, createContext } from "react";

export const AppContext = createContext();
function App() {
  const [account, setAccount] = useState("");
  const [balance, setBalance] = useState(0); //삭제해야함
  const [isSoundpackOpen, setIsSoundpackOpen] = useState(false);
  const [isCompleteOpen, setIsCompleteOpen] = useState(false);

  return (
    <AppContext.Provider
      value={{
        isSoundpackOpen,
        setIsSoundpackOpen,
        isCompleteOpen,
        setIsCompleteOpen,
        balance,
        setBalance,
      }}
    >
      <BrowserRouter>
        <div className="min-h-screen bg-gray-950 text-white pb-8">
          <Header account={account} setAccount={setAccount} />
          <Routes>
            <Route path="/" element={<Main account={account} />} />
          </Routes>
        </div>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
