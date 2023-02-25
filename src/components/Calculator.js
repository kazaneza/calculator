import React, { useState } from 'react';
import calculate from '../logic/calculate';
import Button from './Button';

function Calculator() {
  const [obj, setObj] = useState({
    total: null,
    next: null,
    operation: null,
  });

  function handleClick(buttonName) {
    setObj(calculate(obj, buttonName));
  }

  return (
    <div className="calculator-main-cont">
      <div className="calculator-output">{obj.next || obj.total || 0}</div>
      <div className="calculator-wrapper">
        <div className="calculator-numbers-cont">
          <div className="calculator-numbers">
            <Button label="AC" onClick={() => handleClick('AC')} />
            <Button label="+/-" onClick={() => handleClick('+/-')} />
            <Button label="%" onClick={() => handleClick('%')} />
          </div>
          <div className="calculator-numbers">
            <Button label="7" onClick={() => handleClick('7')} />
            <Button label="8" onClick={() => handleClick('8')} />
            <Button label="9" onClick={() => handleClick('9')} />
          </div>
          <div className="calculator-numbers">
            <Button label="4" onClick={() => handleClick('4')} />
            <Button label="5" onClick={() => handleClick('5')} />
            <Button label="6" onClick={() => handleClick('6')} />
          </div>
          <div className="calculator-numbers">
            <Button label="1" onClick={() => handleClick('1')} />
            <Button label="2" onClick={() => handleClick('2')} />
            <Button label="3" onClick={() => handleClick('3')} />
          </div>
          <div className="calculator-numbers">
            <Button label="0" onClick={() => handleClick('0')} />
            <Button label="." onClick={() => handleClick('.')} />
          </div>
        </div>
        <div className="calculator-symbol-cont">
          <Button label="÷" onClick={() => handleClick('÷')} />
          <Button label="×" onClick={() => handleClick('x')} />
          <Button label="-" onClick={() => handleClick('-')} />
          <Button label="+" onClick={() => handleClick('+')} />
          <Button label="=" onClick={() => handleClick('=')} />
        </div>
      </div>
    </div>
  );
}

export default Calculator;
