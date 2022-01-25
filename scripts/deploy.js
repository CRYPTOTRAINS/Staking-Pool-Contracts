require("@nomiclabs/hardhat-waffle");
const fs = require('fs');
const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  
    console.log("Deploying contracts with the account:", deployer.address);
  
    console.log("Account balance:", (await deployer.getBalance()).toString());

    const ENMT = await ethers.getContractFactory("ENMT");
    const enmt =await ENMT.deploy("CTRAIN", "CTR", 18, "0x77d715A989AfaFBCAEF671CEDBe010faDD0dBeAD", 30000000);

    const StakeToken = await ethers.getContractFactory("StakeToken");
    const staketoken = await StakeToken.deploy(enmt.address, enmt.address);

    console.log("ENMT address:", enmt.address);
    console.log("StakeToken address:", staketoken.address);

    let config = `
    export const enmtaddress = "${enmt.address}"
    export const staketoken = "${staketoken.address}"
      `
    let data = JSON.stringify(config)
    fs.writeFileSync('config.js', JSON.parse(data))

    //  To save the contract's artifacts and address in the frontend directory
    saveFrontendFiles(enmt);
    saveFrontend(staketoken);
  }


  function saveFrontendFiles(enmt) {
    const fs = require("fs");
    const contractsDir = __dirname + "/../src/contracts";
  
    if (!fs.existsSync(contractsDir)) {
      fs.mkdirSync(contractsDir);
    }
  
    fs.writeFileSync(
      contractsDir + "/contract-address.json",
      JSON.stringify({ ENMT: enmt.address }, undefined, 2)
    );
  
    const ENMTArtifact = artifacts.readArtifactSync("ENMT");
  
    fs.writeFileSync(
      contractsDir + "/ENMT.json",
      JSON.stringify(ENMTArtifact, null, 2)
    );
  }

  function saveFrontend(staketoken) {
    const fs = require("fs");
    const contractsDir = __dirname + "/../src/contracts";
  
    if (!fs.existsSync(contractsDir)) {
      fs.mkdirSync(contractsDir);
    }
  
    fs.writeFileSync(
      contractsDir + "/contract-address.json",
      JSON.stringify({ StakeToken: staketoken.address }, undefined, 2)
    );
  
    const StakeTokenArtifact = artifacts.readArtifactSync("StakeToken");
  
    fs.writeFileSync(
      contractsDir + "/StakeToken.json",
      JSON.stringify(StakeTokenArtifact, null, 2)
    );
  }

  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });