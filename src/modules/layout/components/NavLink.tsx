import React from "react";
import NextLink from "next/link";
import { Link as ChakraLink } from "@chakra-ui/react";

type NavLinkProps = {
  href: string;
  title: string;
};

function NavLink(props: NavLinkProps) {
  return (
    <ChakraLink as={NextLink} href={props.href}>
      {props.title}
    </ChakraLink>
  );
}

export default NavLink;
