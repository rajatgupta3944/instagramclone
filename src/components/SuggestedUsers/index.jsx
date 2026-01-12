import { Box, Flex, Link, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import SuggestedHeader from './SuggestedHeader'
import SuggestedUser from './SuggestedUser'

const SuggestedUsers = () => {
  return (
    <VStack py={8} px={6} gap={4}>
        <SuggestedHeader />
        <Flex alignItems={"center"} justifyContent={"space-between"} w={"full"}>
            <Text fontSize={12} fontWeight={"bold"} color={"gray.500"}>
                Suggested for you
            </Text>
            <Text fontSize={12} fontWeight={"bold"} _hover={{color: "gray.400"}} cursor={"pointer"}>
                See All
            </Text>
        </Flex>
        <SuggestedUser name="Shani Dev" followers={1392} avatar='https://www.google.com/url?sa=i&url=https%3A%2F%2Fstock.adobe.com%2Fsearch%3Fk%3Dman&psig=AOvVaw1CCimNgSdHsd_rYLW5c3CY&ust=1753943289069000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCIi_0Yn6444DFQAAAAAdAAAAABAE' />
        <SuggestedUser name="Indra Dev" followers={202} avatar='https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.rawpixel.com%2Fsearch%2Fman%3Fpage%3D1%26path%3D1522%26sort%3Dcurated&psig=AOvVaw1CCimNgSdHsd_rYLW5c3CY&ust=1753943289069000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCIi_0Yn6444DFQAAAAAdAAAAABAL' />
        <SuggestedUser name="Surya Dev" followers={412} avatar='https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fbusiness-men&psig=AOvVaw1CCimNgSdHsd_rYLW5c3CY&ust=1753943289069000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCIi_0Yn6444DFQAAAAAdAAAAABAU' />
        <Box fontSize={12} color={"gray.500"} mt={5} alignSelf={"start"}>
            ©2025 Built by {" "}
            <Link href='' target="_blank" color={"blue.500"} fontSize={14}>
                As a programmer
            </Link>
        </Box>
    </VStack>
  )
}

export default SuggestedUsers