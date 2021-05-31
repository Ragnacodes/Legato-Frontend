import React from 'react';
import { serviceBackToFront } from '../../utils/serviceConverter';
import {
    Box,
    Grid,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography
} from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';
import Status from './Status';

const CustomAccordion = ({ status, service, messages }) => {
    return (
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMore />}
            >
                <Grid
                    container
                    alignItems="center"
                    spacing={2}
                >
                    <Grid item>
                        <Grid container justify="center">
                            <Status status={status} />
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Typography>{serviceBackToFront(service.type)}</Typography>
                    </Grid>
                    <Grid item>
                        <Typography>|</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body2">{service.subType}</Typography>
                    </Grid>
                </Grid>
            </AccordionSummary>
            <AccordionDetails>
                <Box px={4}>
                    <Grid
                        container
                        spacing={1}
                        direction="column"
                    >
                        {
                            messages.map((message, index) => {
                                return (
                                    <Grid item key={index}>
                                        {/* <Typography> */}
                                            {message.context}
                                        {/* </Typography> */}
                                    </Grid>
                                );
                            })
                        }
                    </Grid>
                </Box>
            </AccordionDetails>
        </Accordion>
    );
};

export default CustomAccordion;