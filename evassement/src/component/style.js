import styled, { css,keyframes } from 'styled-components'

export const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0.5em 1em;
  padding: 0.25em 1em;
  align-self : center;
  ${props => props.primary && css`
    background: palevioletred;
    color: white;
  `}
`
export const ItemContainer = styled.div`
padding-top:12px;
height : 16vh;
justify-content: center;
`

export const Container = styled.div`
display:flex;
flex-direction : column;
align-items : center;
padding-top:26px;
`

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
export const Wrapper = styled.div`
margin-top:100px;
display : flex;
justify-content : center;
height : 100%;
width : 100%;
`;

export const Spinner = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);
  border-top: 2px solid grey;
  border-right: 2px solid grey;
  border-bottom: 2px solid grey;
  border-left: 4px solid palevioletred;
  background: transparent;
  width: 42px;
  height: 42px;
  border-radius: 50%;
`;

export const Table = styled.table`
  border: 1px solid #ddd;
  padding: 8px;
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #04AA6D;
  color: white;
  tr:nth-child(even){background-color: #f2f2f2;}
  tr:hover {background-color: #ddd;}
  margin :8px;
  td, th {
    border: 1px solid #ddd;
    padding: 8px;
    color: black;
  }
}
`