import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function IrisAccordion() {
    return (
        <div>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>Iris Virginica</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Iris virginica, with the common name Virginia iris, is a perennial species of flowering plant,
                        native to eastern North America. It is common along the coastal plain from Florida to Georgia
                        in the Southeastern United States.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography>Iris Setosa</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Iris setosa, the bristle-pointed iris, is a species of flowering plant in the genus Iris of the
                        family Iridaceae, it belongs the subgenus Limniris and the series Tripetalae.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography>Iris Versicolor</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        It is a species of Iris native to North America, in the Eastern United States and Eastern Canada. It is common in sedge meadows, marshes, and along stream banks and shores. The specific epithet versicolor means "variously coloured".
                        It is one of the three Iris species in the Iris flower data set outlined by Ronald Fisher in his 1936 paper "The use of multiple measurements in taxonomic problems" as an example of linear discriminant analysis.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}
