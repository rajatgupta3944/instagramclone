import { Box, Button, Flex, Input, InputGroup, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import {
  CommentLogo,
  NotificationsLogo,
  UnlikeLogo,
} from "../../../assets/constants";

const PostFooter = ({ username }) => {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(1000);

  const handleLike = () => {
    if (liked) {
      setLiked(false);
      setLikes(likes - 1);
    } else {
      setLiked(true);
      setLikes(likes + 1);
    }
  };
  return (
    <Box mb={10} marginTop={"auto"}>
      <Flex alignItems={"center"} gap={4} w={"full"} pt={0} mb={2} mt={4}>
        <Box onClick={handleLike} cursor={"pointer"} fontSize={18}>
          {!liked ? <NotificationsLogo /> : <UnlikeLogo />}
        </Box>
        <Box cursor={"pointer"} fontSize={18}>
          <CommentLogo />
        </Box>
      </Flex>
      <Text fontWeight={600} fontSize={"sm"}>
        {likes} likes
      </Text>
      <Text fontWeight={700} fontSize={"sm"}>
        {username}{" "}
        <Text as="span" fontWeight={400}>
          Feeling Good
        </Text>
      </Text>
      <Text fontSize={"sm"} color="gray">
        View all 1000 comments
      </Text>
      <Flex
        alignItems={"center"}
        gap={2}
        justifyContent={"space-between"}
        w={"full"}
      >
        <Box position="relative" w="full">
          <Input
            variant={"flushed"}
            placeholder={"Add a comment"}
            fontSize={14}
            pr="3.5rem" // to prevent text from overlapping the button
          />

          <Box
            position="absolute"
            right="0.75rem"
            top="50%"
            transform="translateY(-50%)"
          >
            <Button
              fontSize={14}
              color={"blue.500"}
              fontWeight={600}
              cursor={"pointer"}
              _hover={{ color: "white" }}
              bg={"transparent"}
              p={0}
              h="auto"
              minW="auto"
            >
              Post
            </Button>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default PostFooter;
