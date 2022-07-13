require('dotenv').config();
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337,
    },
    local: {
        url: "http://127.0.0.1:8545",
        accounts: [process.env.LOCAL_PRIVATE_KEY]
    },
    matic: {
      url: "https://rpc-mumbai.maticvigil.com",
      accounts: [process.env.PRIVATE_KEY]
    },
    matic2: {
      url: "https://rpc-mumbai.matic.today",
      accounts: [process.env.PRIVATE_KEY]
    },
    moralisNode: {
      url: "https://speedy-nodes-nyc.moralis.io/a876ae57f96c4ef458c93cbc/polygon/mumbai",
      accounts: [process.env.PRIVATE_KEY]
    }
  },
  etherscan: {
    apiKey: process.env.POLYGONSCAN_API_KEY
  },

  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },  
};
