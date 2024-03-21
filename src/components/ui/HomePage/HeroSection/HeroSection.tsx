import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Carousel from "./Carousel";

const HeroSection = () => {
  return (
    <Box
      sx={{
        bgcolor: "lightgray",
        height: "100vh",
      }}
    >
      <Container>
        <Stack pt={10}>
          <Box textAlign="center">
            <Stack direction="column">
              <Typography variant="h2" component="h1">
                Find The Best Fashion Style{" "}
                <Typography variant="h3" component="h1" color="primary.main">
                  For You
                </Typography>
              </Typography>
            </Stack>
            <Typography component="p" width={400} mb={2} margin="0 auto">
              Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum.
            </Typography>
            <Button>Shop now</Button>
          </Box>

          {/* slider */}
          <Box mt={4}>
            <Carousel />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default HeroSection;
