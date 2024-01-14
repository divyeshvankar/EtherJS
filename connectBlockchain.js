const ethers = require('ethers');

const connectToBlockchain= async()=>{
    const provider = new ethers.JsonRpcProvider("https://ethereum.publicnode.com");
    const balance = await provider.getBalance('')
    const etherBalance = ethers.formatEther(balance)
    console.log(etherBalance)

}

connectToBlockchain();