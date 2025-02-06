import { useState } from "react";
import {Add_category } from "./components/Add_category";
import { GifGrid } from "./components/GifGrid";
export const GifExpertApp = () =>{

    const [categoria,setCategoria] = useState(['One Punch']);
    
    const onAddCategory =(New_CATEGORI)=>{
        if(categoria.includes(New_CATEGORI) ) {
            alert('No puedes poner algo que ya esta en lista');
            return;
        } 
        setCategoria ([...categoria, New_CATEGORI]) ;
        
    };

    return (
        <>
        <Add_category onAdCategory={onAddCategory}  />
        <ol>
            {
            categoria.map( categori =>{
                return (<GifGrid key={categori} categori={categori}/>)
            })
            }
        </ol>
  
        </>
    );
}