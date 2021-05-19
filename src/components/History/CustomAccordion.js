import React from 'react';
import {
    Grid,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography
} from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';
import Status from './Status';

const CustomAccordion = ({ type, status, time, events }) => {
    return (
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMore />}
            >
                <Grid
                    container
                    spacing={2}
                >
                    <Grid item>
                        <Status status={status} />
                    </Grid>
                    <Grid item>
                        <Typography>{type}</Typography>
                    </Grid>
                </Grid>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                    sit amet blandit leo lobortis eget.
                </Typography>
            </AccordionDetails>
        </Accordion>
    );
};

export default CustomAccordion;