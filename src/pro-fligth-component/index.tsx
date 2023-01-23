import React, { useEffect } from "react"
import { LogoClaro, LeftArrow, RightArrow, LogoSelect } from "../img/Images"
import { useState } from "react";


export function ProFligth(){
    const [select, setSelect]= useState(0)
    const [logoUno, setLogoUno] = useState(true)
    const [logoDos, setLogoDos] = useState(false)
    const [logoTres, setLogoTres] = useState(false)
    const [logoCuatro, setLogoCuatro] = useState(false)

    function activeLogo(select){
        if (select === 0){
            setLogoUno(true)
            setLogoDos(false)
            setLogoTres(false)
            setLogoCuatro(false)
        }   
        if(select === 1){
            setLogoDos(true)
            setLogoUno(false)
            setLogoTres(false)
            setLogoCuatro(false)
        }
        if(select === 2){
            setLogoTres(true)
            setLogoUno(false)
            setLogoDos(false)
            setLogoCuatro(false)
        }
        if(select === 3){
            setLogoCuatro(true)
            setLogoUno(false)
            setLogoDos(false)
            setLogoTres(false)
        }
    }
    
    function handleLeftClick(){
        console.log("left");
        if(select === 0){
            setSelect(3)
        }else{
            setSelect(select - 1)
        }

    }
    function handleRigthClick(){
        console.log("rigth");
        if(select === 3){
            setSelect(0)
        }else{ 
            setSelect(select + 1)
        }

        
    }
    useEffect(() => {
        activeLogo(select)
    }, [select]);
    
    console.log(select, "fin");

    
    return <div className="Root">
        <button onClick={handleLeftClick} className="button"><LeftArrow/></button>
        <div>{logoUno? <LogoSelect/>:<LogoClaro/>}</div>
        <div>{logoDos? <LogoSelect/>:<LogoClaro/>}</div>
        <div>{logoTres? <LogoSelect/>:<LogoClaro/>}</div>
        <div>{logoCuatro? <LogoSelect/>:<LogoClaro/>}</div>
        <button onClick={handleRigthClick} className="button"><RightArrow/></button>
    </div>
}