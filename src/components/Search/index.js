import { useState } from "react";
import styled from "styled-components";

import Input from "../Input";
import { books } from './searchData';

const SearchContainer = styled.section`
  width: 100%;
  color: #FFF;
  height: 470px;
  padding: 85px 0;
  text-align: center;
  background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
`

const Title = styled.h2`
  color: #FFF;
  width: 100%;
  font-size: 36px;
  text-align: center;
`

const Subtitle = styled.h3`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 40px;
`

const Results = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  justify-content: center;
`

const BookItem = styled.div`
  color: #FFF;
  padding: 2em;
  text-align: center;
  
  cursor: pointer;
  
  img {
    width: 100px;
  }
  
  &:hover {
    transform: scale(1.1);
    transition: transform 0.3s ease-in-out;
  }
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
      <Results>
        {search.map(book => (
          <BookItem key={book.id}>
            <h4>{book.title}</h4>
            <img
              src={book.src}
              alt={book.title}
            />
          </BookItem>
        ))}
      </Results>
    </SearchContainer>
  );
}