import React, { useState, useEffect } from 'react'


export const useSwitchTorneos = () =>{
        const [, set] = useState();
        // Aparte de actualizar el input en función de la modalidad y del tipo de juego,cada vez que cambie value verifica 
        useEffect(() => {
            switch (values.TypeGame) {
              // Determina primero el tipo de juego
              case "Domino":
                // Despues determina en que modalidad se jugara
                switch (values.Modalidad) {
                  case "Individual":
                    setGame(["Suizo","Rotado","Mixto rot-suiz","Mixto suiz-tot","Liga"]);
                    setValues({...values,ModalidadDentroDelTipo:"Suizo"})
                    break;
                  case "Parejas":
                    setGame(["Suizo","Eliminatorio","Liga"])
                    setValues({...values,ModalidadDentroDelTipo:"Suizo"})
                    break;
                  case "Equipos":
                    setGame(["Sencillo","Completo"])
                    setValues({...values,ModalidadDentroDelTipo:"Sencillo"})
                    break;
                  default:
                    break;
                }
                break;
              case "Naipes":
                  switch (values.Modalidad) {
                      case "Individual":
                        setGame(
                          ["Eliminatorio(Mano A Mano)","Suizo(Mano A Mano)",
                          "Suizo(Mesa de 4)","Rotado(Mesa de 4)","Mixto rot-suiz(Mesa de 4)",
                          "Mixto suiz-tot(Mesa de 4)","Liga(Mesa de 4)"]
                        )
                        setValues({...values,ModalidadDentroDelTipo:"Eliminatorio(Mano A Mano)"})
                        break;
                      case "Parejas":
                          setGame(
                            ["Suizo","Eliminatorio","Liga"]
                          )
                          setValues({...values,ModalidadDentroDelTipo:"Suizo"})
                        break;
                      case "Equipos":
                        setGame(
                          ["Sencillo","Completo"]
                        )
                        setValues({...values,ModalidadDentroDelTipo:"Sencillo"})
                        break;
                      default:
                        break;
                  }
                break;
              case "Otro":
                  setGame(
                    ["Suizo","Rotado","Mixto rot-suiz","Mixto suiz-tot","Liga","Eliminatorio"]
                  )
                  setValues({...values,ModalidadDentroDelTipo:"Suizo"})
                break;
              default:
                setGame(
                  ["Suizo","Rotado","Mixto rot-suiz","Mixto suiz-tot","Liga","Eliminatorio"]
                )
                setValues({...values,ModalidadDentroDelTipo:"Suizo"})
                break;
            }

        }, [values.TypeGame]);
}