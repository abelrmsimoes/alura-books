import { useState } from "react";
import styled from "styled-components";

import Input from "../Input";

import { books } from './searchData';

const SearchContainer = styled.section`
  background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
  color: #FFF;
  text-align: center;
  padding: 85px 0;
  height: 270px;
  width: 100%;
`
const Title = styled.h2`
  color: #FFF;
  font-size: 36px;
  text-align: center;
  width: 100%;
`
const Subtitle = styled.h3`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 40px;
`
const ResultsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
`
const BookItem = styled.div`
  background: #FFF;
  color: #000;
  padding: 10px;
  border-radius: 5px;
  width: 150px;
  text-align: center;
`

export default function Search() {
  const [search, setSearch] = useState([]);

  return (
    <SearchContainer>
      <Title>Ja sabe por onde começar?</Title>
      <Subtitle>Encontre seu livro em nossa estante</Subtitle>
      <Input
        type="text"
        placeholder="Escreva sua próxima leitura"
        onBlur={event => {
          const value = event.target.value;
          const result = books.filter(book => book.title.includes(value));
          setSearch(result);
        }}
      />
      <ResultsContainer>
        {search.map(book => (
          <BookItem key={book.id}>
            <h4>{book.title}</h4>
            <img
              src={book.src}
              alt={book.title}
              style={{ width: '100%' }}
            />
          </BookItem>
        ))}
      </ResultsContainer>
    </SearchContainer>
  );
}