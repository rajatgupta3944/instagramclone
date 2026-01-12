import { Avatar, Box, Flex, Link, Tooltip } from "@chakra-ui/react";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  CreatePostLogo,
  InstagramLogo,
  InstagramMobileLogo,
  NotificationsLogo,
  SearchLogo,
} from "../../assets/constants";
import { AiFillHome } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";
import useLogout from "../../hooks/useLogout";

const Sidebar = () => {
  const sidebarItems = [
    {
      icon: <AiFillHome size={25} />,
      text: "Home",
      link: "/",
    },
    {
      icon: <SearchLogo />,
      text: "Search",
    },
    {
      icon: <NotificationsLogo />,
      text: "Notifications",
    },
    {
      icon: <CreatePostLogo />,
      text: "Create",
    },
    {
      icon: <Avatar name="Segun Adebayo" src="/profilepic.png" size="sm" />,
      text: "Profile",
      link: "/profile",
    },
  ];

  const {handleLogout} = useLogout()

  return (
    <Box
      height={"100vh"}
      borderRight={"1px solid"}
      borderColor={"whiteAlpha.300"}
      py={8}
      position={"sticky"}
      top={0}
      left={0}
      px={{ base: 2, md: 4 }}
    >
      <Flex direction={"column"} gap={10} w="full" height={"full"}>
        <Link
          to={"/"}
          as={RouterLink}
          pl={2}
          display={{ base: "none", md: "block" }}
          cursor="pointer"
        >
          <InstagramLogo />
        </Link>
        <Link
          to={"/"}
          as={RouterLink}
          p={2}
          display={{ base: "block", md: "none" }}
          borderRadius={6}
          _hover={{ bg: "whiteAlpha.200" }}
          cursor="pointer"
        >
          <InstagramMobileLogo />
        </Link>
        <Flex direction="column" gap={5} cursor="pointer">
          {sidebarItems.map((item, index) => {
            const content = (
              <>
                {item.icon}
                <Box display={{ base: "none", md: "block" }}>{item.text}</Box>
              </>
            );

            return item.link ? (
              <Link
                as={RouterLink}
                to={item.link}
                key={index}
                display="flex"
                alignItems="center"
                gap={4}
                _hover={{ bg: "whiteAlpha.400" }}
                borderRadius={6}
                p={2}
                w={{ base: 10, md: "full" }}
              >
                {content}
              </Link>
            ) : (
              <Flex
                key={index}
                alignItems="center"
                gap={4}
                _hover={{ bg: "whiteAlpha.400" }}
                borderRadius={6}
                p={2}
                w={{ base: 10, md: "full" }}
              >
                {content}
              </Flex>
            );
          })}
        </Flex>
        <Flex
          onClick={handleLogout}
          alignItems="center"
          gap={4}
          _hover={{ bg: "whiteAlpha.400" }}
          borderRadius={6}
          p={2}
          w={{ base: 10, md: "full" }}
          mt={"auto"}
        >
          <BiLogOut size={25} />
          <Box display={{ base: "none", md: "block" }}>Logout</Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Sidebar;
