import styled from 'styled-components';

const SearchInput = styled.input`
  width: 150px;
  height: 35px;
  border: solid 1px #c9c9c9;
  font-size: 10pt;
  color: #63717f;
  padding: 5px 30px 5px 10px;
  border-radius: 8px;
  background: url("https://s3.eu-central-1.amazonaws.com/napptilus/level-test/imgs/ic_search.png") no-repeat scroll 0 0 transparent;
  background-position: 125px 9px;
  background-size: 15px;
  align-self: flex-end;
  margin-top: 20px;
  &:hover, :focus, :active {
    outline: none;
  }
`;

export default SearchInput;