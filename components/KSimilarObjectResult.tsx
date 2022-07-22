import {Box, Grid, Typography} from "@mui/material";
import React from "react";
import TableDisplay from "./TableDisplay";

export default function KSimilarObjectResult(prop: { compute: any; }) {

    const KSimilar = (compute: any[] | null) => {
        if (compute != null) {
            return(
                <><br/>
                    {compute.map((com, index) => {
                        if (index == 0) {
                            return (
                                <Box boxShadow={2} sx={{ p:2, borderLeftColor: 'orange', borderRightColor: 'orange' }} borderLeft={3} borderRight={3} borderRadius={2}>
                                    <Grid container spacing={2}
                                          direction="row"
                                          justifyContent="center"
                                          alignItems="center"
                                    >
                                        <Grid item>
                                            Predicting Flower: <b>{com}</b>
                                        </Grid>
                                    </Grid>
                                </Box>
                            )}

                        if (index == 1) {
                            return (
                                <Box boxShadow={2} sx={{ p:2, borderLeftColor: 'orange', borderRightColor: 'orange' }} borderLeft={3} borderRight={3} borderRadius={2}>
                                    <Typography><b>K-Nearest Flower(s)</b></Typography>
                                    <TableDisplay dataset={com}/>
                                </Box>
                            )}
                    })}<br/></>
            )
        } else {return(<p></p>)}
    }

    return (
        <>
            {KSimilar (prop.compute)}
        </>
    )
}