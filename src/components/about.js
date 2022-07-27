import { Typography, Stack, Divider } from "@mui/material";

const About = () => {
    return(
        <Stack spacing= {2} divider={<Divider orientation="horizontal" flexItem />} alignItems="center">
            <Typography variant="h4">Alex Gornovoi</Typography>
            <Typography>CS @ UMass Amherst</Typography>
        </Stack>
    )
}

export default About