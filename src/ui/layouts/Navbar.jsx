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
} from "@chakra-ui/react";
import { useLocation, Link, NavLink } from "react-router-dom";
import ContainerLayout from "./ContainerLayout";
import { contactDetails, NavbarData, socialsLinks } from "../../data/NavbarData";
import { FaArrowRightLong } from "react-icons/fa6";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { IoMenu } from "react-icons/io5";
import { RxDownload } from "react-icons/rx";
import { scroller } from "react-scroll";


function Navbar() {

    const { isOpen, onOpen, onClose } = useDisclosure();
    const location = useLocation();
    const id = location.pathname.split("/")[1];
    const isDesktop = useBreakpointValue({ base: false, lg: true });


    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 0);
      };
  
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

    const handleScroll = (to) => {
        scroller.scrollTo(to, {
            smooth: true,
            duration: 300,
            offset: -80,
        });
    };


  return (
    <>
    {isDesktop ?
        <ContainerLayout>    
         <HStack
            w="full"
            justify="space-between"
            align="center"
            py="12px"
            px="20px"
            bgColor="white"
            rounded="full"
         >
                <Link to="/">
                    <Image
                        src="https://res.cloudinary.com/doqvfemo3/image/upload/f_auto,q_auto/v1/SmartCBT/lvf1b6i5d1tkxe6wgsbu"
                        w="250px"
                        h="44px"
                        alt="smart-cbt-logo"
                        objectFit="contain"
                    />   
                </Link>


                <HStack 
                    w="full"
                    gap="30px" 
                    justify="center" 
                    align="center"
                    px="40px"
                >
                    {NavbarData.map((item) => ((
                        <>
                        {item.isSection ? 
                                <Text
                                    fontSize={16}
                                    fontWeight={600}
                                    color={item.id === id ? "brand.100" : "brand.600"}
                                    _hover={{ color: "brand.100" }}
                                    cursor="pointer"
                                    onClick={() => handleScroll(item.id)}
                                >
                                    {item.display}
                                </Text>
                            :

                            <NavLink key={item.id} to={item.path}>
                                <Text
                                    fontSize={16}
                                    fontWeight={600}
                                    color={item.id === id ? "brand.100" : "brand.600"}
                                    _hover={{ color: "brand.100" }}
                                >
                                    {item.display}
                                </Text>
                            </NavLink>
                        }
                        </>
                        )
                    ))}
                </HStack>


                    <Button
                        bgColor="brand.100"
                        color="white"
                        w="fit-content"
                        py="30px"
                        px="60px"
                        fontSize={16}
                        fontWeight={900}
                        rounded="full"
                        border="1px solid"
                        borderColor="brand.100"
                        textTransform="uppercase"
                        rightIcon={<Icon as={RxDownload} fontSize="20px"/>}
                        onClick={() => handleScroll("how-to-download")}
                        _hover={{
                            bgColor: "white",
                            color: "brand.100"
                        }}
                    >
                        Download the App
                    </Button>
                

         </HStack>

        </ContainerLayout>

        :

        <>


            <HStack
                w="full"
                justify="space-between"
                align="center"
                py="12px"
                px="20px"
                bgColor="white"
                rounded="full"
            >
            
                <Link to="/">
                    <Image
                        src="https://res.cloudinary.com/doqvfemo3/image/upload/f_auto,q_auto/v1/SmartCBT/lvf1b6i5d1tkxe6wgsbu"
                        w="250px"
                        h="44px"
                        alt="smart-cbt-logo"
                        objectFit="contain"
                        ml={-10}
                    />   
                </Link>


                <VStack>
                    <Box
                        w="40px"
                        h="40px"
                        p="4px"
                        rounded="8px"
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        flexDirection="column"
                        bg="brand.100"
                        cursor="pointer"
                    >
                        <Icon 
                            as={IoMenu} 
                            w={6}
                            h={6}
                            color="white" 
                            onClick={onOpen} 
                        />
                    </Box>
                </VStack>    

            </HStack>

        <Drawer placement={"right"} onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerBody>
                        <VStack 
                            mt="40px" 
                            w="full" 
                            gap="25px" 
                            justify="start" 
                            align="start"
                        >
                            {NavbarData.map((item) => ((
                                <>
                                {item.isSection ? 
                                    <Text
                                        fontSize={16}
                                        fontWeight={600}
                                        color={item.id === id ? "brand.100" : "brand.600"}
                                        _hover={{ color: "brand.100" }}
                                        cursor="pointer"
                                        onClick={() => handleScroll(item.id)}
                                    >
                                        {item.display}
                                    </Text>

                                    :

                                    <NavLink key={item.id} to={item.path}>
                                        <Text
                                            fontSize={16}
                                            fontWeight={600}
                                            color={item.id === id ? "brand.100" : "brand.600"}
                                            _hover={{ color: "brand.100" }}
                                        >
                                            {item.display}
                                        </Text>
                                    </NavLink>
                                }
                                </>
                                )
                            ))}


                        <Button
                            bgColor="brand.100"
                            color="white"
                            w="full"
                            py="30px"
                            px="60px"
                            fontSize={16}
                            fontWeight={900}
                            rounded="full"
                            border="1px solid"
                            borderColor="brand.100"
                            textTransform="uppercase"
                            rightIcon={<Icon as={RxDownload} fontSize="20px"/>}
                            onClick={() => handleScroll("how-to-download")}
                            _hover={{
                                bgColor: "white",
                                color: "brand.100"
                            }}
                        >
                            Download the App
                        </Button>
                    
                 

                        </VStack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        
        
        </>

    }
    
    
    </>
  )
}

export default Navbar
