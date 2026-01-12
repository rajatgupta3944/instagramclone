// import {
//   Flex,
//   GridItem,
//   Image,
//   Text,
//   Dialog,
//   Portal,
//   CloseButton,
//   Box,
//   Avatar,
//   VStack,
// } from "@chakra-ui/react";
// import { AiFillHeart } from "react-icons/ai";
// import { FaComment } from "react-icons/fa";
// import { AiFillDelete } from "react-icons/ai";
// import React, { useState } from "react";
// import Comment from "./../Comment/index"
// import PostFooter from "./../FeedPosts.jsx/PostFooter/index"

// const ProfilePost = ({ img }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <>
//       {/* Thumbnail grid item */}
//       <GridItem
//         cursor="pointer"
//         borderRadius={4}
//         overflow="hidden"
//         border="1px solid"
//         borderColor="whiteAlpha.100"
//         aspectRatio={1/1}
//         position="relative"
//         onClick={() => setIsOpen(true)}
//       >
//         <Flex
//           opacity={0}
//           _hover={{ opacity: 1 }}
//           position="absolute"
//           top={0}
//           left={0}
//           right={0}
//           bottom={0}
//           bg="blackAlpha.700"
//           transition="all 0.3s ease"
//           zIndex={1}
//           justify="center"
//           align="center"
//         >
//           <Flex align="center" justify="center" gap={8}>
//             <Flex align="center">
//               <AiFillHeart size={20} />
//               <Text fontWeight="bold" ml={2}>
//                 7
//               </Text>
//             </Flex>
//             <Flex align="center">
//               <FaComment size={20} />
//               <Text fontWeight="bold" ml={2}>
//                 7
//               </Text>
//             </Flex>
//           </Flex>
//         </Flex>

//         <Image src={img} alt="profile post" w="100%" h="100%" objectFit="cover" />
//       </GridItem>

//       {/* Dialog modal */}
//       {isOpen && (
//         <Dialog.Root open={isOpen} onOpenChange={() => setIsOpen(false)} size="cover">
//           <Portal>
//             <Dialog.Backdrop bg="blackAlpha.700" backdropFilter="blur(2px)" />
//             <Dialog.Positioner>
//               <Dialog.Content
//                 bg="black"
//                 borderRadius="md"
//                 maxW="80vw"
//                 maxH="80vh"
//                 overflow="hidden"
//                 p={0}
//               >

// <Dialog.Body p={0}>
//   <Flex
//     maxW="80vw"
//     maxH="80vh"
//     bg="black"
//     align="stretch"
//   >
//     {/* Left: image wrapper */}
//     <Flex
//       flex="1"
//       align="center"
//       justify="center"
//       bg="black"
//       minW="0"
//     >
//       <Image
//         src={img}
//         alt="post"
//         maxH="80vh"
//         maxW="100%"
//         objectFit="contain"   // keeps aspect ratio
//       />
//     </Flex>

//     {/* Right: sidebar */}
//     <Box
//       w="400px"
//       p={4}
//       bg="gray.900"
//       display={{ base: "none", md: "block" }}
//     >
//       <Flex justify="space-between" align="center">
//         <Box display="flex" alignItems="center" gap={4} >
//       <Avatar.Root shape="full" size="sm">
//         <Avatar.Fallback name="Random User" />
//         <Avatar.Image src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04" />
//       </Avatar.Root>
//         <Text color="white" fontWeight="bold">
//           _asaprogrammer
//         </Text>
//         </Box>
//         <Flex gap={4} align="center">
//     <AiFillDelete color="white" cursor="pointer" />
    
//   </Flex>
//       </Flex>
//       <Box w="100%" h="1px" bg="gray.600" my="4" />
//       <VStack w="full" alignItems={"start"} maxH={"350px"} overflowY={"auto"}>
//         <Comment
//         createdAt="1d ago"
//         userName="_asaprogrammer"
//         profilePic='/profilepic.png'
//         text={"Dummy images"}
//         />
//         <Comment
//         createdAt="12h ago"
//         userName="_asaprogrammer"
//         profilePic='/profilepic.png'
//         text={"Dummy images"}
//         />
//         <Comment
//         createdAt="2d ago"
//         userName="_asaprogrammer"
//         profilePic='/profilepic.png'
//         text={"Dummy images"}
//         />
//       </VStack>
//       <Box w="100%" h="1px" bg="gray.600" my="4"></Box>
//       <PostFooter />
//     </Box>
//   </Flex>
// </Dialog.Body>


