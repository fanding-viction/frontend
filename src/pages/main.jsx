import Web3 from "web3";
import Intro from "../components/Intro";
import { CONTRACT_ABI, CONTRACT_ADDRESS } from "../web3.config";
import { useEffect, useState } from "react";
import Soundpacks from "../components/Soundpacks";

const web3 = new Web3("https://rpc-testnet.viction.xyz");
const contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);

const Main = ({ account }) => {
  const getMintedNft = async () => {
    try {
      if (!contract || !account) return;
      // const response = await window.ethereum.request({
      //   method: "eth_sendTransaction",
      //   params: [
      //     {
      //       from: account,
      //       to:
      //       data: orderContract.methods
      //         .buyAlbum(
      //     ,

      //         )
      //         .encodeABI(),
      //       gas: "100000",
      //       value: a,
      //     },
      //   ],
      // });

      //await contract.methods.buyAlbum();
      // console.log(response);
    } catch (error) {
      console.error(error);
    }
  };
  //buyAlbum 해주고 버튼 누르면 작동하도록 연결

  return (
    <>
      <Intro />
      <Soundpacks />
    </>
  );
};

export default Main;
