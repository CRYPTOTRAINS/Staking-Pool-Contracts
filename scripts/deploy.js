const { ethers } = require("ethers");

async function main() {
    const [deployer] = await ethers.getSigners();
  
    console.log("Deploying contracts with the account:", deployer.address);
  
    console.log("Account balance:", (await deployer.getBalance()).toString());
  
    // const MageToken = await ethers.getContractFactory("MageToken");
    // const mageToken = await MageToken.deploy();

    const ENMT = await ethers.getContractFactory("ENMT");
    const enmt =await ENMT.deploy("CTRAIN", "CTR", 18, , 30000000);

    const StakeToken = await ethers.getContractFactory("StakeToken");
    const staketoken = await ethers.getContractFactory(enmt.address, enmt.address);

  
    // console.log("MageToken address:", mageToken.address);
    console.log("ENMT address:", enmt.address);
    console.log("StakeToken address:", staketoken.address);

    //  To save the contract's artifacts and address in the frontend directory
    saveFrontendFiles(mageToken);
  }

  function saveFrontendFiles(mageToken) {
    const fs = require("fs");
    const contractsDir = __dirname + "/../src/contracts";
  
    if (!fs.existsSync(contractsDir)) {
      fs.mkdirSync(contractsDir);
    }
  
    fs.writeFileSync(
      contractsDir + "/contract-address.json",
      JSON.stringify({ MageToken: mageToken.address }, undefined, 2)
    );
  
    const MageTokenArtifact = artifacts.readArtifactSync("MageToken");
  
    fs.writeFileSync(
      contractsDir + "/MageToken.json",
      JSON.stringify(MageTokenArtifact, null, 2)
    );
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
  