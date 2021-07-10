import { ethers } from "ethers";
export declare const window: any;

export default async function getBalance(
  provider: ethers.providers.Web3Provider
): Promise<ethers.BigNumber> {
  const balance = await provider.getBalance(window.ethereum.selectedAddress);
  return balance;
}
