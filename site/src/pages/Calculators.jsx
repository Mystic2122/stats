import { useState } from "react";

export default function Calculators() {
    const calculators = [
        {
            id: "pvalue",
            name: "P-Value Calculator"
        }
    ]

    const [selected, setSelected] = useState(null);

    return (
    <>
        <header>
        <h2>Calculators</h2>
        </header>

        {selected === null && (
        <div>
            {calculators.map((calc) => (
            <button
                key={calc.id}
                onClick={() => setSelected(calc.id)}
            >
                {calc.name}
            </button>
            ))}
        </div>
        )}

        {selected === "pvalue" && (
        <div>
            <h3>P-Value Calculator</h3>
            <button onClick={() => setSelected(null)}>
            Back
            </button>
        </div>
        )}
    </>
    )
}