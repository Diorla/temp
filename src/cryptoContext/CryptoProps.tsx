import { ethers } from "ethers";

export default interface CryptoProps {
  provider: ethers.providers.Web3Provider;
  signer: ethers.providers.JsonRpcSigner;
  balance: ethers.BigNumber;
}
