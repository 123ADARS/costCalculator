import "./styles.css";
import { useState } from "react";

export default function App() {
  const [quantity, setQuantity] = useState(0);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const [pages, setPages] = useState(0);
  const [totalCost, setTotalCost] = useState(0);
  const [pagePerCost, setpageperCost] = useState(0);
  const changeHandler = (e) => {
    e.preventDefault();
    if (pages > 2500) {
      if (color === "1") {
        if (size === "Letter") {
          setpageperCost(0.25);
        }
        if (size === "A5") {
          setpageperCost(0.15);
        }
        if (size === "B5") {
          setpageperCost(0.24);
        }
      }

      if (color === "2") {
        if (size === "Letter") {
          setpageperCost(0.3);
        }
        if (size === "A5") {
          setpageperCost(0.17);
        }
        if (size === "B5") {
          setpageperCost(0.28);
        }
      }

      if (color === "4") {
        if (size === "Letter") {
          setpageperCost(0.45);
        }
        if (size === "A5") {
          setpageperCost(0.22);
        }
        if (size === "B5") {
          setpageperCost(0.42);
        }
      }
    } else {
      if (color === "1") {
        if (size === "Letter") {
          setpageperCost(0.38);
        }
        if (size === "A5") {
          setpageperCost(0.2);
        }
        if (size === "B5") {
          setpageperCost(0.3);
        }
      }

      if (color === "2") {
        if (size === "Letter") {
          setpageperCost(0.5);
        }
        if (size === "A5") {
          setpageperCost(0.26);
        }
        if (size === "B5") {
          setpageperCost(0.4);
        }
      }

      if (color === "4") {
        if (size === "Letter") {
          setpageperCost(0.75);
        }
        if (size === "A5") {
          setpageperCost(0.37);
        }
        if (size === "B5") {
          setpageperCost(0.55);
        }
      }
    }
  };
  const calculate = () => {
    setTotalCost(quantity * pages * pagePerCost);
  };
  return (
    <div className="App">
      <h1 style={{ color: "green" }}>Cost Calculator</h1>
      <form onSubmit={changeHandler}>
        <label>
          No of Books:
          <input
            placeholder="Book Quantity"
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </label>
        <br></br>
        <label>
          Color:
          <select value={color} onChange={(e) => setColor(e.target.value)}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">4</option>
          </select>
        </label>
        <br></br>
        <label>
          Size:
          <select value={size} onChange={(e) => setSize(e.target.value)}>
            <option value="A4">B5</option>
            <option value="B5">A5</option>
            <option value="Letter">Letter</option>
          </select>
        </label>
        <br></br>
        <label>
          No of pages:
          {/* <select value={pages} onChange={(e) => setPages(e.target.value)}>
            <option value="More than 2500">More than 2500</option>
            <option value="Less than 2500">Less than 2500</option>
          </select> */}
          <input
            placeholder="Number of Pages"
            type="number"
            value={pages}
            onChange={(e) => setPages(e.target.value)}
          />
        </label>
        <br></br>
        <input type="submit" />
      </form>
      <br />
      <button onClick={calculate}>Get Total Cost</button>
      <h4>{totalCost}</h4>
    </div>
  );
}
