import "./App.css";
import { useState } from "react";

function App() {
  const InitialValue = [
    ["", "", ""],

    ["", "", ""],

    ["", "", ""],
  ];

  let [flag, setFlag] = useState(true);
  let [Data, setData] = useState(InitialValue);
  let [counter, setCounter] = useState(0);
  let [winner, setWinner] = useState("");

  const checkForWinner = (squares: string[][]) => {
    let combos = {
      rows: [
        [squares[0][0], squares[0][1], squares[0][2]],
        [squares[1][0], squares[1][1], squares[1][2]],
        [squares[2][0], squares[2][1], squares[2][2]],
      ],
      columes: [
        [squares[0][0], squares[1][0], squares[2][0]],
        [squares[0][1], squares[1][1], squares[2][1]],
        [squares[0][2], squares[1][2], squares[2][2]],
      ],
      diagnols: [
        [squares[0][0], squares[1][1], squares[2][2]],
        [squares[0][2], squares[1][1], squares[2][0]],
      ],
    };

    combos.rows.forEach((e) => {
      e.map((w) => {
        if (e[0] === "" || e[2] === "" || e[3] === "") {
          return;
        } else if (e[0] === e[1] && e[1] === e[2]) {
          setWinner(w);
          alert(`The Winner is : ${w}`);
          setData(InitialValue);
        }
      });
    });

    combos.columes.forEach((e) => {
      e.map((w) => {
        if (e[0] === "" || e[2] === "" || e[3] === "") {
          return;
        } else if (e[0] === e[1] && e[1] === e[2]) {
          setWinner(w);
          alert(`The Winner is : ${w}`);
          setData(InitialValue);
        }
      });
    });

    combos.diagnols.forEach((e) => {
      e.map((w) => {
        if (e[0] === "" || e[2] === "" || e[3] === "") {
          return;
        } else if (e[0] === e[1] && e[1] === e[2]) {
          setWinner(w);
          alert(`The Winner is : ${w}`);
          setData(InitialValue);
        }
      });
    });
  };

  let hanldeChange = (index1: number, index2: number) => {
    let cloneMatrix = Data;
    if (cloneMatrix[index1][index2] === "") {
      flag
        ? (cloneMatrix[index1][index2] = "O")
        : (cloneMatrix[index1][index2] = "X");
      setData([...cloneMatrix]);
      setFlag(!flag);
      setCounter(++counter);
    } else alert("Already Flaged, choose another sell");

    checkForWinner(cloneMatrix);
  };

  return (
    <div className="App">
      <div className="Container">
        {Data.map((item, index1) => {
          return (
            <div>
              {item.map((item, index2) => {
                return (
                  <div onClick={() => hanldeChange(index1, index2)}>{item}</div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
