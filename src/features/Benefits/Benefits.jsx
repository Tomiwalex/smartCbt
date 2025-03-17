import React, { useEffect, useState } from "react";
import {
  Box,
  Flex,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Image,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  VStack,
  useDisclosure,
  Text,
  HStack,
  useBreakpointValue,
  SimpleGrid,
  Icon,
  Heading,
  Stack,
  Link,
  AvatarGroup,
  Avatar,
} from "@chakra-ui/react";
import ContainerLayout from "../../ui/layouts/ContainerLayout";
import { benefitsData } from "../../data/BenefitsData";
import { Element } from "react-scroll";



function Benefits() {
  return (
    <Element id="why-us">
        <Stack
            w="full"
            justify="start"
            align="start"
            py={["4rem", "4rem", "8rem"]}
            bgColor="brand.700"
        >
            <ContainerLayout>
                <VStack
                    w="full"
                    justify="center"
                    align="center"
                    py="2rem"
                    gap="40px"
                >
                    <VStack
                        w={["full", "full", "full", "40%"]}
                        mx={["initial", "initial", "initial", "auto"]}
                        justify="center"
                        align="center"
                    >
                        <Heading
                            fontSize={[36, 40, 48]}
                            fontWeight={900}
                            color="black"
                            lineHeight={["40px", "40px", "44px"]}
                            textAlign="center"
                        >
                        Why Choose <Text as="span" color="brand.100">Smart CBT App</Text>?
                        </Heading>

                    </VStack>


                    <SimpleGrid
                        w="full"
                        columns={[1, 1, 1, 3]}
                        gap="40px"
                        pt="2rem"
                    >
                        {benefitsData.map((item, i) => (
                            <VStack
                                key={i}
                                w="full"
                                minH="250px"
                                justify="start"
                                align="start"
                                gap="40px"
                                p="30px"
                                bgColor="white"
                                rounded="10px"
                                border="1px solid"
                                borderBottom="4px solid"
                                borderColor="brand.100"
                                data-aos="slide-up"
                                data-aos-duration="1000"
                            >
                                <VStack
                                w="50px"
                                h="50px"
                                justify="center"
                                align="center"
                                bgColor="alt.600"
                                rounded="20px"
                                >
                                    {item.icon}
                                </VStack>

                                <VStack
                                    w="full"
                                    justify="start"
                                    align="start"
                                    gap="6px"
                                >
                                    <Heading
                                        fontSize={20}
                                        fontWeight={600}
                                        lineHeight="25px"
                                        color="black"
                                    >
                                        {item.title}
                                    </Heading>

                                    <Text
                                        fontSize={16}
                                        fontWeight={400}
                                        lineHeight="28px"
                                        color="brand.900"
                                    >
                                        {item.description}
                                    </Text>

                                    </VStack>

                            </VStack>
                        ))}

                    </SimpleGrid>

                </VStack>
            </ContainerLayout>
            
        </Stack>
    </Element>
  )
}

export default Benefits
