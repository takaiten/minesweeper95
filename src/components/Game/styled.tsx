import { Panel, Window } from 'react95';
import styled from 'styled-components';

export const GameInfoRow = styled.div`
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: space-evenly;
  & > * {
    margin-right: 12px;
  }
`;

export const WindowContainer = styled(Window)`
  min-width: max-content;
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
`;

export const WindowPanel = styled(Panel)`
  display: grid;
`;

export const GameInfoPanel = styled(Panel)`
  padding: 8px;
  margin: 8px;
`;

export const FieldPanel = styled(Panel)`
  margin: 8px;
  margin-top: 0;
`;
