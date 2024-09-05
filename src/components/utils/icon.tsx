import React from "react";
import { IconType } from "react-icons";
import {
  FaArrowRight,
  FaBook,
  FaCircleNotch,
  FaCode,
  FaCodeBranch,
  FaCoffee,
  FaExternalLinkAlt,
  FaFingerprint,
  FaGithub,
  FaLaptopCode,
  FaRegUser,
  FaRust,
  FaShieldAlt,
  FaStar,
  FaTwitter,
} from "react-icons/fa";
import { FaMedium, FaRightToBracket } from "react-icons/fa6";
import { BiNetworkChart } from "react-icons/bi";
import { TbLayoutGridAdd } from "react-icons/tb";
import { SiGreatlearning, SiSolana, SiSolidity } from "react-icons/si";

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
