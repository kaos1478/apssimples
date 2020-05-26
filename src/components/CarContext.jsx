import React, {useState, createContext} from "react";


export const CarContext = createContext();

const CarProvider = ({children}) => {
    const [carProducts, setCarProducts] = useState ([]);

    const saveCar = car => {
        setCarProducts([...carProducts, car])
    }

    const deleteCar = () => {
        setCarProducts([]);
    }

    return(
        <CarContext.Provider value={{carProducts, saveCar, deleteCar}}>
            {children}
        </CarContext.Provider>
    )
}

export default CarProvider;