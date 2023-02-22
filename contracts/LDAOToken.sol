// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract LDAOToken is ERC20 {
    /**
     * @dev
     */
    uint256 private immutable _taxPerc;

    /**
     * @dev
     */
    uint256 private immutable _decimals;

    /**
     * @dev
     */
    uint256 public totalFeeCollected;

    /**
     * The configuration required to deploy DropToken.
     * @param name_ The `name` on ERC20 standard that will have the token.
     * @param symbol_ The `symbol` on ERC20 standard that will have the token.
     * @param decimals_  The `decimals` on ERC20 standard that will have the token.
     * @param initialSupply_ The amount of tokens availables on the contract after
     * deployment.
     * @param taxPerc_ Percentage to get from the transfer values between 0% and 100%
     * of this value. If a wrong `taxPerc` is given, `BAD_PERC` will be thrown.
     * @dev The totalSupply at construction time will be calculated using `decimals`
     * and `initialSupply` as `totalSupply = initialSupply ^
     */
    constructor(
        uint256 initialSupply_,
        uint128 taxPerc_,
        uint128 decimals_,
        string memory name_,
        string memory symbol_
    ) ERC20(name_, symbol_) {
        require(taxPerc_ <= 100, "BAD_PERC");

        _taxPerc = taxPerc_;
        _decimals = decimals_;

        _mint(msg.sender, initialSupply_ * (10 ** decimals_));
    }

    function decimals() public view override returns (uint8) {
        return uint8(_decimals);
    }

    function _transfer(
        address from,
        address to,
        uint256 amount
    ) internal override {
        if (from != address(0)) {
            uint256 _fee = (_taxPerc * amount) / 100;
            amount -= _fee;

            // TODO: Add the Fee manager and check/test if the taxes need to be
            // accumuated in the Drop token OR in the veDROP token.
            address _feeManager = address(this);

            super._transfer(from, _feeManager, _fee);
        }

        super._transfer(from, to, amount);
    }
}
