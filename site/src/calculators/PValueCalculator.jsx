import { useState } from "react";
import { jStat } from "jstat";
import "./calculatorStyles.css";

export default function PValueCalculator() {
  const [dist, setDist] = useState("z");

  const [x, setX] = useState("");
  const [df, setDf] = useState("");
  const [df2, setDf2] = useState("");
  const [tail, setTail] = useState("two");

  const [pValue, setPValue] = useState(null);

  function calculate() {
    const xNum = parseFloat(x);
    if (isNaN(xNum)) return;

    let p;

    // ---------------- Z / Normal ----------------
    if (dist === "z") {
      const cdf = jStat.normal.cdf(xNum, 0, 1);

      if (tail === "two") p = 2 * (1 - cdf);
      if (tail === "right") p = 1 - cdf;
      if (tail === "left") p = cdf;
    }

    // ---------------- T ----------------
    else if (dist === "t") {
      const dfNum = parseFloat(df);
      if (isNaN(dfNum)) return;

      const cdf = jStat.studentt.cdf(xNum, dfNum);

      if (tail === "two") p = 2 * (1 - cdf);
      if (tail === "right") p = 1 - cdf;
      if (tail === "left") p = cdf;
    }

    // ---------------- F ----------------
    else if (dist === "f") {
      const df1 = parseFloat(df);
      const df2Num = parseFloat(df2);
      if (isNaN(df1) || isNaN(df2Num)) return;

      const cdf = jStat.centralF.cdf(xNum, df1, df2Num);

      if (tail === "right") p = 1 - cdf;
      if (tail === "left") p = cdf;
      if (tail === "two") p = 2 * Math.min(cdf, 1 - cdf);
    }

    // ---------------- Chi-Square ----------------
    else if (dist === "chi") {
      const dfNum = parseFloat(df);
      if (isNaN(dfNum)) return;

      const cdf = jStat.chisquare.cdf(xNum, dfNum);

      if (tail === "right") p = 1 - cdf;
      if (tail === "left") p = cdf;
      if (tail === "two") p = 2 * Math.min(cdf, 1 - cdf);
    }

    setPValue(p);
  }

  return (
    <div className="calculator-container">
      <h3>P-Value Calculator</h3>

      {/* Distribution selector */}
      <div className="calculator-row">
        <button
            className={`dist-button ${dist === "z" ? "active" : ""}`}
            onClick={() => setDist("z")}
        >
            Z
        </button>

        <button
            className={`dist-button ${dist === "t" ? "active" : ""}`}
            onClick={() => setDist("t")}
        >
            T
        </button>

        <button
            className={`dist-button ${dist === "f" ? "active" : ""}`}
            onClick={() => setDist("f")}
        >
            F
        </button>

        <button
            className={`dist-button ${dist === "chi" ? "active" : ""}`}
            onClick={() => setDist("chi")}
        >
            χ²
        </button>
      </div>

      {/* Tail selector */}
      <div className="calculator-tail-group">
        <label className="calculator-radio">
        <input
            type="radio"
            name="tail"
            value="left"
            checked={tail === "left"}
            onChange={(e) => setTail(e.target.value)}
        />
        Left tail
        </label>

        <label className="calculator-radio">
        <input
            type="radio"
            name="tail"
            value="right"
            checked={tail === "right"}
            onChange={(e) => setTail(e.target.value)}
        />
        Right tail
        </label>

        <label className="calculator-radio">
        <input
            type="radio"
            name="tail"
            value="two"
            checked={tail === "two"}
            onChange={(e) => setTail(e.target.value)}
        />
        Two tail
        </label>
        </div>

      {/* Test statistic */}
      <input
        className="calculator-input"
        type="text"
        inputMode="decimal"
        placeholder="Test statistic"
        value={x}
        onChange={(e) => setX(e.target.value)}
      />

      {/* T input */}
      {dist === "t" && (
        <input
          className="calculator-input"
          type="number"
          placeholder="Degrees of freedom"
          value={df}
          onChange={(e) => setDf(e.target.value)}
        />
      )}

      {/* F input */}
      {dist === "f" && (
        <div className="calculator-row">
          <input
            className="calculator-input"
            type="number"
            placeholder="df1"
            value={df}
            onChange={(e) => setDf(e.target.value)}
          />

          <input
            className="calculator-input"
            type="number"
            placeholder="df2"
            value={df2}
            onChange={(e) => setDf2(e.target.value)}
          />
        </div>
      )}

      {/* Chi-square input */}
      {dist === "chi" && (
        <input
          className="calculator-input"
          type="number"
          placeholder="Degrees of freedom"
          value={df}
          onChange={(e) => setDf(e.target.value)}
        />
      )}

      <button className="calculator-button" onClick={calculate}>
        Calculate
      </button>

      {pValue !== null && (
        <div className="calculator-result">
          P-value: {pValue.toFixed(6)}
        </div>
      )}
    </div>
  );
}