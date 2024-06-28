import { useState,useEffect } from 'react'
import abi from "./contractJson/donation.json"
import {ethers} from "ethers"
import Memos from './components/Memos'
import Donate from './components/Donate'
import donation from "./donation.png";
import './App.css'


function App() {
  
  const [state,setState]=useState({
    provider:null,
    signer:null,
    contract:null
  })
  const [account,setAccount]=useState('Not connected');
  useEffect(()=>{
    const template=async()=>{
   
      const contractAddres="0xF4E667Ff80DD21b3262D03F6851A4983635a53D9";
      const contractABI=abi.abi;
      //Metamask part
      //1. In order do transactions on goerli testnet
      //2. Metmask consists of infura api which actually help in connectig to the blockhain
      try{
        
        
        const account = await ethereum.request({
          method:"eth_requestAccounts"
        })
 
        window.ethereum.on("accountsChanged",()=>{
         window.location.reload()
        })
        setAccount(account);
        const provider = new ethers.providers.Web3Provider(window.ethereum);//read the Bloc donationn
        const signer =  provider.getSigner(); //write the bloc donationn
        
        const contract = new ethers.Contract(
          contractAddres,
          contractABI,
          signer
        )
        console.log(contract)
      setState({provider,signer,contract});
       
      }catch(error){
        console.log(error)
      }
    }
    template();
  },[])
  return (
    <div className='App'>
    <img src= {donation} className="App-header img-fluid" alt=".." width="100%" />
    
    <p style={{ marginTop: "10px", textAlign: "center", color:"white" }}>
      <small>Connected Account - {account}</small>
    </p>
    <Donate state={state} />
    <Memos state={state} />
  
   
      
   
  </div>
  )
}

export default App