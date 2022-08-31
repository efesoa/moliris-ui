import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {CardActionArea, CardActions, CardMedia} from '@mui/material';

export default function GetStartedCard(props: { image: string; name: string; }) {
    const {image, name} = props
    return (
        <Card sx={{ minWidth: 300, borderRadius: 10, borderStartStartRadius: 10, borderEndEndRadius: 10 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    src={image}
                    alt={name}
                    sx={{ minWidth: 300, minHeight: 200, borderRadius: 10, borderStartStartRadius: 10, borderEndEndRadius: 10 }}
                />
                <CardContent align={'center'}>
                    <Typography gutterBottom variant="h6">{name}</Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
