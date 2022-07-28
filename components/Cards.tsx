import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActions, CardMedia } from '@mui/material';

export default function Cards(props: { image: string; name: string; description: string; }) {
    const {image, name, description} = props
    return (
        <Card sx={{ minWidth: 300, maxWidth: 315, borderRadius: 10, borderStartStartRadius: 10, borderEndEndRadius: 10 }}>
            <CardMedia
                component="img"
                height="140"
                src={image}
                alt="iris flower"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" color="primary">
                    More
                </Button>
            </CardActions>
        </Card>
    );
}
