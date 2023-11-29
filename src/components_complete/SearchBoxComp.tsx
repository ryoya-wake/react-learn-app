import { Box, Button, HStack, Input } from "@chakra-ui/react";
import { useState } from "react";

type SearchBoxProps = {
  handleClick: (pokemonName: string) => void;
};

//検索ボックスのコンポーネント
function SearchBoxComp({ handleClick }: SearchBoxProps) {
  //検索ボックス入力されている文字列
  const [inputValue, setInputValue] = useState("");

  //クリック時イベント
  const _onClick = () => {
    handleClick(inputValue);
  };

  //インプット入力時イベント
  const _onChange = (value: string) => {
    setInputValue(value);
  };

  return (
    <Box>
      <HStack>
        <Input
          value={inputValue}
          placeholder="Hello"
          onChange={(e) => _onChange(e.target.value)}
        />
        {/* todo:ボタン色を変更 */}
        <Button colorScheme="blue" onClick={_onClick}>
          Button
        </Button>
      </HStack>
    </Box>
  );
}

export default SearchBoxComp;
