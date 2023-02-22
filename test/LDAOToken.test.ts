import { expect } from "chai";
import { ethers } from "hardhat";

import { deployLDAOToken } from "./utils/deploy";

import { sixZeros } from "./utils/constants";
import { LDAOToken } from '../typechain/contracts/LDAOToken';
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";

describe("Token - Tests", () => {
  describe("Deployment and Construction", () => {
    it("should deploy the contract on happy path", async () => {
      const taxPerc = 10; // 10%
      const initialSupply = ethers.BigNumber.from("1" + sixZeros);
      const decimals = ethers.BigNumber.from("18");
      const tokenName = "LeaderDAO";
      const tokenSymbol = "LDAO";

      const token = await deployLDAOToken(
        initialSupply,
        taxPerc,
        decimals,
        tokenName,
        tokenSymbol
      );

      const deployer = await token.signer.getAddress();
      const totalSupplyExpected = initialSupply.mul(
        ethers.BigNumber.from(10).pow(decimals)
      );

      expect(await token.totalSupply()).to.be.equal(totalSupplyExpected);
      expect(await token.balanceOf(deployer)).to.be.eq(totalSupplyExpected);
    });

    it("should not deploy if a given tax percentage is out of bounds [0-100]", async () => {
      const taxPerc = 101; // 101%
      const initialSupply = ethers.BigNumber.from("1" + sixZeros);
      const decimals = ethers.BigNumber.from("18");
      const tokenName = "LeaderDAO";
      const tokenSymbol = "LDAO";

      await expect(
        deployLDAOToken(
          initialSupply,
          taxPerc,
          decimals,
          tokenName,
          tokenSymbol
        )
      ).to.be.rejectedWith("BAD_PERC");
    });
  });
  
  describe("Transfer and Fees", () => {
    let LDAOTokenContract: LDAOToken;
    let owner: SignerWithAddress, Alice: SignerWithAddress, Bob: SignerWithAddress;

    beforeEach(async () => {
      const taxPerc = 10; // 10%
      const initialSupply = ethers.BigNumber.from("1" + sixZeros);
      const decimals = ethers.BigNumber.from("18");
      const tokenName = "LeaderDAO";
      const tokenSymbol = "LDAO";

      [owner, Alice, Bob] = await ethers.getSigners();

      LDAOTokenContract = await deployLDAOToken(
        initialSupply,
        taxPerc,
        decimals,
        tokenName,
        tokenSymbol
      );
    });

    it("Should send transfer and fees accordly", async() => {
      const initialOwnerBalance = await LDAOTokenContract.balanceOf(owner.address);
      const initialAliceBalance = await LDAOTokenContract.balanceOf(Alice.address);

      const amountToTransfer = ethers.BigNumber.from("10").pow(18);
      
      await LDAOTokenContract.connect(owner).transfer(Alice.address, amountToTransfer);

      const finalOwnerBalance = await LDAOTokenContract.balanceOf(owner.address);
      const finalAliceBalance = await LDAOTokenContract.balanceOf(Alice.address);

      expect(finalOwnerBalance).to.be.equal(initialOwnerBalance.sub(amountToTransfer));
      expect(finalAliceBalance).to.be.equal(initialAliceBalance.add((amountToTransfer.mul(9)).div(10)));
    })
  });
});
