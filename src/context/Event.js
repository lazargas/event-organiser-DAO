import React from 'react'
import {useState,useContext} from 'react';
import Web3Modal from "web3modal";
import { ethers } from "ethers";
import { create as ipfsHttpClient } from "ipfs-http-client";
import axios from "axios";
import { Buffer } from 'buffer';

//internal imports 
import { EventAddress, EventAddressABI } from './constants';

const projectId = "2KMFiIOCsUH5ce12sXw9sp2iJUv";
const projectSecret = "83d04155f5f6cd6ff9f0a20f301c9c6a";
const auth =
'Basic ' + Buffer.from(projectId + ':' + projectSecret).toString('base64');

const client = ipfsHttpClient({
  host: "ipfs.infura.io",
  port: 5001,
  protocol: "https",
  //apiPath: "/api/v0",
  headers: {
    authorization: auth,
  },
});

const fetchContract = (signerOrProvider) =>
  new ethers.Contract(EventAddress, EventAddressABI, signerOrProvider);

export const EventContext = React.createContext();




export const EventProvider = ({children}) => {
    
    const [currentAccount, setCurrentAccount] = useState("");
    const [error, setError] = useState("");
    const [formInput, setFormInput] = useState({
      name:"",
      date:"",
      price:0,
      ticketCount:0
    })


    const checkIfWalletIsConnected = async () => {
        if (!window.ethereum) return setError("Please Install MetaMask");
    
        const account = await window.ethereum.request({ method: "eth_accounts" });
    
        if (account.length) {
          setCurrentAccount(account[0]);
          console.log("account connected");
        } else {
          setError("Please Install MetaMask & Connect, Reload");
        }
      };

      const connectWallet = async () => {
        if (!window.ethereum) return alert("Please install MetaMask");
    
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
    
        setCurrentAccount(accounts[0]);
      };

      const createEvent = async () =>{
        
        const {name,date,price,ticketCount} = formInput;

        const web3Modal = new Web3Modal();
        const connection = await web3Modal.connect();
        const provider = new ethers.providers.Web3Provider(connection);
        const signer = provider.getSigner();
        const contract = fetchContract(signer);
        
        const event = await contract.createEvent(name,date,Number(price),Number(ticketCount));
        event.wait();

      }
  
  return (
    <EventContext.Provider
    value={{
        checkIfWalletIsConnected,
        connectWallet,
        currentAccount,
        setCurrentAccount,
        formInput,
        setFormInput
    }}>
    
    {children}
    </EventContext.Provider>
    
  )
}

