import styled from "@emotion/styled";

export const DashBoardContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1400px;
  width: 1200px;
  height: 700px;
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
  }
`;

export const ProjectInfo = styled.div`
  width: 50%;
  height: 50%;
`;

export const ProjectData = styled.div`
  width: 50%;
  height: 50%;
`;
