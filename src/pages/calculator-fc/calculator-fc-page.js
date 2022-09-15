import React, { Component } from 'react';
import { Wrapper } from './wrapper';
import Screen from './screen';
import ButtomBox from './buttom-box';
import Button from './button';
import styles from './calculator-fc-page.module.css';
import { BasePage } from '../../components/base-page';
import { useState } from 'react';

const CalculatorFCPage = () => {
  // constructor() {
  //   super();

  //   state = {
  //     sign: '',
  //     num: 0,
  //     res: 0,
  //   };
  // }

  const [sign, setSign] = useState('');
  const [num, setNum] = useState(0);
  const [res, setRes] = useState(0);

  const removeSpaces = (num) => num.toString().replace(/\s/g, '');
  const toLocaleString = (num) =>
    String(num).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, '$1 ');

  const numClickHandler = (e) => {
    e.preventDefault();
    // console.log(e.target.innerHTML)
    const value = e.target.innerHTML;

    if (removeSpaces(num).length < 16) {
      setNum(
        num === 0 && value === '0'
          ? '0'
          : removeSpaces(num) % 1 === 0
          ? toLocaleString(Number(removeSpaces(num + value)))
          : toLocaleString(num + value)
      );

      setRes(!sign ? 0 : res);
    }
  };

  const dotClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;
    setNum(!num.toString().includes('.') ? num + value : num);
  };

  const signClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;

    setSign(value);
    setRes(!res && num ? num : res);
    setNum(0);
  };

  const equalsClickHandler = () => {
    if (sign && num) {
      const math = (a, b, sign) =>
        sign === '+' ? a + b : sign === '-' ? a - b : sign === 'X' ? a * b : a / b;

      setSign('');
      setRes(
        num === '0' && sign === '/' ? "Can't divide with 0" : math(Number(res), Number(num), sign)
      );
      setNum(0);
    }
  };

  const invertClickHandler = () => {
    setSign('');
    setRes(res ? toLocaleString(removeSpaces(res) * -1) : 0);
    setNum(num ? toLocaleString(removeSpaces(num) * -1) : 0);
  };

  const percentClickHandler = () => {
    let newNum = num ? parseFloat(removeSpaces(num)) : 0;
    let newRes = res ? parseFloat(removeSpaces(res)) : 0;

    setSign('');
    setRes((newRes /= Math.pow(100, 1)));
    setNum((newNum /= Math.pow(100, 1)));
  };

  const resetClickHandler = () => {
    setSign('');
    setRes(0);
    setNum(0);
  };

  const buttonValues = [
    { value: 'C', clickHandler: resetClickHandler, isEquals: false },
    { value: '+-', clickHandler: invertClickHandler, isEquals: false },
    { value: '%', clickHandler: percentClickHandler, isEquals: false },
    { value: '/', clickHandler: signClickHandler, isEquals: false },
    { value: '7', clickHandler: numClickHandler, isEquals: false },
    { value: '8', clickHandler: numClickHandler, isEquals: false },
    { value: '9', clickHandler: numClickHandler, isEquals: false },
    { value: 'X', clickHandler: signClickHandler, isEquals: false },
    { value: '4', clickHandler: numClickHandler, isEquals: false },
    { value: '5', clickHandler: numClickHandler, isEquals: false },
    { value: '6', clickHandler: numClickHandler, isEquals: false },
    { value: '-', clickHandler: signClickHandler, isEquals: false },
    { value: '1', clickHandler: numClickHandler, isEquals: false },
    { value: '2', clickHandler: numClickHandler, isEquals: false },
    { value: '3', clickHandler: numClickHandler, isEquals: false },
    { value: '+', clickHandler: signClickHandler, isEquals: false },
    { value: '0', clickHandler: numClickHandler, isEquals: false },
    { value: '.', clickHandler: dotClickHandler, isEquals: false },
    { value: '=', clickHandler: equalsClickHandler, isEquals: true },
  ];

  return (
    <BasePage title={'Calculator (FC)'}>
      <div className={styles['calculator-page']}>
        <Wrapper>
          <Screen value={num ? num : res} />
          <ButtomBox>
            {/* [ 
              <Button value={'7'} onClick={numClickHandler} />,
              <Button value={'8'} onClick={numClickHandler} />
            ] */}

            {buttonValues.map((buttomValue, idx) => (
              <Button
                key={idx}
                value={buttomValue.value}
                onClick={buttomValue.clickHandler}
                isEquals={buttomValue.isEquals}
              />
            ))}

            {/* <Button value={'C'} onClick={resetClickHandler} />
            <Button value={'+-'} onClick={invertClickHandler} />
            <Button value={'%'} onClick={percentClickHandler} />
            <Button value={'/'} onClick={signClickHandler} />
            <Button value={'7'} onClick={numClickHandler} />
            <Button value={'8'} onClick={numClickHandler} />
            <Button value={'9'} onClick={numClickHandler} />
            <Button value={'X'} onClick={signClickHandler} />
            <Button value={'4'} onClick={numClickHandler} />
            <Button value={'5'} onClick={numClickHandler} />
            <Button value={'6'} onClick={numClickHandler} />
            <Button value={'-'} onClick={signClickHandler} />
            <Button value={'1'} onClick={numClickHandler} />
            <Button value={'2'} onClick={numClickHandler} />
            <Button value={'3'} onClick={numClickHandler} />
            <Button value={'+'} onClick={signClickHandler} />
            <Button value={'0'} onClick={numClickHandler} />
            <Button value={'.'} onClick={dotClickHandler} />
            <Button value={'='} onClick={equalsClickHandler} isEquals /> */}
          </ButtomBox>
        </Wrapper>
      </div>
    </BasePage>
  );
};

export default CalculatorFCPage;
