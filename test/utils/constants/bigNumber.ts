import { ethers } from "hardhat";

export const fourZeros = "0000";
export const sixZeros = "000000";
export const eightZeros = "00000000";
export const nineZeros = "000000000";
export const tenZeros = "0000000000";
export const twelveZeros = "0000000000000";
export const thirteenZeros = "0000000000000";
export const sixteenZeros = "0000000000000000";
export const eighteenZeros = "000000000000000000";
export const twentyZeros = "00000000000000000000";

export const ONE = ethers.BigNumber.from("1" + eighteenZeros);
export const RESERVE_ONE = ethers.BigNumber.from("1" + sixZeros);
export const max_uint256 = ethers.constants.MaxUint256;
