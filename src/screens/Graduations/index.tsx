import React from "react";
import { FlatList } from "react-native-gesture-handler";
import { categories } from "../../resource/Categories";

import {
  Container,
  Header,
  Title,
  CategoryContainer,
  CategoryIcon,
  CategoryTitle,
  Separetor,
} from "./styler";

interface Category {
  key: string;
  name: string;
}

interface Props {
  category: Category;
  setCategory: (category: Category) => void;
  selectCatergoryClose: () => void;
}

export function Graduations({
  category,
  setCategory,
  selectCatergoryClose,
}: Props) {
  function handleSetCategory(item: Category) {
    setCategory(item);
    selectCatergoryClose();
  }

  return (
    <Container>
      <Header>
        <Title>Posto/Graduação</Title>
      </Header>
      <FlatList
        data={categories}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <CategoryContainer
            onPress={() => handleSetCategory(item)}
            isSelect={item.key === category.key}
          >
            <CategoryTitle>{item.name}</CategoryTitle>
          </CategoryContainer>
        )}
        ItemSeparatorComponent={() => <Separetor />}
      />
    </Container>
  );
}
