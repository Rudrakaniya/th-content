import React from "react";
import {
  Skeleton,
  SkeletonText,
  SkeletonCircle,
  Card,
  CardBody,
  Stack,
} from "@chakra-ui/react";

export const CardSkeleton: React.FC = () => {
  return (
    <Card maxW="sm" m={2} position="relative" minHeight="380">
      <Skeleton height="200px" />
      <CardBody>
        <SkeletonText mt="4" noOfLines={1} spacing="2" skeletonHeight="2" />
        <SkeletonText mt="4" noOfLines={2} spacing="2" skeletonHeight="4" />
        <Stack
          display="flex"
          flexDirection="row"
          alignItems="center"
          position="absolute"
          justifyContent="flex-end"
          width="100%"
          gap="2"
          bottom="3"
          right="4"
        >
          <SkeletonCircle size="10" />
          <SkeletonCircle size="10" />
        </Stack>
      </CardBody>
    </Card>
  );
};
