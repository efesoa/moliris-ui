import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {CardActionArea, CardMedia} from '@mui/material';
import Link from "next/link";

export default function GetStartedCard(props: { image: string; name: string; go: string }) {
    const {image, name, go} = props
    return (
        <Link href={go}>
            <Card sx={{ minWidth: 300, borderRadius: 8 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        src={image}
                        alt={name}
                        sx={{ px: 1.5,paddingTop: 1.5, minWidth: 300, minHeight: 200, borderRadius: 8 }}
                    />
                    <CardContent >
                        <Typography gutterBottom variant="h6" align="center">{name}</Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Link>
    );
}
