import { Flex, Text } from "@chakra-ui/react";

type TitleProps = {
  titleText: string;
};

function TitleComp({ titleText }: TitleProps) {
  return (
    <Flex
      h={"140px"}
      bgColor={"red.500"}
      color={"white"}
      fontSize={"64px"}
      pl={"35px"}
      align={"center"}
    >
      <Text>{titleText}</Text>
    </Flex>
  );
}

export default TitleComp;
