import {
  Box,
  Container,
  Flex,
  Skeleton,
  SkeletonCircle,
  Stack,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useEffect } from "react";
import FeedPost from "./FeedPost.jsx";

const FeedPosts = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <Container maxW={"container.sm"} py={10} px={2}>
      {isLoading &&
        [0, 1, 2, 3].map((_, idx) => (
          <VStack key={idx} gap={4} alignItems={"flex-start"} mb={10}>
            <Flex gap={2}>
              <SkeletonCircle size="12" />
              <VStack gap={2} alignItems={"flex-start"}>
                <Skeleton height="10px" w={"200px"} />
                <Skeleton height="10px" width={"200px"} />
              </VStack>
            </Flex>
            <Skeleton w={"full"}>
              <Box h={"500px"}>Contents Wrapped</Box>
            </Skeleton>
          </VStack>
        ))}
      {!isLoading && (
        <>
          <FeedPost
            img="/img1.png"
            username="john swagger"
            avatar="/img1.png"
          />
          <FeedPost img="/img2.png" username="john rider" avatar="/img2.png" />
          <FeedPost img="/img3.png" username="john cena" avatar="/img3.png" />
          <FeedPost
            img="/img4.png"
            username="john striker"
            avatar="/img4.png"
          />
        </>
      )}
    </Container>
  );
};

export default FeedPosts;
