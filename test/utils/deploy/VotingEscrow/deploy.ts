import { ethers } from "hardhat";

export const deployVotingEscrow = async (
  owner_: string,
  penaltyRecipient_: string,
  token_: string,
  name_: string,
  symbol_: string
) => {
  const factory = await ethers.getContractFactory("VotingEscrow");

  const contract = await factory.deploy(
    owner_,
    penaltyRecipient_,
    token_,
    name_,
    symbol_
  );

  await contract.deployed();
  return contract;
};
