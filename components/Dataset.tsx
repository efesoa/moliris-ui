import React from "react";
import TableDisplay from "./TableDisplay";

export default function Dataset(props: { dataset: object[] | null; }) {

    const irisDataset = (dataset: object[] | null) => {
        if (dataset != null) {
            return (
                <TableDisplay dataset={dataset}/>
            );
        } else {
            return(<p></p>)
        }
    }
    return(
        <p>
            {irisDataset (props.dataset)}
        </p>
    )
}