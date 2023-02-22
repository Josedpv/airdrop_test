import { ethers } from "hardhat";

import type { BigNumberish } from "ethers";

export const deployFeeDistributor = async (
  votingEscrow_: string,
  startTime_: BigNumberish
) => {
  const factory = await ethers.getContractFactory("FeeDistributor");

  const contract = await factory.deploy(votingEscrow_, startTime_);

  await contract.deployed();
  return contract;
};
