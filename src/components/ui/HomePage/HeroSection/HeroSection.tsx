import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Carousel from "./Carousel";

const HeroSection = () => {
  return (
    <Box
      sx={{
        bgcolor: "#e1e1e6",
        height: "100vh",
      }}
    >
      <Container>
        <Stack
          pt={{
            md: 20,
            xs: 25,
          }}
        >
          <Box textAlign="center">
            <Stack direction="column">
              <Typography
                component="h1"
                fontSize={{
                  md: 50,
                  xs: 30,
                }}
                fontWeight={600}
              >
                Find The Best Fashion Style{" "}
                <Typography
                  component="span"
                  color="primary.main"
                  fontSize={{
                    md: 50,
                    xs: 30,
                  }}
                  fontWeight={600}
                >
                  For You
                </Typography>
              </Typography>
            </Stack>
            <Typography
              component="p"
              width={{
                md: 400,
              }}
              mb={2}
              margin="0 auto"
            >
              Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum.
            </Typography>
            <Button
              sx={{
                mt: 2,
              }}
            >
              Shop now
            </Button>
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