//               </Dialog.Content>
//             </Dialog.Positioner>
//           </Portal>
//         </Dialog.Root>
//       )}
//     </>
//   );
// };

// export default ProfilePost;

import {
  Flex,
  GridItem,
  Image,
  Text,
  Portal,
  Box,
  Avatar,
  VStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { AiFillHeart, AiFillDelete } from "react-icons/ai";
import { FaComment } from "react-icons/fa";
import React from "react";
import Comment from "./../Comment/index";
import PostFooter from "./../FeedPosts.jsx/PostFooter/index";

const ProfilePost = ({ img }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      {/* Thumbnail grid item */}
      <GridItem
        cursor="pointer"
        borderRadius={4}
        overflow="hidden"
        border="1px solid"
        borderColor="whiteAlpha.100"
        aspectRatio={1 / 1}
        position="relative"
        onClick={onOpen}
      >
        <Flex
          opacity={0}
          _hover={{ opacity: 1 }}
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          bg="blackAlpha.700"
          transition="all 0.3s ease"
          zIndex={1}
          justify="center"
          align="center"
        >
          <Flex align="center" justify="center" gap={8}>
            <Flex align="center">
              <AiFillHeart size={20} />
              <Text fontWeight="bold" ml={2}>
                7
              </Text>
            </Flex>
            <Flex align="center">
              <FaComment size={20} />
              <Text fontWeight="bold" ml={2}>
                7
              </Text>
            </Flex>
          </Flex>
        </Flex>

        <Image src={img} alt="profile post" w="100%" h="100%" objectFit="cover" />
      </GridItem>

      {/* Modal instead of Dialog */}
      <Modal isOpen={isOpen} onClose={onClose} size="6xl" isCentered>
        <ModalOverlay bg="blackAlpha.700" backdropFilter="blur(2px)" />
        <ModalContent
          bg="black"
          borderRadius="md"
          maxW="80vw"
          maxH="80vh"
          overflow="hidden"
          p={0}
        >
          <ModalCloseButton color="white" />
          <ModalBody p={0}>
            <Flex maxW="80vw" maxH="80vh" bg="black" align="stretch">
              {/* Left: image wrapper */}
              <Flex flex="1" align="center" justify="center" bg="black" minW="0">
                <Image
                  src={img}
                  alt="post"
                  maxH="80vh"
                  maxW="100%"
                  objectFit="contain"
                />
              </Flex>

              {/* Right: sidebar */}
              <Box
                w="400px"
                p={4}
                bg="gray.900"
                display={{ base: "none", md: "block" }}
              >
                <Flex justify="space-between" align="center">
                  <Box display="flex" alignItems="center" gap={4}>
                    <Avatar
                      size="sm"
                      name="Random User"
                      src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04"
                    />
                    <Text color="white" fontWeight="bold">
                      _asaprogrammer
                    </Text>
                  </Box>
                  <Flex gap={4} align="center">
                    <AiFillDelete color="white" cursor="pointer" />
                  </Flex>
                </Flex>
                <Box w="100%" h="1px" bg="gray.600" my="4" />
                <VStack
                  w="full"
                  alignItems={"start"}
                  maxH={"350px"}
                  overflowY={"auto"}
                >
                  <Comment
                    createdAt="1d ago"
                    userName="_asaprogrammer"
                    profilePic="/profilepic.png"
                    text={"Dummy images"}
                  />
                  <Comment
                    createdAt="12h ago"
                    userName="_asaprogrammer"
                    profilePic="/profilepic.png"
                    text={"Dummy images"}
                  />
                  <Comment
                    createdAt="2d ago"
                    userName="_asaprogrammer"
                    profilePic="/profilepic.png"
                    text={"Dummy images"}
                  />
                </VStack>
                <Box w="100%" h="1px" bg="gray.600" my="4"></Box>
                <PostFooter />
              </Box>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProfilePost;
