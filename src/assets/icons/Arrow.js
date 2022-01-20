import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const Arrow = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={7.582}
    height={12.519}
    viewBox="0 0 7.582 12.519"
    {...props}>
    <Path
      d="M7.082 6.258h0a.82.82 0 0 0-.252-.592h0L1.893.729h0A.822.822 0 1 0 .788 1.947L5.1 6.258.73 10.625h0a.823.823 0 0 0 1.163 1.163h0l1.031-1.031L6.83 6.851h0a.82.82 0 0 0 .252-.592Z"
      fill="#3b83fc"
      stroke="#3b83fc"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default Arrow;
