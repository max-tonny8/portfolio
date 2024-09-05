import React from "react";
import { IconType } from "react-icons";
import {
  FaAndroid,
  FaArrowRight,
  FaBook,
  FaCircleNotch,
  FaCode,
  FaCodeBranch,
  FaCoffee,
  FaCss3,
  FaDatabase,
  FaEthereum,
  FaExternalLinkAlt,
  FaFingerprint,
  FaGithub,
  FaHtml5,
  FaLaptopCode,
  FaNodeJs,
  FaReact,
  FaRegUser,
  FaRust,
  FaShieldAlt,
  FaStar,
  FaTable,
  FaTwitter,
  FaYarn,
} from "react-icons/fa";
import { FaMedium, FaRightToBracket } from "react-icons/fa6";
import { BiNetworkChart } from "react-icons/bi";
import { TbLayoutGridAdd } from "react-icons/tb";
import {
  SiAxios,
  SiBlockchaindotcom,
  SiEthers,
  SiGreatlearning,
  SiKotlin,
  SiReacthookform,
  SiReactrouter,
  SiRetroarch,
  SiSolana,
  SiSolidity,
  SiTailwindcss,
  SiTrpc,
  SiTypescript,
  SiWeb3Dotjs,
} from "react-icons/si";
import { GiCarnivalMask } from "react-icons/gi";
import {
  RiContractFill,
  RiCurrencyFill,
  RiNextjsFill,
  RiNftFill,
} from "react-icons/ri";
import { CiRouter } from "react-icons/ci";
import { GiWifiRouter } from "react-icons/gi";

// Add any more icons you need here
const iconsMap: Record<string, IconType> = {
  "circle-notch": FaCircleNotch,
  "arrow-right": FaArrowRight,
  coffee: FaCoffee,
  twitter: FaTwitter,
  github: FaGithub,
  link: FaExternalLinkAlt,
  codeBranch: FaCodeBranch,
  star: FaStar,
  bracket: FaRightToBracket,
  medium: FaMedium,
  user: FaRegUser,
  code: FaCode,
  "shield-alt": FaShieldAlt,
  book: FaBook,
  fingerprint: FaFingerprint,
  "chart-network": BiNetworkChart,
  "grid-2-plus": TbLayoutGridAdd,
  "laptop-code": FaLaptopCode,
  rust: FaRust,
  solana: SiSolana,
  solidity: SiSolidity,
  deeplearning: SiGreatlearning,
  react: FaReact,
  reactjs: FaReact,
  node: FaNodeJs,
  typescript: SiTypescript,
  tailwind: SiTailwindcss,
  ethereume: FaEthereum,
  ethereum: FaEthereum,
  metamask: GiCarnivalMask,
  nextjs: RiNextjsFill,
  nextjs14: RiNextjsFill,
  "react-router-dom": SiReactrouter,
  web3js: SiWeb3Dotjs,
  web3j: SiWeb3Dotjs,
  web3: SiWeb3Dotjs,
  yarn: FaYarn,
  nft: RiNftFill,
  html5: FaHtml5,
  css: FaCss3,
  axios: SiAxios,
  blockchain: SiBlockchaindotcom,
  cryptocurrency: RiCurrencyFill,
  "data-table": FaTable,
  "react-hooks": SiReacthookform,
  "smart-contracts": RiContractFill,
  android: FaAndroid,
  "coroutines-android": GiWifiRouter,
  coroutines: CiRouter,
  data: FaDatabase,
  "eth-call": SiEthers,
  kotlin: SiKotlin,
  ktx: SiKotlin,
  retrofit: SiRetroarch,
  rpc: SiTrpc,
  "web3-dapp": SiWeb3Dotjs,

  // Add more icons as needed
};

interface IconProps {
  icon: string; // Use a string for the icon name
}

const Icon: React.FC<IconProps> = ({ icon }) => {
  // Find the corresponding icon component from the map
  const IconComponent = iconsMap[icon] || FaCircleNotch; // Default to FaCircleNotch

  return <IconComponent />;
};

export default Icon;
