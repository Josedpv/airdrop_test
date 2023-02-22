/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../../common";

export interface IVotesInterface extends utils.Interface {
  functions: {
    "delegate(address)": FunctionFragment;
    "delegateBySig(address,uint256,uint256,uint8,bytes32,bytes32)": FunctionFragment;
    "delegates(address)": FunctionFragment;
    "getPastTotalSupply(uint256)": FunctionFragment;
    "getPastVotes(address,uint256)": FunctionFragment;
    "getVotes(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "delegate"
      | "delegateBySig"
      | "delegates"
      | "getPastTotalSupply"
      | "getPastVotes"
      | "getVotes"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "delegate",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "delegateBySig",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "delegates",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getPastTotalSupply",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getPastVotes",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getVotes",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(functionFragment: "delegate", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "delegateBySig",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "delegates", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getPastTotalSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPastVotes",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getVotes", data: BytesLike): Result;

  events: {
    "DelegateChanged(address,address,address)": EventFragment;
    "DelegateVotesChanged(address,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "DelegateChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "DelegateVotesChanged"): EventFragment;
}

export interface DelegateChangedEventObject {
  delegator: string;
  fromDelegate: string;
  toDelegate: string;
}
export type DelegateChangedEvent = TypedEvent<
  [string, string, string],
  DelegateChangedEventObject
>;

export type DelegateChangedEventFilter = TypedEventFilter<DelegateChangedEvent>;

export interface DelegateVotesChangedEventObject {
  delegate: string;
  previousBalance: BigNumber;
  newBalance: BigNumber;
}
export type DelegateVotesChangedEvent = TypedEvent<
  [string, BigNumber, BigNumber],
  DelegateVotesChangedEventObject
>;

export type DelegateVotesChangedEventFilter =
  TypedEventFilter<DelegateVotesChangedEvent>;

export interface IVotes extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IVotesInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    delegate(
      delegatee: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    delegateBySig(
      delegatee: PromiseOrValue<string>,
      nonce: PromiseOrValue<BigNumberish>,
      expiry: PromiseOrValue<BigNumberish>,
      v: PromiseOrValue<BigNumberish>,
      r: PromiseOrValue<BytesLike>,
      s: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    delegates(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getPastTotalSupply(
      blockNumber: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getPastVotes(
      account: PromiseOrValue<string>,
      blockNumber: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getVotes(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;
  };

  delegate(
    delegatee: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  delegateBySig(
    delegatee: PromiseOrValue<string>,
    nonce: PromiseOrValue<BigNumberish>,
    expiry: PromiseOrValue<BigNumberish>,
    v: PromiseOrValue<BigNumberish>,
    r: PromiseOrValue<BytesLike>,
    s: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  delegates(
    account: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<string>;

  getPastTotalSupply(
    blockNumber: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getPastVotes(
    account: PromiseOrValue<string>,
    blockNumber: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getVotes(
    account: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    delegate(
      delegatee: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    delegateBySig(
      delegatee: PromiseOrValue<string>,
      nonce: PromiseOrValue<BigNumberish>,
      expiry: PromiseOrValue<BigNumberish>,
      v: PromiseOrValue<BigNumberish>,
      r: PromiseOrValue<BytesLike>,
      s: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    delegates(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string>;

    getPastTotalSupply(
      blockNumber: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPastVotes(
      account: PromiseOrValue<string>,
      blockNumber: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getVotes(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {
    "DelegateChanged(address,address,address)"(
      delegator?: PromiseOrValue<string> | null,
      fromDelegate?: PromiseOrValue<string> | null,
      toDelegate?: PromiseOrValue<string> | null
    ): DelegateChangedEventFilter;
    DelegateChanged(
      delegator?: PromiseOrValue<string> | null,
      fromDelegate?: PromiseOrValue<string> | null,
      toDelegate?: PromiseOrValue<string> | null
    ): DelegateChangedEventFilter;

    "DelegateVotesChanged(address,uint256,uint256)"(
      delegate?: PromiseOrValue<string> | null,
      previousBalance?: null,
      newBalance?: null
    ): DelegateVotesChangedEventFilter;
    DelegateVotesChanged(
      delegate?: PromiseOrValue<string> | null,
      previousBalance?: null,
      newBalance?: null
    ): DelegateVotesChangedEventFilter;
  };

  estimateGas: {
    delegate(
      delegatee: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    delegateBySig(
      delegatee: PromiseOrValue<string>,
      nonce: PromiseOrValue<BigNumberish>,
      expiry: PromiseOrValue<BigNumberish>,
      v: PromiseOrValue<BigNumberish>,
      r: PromiseOrValue<BytesLike>,
      s: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    delegates(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPastTotalSupply(
      blockNumber: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPastVotes(
      account: PromiseOrValue<string>,
      blockNumber: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getVotes(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    delegate(
      delegatee: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    delegateBySig(
      delegatee: PromiseOrValue<string>,
      nonce: PromiseOrValue<BigNumberish>,
      expiry: PromiseOrValue<BigNumberish>,
      v: PromiseOrValue<BigNumberish>,
      r: PromiseOrValue<BytesLike>,
      s: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    delegates(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPastTotalSupply(
      blockNumber: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPastVotes(
      account: PromiseOrValue<string>,
      blockNumber: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getVotes(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
