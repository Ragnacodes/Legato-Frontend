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

const CustomAccordion = ({ id, service, messages }) => {
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
                        <Status status={"hi"} />
                    </Grid>
                    <Grid item>
                        <Typography>{service.type}</Typography>
                    </Grid>
                </Grid>
            </AccordionSummary>
            <AccordionDetails>
                {
                    messages.map((message, index) => {
                        return (
                            <Typography key={index}>
                                {message.context}
                            </Typography>
                        );
                    })
                }
            </AccordionDetails>
        </Accordion>
    );
};

export default CustomAccordion;