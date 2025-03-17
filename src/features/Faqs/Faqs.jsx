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
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from "@chakra-ui/react";
import { FiPlus, FiMinus } from "react-icons/fi"; 
import ContainerLayout from "../../ui/layouts/ContainerLayout";
import { faqsData } from "../../data/FaqsData";
import { Element } from "react-scroll";

function Faqs({ defaultIndices }) {

  const [openItems, setOpenItems] = useState([0]);

  useEffect(() => {

    if (defaultIndices && defaultIndices?.length > 0) {
      setTimeout(() => {
        setOpenItems([defaultIndices[0]]); 
      }, 500);
    }
  }, [defaultIndices]);


  const handleAccordionChange = (expandedIndex) => {
    setOpenItems(expandedIndex >= 0 ? [expandedIndex] : []);
  };

  return (
    <Element id="faqs">
      <Stack
        w="full"
        justify="start"
        align="start"
        py={["4rem", "4rem", "8rem"]}
        bgColor="white"
      >
        <ContainerLayout>
          <VStack w="full" justify="center" align="center" gap="100px">
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
                Got Questions? <Text as="span" color="brand.100">We Have Answers!</Text>
              </Heading>
            </VStack>

            <Accordion
              index={openItems}
              onChange={handleAccordionChange} 
              allowMultiple={false} 
              allowToggle={true} 
            >
              <SimpleGrid
                w="full"
                columns={[1, 1, 1, 2]}
                gap="20px"
              >
                {faqsData.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    borderTop="6px solid"
                    borderTopColor="brand.100"
                    rounded="10px"
                    mb={4}
                    w="full"
                    bgColor="white"
                    py="15px"
                    boxShadow="0 0 8px rgba(0,0,0,0.3)"
                    height={openItems.includes(index) ? "auto" : "97px"}
                  >
                    <h2>
                      <AccordionButton w="full">
                        <HStack
                          w="full"
                          justify="space-between" 
                          align={["start", "start", "center"]}
                          gap="10px"
                          wrap={["wrap", "wrap", "wrap", "nowrap"]}
                        >
                          <HStack
                            w="full"
                            justify="start"
                            align={["start", "start", "center"]}
                            gap="10px"
                            wrap={["wrap", "wrap", "wrap", "nowrap"]}
                          >
                            <VStack
                              w="48px"
                              h="48px"
                              justify="center"
                              align="center"
                              bgColor="brand.100"
                              rounded="full"
                            >
                              <Text
                                fontSize={18}
                                fontWeight={700}
                                lineHeight="25px"
                                color="brand.400"
                              >
                                0{index + 1}.
                              </Text>
                            </VStack>

                            <Text
                              fontSize={18}
                              fontWeight={700}
                              lineHeight="25px"
                              color="black"
                              whiteSpace="pre-line"
                            >
                              {faq.question}
                            </Text>
                          </HStack>


                          <Icon
                            as={openItems.includes(index) ? FiMinus : FiPlus}
                            w={6}
                            h={6}
                            color="brand.100"
                          />
                        </HStack>
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <Text
                        fontSize={16}
                        fontWeight={400}
                        lineHeight="25px"
                        color="brand.900"
                      >
                        {faq.answer}
                      </Text>
                    </AccordionPanel>
                  </AccordionItem>
                ))}
              </SimpleGrid>
            </Accordion>
          </VStack>
        </ContainerLayout>
      </Stack>
    </Element>
  );
}

export default Faqs;