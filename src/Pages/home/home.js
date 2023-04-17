import "./home.css";
import { useEffect, useRef, useState } from "react";
export default function Home() {
  let [models, setModels] = useState(0);
  let [num, setNum] = useState(0);
  // let count = useRef();
  let [counting, setcounting] = useState(0);
  useEffect(() => {
    // count.current = count.current + 1;
    // console.log(count.current.focus());
  });

  // const focusInput = () => {
  //   count.current.focus();
  //   console.log(count.current.focus());
  // };
  function onChangeEvent(e) {
    let clone = Number(e.target.value);

    setModels(clone + 1);
  }
  const increaseCount = (function () {
    let count = 0;
    return function () {
      count += 1;
      return setcounting(count);
    };
  })();
  console.log(counting);
  let incNum = () => {
    setNum(Number(num) + 1);
  };
  let decNum = () => {
    setNum(num - 1);
  };
  let handleChange = (e) => {
    setNum(e.target.value);
  };
  return (
    <>
      <div className="container-fluid">
        <div className="container text-center">
          <h1>Naveen</h1>
          {/* <input type="text" ref={count} onChange={(e) => setModels(e)} />
          <button onClick={focusInput}>Focus Input</button>
          <p>{count.current}</p> */}
          <input type="text" onChange={(e) => onChangeEvent(e)} />
          <h1>{models}</h1>
          <button type="button" className="btn" onClick={increaseCount}>
            Count
          </button>
          <h1>{counting}</h1>
          <div className="col-8 m-auto">
            <table className="table table-bordered border-dark">
              <thead>
                <tr>
                  <th scope="col bg-primary">Email</th>
                  <th scope="col">Password</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>naveen@gmail.com</td>
                  <td>147036229</td>
                  <td>
                    <button
                      type="button"
                      className="btn-xs text-white bg-secondary"
                    >
                      Submit
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-sm-2">
            <div className="input-group">
              <div className="input-group-prepend">
                <button
                  className="btn btn-outline-primary"
                  type="button"
                  onClick={decNum}
                >
                  -
                </button>
              </div>
              <input
                type="text"
                className="form-control"
                value={num}
                onChange={handleChange}
              />
              <div class="input-group-prepend">
                <button
                  className="btn btn-outline-primary"
                  type="button"
                  onClick={incNum}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
