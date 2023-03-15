import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  
  return  <HStack borderRadius="md">
  <VStack bg="white" align="flex-start" justify="flex-start" pb="4" borderRadius="lg">
  <Image borderRadius="lg" src={imageSrc} objectFit="cover" />
    <Heading px="4" color="black">{title}</Heading>
    <Text px="4" color="grey">{description}</Text>
    <Text px="4" color="black">See more <FontAwesomeIcon icon={faArrowRight} /></Text>
  </VStack>
  </HStack>;
  
};

export default Card;
