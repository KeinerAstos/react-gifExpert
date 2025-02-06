import { useState } from 'react';
import { useEffect } from 'react';
import {getFift} from '../helpers/getGifts';
import { GifItem } from './gifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({categori}) => {

    const {images, isLoading } = useFetchGifs(categori); 
    console.log({images, isLoading });  


    return (
        <>
         
                <h3>{categori} </h3>
                {
                    isLoading && (<h2>Cargando...</h2>
                    )
                }
                <div className='card-grid'>
                    {
                        images.map((image) =>(
                            
                            <GifItem key={image.id} {...image} />
                        ))
                    }
                </div>   
            
    
        </>
  )
}
