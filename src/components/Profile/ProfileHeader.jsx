import { Avatar, AvatarGroup, Button, Flex, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const ProfileHeader = () => {
  return (
    <Flex
      gap={{ base: 4, sm: 10 }}
      py={10}
      direction={{ base: 'column', sm: 'row' }}
      justify="center"
      align="center"
    >
      {/* Profile picture */}
      <AvatarGroup
        size={{ base: 'xl', md: '2xl' }}
        justifySelf="center"
        alignSelf="flex-start"
        mx="auto"
      >
        <Avatar
          name="As a programmer"
          src="/profilepic.png"
        />
      </AvatarGroup>

      {/* Profile info */}
      <VStack alignItems="start" gap={2} mx="auto" flex={1}>
        {/* Username + actions */}
        <Flex
          gap={4}
          direction={{ base: 'column', sm: 'row' }}
          justifyContent={{ base: 'center', sm: 'flex-start' }}
          alignItems="center"
          w="full"
        >
          <Text fontSize={{ base: 'sm', md: 'lg' }}>
            asaprogrammer_
          </Text>
          <Flex gap={4} alignItems="center" justifyContent="center">
            <Button
              bg="white"
              color="black"
              _hover={{ bg: 'whiteAlpha.800' }}
              size={{ base: 'xs', md: 'sm' }}
            >
              Edit Profile
            </Button>
          </Flex>
        </Flex>

        {/* Stats */}
        <Flex alignItems="center" gap={{ base: 2, sm: 4 }}>
          <Text>
            <Text as="span" fontWeight="bold" mr={1}>
              4
            </Text>
            Posts
          </Text>
          <Text>
            <Text as="span" fontWeight="bold" mr={1}>
              5
            </Text>
            Followers
          </Text>
          <Text>
            <Text as="span" fontWeight="bold" mr={1}>
              5
            </Text>
            Following
          </Text>
        </Flex>

        {/* Bio */}
        <Flex alignItems="center" gap={4}>
          <Text fontSize="sm" fontWeight="bold">
            As a programmer
          </Text>
          <Text fontSize="sm">Tutorials are for free!!</Text>
        </Flex>
      </VStack>
    </Flex>
  )
}

export default ProfileHeader
