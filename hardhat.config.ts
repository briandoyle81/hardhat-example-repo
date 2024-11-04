import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

require("dotenv").config();

const config: HardhatUserConfig = {
  solidity: '0.8.27',
  ignition: {
    requiredConfirmations: 1,
  },
  networks: {
    testnet: {
      url: 'https://testnet.evm.nodes.onflow.org',
      accounts: [process.env.METAMASK_WALLET_1 as string],
      gas: 5000000,
    },
  },
};

export default config;
