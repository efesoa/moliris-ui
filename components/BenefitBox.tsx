import * as React from 'react';
import {Box, CardMedia, Typography} from "@mui/material";


export default function BenefitBox(props: { image: string; name: string; description: string; }) {
    const {image, name, description} = props
    return (
        <Box boxShadow={3} sx={{ p:2, maxWidth: 250, minHeight: 300, background: 'white' }} borderRadius={3}>
            <CardMedia
                image={image}
                style={{height: 120, borderRadius: 5}} />
            <Typography gutterBottom variant="h5" component="div">
                {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {description}
            </Typography>
        </Box>
    )
}