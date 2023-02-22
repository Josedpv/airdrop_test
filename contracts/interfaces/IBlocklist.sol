// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

/// @title Blocklist Checker interface
/// @notice Basic blocklist checker interface for VotingEscrow
interface IBlocklist {
    function isBlocked(address addr) external view returns (bool);
}
