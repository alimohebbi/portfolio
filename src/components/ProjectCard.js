import {Heading, HStack, Image, Text, VStack, Card, CardBody, CardFooter,} from "@chakra-ui/react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import React from "react";

const ProjectCard = ({title, description, imageSrc}) => {
    // Implement the UI for the Card component according to the instructions.
    // You should be able to implement the component with the elements imported above.
    // Feel free to import other UI components from Chakra UI if you wish to.
    return <Card>
        <Image src={imageSrc} objectFit='cover'/>
        <CardBody>


           <VStack spacing={3} align="flex-start">
                <Heading size='md'>{title}</Heading>
            <Text>
                {description}
            </Text>

                <HStack>
                    <span>See More</span>
                <FontAwesomeIcon icon={faArrowRight}/>
                </HStack>
           </VStack>

        </CardBody>
    </Card>

};

export default ProjectCard;

//
//          <VStack spacing={5}>
//     <Image src={imageSrc}/>
//     <Heading size="m">{title}</Heading>
//     <Text>{description}</Text>
//     <HStack>
//         <span>See More</span>
//         <FontAwesomeIcon icon={faArrowRight}/>
//     </HStack>
// </VStack>
