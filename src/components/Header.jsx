import Web3 from "web3";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { MdAlbum } from "react-icons/md";
import { BiWallet } from "react-icons/bi";
import { AiFillHeart } from "react-icons/ai";

const web3 = new Web3("https://rpc-testnet.viction.xyz");
const Header = ({ account, setAccount }) => {
  const [balance, setBalance] = useState();

  const getBalance = async () => {
    try {
      const response = await web3.eth.getBalance(account);

      setBalance(response / 10 ** 18);
    } catch (error) {
      console.error(error);
    }
  };

  const onClickAccount = async () => {
    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      setAccount(accounts[0]);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getBalance();
  }, [account]);

  return (
    <header className="first-letter:max-w-screen-xl mx-auto p-4 flex justify-between items-center font-bold">
      <Link to="/">
        <div className="flex items-center text-main">
          <MdAlbum size={28} />
          <div className="ml-1 text-xl">Fanding</div>
        </div>
      </Link>
      <div className="flex items-center">
        {account && balance && (
          <div className="flex text-gray-400 text-sm">{balance} CUSD</div>
        )}
        {account ? (
          <div className="flex items-center p-2 bg-gray-800 rounded-full ml-4">
            <div className="bg-main w-6 h-6 rounded-full flex justify-center items-center">
              <AiFillHeart />
            </div>
            <div className="ml-1">
              {account.substring(0, 4)}...
              {account.substring(account.length - 4)}
            </div>
          </div>
        ) : (
          <button
            className="flex items-center p-2 bg-gray-800 rounded-full ml-4"
            onClick={onClickAccount}
          >
            <div className="bg-main w-6 h-6 rounded-full flex justify-center items-center">
              <BiWallet />
            </div>
            <div className="ml-1">Connect</div>
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
