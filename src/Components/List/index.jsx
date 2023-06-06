import React from "react";
import { Box, Btn } from "../UI";
import { lista} from '../../info';
import Card from "../Card";

const List = () => {
    console.log(lista);
    return <Box>
        {
            lista.cargos.map((cargo, i) => {
                //console.log('Cargos en map ', cargo);
                return <Card key={ i } cargo={ cargo } />
            })
        }
    <Btn>Ver mas</Btn>
    </Box>
}

export default List