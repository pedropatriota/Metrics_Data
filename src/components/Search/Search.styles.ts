import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 90%;
  height: 100vh;
  margin: 50px auto;
`;

export const WrapperTop = styled.div`
  width: 100%;
`;

export const WrapperBottom = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
`;

export const GraphContainer = styled.div`
  max-width: 100%;
  display: flex;
  height: auto;
  min-width: 200px;
`;
