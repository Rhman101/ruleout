import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";


const Foooter: React.FC<{}> = () => {

    return <footer style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        width: '100%'
    }}>
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={4}>
                <Grid item xs={6}>content</Grid>
                <Grid item xs={6}>more content</Grid>
            </Grid>
        </Box>
    </footer>

};

export default Foooter;