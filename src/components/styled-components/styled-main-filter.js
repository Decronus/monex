import styled from "styled-components";
import * as M from "./mixins";

export const MainFilter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${M.paddingsLeftRight}
  ${M.marginLeftRight}
  margin-bottom: 2rem;
  height: 10rem;
  background: #212121;
  font-size: 3.2rem;
  color: #6f6f6f;
`;
