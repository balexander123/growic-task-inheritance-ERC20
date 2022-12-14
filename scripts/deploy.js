const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });

async function main() {

  /*
    A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts,
    so cryptoDevsTokenContract here is a factory for instances of our CryptoDevToken contract.
    */
  const growicTokenContract = await ethers.getContractFactory(
    "GrowicTokenContract"
  );

  // deploy the contract
  const deployedGrowicTokenContract = await growicTokenContract.deploy(
  );

  // print the address of the deployed contract
  console.log(
    "Growic Token Contract Address:",
    deployedGrowicTokenContract.address
  );
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });