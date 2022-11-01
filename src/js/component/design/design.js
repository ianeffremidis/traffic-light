import React, { useState } from 'react';
import styles from './design.module.css';

const Design = () => {



  const [ color, setColor] = useState("");

  const test = (selected) => {
    setColor(selected)
    }

  const button = () =>{
    if (color==="red"){
      setColor("yellow")
    }
    else if(color==="yellow"){
      setColor("green")
    }
    else if(color ==="green"){
      setColor("red")
    }
    else{
      setColor("red")
    }
  }
  const secondButton =() => {
    if(color==="purple"){
    setColor("")
    }
    else{
      setColor("purple")
    }
  }
console.log(color)
 return (
  <div className={color==="purple" ? `${styles.backparty}` : `${styles.back}`}>
      <div className={styles.container}>
       <div className={styles.pole}></div>
        <div className={styles.trafficlight}>
        <button className={color === "red" ? `${styles.redlight}` : color==="purple" ? `${styles.redlightparty}` : `${styles.redlightoff}` } onClick={()=>test("red")}></button>
        <button className={color === "yellow" ? `${styles.yellowlight}` : color==="purple" ? `${styles.yellowlightparty}` : `${styles.yellowlightoff}`} onClick={()=>test("yellow")}></button>
        <button className={color === "green" ? `${styles.greenlight}` : color==="purple" ? `${styles.greenlightparty}` : `${styles.greenlightoff}`} onClick={()=>test("green")}></button>
        <div className={color==="purple" ? `${styles.extra2}` : `${styles.extra}`}><div className={styles.redlightparty}></div></div>
        </div>
        <div className={styles.container2}>
         <div className={styles.butcotainer}> <button className={styles.button} onClick={button}>Switch</button>
      <button className={styles.button2} onClick={secondButton}>Party</button></div> 
       
    
        </div>
        
      </div>
     
      <div className={styles.stand}></div>
  </div>
 )
 }

export default Design;
