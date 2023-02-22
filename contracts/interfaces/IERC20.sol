// SPDX-License-Identifier: MIT

pragma solidity 0.8.17;

import {IERC20 as IERC20_Openzeppelin} from "@openzeppelin/contracts/interfaces/IERC20.sol";

interface IERC20 is IERC20_Openzeppelin {
    // Note this is non standard but nearly all ERC20 have exposed decimal functions
    function decimals() external view returns (uint8);
}
