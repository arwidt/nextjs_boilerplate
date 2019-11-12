import styled from 'styled-components';

const BaseSvgExtend = styled.svg`
  width: auto;
  height: 100%;

  &.left {
    transform: rotate(180deg);
  }
  &.right {
    transform: rotate(0deg);
  }
  &.down {
    transform: rotate(90deg);
  }
  &.up {
    transform: rotate(-90deg);
  }
`;

export { BaseSvgExtend };
