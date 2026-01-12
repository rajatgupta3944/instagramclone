import { Avatar, Flex, Text } from '@chakra-ui/react'
import React from 'react'

const Comment = ({ createdAt, userName, profilePic, text }) => {
  return (
    <Flex gap={4}>
      <Avatar
        name={userName}
        src={profilePic}
        size="lg"
        borderRadius="md" // "rounded" equivalent
      />
      <Flex direction="column">
        <Flex gap={2} align="center">
          <Text fontWeight="bold" fontSize={12}>
            {userName}
          </Text>
          <Text fontSize={14}>{text}</Text>
        </Flex>
        <Text fontSize={12} color="gray.500">
          {createdAt}
        </Text>
      </Flex>
    </Flex>
  )
}

export default Comment
