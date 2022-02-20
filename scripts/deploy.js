require("@nomiclabs/hardhat-waffle");
const fs = require('fs');
const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  
    console.log("Deploying contracts with the account:", deployer.address);
  
    console.log("Account balance:", (await deployer.getBalance()).toString());

    const ENMT = await ethers.getContractFactory("ENMT");
    const totalSupply = (30000000000000000000000000).toLocaleString("fullwide", { useGrouping: false });
    const enmt =await ENMT.deploy("Mad", "mad", 18, "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266", `${totalSupply}`);
    

    const StakeToken = await ethers.getContractFactory("StakeToken");
    const staketoken = await StakeToken.deploy(enmt.address, enmt.address);

    const MarketPlace = await ethers.getContractFactory("MarketPlace");
    const marketPlace = await MarketPlace.deploy();

    const Ctrain = await ethers.getContractFactory("Ctrain");
    const ctrain = await Ctrain.deploy(marketPlace.address, enmt.address,"0x8Eea93cb015d764CbbFe6c21170fe3c0E81eC373");

    console.log("ENMT address:", enmt.address);
    console.log("StakeToken address:", staketoken.address);
    console.log("MarketPlace Address:", ctrain.address)
    console.log("Ctrain Address:", ctrain.address);

    let config = `
    export const enmtaddress = "${enmt.address}"
    export const staketokenaddress = "${staketoken.address}"
    export const marketPlaceaddress = "${marketPlace.address}"
    export const ctrainaddress = "${ctrain.address}"
      `
    let data = JSON.stringify(config)
    fs.writeFileSync('config.js', JSON.parse(data))

    //  To save the contract's artifacts and address in the frontend directory
    saveFrontendFiles(enmt);
    saveFrontend(staketoken);
    save(marketPlace);
    saveF(ctrain);
  }


  function saveFrontendFiles(enmt) {
    const fs = require("fs");
    const contractsDir = __dirname + "/../src/contracts";
  
    if (!fs.existsSync(contractsDir)) {
      fs.mkdirSync(contractsDir);
    }
  
    fs.writeFileSync(
      contractsDir + "/ENMT-address.json",
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

  function save(marketPlace) {
    const fs = require("fs");
    const contractsDir = __dirname + "/../src/contracts";
  
    if (!fs.existsSync(contractsDir)) {
      fs.mkdirSync(contractsDir);
    }
  
    fs.writeFileSync(
      contractsDir + "/marketPlace-address.json",
      JSON.stringify({ MarketPlace: marketPlace.address }, undefined, 2)
    );
  
    const MarketPlaceArtifact = artifacts.readArtifactSync("MarketPlace");
  
    fs.writeFileSync(
      contractsDir + "/MarketPlace.json",
      JSON.stringify(MarketPlaceArtifact, null, 2)
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