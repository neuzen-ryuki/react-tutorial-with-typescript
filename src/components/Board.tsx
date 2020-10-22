import React from 'react';
import { ISquare } from '../interface';
import Square from './Square';

// React.FC
interface BoardProps {
  squares: ISquare[];
  onClick: (i: number) => void;
}
const Board: React.FC<BoardProps> = ({ squares, onClick }) => {
  const renderSquare = (i: number) => {
    return (
      <Square
        value={squares[i]}
        onClick={() => onClick(i)}
      />
    )
  };

  const renderRow = (row: number) => {
    return (
      <div className="board-row">
        {
          [...Array(3)].map((_,i) => {
            const index = row * 3 + i;
            return(renderSquare(index));
          })
        }
      </div>
    );
  };

  return (
    <div>
      {
        [...Array(3)].map((_,i) => {
          return(renderRow(i));
        })
      }
    </div>
  );

};

export default Board;

// 関数コンポーネント
/* function Board(props: BoardProps) {
 *   const renderSquare = (i: number) => {
 *     return(
 *       <Square
 *         value={props.squares[i]}
 *         onClick={() => props.onClick(i)}
 *       />
 *     );
 *   }
 *
 *   return (
 *     <div>
 *       <div className="board-row">
 *         {renderSquare(0)}
 *         {renderSquare(1)}
 *         {renderSquare(2)}
 *       </div>
 *       <div className="board-row">
 *         {renderSquare(3)}
 *         {renderSquare(4)}
 *         {renderSquare(5)}
 *       </div>
 *       <div className="board-row">
 *         {renderSquare(6)}
 *         {renderSquare(7)}
 *         {renderSquare(8)}
 *       </div>
 *     </div>
 *   );
 * }
 *  */

// クラスコンポーネント
/* class Board extends React.Component<BoardProps> {
 *   renderSquare(i: number) {
 *     return(
 *       <Square
 *         value={this.props.squares[i]}
 *         onClick={() => this.props.onClick(i)}
 *       />
 *     );
 *   }
 *
 *   render() {
 *     return (
 *       <div>
 *         <div className="board-row">
 *           {this.renderSquare(0)}
 *           {this.renderSquare(1)}
 *           {this.renderSquare(2)}
 *         </div>
 *         <div className="board-row">
 *           {this.renderSquare(3)}
 *           {this.renderSquare(4)}
 *           {this.renderSquare(5)}
 *         </div>
 *         <div className="board-row">
 *           {this.renderSquare(6)}
 *           {this.renderSquare(7)}
 *           {this.renderSquare(8)}
 *         </div>
 *       </div>
 *     );
 *   }
 * } */

