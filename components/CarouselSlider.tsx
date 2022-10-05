import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Grid, Typography, Box} from '@mui/material'

export default function CarouselSlider()
{
    const items = [
        {
            image: '/static/images/bearded.png',
            name: "Bearded Iris",
            description: "Bearded Iris (iris germanica) is an evergreen perennial rhizome found in well drained soil from Southern and Central Europe."
        },
        {
            image: '/static/images/aril.png',
            name: "Aril Iris",
            description: "Arils, or aril irises are wild bearded iris species found in semi-arid to desert climates from Central Asia to the Middle East."
        },
        {
            image: '/static/images/beardless.png',
            name: "Beardless Iris",
            description: "Beardless Iris without a beard found from the Southern areas of the template zone up to the edges of the frigid arctic."
        }
    ];

    return (
        <Grid sx={{ paddingTop: 5, paddingBottom: 3, width: '100%', backgroundColor: '#F5F5F5'
        }}>
        <Carousel fullHeightHover={true} navButtonsProps={{ style: { backgroundColor: '#603BE2', borderRadius: 7 } }}
                  indicatorIconButtonProps={{ style: { color: '#A890FF' } }}
                  activeIndicatorIconButtonProps={{ style: { color: '#603BE2' } }}
        >
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
        </Grid>
    )
}

function Item(props: { item: { image: string | undefined; name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; description: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }; })
{
    return (
        <Grid container
              direction="row"
              justifyContent="center"
              alignItems="center"
        >
            <Typography variant={'h5'} sx={{ color: '#000000' }}>IRIS CATEGORIES</Typography>
            <Grid container
                  direction="row"
                  justifyContent="space-evenly"
                  alignItems="flex-start"
                  sx={{ paddingTop: 3, px: 4 }}
            >
                <Grid item>
                    <Grid sx={{ display: { xs: 'inherit', sm: 'inherit', md: 'none', lg: 'none' } }}>
                        <img alt={'Iris Categories'} src={props.item.image} style={{height: 350}}/>
                    </Grid>
                    <Grid sx={{ display: { xs: 'none', sm: 'none', md: 'inherit', lg: 'inherit' } }}>
                        <img alt={'Iris Categories'} src={props.item.image} style={{height: 400}}/>
                    </Grid>
                </Grid>
                <Grid item sx={{ paddingTop: 2 }}>
                    <Typography variant={'h5'} sx={{ paddingBottom: 1, color: '#603BE2' }}>{props.item.name}</Typography>
                    <Box maxWidth={500}>
                        <Typography>{props.item.description}</Typography>
                    </Box>
                </Grid>
            </Grid>
        </Grid>
    )
}