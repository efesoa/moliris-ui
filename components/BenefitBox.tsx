import * as React from 'react';
import {Box, CardMedia, Typography} from "@mui/material";


export default function BenefitBox(props: { width: number, height: number, border: number, image: string; name: string; description: string; }) {
    const {width, height, border, image, name, description} = props
    return (
        <Box sx={{ p:2, maxWidth: {width}, minHeight: {height}, borderColor: '#603BE2', borderRadius: 4,
            color: '#603BE2', align: 'center'}} border={border} >
            <CardMedia
                image={image}
                style={{height: 90}}
            />
            <Typography gutterBottom variant="h5" component="div" align="center">
                {name}
            </Typography>
            <Typography variant="body2" color="text.secondary" align="center">
                {description}
            </Typography>
        </Box>
    )
}