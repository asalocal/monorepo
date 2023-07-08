import { KaijuColors } from "@kaiju-ui/theme";
import styled from "styled-components";

export const MaintanencePageContainer = styled.main`
  height: 100vh;
  width: 100vw;
  background-image: url("/cabo-frio.jpg");
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &::after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: rgb(0 0 0 / 0.4);
    z-index: 1;
  }
`;

export const TextContainer = styled.div`
  z-index: 9;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    margin-bottom: 20px;
  }

  h1 {
    text-align: center;
    color: ${KaijuColors.neutral0};
  }
`;
