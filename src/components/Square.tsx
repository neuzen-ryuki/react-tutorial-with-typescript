import React from 'react';
import { ISquare } from '../interface';

// React.FC
interface SquareProps {
  value: ISquare;
  onClick: () => void;
}
const Square: React.FC<SquareProps> = ({ value, onClick }) => {
  return(
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
};

export default Square;

// 関数コンポーネント
/* function Square(props: SquareProps) {
 *   return(
 *     <button className="square" onClick={props.onClick}>
 *       {props.value}
 *     </button>
 *   );
 * }
 *  */


