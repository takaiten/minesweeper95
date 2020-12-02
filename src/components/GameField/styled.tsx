import { Button } from 'react95';
import styled from 'styled-components';

const colorsMap: { [index: number]: string } = {
  0: 'lightgrey',
  1: 'blue',
  2: 'green',
  3: 'red',
  4: 'purple',
  5: 'maroon',
  6: 'turquoise',
  7: 'black',
  8: 'grey',
};

export const GameFieldContainer = styled.div`
  padding: 0;
`;

export const FixedButton = styled(Button)`
  width: 36px;
  height: 36px;
  min-width: 36px;
  min-height: 36px;
  font-weight: bold;
  font-size: 20px;
  background-color: lightgrey;
  color: ${({ number }: { number: number }) => colorsMap[number]};
  &:before {
    border: ${({ active }) => (active ? 'none' : null)};
  }
  & > * {
    position: relative;
  }
  &:active:not(:disabled) {
    padding-top: 0;
    & > * {
      top: 2px;
    }
  }
`;
