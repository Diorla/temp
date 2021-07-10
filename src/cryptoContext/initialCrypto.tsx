import { ethers } from "ethers";
import CryptoProps from "./CryptoProps";
export declare const window: any;
const provider = new ethers.providers.Web3Provider(window.ethereum);
const initialCrypto: CryptoProps = {
  provider,
  signer: provider.getSigner(),
  balance: ethers.utils.parseEther("0"),
};
export default initialCrypto;
