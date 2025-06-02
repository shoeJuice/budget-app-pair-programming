import { Flex } from "@chakra-ui/react";
import styles from "../layout.module.css";
import { LayoutSelectors } from "../selectors";
import { Routes } from "../routes";
import NavLink from "./NavLink";

export default function Navbar() {
  const links = Object.entries(Routes).map(([key, val], idx) => (
    <NavLink href={val} key={idx} title={key} />
  ));

  return <Flex className={styles[LayoutSelectors.NAVBAR]}>{links}</Flex>;
}
