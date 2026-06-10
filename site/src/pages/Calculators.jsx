import { useState } from "react";
import PValueCalculator from "../calculators/PValueCalculator";
import "./pageStyles.css";


export default function Calculators() {
  const [selected, setSelected] = useState(null);

  const calculators = [
    {
      id: "pvalue",
      name: "P-Value Calculator",
      component: PValueCalculator
    }
  ];

  if (selected) {
    const SelectedComponent = calculators.find(
      (c) => c.id === selected
    )?.component;

    return (
      <div className="calculators-page">
        

        <div className="calculator-wrapper">
          <SelectedComponent />
        </div>
      </div>
    );
  }

  return (
    <div className="calculators-page">
      

      <div className="calculator-grid">
        {calculators.map((calc) => (
          <button
            key={calc.id}
            className="calculator-select-button"
            onClick={() => setSelected(calc.id)}
          >
            {calc.name}
          </button>
        ))}
      </div>
    </div>
  );
}