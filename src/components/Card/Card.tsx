import {
  CardBody,
  Stack,
  Heading,
  CardFooter,
  ButtonGroup,
  Progress,
  Box,
  Image,
  Text,
  Card as ChakraCard,
  IconButton,
} from "@chakra-ui/react";
import { GoShareAndroid, GoBookmark, GoClock } from "react-icons/go";
import { BiSolidPieChartAlt } from "react-icons/bi";
import { MdHeadphones } from "react-icons/md";

interface CardProps {
  imageSrc: string;
  imageAlt: string;
  percentageOfContentCompleted: number;
  contentLength: string;
  subtitle: string;
  title: string;
  expertName: string;
  category: string;
}

export const Card = (props: CardProps) => {
  return (
    <ChakraCard maxW="sm" m={2} position="relative">
      <Box position="relative">
        <Image src={props.imageSrc} alt={props.imageAlt} />
        <Progress value={props.percentageOfContentCompleted} />
        <Box
          position="absolute"
          top="0"
          left="0"
          p={2}
          gap="2"
          display="flex"
          alignItems="center"
          backgroundColor="white"
        >
          <BiSolidPieChartAlt />
          <Text>{props.percentageOfContentCompleted}% Completed</Text>
        </Box>
        <Box
          display="flex"
          alignItems="center"
          position="absolute"
          justifyContent="space-between"
          width="100%"
          bottom="4"
          left="0"
        >
          <IconButton
            ml="2"
            isRound={true}
            variant="solid"
            colorScheme="red"
            aria-label="Search database"
            icon={<MdHeadphones color="white" />}
          />
          <Box
            display="flex"
            alignItems="center"
            backgroundColor="cyan"
            p="2"
            mr="2"
            gap="2"
            borderRadius="20"
          >
            <GoClock />
            <Text> {props.contentLength}</Text>
          </Box>
        </Box>
      </Box>
      <CardBody>
        <Stack>
          <Text>{props.subtitle}</Text>
          <Heading size="md">{props.title}</Heading>
          <Text color="blue.600" fontSize="medium">
            {props.expertName}
          </Text>
          <Text color="blue.600" fontSize="medium">
            {props.category}
          </Text>
        </Stack>
      </CardBody>
      <CardFooter
        display="flex"
        alignItems="center"
        justifyContent="flex-end"
        p="0"
        pb="4"
      >
        <ButtonGroup spacing="2" mr="2">
          {/* TODO: Change the colors of the icons, it should come from the theme */}
          <IconButton
            variant="link"
            fontSize="24"
            aria-label="Search database"
            icon={<GoShareAndroid color="red" />}
          />
          <IconButton
            variant="link"
            fontSize="24"
            aria-label="Search database"
            icon={<GoBookmark color="red" />}
          />
        </ButtonGroup>
      </CardFooter>
    </ChakraCard>
  );
};
