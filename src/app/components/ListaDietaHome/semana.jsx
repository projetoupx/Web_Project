import React , { useState} from "react";
import { ArrowDown, ArrowUp } from '@phosphor-icons/react';


export default function Semana(props){
    const [isReadMore, setIsReadMore] = useState(true); 
    const [className, setClassName]= useState('dieta-semana');
    const cards = Object.values(props.text);
    
    const toggleReadMore = () => { 
      setIsReadMore(!isReadMore);
      if(isReadMore){
        setClassName("dieta-semana active");
      }else{
        setClassName("dieta-semana");
      }
    }; 
    return (
        <div className={className}>
                <h3>{props.dia}</h3>
                <div className='dieta-semana-content'>
                  {
                    cards.map((text, index) => {
                      return  (
                      <div key={index}>
                        <p>{text.nome}</p>
                        {Object.values(text).map(comida=>{
                          if(comida.nome)
                            return(
                              <li key={comida.nome}>{comida.nome} {comida.gramas}</li>
                            )
                        })}
                      </div>
                      );
                    })
                  }
                </div> 
                <button onClick={toggleReadMore} className="read-or-hide">
                    {isReadMore ? <ArrowDown/> : <ArrowUp/>}
                    {isReadMore ? "mostrar mais" : "mostrar menos"}
                </button>
            </div>
    )
}