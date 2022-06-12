import styled from "styled-components";

export const Container = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ContainerItems = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 400px;
`

export const LinkToForeignSite = styled.a`
    text-decoration: none;
    color: black;
      &:hover {
        color: grey;
      }
`