import React, { useEffect } from "react"
import { LogoClaro, LeftArrow, RightArrow, LogoSelect } from "../img/Images"
import { useState } from "react";


export function ProFligth(){
    const [select, setSelect]= useState(0)
    const [logoUno, setLogoUno] = useState(true)
    const [logoDos, setLogoDos] = useState(false)
    const [logoTres, setLogoTres] = useState(false)
    const [logoCuatro, setLogoCuatro] = useState(false)
    
    // esta funcion activa el logo seleccionado y desactiva los ortros logos simultaneamente dependiendo de la seleccion
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
    
    // cuando se hace click en el boton de la izquierda se resta la seleccion moviendo el logo oscuro a la izquierda
    function handleLeftClick(){
        if(select === 0){
            setSelect(3)
        }else{
            setSelect(select - 1)
        }
    }

     // cuando se hace click en el boton de la derecha se suma la seleccion moviendo el logo oscuro a la derecha
    function handleRigthClick(){
        if(select === 3){
            setSelect(0)
        }else{ 
            setSelect(select + 1)
        }
    }

    // acá se invoca a la funcion activeLogo cuando la seleccion de los botones cambia
    useEffect(() => {
        activeLogo(select)
    }, [select]);

    return <div className="Root">
        <button onClick={handleLeftClick} className="button"><LeftArrow/></button>
        <div>{logoUno? <LogoSelect/>:<LogoClaro/>}</div>
        <div>{logoDos? <LogoSelect/>:<LogoClaro/>}</div>
        <div>{logoTres? <LogoSelect/>:<LogoClaro/>}</div>
        <div>{logoCuatro? <LogoSelect/>:<LogoClaro/>}</div>
        <button onClick={handleRigthClick} className="button"><RightArrow/></button>
    </div>
}