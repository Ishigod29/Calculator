import { useState } from 'react'
import styles from '../styles/Home.module.css'
import Head from 'next/head'

export default function Home() {

  const [result, setResult] = useState('')

  const handleClick = (e) =>{
    setResult(result.concat(e.target.name))
  }

  const clear = () =>{
    setResult('')
  }

  const backspace = () =>{
    setResult(result.slice(0, -1))
  }

  const calculate = () =>{
    try{
      setResult(eval(result).toString())
    }catch(error){
      setResult('Error')
    }
  }

  return (
    <>
    <Head>
      <title>
        Calculator | NextJS
      </title>
    </Head>
    <div className={styles.container}>
      <form>
        <input type="text" value={result}/>
      </form>

      <div className={styles.bgKeys}>
        <div className={styles.keypad}>

        <button name='7' onClick={handleClick}>7</button>
        <button name='8' onClick={handleClick}>8</button>
        <button name='9' onClick={handleClick}>9</button>
        <button className={styles.actBtn} id='Del' onClick={backspace}>Del</button>
        <button name='4' onClick={handleClick}>4</button>
        <button name='5' onClick={handleClick}>5</button>
        <button name='6' onClick={handleClick}>6</button>
        <button name='+' onClick={handleClick}>+</button>
        <button name='1' onClick={handleClick}>1</button>
        <button name='2' onClick={handleClick}>2</button>
        <button name='3' onClick={handleClick}>3</button>
        <button name='-' onClick={handleClick}>&ndash;</button>
        <button name='.' onClick={handleClick}>.</button>
        <button name='0' onClick={handleClick}>0</button>
        <button name='/' onClick={handleClick}>/</button>
        <button name='*' onClick={handleClick}>x</button>
        </div>

        <div className={styles.flex}>
        <button className={styles.actBtn} id='Reset' onClick={clear}>Reset</button>
        <button className={styles.resBtn} id='calculate' onClick={calculate}>=</button>
        </div>

      </div>

      

    </div>
    </>
  )
}
