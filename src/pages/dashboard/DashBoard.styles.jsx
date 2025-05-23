import styled from "@emotion/styled";

export const DashBoardContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1400px;
  width: 100%;
  height: 100%;
  padding: 50px 60px;
  padding-bottom: 100px;
  background-color: rgba(255, 255, 255, 0.5);
`;

export const DashBoardTitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
  padding-right: 10px;

  > span {
    font-size: 24px;
    font-weight: 700;
  }
`;

export const DashBoardToggleWrap = styled.div`
  button {
    width: 85px;
    height: 35px;
    justify-content: center;
    align-items: center;

    font-size: 16px;
    font-weight: 500;
  }
`;

export const ContainerWrap = styled.div`
  display: flex;
  width: 100%;
  height: 50%;
  margin-bottom: 20px;
`;

export const ContainerTitle = styled.p`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 20px;
`;

export const DescriptionSection = styled.div`
  padding: 20px;
`;

export const CompletionContainer = styled.div`
  width: 50%;
  height: 50%;
`;

export const MemberContainer = styled.div`
  width: 50%;
  height: 50%;

  img {
    width: 100px;
    height: 100px;
    border-radius: 50px;
    margin: 10px;
    border: 1px solid rgb(120, 120, 120, 0.3);
  }
`;

export const ProjectInfo = styled.div`
  width: 50%;
  height: 50%;

  div {
    max-width: 500px;
    height: 350px;
    background-color: white;
    box-shadow: 4px 8px 8px hsl(0deg 0% 0% / 0.38);
    /* box-shadow: 8px 16px 16px hsl(0deg 0% 0% / 0.25); */
  }
`;

export const ProjectData = styled.div`
  width: 50%;
  height: 50%;
`;

export const ButtonSection = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  height: 390px;
  gap: 70px;
  justify-content: flex-end;
  align-items: flex-end;
`;

export const ButtonWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const ButtonDescription = styled.div`
  display: flex;
  text-decoration: underline;
`;

export const ButtonTitle = styled.div`
  display: flex;
  cursor: pointer;
  padding: 8px 15px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  font-weight: 600;
  color: rgba(0, 0, 0, 1);
  background-color: rgba(255, 255, 255, 1);

  box-shadow:
    0 3px 5px rgba(0, 0, 0, 0.16),
    0 3px 5px rgba(0, 0, 0, 0.23);
  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
    color: rgba(255, 255, 255, 1);
  }
`;

export const ButtonTitleDanger = styled.div`
  display: flex;
  padding: 8px 15px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 1);
  color: #ff3c3c;
  font-weight: 600;
  cursor: pointer;

  box-shadow:
    0 3px 5px rgba(0, 0, 0, 0.16),
    0 3px 5px rgba(0, 0, 0, 0.23);

  &:hover {
    background-color: #ff3c3c;
    color: #ffffff;
  }
`;

export const SlideImage = styled.img`
  display: flex;
  width: 50px;
  height: 50px;
  object-fit: cover;
`;
