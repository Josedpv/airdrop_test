/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  FeeDistributor,
  FeeDistributorInterface,
} from "../../contracts/FeeDistributor";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IVotingEscrow",
        name: "votingEscrow",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "startTime",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "enabled",
        type: "bool",
      },
    ],
    name: "OnlyCallerOptIn",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "contract IERC20",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "lastCheckpointTimestamp",
        type: "uint256",
      },
    ],
    name: "TokenCheckpointed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "contract IERC20",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "userTokenTimeCursor",
        type: "uint256",
      },
    ],
    name: "TokensClaimed",
    type: "event",
  },
  {
    inputs: [],
    name: "checkpoint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "token",
        type: "address",
      },
    ],
    name: "checkpointToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20[]",
        name: "tokens",
        type: "address[]",
      },
    ],
    name: "checkpointTokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "checkpointUser",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "contract IERC20",
        name: "token",
        type: "address",
      },
    ],
    name: "claimToken",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "contract IERC20[]",
        name: "tokens",
        type: "address[]",
      },
    ],
    name: "claimTokens",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "depositToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20[]",
        name: "tokens",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
    ],
    name: "depositTokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getDomainSeparator",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "getNextNonce",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getTimeCursor",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "token",
        type: "address",
      },
    ],
    name: "getTokenLastBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "token",
        type: "address",
      },
    ],
    name: "getTokenTimeCursor",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "getTokensDistributedInWeek",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "getTotalSupplyAtTimestamp",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "getUserBalanceAtTimestamp",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "getUserTimeCursor",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "contract IERC20",
        name: "token",
        type: "address",
      },
    ],
    name: "getUserTokenTimeCursor",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getVotingEscrow",
    outputs: [
      {
        internalType: "contract IVotingEscrow",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "isOnlyCallerEnabled",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "enabled",
        type: "bool",
      },
    ],
    name: "setOnlyCallerCheck",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "bool",
        name: "enabled",
        type: "bool",
      },
      {
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
    ],
    name: "setOnlyCallerCheckWithSignature",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6101806040523480156200001257600080fd5b5060405162002a2938038062002a298339810160408190526200003591620002bb565b604080518082018252600e81526d2332b2a234b9ba3934b13aba37b960911b6020808301918252835180850190945260018452603160f81b908401528151902060e08190527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc66101008190524660a0529192917f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f620001198184846040805160208101859052908101839052606081018290524660808201523060a082015260009060c0016040516020818303038152906040528051906020012090509392505050565b6080523060c052610120525050600160025550506001600160a01b03821661014052620001468162000295565b90506000620001554262000295565b905080821015620001ad5760405162461bcd60e51b815260206004820181905260248201527f43616e6e6f74207374617274206265666f72652063757272656e74207765656b60448201526064015b60405180910390fd5b8082036200028457604051631c45b18360e21b8152600481018290526000906001600160a01b03851690637116c60c90602401602060405180830381865afa158015620001fe573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620002249190620002f7565b11620002845760405162461bcd60e51b815260206004820152602860248201527f5a65726f20746f74616c20737570706c7920726573756c747320696e206c6f736044820152677420746f6b656e7360c01b6064820152608401620001a4565b50610160819052600355506200035a565b6000620002a662093a808362000311565b620002b59062093a8062000334565b92915050565b60008060408385031215620002cf57600080fd5b82516001600160a01b0381168114620002e757600080fd5b6020939093015192949293505050565b6000602082840312156200030a57600080fd5b5051919050565b6000826200032f57634e487b7160e01b600052601260045260246000fd5b500490565b8082028115828204841417620002b557634e487b7160e01b600052601160045260246000fd5b60805160a05160c05160e0516101005161012051610140516101605161262a620003ff6000396000818161098601528181610aa401528181610b220152610e22015260008181610194015281816108cf01528181610a2b01528181610c280152818161139c0152818161144f01526118f9015260006117e701526000611836015260006118110152600061176a01526000611794015260006117be015261262a6000f3fe608060405234801561001057600080fd5b50600436106101825760003560e01c806390193b7c116100d8578063ca31879d1161008c578063e811f44b11610066578063e811f44b14610426578063ed24911d14610439578063fcaa54ee1461044157600080fd5b8063ca31879d146103a7578063d3dc4ca1146103ba578063de681faf146103f057600080fd5b8063a1648aa5116100bd578063a1648aa514610329578063acbc142814610365578063c2c4c5c11461039f57600080fd5b806390193b7c146102ed578063905d10ac1461031657600080fd5b80634f3c50901161013a57806382aa5ad41161011457806382aa5ad41461028b578063876e69a11461029357806388720467146102cd57600080fd5b80634f3c5090146102455780637b8d6221146102655780638050a7ee1461027857600080fd5b80632308805b1161016b5780632308805b146101d8578063338b5dea1461021f5780633902b9bc1461023257600080fd5b806308b0308a1461018757806314866e08146101c3575b600080fd5b6040516001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001681526020015b60405180910390f35b6101d66101d1366004611ff6565b610454565b005b6102116101e6366004611ff6565b6001600160a01b0316600090815260056020526040902054600160801b90046001600160801b031690565b6040519081526020016101ba565b6101d661022d366004612013565b610472565b6101d6610240366004611ff6565b6104b3565b61021161025336600461203f565b60009081526004602052604090205490565b6101d66102733660046120a4565b6104c6565b610211610286366004612110565b6105be565b600354610211565b6102116102a1366004611ff6565b6001600160a01b0316600090815260076020526040902054600160401b900467ffffffffffffffff1690565b6102e06102db366004612149565b6105d3565b6040516101ba919061219e565b6102116102fb366004611ff6565b6001600160a01b031660009081526020819052604090205490565b6101d66103243660046121d6565b6106d3565b610355610337366004611ff6565b6001600160a01b031660009081526001602052604090205460ff1690565b60405190151581526020016101ba565b610211610373366004611ff6565b6001600160a01b0316600090815260056020526040902054600160401b900467ffffffffffffffff1690565b6101d6610718565b6102116103b5366004612110565b610734565b6102116103c8366004612013565b6001600160a01b03919091166000908152600660209081526040808320938352929052205490565b6102116103fe366004612013565b6001600160a01b03919091166000908152600860209081526040808320938352929052205490565b6101d6610434366004612226565b61077e565b610211610788565b6101d661044f36600461228a565b610797565b61045c610838565b61046581610894565b61046f6001600255565b50565b61047a610838565b610485826000610dc1565b61049a6001600160a01b038316333084611200565b6104a5826001610dc1565b6104af6001600255565b5050565b6104bb610838565b610465816001610dc1565b6104ce610838565b6104d883826112b1565b8260005b818110156105ac576105158686838181106104f9576104f9612344565b905060200201602081019061050e9190611ff6565b6000610dc1565b61056b333086868581811061052c5761052c612344565b9050602002013589898681811061054557610545612344565b905060200201602081019061055a9190611ff6565b6001600160a01b0316929190611200565b61059c86868381811061058057610580612344565b90506020020160208101906105959190611ff6565b6001610dc1565b6105a581612370565b90506104dc565b50506105b86001600255565b50505050565b60006105ca83836112be565b90505b92915050565b60606105dd610838565b836105e78161133c565b6105ef611374565b6105f885610894565b8260008167ffffffffffffffff81111561061457610614612243565b60405190808252806020026020018201604052801561063d578160200160208202803683370190505b50905060005b828110156106bd576106608787838181106104f9576104f9612344565b6106908888888481811061067657610676612344565b905060200201602081019061068b9190611ff6565b6114f7565b8282815181106106a2576106a2612344565b60209081029190910101526106b681612370565b9050610643565b50925050506106cc6001600255565b9392505050565b6106db610838565b8060005b8181101561070c576106fc84848381811061058057610580612344565b61070581612370565b90506106df565b50506104af6001600255565b610720610838565b610728611374565b6107326001600255565b565b600061073e610838565b826107488161133c565b610750611374565b61075984610894565b610764836000610dc1565b600061077085856114f7565b925050506105cd6001600255565b61046f33826116fa565b600061079261175d565b905090565b60007fbd291ffccec065968fe20c5f8debdad73ab50837733f357eeae8814178015a9084846107db876001600160a01b031660009081526020819052604090205490565b6040805160208101959095526001600160a01b039093169284019290925215156060830152608082015260a00160405160208183030381529060405280519060200120905061082e8482846101f8611884565b6105b884846116fa565b600280540361088e5760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064015b60405180910390fd5b60028055565b6040517f81fc83bb0000000000000000000000000000000000000000000000000000000081526001600160a01b0382811660048301526000917f0000000000000000000000000000000000000000000000000000000000000000909116906381fc83bb90602401602060405180830381865afa158015610918573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061093c9190612389565b90508060000361094a575050565b6001600160a01b038216600090815260076020526040812080549091600160401b90910467ffffffffffffffff16908181036109b4576109ad857f0000000000000000000000000000000000000000000000000000000000000000600087611893565b90506109f6565b4282106109c2575050505050565b508154600160801b90046001600160801b031660146109e182866123a2565b11156109f6576109f385838387611893565b90505b80600003610a02575060015b604051630d36406960e21b81526001600160a01b038681166004830152602482018390526000917f0000000000000000000000000000000000000000000000000000000000000000909116906334d901a490604401608060405180830381865afa158015610a74573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a9891906123cc565b905082600003610b71577f00000000000000000000000000000000000000000000000000000000000000004211610b1d5760405162461bcd60e51b8152602060048201526024808201527f46656520646973747269627574696f6e20686173206e6f742073746172746564604482015263081e595d60e21b6064820152608401610885565b610b537f0000000000000000000000000000000000000000000000000000000000000000610b4e83604001516119a6565b6119c9565b845467ffffffffffffffff191667ffffffffffffffff821617855592505b6040805160808101825260008082526020820181905291810182905260608101829052905b6032811015610d6c5782604001518510158015610bb35750868411155b15610c9a57610bc360018561243e565b935082915086841115610c025760405180608001604052806000600f0b81526020016000600f0b81526020016000815260200160008152509250610d5c565b604051630d36406960e21b81526001600160a01b038981166004830152602482018690527f000000000000000000000000000000000000000000000000000000000000000016906334d901a490604401608060405180830381865afa158015610c6f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c9391906123cc565b9250610d5c565b42851015610d6c576000826040015186610cb491906123a2565b90506000818460200151600f0b610ccb9190612451565b8451600f0b13610cdc576000610cfe565b818460200151600f0b610cef9190612451565b8451610cfe9190600f0b61249d565b905080158015610d0d57508886115b15610d2457610d1b426119a6565b96505050610d6c565b6001600160a01b038a1660009081526008602090815260408083208a84529091529020819055610d5762093a808861243e565b965050505b610d6581612370565b9050610b96565b50610d786001846123a2565b855467ffffffffffffffff908116918116600160801b026fffffffffffffffff0000000000000000191691909117600160401b9590911694909402939093179093555050505050565b6001600160a01b038216600090815260056020526040812080549091600160401b90910467ffffffffffffffff1690818103610ea057429150610e03426119df565b835467ffffffffffffffff191667ffffffffffffffff919091161783557f00000000000000000000000000000000000000000000000000000000000000004211610e9b5760405162461bcd60e51b8152602060048201526024808201527f46656520646973747269627574696f6e20686173206e6f742073746172746564604482015263081e595d60e21b6064820152608401610885565b610f01565b610eaa82426123a2565b905083610f01576000610ebc836119df565b610ec5426119df565b14905060006201518042610ed8426119a6565b610ee291906123a2565b109050818015610ef0575080155b15610efe5750505050505050565b50505b82546fffffffffffffffff00000000000000001916600160401b4267ffffffffffffffff16021783556040517f70a082310000000000000000000000000000000000000000000000000000000081523060048201526000906001600160a01b038716906370a0823190602401602060405180830381865afa158015610f8a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fae9190612389565b8454909150600090610fd1908390600160801b90046001600160801b03166119fb565b905080600003610fe45750505050505050565b6001600160801b0382111561103b5760405162461bcd60e51b815260206004820152601e60248201527f4d6178696d756d20746f6b656e2062616c616e636520657863656564656400006044820152606401610885565b84546001600160801b03808416600160801b029116178555600061105e856119df565b6001600160a01b038916600090815260066020526040812091925090815b60148110156111a9576110928462093a8061243e565b92508242101561111457861580156110a957508742145b156110d757600084815260208390526040812080548792906110cc90849061243e565b909155506111a99050565b866110e289426123a2565b6110ec90876124c4565b6110f691906124db565b600085815260208490526040812080549091906110cc90849061243e565b8615801561112157508783145b1561114f576000848152602083905260408120805487929061114490849061243e565b909155506111929050565b8661115a89856123a2565b61116490876124c4565b61116e91906124db565b6000858152602084905260408120805490919061118c90849061243e565b90915550505b829750829350806111a290612370565b905061107c565b50604080516001600160a01b038c168152602081018690529081018890527f9b7f1a85a4c9b4e59e1b6527d9969c50cdfb3a1a467d0c4a51fb0ed8bf07f1309060600160405180910390a150505050505050505050565b6040516001600160a01b03808516602483015283166044820152606481018290526105b89085907f23b872dd00000000000000000000000000000000000000000000000000000000906084015b60408051601f198184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611a07565b6104af8183146067611af1565b6001600160a01b03808316600090815260096020908152604080832093851683529290529081205480156112f35790506105cd565b6001600160a01b03808516600090815260076020908152604080832054938716835260059091529020546113349167ffffffffffffffff90811691166119c9565b949350505050565b6001600160a01b03811660009081526001602052604090205460ff161561046f5761046f336001600160a01b03831614610191611af1565b6003546000611382426119df565b90508082118061139157504281145b1561139a575050565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663c2c4c5c16040518163ffffffff1660e01b8152600401600060405180830381600087803b1580156113f557600080fd5b505af1158015611409573d6000803e3d6000fd5b5050505060005b60148110156114f0578183116114f0576040517f7116c60c000000000000000000000000000000000000000000000000000000008152600481018490527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690637116c60c90602401602060405180830381865afa15801561149e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114c29190612389565b6000848152600460205260409020556114de62093a808461243e565b92506114e981612370565b9050611410565b5050600355565b6001600160a01b03811660009081526005602052604081208161151a85856112be565b6003546001600160a01b03871660009081526007602052604081205492935091611583916115629161155d9190600160401b900467ffffffffffffffff16611aff565b6119a6565b845461157e90600160401b900467ffffffffffffffff166119df565b611aff565b6001600160a01b038087166000908152600660209081526040808320938b16835260089091528120929350909190805b601481101561162357848610156116235760008681526004602090815260408083205486835281842054928890529220546115ee91906124c4565b6115f891906124db565b611602908361243e565b915061161162093a808761243e565b955061161c81612370565b90506115b3565b506001600160a01b03808a166000908152600960209081526040808320938c1683529290522085905580156116ee57855461166f908290600160801b90046001600160801b03166123a2565b86546001600160801b03918216600160801b02911617865561169b6001600160a01b0389168a83611b0e565b604080516001600160a01b03808c1682528a166020820152908101829052606081018690527fff097c7d8b1957a4ff09ef1361b5fb54dcede3941ba836d0beb9d10bec725de69060800160405180910390a15b98975050505050505050565b6001600160a01b038216600081815260016020908152604091829020805460ff19168515159081179091558251938452908301527fac9874a7a931a3f5c9f202c6d9cf40de5d21506993c9f9c38ca8265add89584c910160405180910390a15050565b6000306001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161480156117b657507f000000000000000000000000000000000000000000000000000000000000000046145b156117e057507f000000000000000000000000000000000000000000000000000000000000000090565b50604080517f00000000000000000000000000000000000000000000000000000000000000006020808301919091527f0000000000000000000000000000000000000000000000000000000000000000828401527f000000000000000000000000000000000000000000000000000000000000000060608301524660808301523060a0808401919091528351808403909101815260c0909201909252805191012090565b6105b884848460001985611b57565b60008282825b608081101561199a578183101561199a57600060026118b8848661243e565b6118c390600261243e565b6118cd91906124db565b604051630d36406960e21b81526001600160a01b038b81166004830152602482018390529192506000917f000000000000000000000000000000000000000000000000000000000000000016906334d901a490604401608060405180830381865afa158015611940573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061196491906123cc565b90508881604001511161197957819450611987565b6119846001836123a2565b93505b50508061199390612370565b9050611899565b50909695505050505050565b60006105cd60016119ba8462093a8061243e565b6119c491906123a2565b6119df565b60008183116119d857816105ca565b5090919050565b60006119ee62093a80836124db565b6105cd9062093a806124c4565b60006105ca82846123a2565b6000611a5c826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b0316611bbd9092919063ffffffff16565b805190915015611aec5780806020019051810190611a7a91906124fd565b611aec5760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610885565b505050565b816104af576104af81611bcc565b60008183106119d857816105ca565b6040516001600160a01b038316602482015260448101829052611aec9084907fa9059cbb000000000000000000000000000000000000000000000000000000009060640161124d565b6000611b6285611bf6565b9050611b78611b72878387611c5f565b83611af1565b611b87428410156101b8611af1565b6001600160a01b0386166000908152602081905260408120805460019290611bb090849061243e565b9091555050505050505050565b60606113348484600085611d37565b61046f817f42414c0000000000000000000000000000000000000000000000000000000000611e29565b60006105cd611c0361175d565b836040517f19010000000000000000000000000000000000000000000000000000000000006020820152602281018390526042810182905260009060620160405160208183030381529060405280519060200120905092915050565b60006001600160a01b0384163b15611d25576040517f1626ba7e00000000000000000000000000000000000000000000000000000000808252906001600160a01b03861690631626ba7e90611cba908790879060040161256a565b602060405180830381865afa158015611cd7573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611cfb9190612583565b7fffffffff00000000000000000000000000000000000000000000000000000000161490506106cc565b611d30848484611e8c565b90506106cc565b606082471015611daf5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610885565b600080866001600160a01b03168587604051611dcb91906125c5565b60006040518083038185875af1925050503d8060008114611e08576040519150601f19603f3d011682016040523d82523d6000602084013e611e0d565b606091505b5091509150611e1e87838387611f43565b979650505050505050565b62461bcd60e51b600090815260206004526007602452600a808404818106603090810160081b958390069590950190829004918206850160101b01602363ffffff0060e086901c160160181b0190930160c81b604481905260e883901c91606490fd5b6000611e9e82516041146101b9611af1565b602082810151604080850151606080870151835160008082529681018086528a905290861a938101849052908101849052608081018290529293909260019060a0016020604051602081039080840390855afa158015611f02573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116158015906116ee5750876001600160a01b0316816001600160a01b03161498975050505050505050565b60608315611fb2578251600003611fab576001600160a01b0385163b611fab5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610885565b5081611334565b6113348383815115611fc75781518083602001fd5b8060405162461bcd60e51b815260040161088591906125e1565b6001600160a01b038116811461046f57600080fd5b60006020828403121561200857600080fd5b81356106cc81611fe1565b6000806040838503121561202657600080fd5b823561203181611fe1565b946020939093013593505050565b60006020828403121561205157600080fd5b5035919050565b60008083601f84011261206a57600080fd5b50813567ffffffffffffffff81111561208257600080fd5b6020830191508360208260051b850101111561209d57600080fd5b9250929050565b600080600080604085870312156120ba57600080fd5b843567ffffffffffffffff808211156120d257600080fd5b6120de88838901612058565b909650945060208701359150808211156120f757600080fd5b5061210487828801612058565b95989497509550505050565b6000806040838503121561212357600080fd5b823561212e81611fe1565b9150602083013561213e81611fe1565b809150509250929050565b60008060006040848603121561215e57600080fd5b833561216981611fe1565b9250602084013567ffffffffffffffff81111561218557600080fd5b61219186828701612058565b9497909650939450505050565b6020808252825182820181905260009190848201906040850190845b8181101561199a578351835292840192918401916001016121ba565b600080602083850312156121e957600080fd5b823567ffffffffffffffff81111561220057600080fd5b61220c85828601612058565b90969095509350505050565b801515811461046f57600080fd5b60006020828403121561223857600080fd5b81356106cc81612218565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff8111828210171561228257612282612243565b604052919050565b60008060006060848603121561229f57600080fd5b83356122aa81611fe1565b92506020848101356122bb81612218565b9250604085013567ffffffffffffffff808211156122d857600080fd5b818701915087601f8301126122ec57600080fd5b8135818111156122fe576122fe612243565b612310601f8201601f19168501612259565b9150808252888482850101111561232657600080fd5b80848401858401376000848284010152508093505050509250925092565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b6000600182016123825761238261235a565b5060010190565b60006020828403121561239b57600080fd5b5051919050565b818103818111156105cd576105cd61235a565b8051600f81900b81146123c757600080fd5b919050565b6000608082840312156123de57600080fd5b6040516080810181811067ffffffffffffffff8211171561240157612401612243565b60405261240d836123b5565b815261241b602084016123b5565b602082015260408301516040820152606083015160608201528091505092915050565b808201808211156105cd576105cd61235a565b808202600082127f8000000000000000000000000000000000000000000000000000000000000000841416156124895761248961235a565b81810583148215176105cd576105cd61235a565b81810360008312801583831316838312821617156124bd576124bd61235a565b5092915050565b80820281158282048414176105cd576105cd61235a565b6000826124f857634e487b7160e01b600052601260045260246000fd5b500490565b60006020828403121561250f57600080fd5b81516106cc81612218565b60005b8381101561253557818101518382015260200161251d565b50506000910152565b6000815180845261255681602086016020860161251a565b601f01601f19169290920160200192915050565b828152604060208201526000611334604083018461253e565b60006020828403121561259557600080fd5b81517fffffffff00000000000000000000000000000000000000000000000000000000811681146106cc57600080fd5b600082516125d781846020870161251a565b9190910192915050565b6020815260006105ca602083018461253e56fea264697066735822122094fef3c089fb55e6c9ae150ad45201aa96ef21836559f7f5c5d9d429115ecf2b64736f6c63430008110033";

type FeeDistributorConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: FeeDistributorConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class FeeDistributor__factory extends ContractFactory {
  constructor(...args: FeeDistributorConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    votingEscrow: PromiseOrValue<string>,
    startTime: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<FeeDistributor> {
    return super.deploy(
      votingEscrow,
      startTime,
      overrides || {}
    ) as Promise<FeeDistributor>;
  }
  override getDeployTransaction(
    votingEscrow: PromiseOrValue<string>,
    startTime: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(votingEscrow, startTime, overrides || {});
  }
  override attach(address: string): FeeDistributor {
    return super.attach(address) as FeeDistributor;
  }
  override connect(signer: Signer): FeeDistributor__factory {
    return super.connect(signer) as FeeDistributor__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FeeDistributorInterface {
    return new utils.Interface(_abi) as FeeDistributorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): FeeDistributor {
    return new Contract(address, _abi, signerOrProvider) as FeeDistributor;
  }
}
