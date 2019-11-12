import styled from 'styled-components';

const DebugButton = styled.button`
  display: inline-block;
  vertical-align: top;
  padding: 8px 15px;
  transition: all .1s;
  font-family: inherit;
  cursor: pointer;
  font-size: 8px;
  color: #111;
  text-align: center;
  text-decoration: none;
  text-shadow: 0 0 2px rgba(255, 255, 255, 1);
  background-color: #ccc;
  background-clip: padding-box;
  border: 1px solid;
  border-color: #202020 #1a1a1a #111;
  border-radius: 2px;
  background-image: -webkit-linear-gradient(top, #efefef, #777);
  background-image: -moz-linear-gradient(top, #efefef, #777);
  background-image: -o-linear-gradient(top, #efefef, #777);
  background-image: linear-gradient(to bottom, #efefef, #777);
  -webkit-box-shadow: inset 0 1px rgba(255, 255, 255, 0.09), 0 1px 1px rgba(0, 0, 0, 0.3);
  box-shadow: inset 0 1px rgba(255, 255, 255, 0.09), 0px 1px 1px rgba(0, 0, 0, 0.2);

  &:hover {
    background-color: #aaaaaa;
    background-image: -webkit-linear-gradient(top, #ccc, #555);
    background-image: -moz-linear-gradient(top, #ccc, #555);
    background-image: -o-linear-gradient(top, #ccc, #555);
    background-image: linear-gradient(to bottom, #ccc, #555);
  }

  &:active, &.active {
    background-color: #b42f32;
    border-color: #1c1c1c #202020 #222;
    -webkit-box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.3), 0 1px rgba(255, 255, 255, 0.09);
    box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.3), 0 1px rgba(255, 255, 255, 0.09);
  }


  color: #bbb;
  text-shadow: 0 0 2px rgba(0, 0, 0, .7);
  background-color: #474747;
  border-color: #1c1c1c #202020 #222;
  background-image: -webkit-linear-gradient(top, #2a2a2a, #1b1b1b);
  background-image: -moz-linear-gradient(top, #2a2a2a, #1b1b1b);
  background-image: -o-linear-gradient(top, #2a2a2a, #1b1b1b);
  background-image: linear-gradient(to bottom, #2a2a2a, #1b1b1b);

  &:hover {
    background-color: #363636;
    background-image: -webkit-linear-gradient(top, #404040, #2a2a2a);
    background-image: -moz-linear-gradient(top, #404040, #2a2a2a);
    background-image: -o-linear-gradient(top, #404040, #2a2a2a);
    background-image: linear-gradient(to bottom, #404040, #2a2a2a);
  }
`;

export { DebugButton };
