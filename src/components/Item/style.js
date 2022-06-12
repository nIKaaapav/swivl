import styled from "styled-components";
import {Link} from "react-router-dom";

export const ItemWrapper = styled(Link)`
  width: 100%;
  border-radius: 10px;
  border: 1px solid grey;
  display: flex;
  margin-top: 20px;
  margin-bottom: 20px;
  text-decoration: none;
  color: black;
  padding: 10px;
`

export const Avatar = styled.img`
  width: ${props => props.size | 100}px;
  height: ${props => props.size | 100}px;
  border-radius: 50%;
  margin-right: 30px;
`

export const ItemRightPart = styled.div`
  display: flex;
  flex-direction: column;
`
