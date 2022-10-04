import * as React from 'react';
import {Box, CardMedia, Typography} from "@mui/material";


export default function BenefitBox(props: { width: number, height: number, border: number, image: string; name: string;
    description: string; bLeftRadius: number; bRightRadius: number; tLeftRadius: number; tRightRadius: number;}) {
    const {width, height, border, image, name, description, bLeftRadius, bRightRadius, tLeftRadius, tRightRadius} = props
    return (
        <Box sx={{ p:2, maxWidth: {width}, minHeight: {height}, borderColor: '#603BE2', color: '#603BE2',
            align: 'center', borderBottomLeftRadius: bLeftRadius, borderBottomRightRadius: bRightRadius,
            borderTopLeftRadius: tLeftRadius, borderTopRightRadius: tRightRadius }} border={border} >
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