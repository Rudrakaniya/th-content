import {
  CardBody,
  Stack,
  Heading,
  CardFooter,
  ButtonGroup,
  Progress,
  Box,
  Image,
  Center,
  Text,
  Card as ChakraCard,
  IconButton,
  useTheme,
} from "@chakra-ui/react";
import { GoShareAndroid, GoBookmark, GoClock } from "react-icons/go";
import { BiSolidPieChartAlt } from "react-icons/bi";
import { MdHeadphones } from "react-icons/md";

interface CardProps {
  cardAction: () => void;
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
  const { colors } = useTheme();
  return (
    <ChakraCard maxW="sm" m={2} position="relative" borderRadius="12px">
      <Box position="relative">
        <Box borderRadius="12px">
          <Center>
            <Image
              borderRadius="10px 10px 0 0"
              src={props.imageSrc}
              alt={props.imageAlt}
              width="100%"
              height="200px"
              objectFit="cover"
            />
          </Center>
        </Box>
        <Progress
          size="xs"
          colorScheme="primary"
          value={props.percentageOfContentCompleted}
        />
        <Box
          position="absolute"
          top="0"
          left="0"
          p={2}
          gap="2"
          bg={colors.primary[50]}
          display="flex"
          borderRadius="10px 0"
          alignItems="center"
        >
          <BiSolidPieChartAlt color={colors.primary[400]} />
          <Text fontSize="small" colorScheme="black" fontWeight="600">
            {props.percentageOfContentCompleted}% Completed
          </Text>
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
            fontSize="24"
            colorScheme="primary"
            onClick={props.cardAction}
            aria-label="Search database"
            icon={<MdHeadphones color="white" />}
          />
          <Box
            display="flex"
            alignItems="center"
            backgroundColor="rgba(0, 0, 0, 0.5)"
            p="2"
            mr="2"
            gap="2"
            color="white"
            fontWeight="600"
            borderRadius="20"
          >
            <GoClock stroke-width="1.2" color="white" />
            <Text>{props.contentLength}</Text>
          </Box>
        </Box>
      </Box>
      <CardBody>
        <Stack spacing="1">
          <Text textTransform="uppercase" letterSpacing="0.8px">
            {props.subtitle}
          </Text>
          <Heading
            textTransform="capitalize"
            size="md"
            maxH="3.5em"
            overflow="hidden"
            display="-webkit-box"
          >
            {props.title}
          </Heading>
          <Text fontSize="medium">{props.expertName}</Text>
          <Text
            textTransform="capitalize"
            fontWeight={700}
            color="#797670"
            fontSize="medium"
          >
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
          <IconButton
            variant="link"
            fontSize="24"
            onClick={props.cardAction}
            aria-label="Search database"
            icon={<GoShareAndroid color={colors.primary[600]} />}
          />
          <IconButton
            variant="link"
            fontSize="24"
            onClick={props.cardAction}
            aria-label="Search database"
            icon={<GoBookmark color={colors.primary[600]} />}
          />
        </ButtonGroup>
      </CardFooter>
    </ChakraCard>
  );
};
