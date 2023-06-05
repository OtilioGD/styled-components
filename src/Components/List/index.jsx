import React from "react";
import { Box } from "../UI";
import { lista} from '../../info';

const List = () => {
    console.log(lista);
    return <Box>
        {
            lista.cargos.map(({id, date, value, from, type}) => {
                return <div key={ id }>
                    <span>{ type }</span>
                    <span>{ value }</span>
                </div>
            })
        }

    </Box>
}

export default List