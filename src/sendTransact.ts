import { ethers } from "ethers";
import { toast } from "react-toastify";

export default async function (
  transactDetail: { value: any; to: any },
  signer: ethers.providers.JsonRpcSigner,
  callback: () => void
): Promise<void> {
  const { value, to } = transactDetail;
  if (value && to)
    signer
      .sendTransaction({
        to,
        value: ethers.utils.parseEther(value),
      })
      .then(() => callback())
      .catch((err) => toast.error(`${err.message}`));
  else if (value) toast.error("Please provide a valid public address");
  else toast.error("Please provide a valid amount");
}
