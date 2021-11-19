import React from 'react'
import { Box, makeStyles, Card, Theme, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
    card: {
        padding: 0,
        borderRadius: 20,
        background: "#fff",
        margin: 0,
    },
    header: {
        display: "flex",
        alignItems: "center",
        fontSize: 21,
        color: "#6B5898",
        fontFamily: "monospace",
        lineHeight: "24px",
        padding: "27px 45px",
        borderBottom: "1px solid rgba(107, 88, 152, 0.15)",
    },
    headText: {
        marginLeft: 13,
    },
}));


const Home = () => {
    
    const styles = useStyles();
    
    return (
        <>
        <Typography className={styles.header}>
            Ghost API 
        </Typography>
        </>
    )
}

export default Home;
