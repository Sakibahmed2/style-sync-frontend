import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import ClothCard from "../../ClothCard";
import { TProduct } from "@/types/global";

const FlashSale = async () => {
  const res = await fetch(`${process.env.BASE_URL}/products`, {
    next: {
      revalidate: 30,
    },
  });
  const { data } = await res.json();

  return (
    <Box my={20}>
      <Container>
        <Box>
          <Stack direction={"row"} justifyContent="space-between">
            <Typography variant="h4" component="h1" fontWeight={600}>
              Flash sale
            </Typography>
            <Button
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              See All <ArrowCircleRightOutlinedIcon />
            </Button>
          </Stack>
        </Box>
        <Box mt={4}>
          <Stack
            direction={{
              md: "row",
            }}
            gap={3}
            sx={{
              margin: "0 auto",
            }}
          >
            {data?.slice(0, 4)?.map((product: TProduct) => (
              <ClothCard key={product._id} product={product} />
            ))}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default FlashSale;
