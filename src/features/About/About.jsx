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
import MiniHeading from "../../ui/MiniHeading";
import { FaApple } from "react-icons/fa";
import { DiAndroid } from "react-icons/di";
import { RxDownload } from "react-icons/rx";
import { Element } from "react-scroll";



function About() {

  const storeOptions = [
    {
        title: "For iOS",
        subtitle: "iOS 12+",
        icon: FaApple,
        url: "/",
    },

    {
        title: "For Android",
        subtitle: "Android 10+",
        icon: DiAndroid,
        url: "/",
        delay: "500",
    },
  ]

  return (
    <Element id="how-to-download">
        <Stack
            w="full"
            justify="start"
            align="start"
            py={["4rem", "4rem", "8rem"]}
            bgColor="white"
        >
            <ContainerLayout>

                <SimpleGrid
                    w="full"
                    columns={[1, 1, 2]}
                    gap="60px"
                >
                    <VStack
                        w="full"
                        justify="start"
                        align="start"
                        gap="30px"
                    >

                        <Heading
                            fontSize={[36, 40, 48]}
                            fontWeight={900}
                            color="black"
                            lineHeight={["40px", "40px", "44px"]}
                        >
                            Download the <Text as="span" color="brand.100">Smart CBT App</Text> Today!
                        </Heading>


                        <Text
                            fontSize={[18, 18, 20]}
                            fontWeight={500}
                            lineHeight="28px"
                            color="brand.900"
                        >
                            Start Preparing Now! Don’t leave your success to chance—download Smart CBT App today and take control of your exam success!
                        </Text>

                        
                    </VStack>


                    <VStack
                    w="full"
                    justify="start"
                    align="start"
                    gap="30px"
                    >
                        <HStack
                        w="full"
                        justify="space-between"
                        align="center"
                        gap="40px"
                        wrap={["wrap", "wrap", "wrap", "nowrap"]}
                        >
                            {storeOptions.map((item, i) => (
                                <VStack
                                key={i}
                                w="full"
                                justify="start"
                                align="start"
                                gap="20px"
                                data-aos="zoom-in"
                                data-aos-duration="1000"
                                data-aos-delay={item.delay}
                                >
                                    <Icon
                                    as={item.icon}
                                    color="black"
                                    fontSize={60}
                                    />

                                    <VStack
                                        w="full"
                                        justify="start"
                                        align="start"
                                        gap="4px"
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
                                        {item.subtitle}
                                        </Text>

                                    </VStack>

                                    <Link to={item.url}>
                                        <Button
                                            bgColor="brand.100"
                                            color="white"
                                            py="30px"
                                            px="40px"
                                            fontSize={16}
                                            fontWeight={900}
                                            rounded="full"
                                            border="1px solid"
                                            borderColor="brand.100"
                                            textTransform="uppercase"
                                            rightIcon={<Icon as={RxDownload} fontSize="20px"/>}
                                            _hover={{
                                                bgColor: "white",
                                                color: "brand.100"
                                            }}
                                        >
                                            Download {item.title}
                                        </Button>
                                    
                                    </Link>



                                </VStack>
                            ))}

                        </HStack>


                    </VStack>

                </SimpleGrid>

            </ContainerLayout>

        </Stack>
    </Element>
  )
}

export default About
