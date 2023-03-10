// SPDX-License-Identifier: MIT
// solhint-disable-next-line
pragma solidity ^0.8.3;

import "./Governor.sol";
import "./compatibility/GovernorCompatibilityBravo.sol";
import "./extensions/GovernorVotes.sol";
import "./extensions/GovernorVotesQuorumFraction.sol";
import "./extensions/GovernorTimelockControl.sol";
import "contracts/interfaces/IFeeDistributor.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

abstract contract MyGovernor is Initializable,Governor, GovernorCompatibilityBravo, GovernorVotes, GovernorVotesQuorumFraction, GovernorTimelockControl {
    
    IFeeDistributor private immutable _feeDistributor;
    IVotingEscrow private immutable _votingEscrow;
    uint256  private _snapshot;
    uint256  private _deadline;
    bool private started_time;
    
    constructor (IVotingEscrow votingEscrow,IFeeDistributor feeDistributor) {
        _feeDistributor = feeDistributor;
        _votingEscrow = votingEscrow;
    }
    
    function initialize( IVotes _token,  Governor name ,GovernorVotesQuorumFraction quorum, GovernorTimelockControl _timelock) public initializer {
        
        started_time = false;
        Governor( name);
        GovernorVotesQuorumFraction(quorum);
        GovernorTimelockControl(_timelock);
        
    }

    struct WinnerProposalDetails {
        uint256   winnerId;
        uint256   winnerVotes;
        
    }


    mapping(uint256 => WinnerProposalDetails) private _winnerproposalDetails;
    
    /**
     * @notice Returns the IFeeDistributor contract
     */
    function getFeeDistributor() external view returns (IFeeDistributor) {
        return _feeDistributor;
    }


    function votingDelay() public pure  returns (uint256) {
        return 1 days; // 6575
    }

    function votingPeriod() public pure  returns (uint256) {
        return 1 weeks; // 46027
    }

    function proposalThreshold() public pure override returns (uint256) {
        return 0;
    }

    // The functions below are overrides required by Solidity.

    function state(uint256 proposalId)
        public
        view
        override(Governor, IGovernor, GovernorTimelockControl)
        returns (ProposalState)
    {
        return super.state(proposalId);
    }

    function start_deadline() public 
    {
        require(!started_time,"deadline has been setted already");
        started_time = true;
        _snapshot = _feeDistributor.getTimeCursor();
        _deadline = _snapshot + votingPeriod();
    }

     function extend_deadline(uint256 proposalId) public
    {
        require(block.timestamp >= _deadline ,"deadline cannot be extended: deadline hasn't been reached");
        WinnerProposalDetails storage winerProposal = _winnerproposalDetails[proposalId];
        require(winerProposal.winnerId ==0 ,"deadline cannot be extended: there's not a tie");
        
        _deadline = block.timestamp + 1 days;
    }

    function propose(address[] memory targets, uint256[] memory values, bytes[] memory calldatas, string memory description, uint64  snapshot, uint64  deadline)
        public
        override(Governor, IGovernor, GovernorCompatibilityBravo)
        returns (uint256)
    {
        require(started_time,"deadline has not been setted");

        return super.propose(targets, values, calldatas, description, snapshot , deadline);
    }

    function _execute(uint256 proposalId, address[] memory targets, uint256[] memory values, bytes[] memory calldatas, bytes32 descriptionHash)
        internal
        override(Governor, GovernorTimelockControl)
    {
        super._execute(proposalId, targets, values, calldatas, descriptionHash);
    }

    function _cancel(address[] memory targets, uint256[] memory values, bytes[] memory calldatas, bytes32 descriptionHash)
        internal
        override(Governor, GovernorTimelockControl)
        returns (uint256)
    {
        return super._cancel(targets, values, calldatas, descriptionHash);
    }

    function _executor()
        internal
        view
        override(Governor, GovernorTimelockControl)
        returns (address)
    {
        return super._executor();
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(Governor, IERC165, GovernorTimelockControl)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
}