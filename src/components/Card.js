import { Heading, HStack, Image, Text, VStack, Link, Button, Prompt, Portal } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  
  
  return  <HStack borderRadius="md">
  <VStack bg="white" align="flex-start" justify="flex-start" pb="4" borderRadius="lg">
  <Image borderRadius="lg" src={imageSrc} objectFit="cover" />
    <Heading px="4" color="black">{title}</Heading>
    <Text px="4" color="grey">{description}</Text>
    
    <Text px="4" color="black">See more <Button onClick={handleClick}><FontAwesomeIcon icon={faArrowRight} /></Button></Text><a href="/#contact-me" onClick={handleClick("contactme")}  >Contact Me</a>
  </VStack>
  </HStack>;
  
};

export default Card;
