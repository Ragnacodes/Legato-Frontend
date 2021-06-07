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
import Message from './Message';

const CustomAccordion = ({ status, service, time, messages }) => {
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
                        <Typography variant="body2">{service.subType}</Typography>
                        <Typography variant="caption">{new Date(time).toLocaleString()}</Typography>
                    </Grid>
                </Grid>
            </AccordionSummary>

            <AccordionDetails>
                <Box px={4}>
                    <Grid
                        container
                        spacing={2}
                        direction="column"
                    >
                        {
                            messages.map((message, index) => {
                                return (
                                    <Grid item key={index}>
                                            <Message
                                                time={message.created_at}
                                                type={message.type}
                                                context={message.context}
                                            />
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