import { expect } from "chai";
import { ethers } from "hardhat";

import { deployVotingEscrow, deployLDAOToken } from "./utils/deploy";

import { sixZeros } from "./utils/constants";

describe("VotingEscrow - Tests", () => {
  describe("Deployment and Construction", () => {
    it("should deploy the contract on happy path", async () => {
      const [signer1] = await ethers.getSigners();

      // Deploying lock token - (LDAOToken)
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

      // Deploying veToken
      const owner = signer1.address;
      const penaltyRecipient = signer1.address;
      const veTokenName = "Voted Escrowed " + tokenName;
      const veTokenSymbol = "ve" + tokenName;

      const veToken = await deployVotingEscrow(
        owner,
        penaltyRecipient,
        token.address,
        veTokenName,
        veTokenSymbol
      );

      expect(await veToken.owner()).to.be.equal(owner);
    });
  });
});
