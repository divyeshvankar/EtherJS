const ethers = require('ethers');
const abi = require('./contract.json')
require('dotenv').config()

const API = process.env.API_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY

const readSmartContract= async()=>{
    const provider = new ethers.JsonRpcProvider("https://eth-sepolia.g.alchemy.com/v2/O05b4kRDsD9YqV0RJ0zHa1nAD7pek75q");
    const contractAddress ="0x279e3F29aEFa2841c50d9280a19AC6d19e209f68"
    const contract= new ethers.Contract (contractAddress,abi,provider)
    // console.log(contract)
    const data = await contract.retrieve();
    console.log(Number(data));



}

const writeSmartContract= async()=>{
    readSmartContract()
    const provider = new ethers.JsonRpcProvider(`https://eth-sepolia.g.alchemy.com/v2/${API}`);
    const contractAddress ="0x279e3F29aEFa2841c50d9280a19AC6d19e209f68"
    const privateKey =`${PRIVATE_KEY}`
    const wallet = new ethers.Wallet(privateKey,provider);
    const contract= new ethers.Contract (contractAddress,abi,wallet)
    // console.log(contract)
    await contract.store(20);
    console.log("Transation succefull");
    


}
// writeSmartContract();
readSmartContract();


