import * as React from 'react';
import {Box, Typography} from "@mui/material";

export default function CardB(props: { image: string; name: string; description: string; }) {
    const {image, name, description} = props
    return (
        <Box boxShadow={3} sx={{ p:2 }} borderRadius={3}>
            <img src={image} sizes={'small'}/>
            <Typography gutterBottom variant="h5" component="div">
                {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {description}
            </Typography>
        </Box>
    )
}