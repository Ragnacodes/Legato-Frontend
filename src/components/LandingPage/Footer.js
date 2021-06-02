import React from 'react';
import { Container, Typography, Link } from '@material-ui/core';

const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Typography align="center" variant="caption" component="p">
                    © 2021 Abstergo by&nbsp;
                    <Link href="https://github.com/Ragnacodes">
                        Ragnacodes
                    </Link>
                    . All rights reserved.
                </Typography>
            </Container>
        </footer>
    );
};

export default Footer;