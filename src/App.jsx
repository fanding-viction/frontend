import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, createContext } from "react";

import Web3 from "web3";
import { CONTRACT_ABI, CONTRACT_ADDRESS } from "./web3.config";

import Main from "./pages/main";
import Header from "./components/Header";

export const AppContext = createContext();

function App() {
  const web3 = new Web3("https://rpc-testnet.viction.xyz");
  const contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);

  const [account, setAccount] = useState("");
  const [balance, setBalance] = useState();
  const [isCompleteOpen, setIsCompleteOpen] = useState(false);

  const toggleCompleteModal = () => {
    setIsCompleteOpen(!isCompleteOpen);
  };

  return (
    <AppContext.Provider
      value={{
        web3,
        contract,
        account,
        setAccount,
        balance,
        setBalance,
        isCompleteOpen,
        setIsCompleteOpen,
        toggleCompleteModal,
      }}
    >
      <BrowserRouter>
        <div className="min-h-screen bg-gray-950 text-white pb-8">
          <Header />
          <Routes>
            <Route path="/" element={<Main account={account} />} />
          </Routes>
        </div>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
