import {Box, Grid} from "@mui/material";

export default function KSimilarObjectResult(prop) {
    const KSimilar = (compute) => {
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
                            return (<>
                                {com.map(m => {
                                    return(
                                        <p>{m}</p>
                                    )
                                    })}</>
                                // <Box boxShadow={2} sx={{ p:2, borderLeftColor: 'orange', borderRightColor: 'orange' }} borderLeft={3} borderRight={3} borderRadius={2}>
                                //     <Grid container spacing={2}
                                //           direction="row"
                                //           justifyContent="center"
                                //           alignItems="center"
                                //     >
                                //         <Grid item>
                                //             Predicting Second Flower: <b>{com}</b>
                                //         </Grid>
                                //     </Grid>
                                // </Box>
                            )}

                        if (index == 2) {
                            return (
                                <Box boxShadow={2} sx={{ p:2, borderLeftColor: 'orange', borderRightColor: 'orange' }} borderLeft={3} borderRight={3} borderRadius={2}>
                                    <Grid container spacing={2}
                                          direction="row"
                                          justifyContent="center"
                                          alignItems="center"
                                    >
                                        <Grid item>
                                            Cosine Similarity: <b>{com}</b>
                                        </Grid>
                                    </Grid>
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