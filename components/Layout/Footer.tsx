import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";


const Foooter: React.FC<{}> = () => {

    return <footer style={{
        position: 'relative',
        bottom: 0,
        left: 0,
        width: '100%'
    }}>
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={4}>
                {/* Left footer content here. */}
                <Grid item xs={6}></Grid>
                {/* Right footer content here. */}
                <Grid item xs={6}></Grid>
            </Grid>
        </Box>
    </footer>

};

export default Foooter;