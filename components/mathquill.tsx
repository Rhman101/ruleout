import { useState } from 'react';
import { EditableMathField, StaticMathField } from 'react-mathquill'

function MathQuill() {
    const [latex, setLatex] = useState('\\frac{1}{\\sqrt{2}}\\cdot 2');
    return (
        <div>
            <p>MathQuill is here!</p>
            <EditableMathField
                latex={latex}
                onChange={(mathField) => {
                    setLatex(mathField.latex())
                }}
            />
            <StaticMathField>{latex}</StaticMathField>
            <p>Latex: {latex}</p>
        </div>
    )
}

export default MathQuill