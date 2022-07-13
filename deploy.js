const {meta_hash} = require("./output/meta_hash");
const {editionSize} = require("./input/config");

const hre = require("hardhat");
const fs = require('fs');

async function main() {
  let meta_URI = `ipfs://${meta_hash}/metadata/{id}.json`;  
  const NFTContract = await hre.ethers.getContractFactory("NFTContract");
  const nftContract = await NFTContract.deploy(editionSize, meta_URI);
  await nftContract.deployed();
  console.log("nftContract deployed to:", nftContract.address);

}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });