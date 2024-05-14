import styled from "styled-components";

interface IMainApp {
  $bgImg: string;
}

export const MainApp = styled.main<IMainApp>`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden scroll;
  background: linear-gradient(
      45deg,
      ${({
        theme: {
          primary: { bgGradient },
        },
      }) => `${bgGradient}f2, ${bgGradient}f8`}
    ),
    url(${({ $bgImg }) => $bgImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
`;

export const MainPrimaryApp = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  margin-top: calc(var(--ten-px) * 12);
  padding-right: calc(var(--ten-px) * 2.5);
  margin-bottom: calc(var(--ten-px) * 5);
  // border: 1px solid red;

  & > main {
    width: 75%;
  }
`;
