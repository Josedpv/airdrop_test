import { ethers } from "hardhat";

import type { BigNumberish } from "ethers";

export const deployLDAOToken = async (
  initialSupply_: BigNumberish,
  taxPerc_: BigNumberish,
  decimals_: BigNumberish,
  name_: string,
  symbol_: string
) => {
  const factory = await ethers.getContractFactory("LDAOToken");

  const contract = await factory.deploy(
    initialSupply_,
    taxPerc_,
    decimals_,
    name_,
    symbol_
  );

  await contract.deployed();
  return contract;
};
