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

    const Ctrain = await ethers.getContractFactory("Ctrain");
    const ctrain = await Ctrain.deploy(enmt.address,"0x8626f6940e2eb28930efb4cef49b2d1f2c9c1199")

    console.log("ENMT address:", enmt.address);
    console.log("StakeToken address:", staketoken.address);
    console.log("Ctrain Address:", ctrain.address)

    let config = `
    export const enmtaddress = "${enmt.address}"
    export const staketokenaddress = "${staketoken.address}"
    export const ctrainaddress = "${ctrain.address}"
      `
    let data = JSON.stringify(config)
    fs.writeFileSync('config.js', JSON.parse(data))

    //  To save the contract's artifacts and address in the frontend directory
    saveFrontendFiles(enmt);
    saveFrontend(staketoken);
    saveF(ctrain);
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
      contractsDir + "/stakeToken-address.json",
      JSON.stringify({ StakeToken: staketoken.address }, undefined, 2)
    );
  
    const StakeTokenArtifact = artifacts.readArtifactSync("StakeToken");
  
    fs.writeFileSync(
      contractsDir + "/StakeToken.json",
      JSON.stringify(StakeTokenArtifact, null, 2)
    );
  }

  function saveF(ctrain) {
    const fs = require("fs");
    const contractsDir = __dirname + "/../src/contracts";
  
    if (!fs.existsSync(contractsDir)) {
      fs.mkdirSync(contractsDir);
    }
  
    fs.writeFileSync(
      contractsDir + "/ctrain-address.json",
      JSON.stringify({ Ctrain: ctrain.address }, undefined, 2)
    );
  
    const CtrainArtifact = artifacts.readArtifactSync("Ctrain");
  
    fs.writeFileSync(
      contractsDir + "/Ctrain.json",
      JSON.stringify(CtrainArtifact, null, 2)
    );
  }

  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });