import { ethers } from "ethers";
import fs from "fs";
import FormData from "form-data";
import fetch from "node-fetch";
import pdfjs from "./pdfjs.json" with { type: "json" };

// Your deployed contract address
const CONTRACT_ADDRESS = "0x6F8Da012B9903e320fbf331c31005A0b9AE3Cc58"; 

// Node provider (e.g., Infura) 
const provider = new ethers.JsonRpcProvider("https://mainnet.infura.io/v3/55a5e8d8780946df82bbb096fd25cdfc");

// Signer (your wallet private key)
const signer = new ethers.Wallet("30e054b1b336065da603d56fe799650fd1df1645247560be44967ebdfa08dc40", provider);

// Contract
const contract = new ethers.Contract(CONTRACT_ADDRESS, pdfjs, signer);

async function uploadPDF() {
  const data = new FormData();
  data.append("file", fs.createReadStream("./reporttest.pdf"));

  const res = await fetch("https://api.pinata.cloud/pinning/pinFileToIPFS", {
    method: "POST",
    headers: {
      Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiJlZTkxMmYyNC1hOTg2LTRiN2ItOTZkYi1iMjI5NTBmZmRlNWMiLCJlbWFpbCI6Im1jY2F1bGV5YXNodTE4QGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJwaW5fcG9saWN5Ijp7InJlZ2lvbnMiOlt7ImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxLCJpZCI6IkZSQTEifSx7ImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxLCJpZCI6Ik5ZQzEifV0sInZlcnNpb24iOjF9LCJtZmFfZW5hYmxlZCI6ZmFsc2UsInN0YXR1cyI6IkFDVElWRSJ9LCJhdXRoZW50aWNhdGlvblR5cGUiOiJzY29wZWRLZXkiLCJzY29wZWRLZXlLZXkiOiIxMjczMDg4MjMxYTQyNjk4MTJlZSIsInNjb3BlZEtleVNlY3JldCI6ImZiM2UxNzUwNzQ1NzY2NGU2OTM0N2FmNGUxYjlmOTRlMzgzODdmZTE4ZWQ1ZjQxMzVmYWMwMmFiMzhiZTU4NzgiLCJleHAiOjE3OTUxNjc5NDV9.XUYIW4VLVtWLxHn0x575F5cJLGH3D3neLwZ1Noh0Svo",
    },
    body: data,
  });

  const json = await res.json();
  console.log("IPFS hash:", json.IpfsHash);
  return json.IpfsHash;
}

async function main() {
  const ipfsHash = await uploadPDF();

  // Upload to smart contract
  const tx = await contract.uploadDocument(ipfsHash, "My Test PDF");
  await tx.wait();
  console.log("PDF hash stored on-chain:", ipfsHash);

  // Retrieve the document
  const doc = await contract.getDocument(0);
  console.log(doc.ipfsHash, doc.name, doc.uploadedAt, doc.uploadedBy);
}

main().catch(console.error);
