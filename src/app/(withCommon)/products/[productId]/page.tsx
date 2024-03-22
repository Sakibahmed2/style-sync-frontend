import { Box, Container, Rating, Stack, Typography } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";
import Image from "next/image";

type TProps = {
  params: {
    productId: string;
  };
};

const SingleProductPage = async ({ params }: TProps) => {
  console.log(params);

  const res = await fetch(
    `${process.env.BASE_URL}/products/${params.productId}`,
    {
      next: {
        revalidate: 30,
      },
    }
  );
  const { data } = await res.json();
  console.log(data);

  const { image, price, description, rating, title, salePrice, sale } = data;

  return (
    <Box my={10}>
      <Container>
        <Stack
          direction={{
            md: "row",
          }}
          gap={5}
        >
          <Box>
            <Image src={image} width={500} height={500} alt="product image" />
          </Box>
          <Box
            width={{
              md: 500,
            }}
          >
            <Stack>
              <Box borderBottom={"2px solid gray"} pb={5}>
                <Box>
                  <Typography component="h2" fontSize={30} fontWeight={600}>
                    {title}
                  </Typography>
                </Box>
                <Stack direction={"row"} gap={1}>
                  <Box borderRight={"2px solid black"} pr={1}>
                    {sale ? (
                      <Stack direction={"row"} gap={1}>
                        <Typography
                          sx={{
                            textDecoration: "line-through",
                            color: "red",
                          }}
                          fontSize={25}
                          component={"p"}
                        >
                          ৳ {price}{" "}
                        </Typography>
                        <Typography component={"p"} fontSize={25}>
                          ৳ {salePrice}{" "}
                        </Typography>
                      </Stack>
                    ) : (
                      <Typography component={"p"} fontSize={25}>
                        ৳ {price}
                      </Typography>
                    )}
                  </Box>
                  <Box>
                    <Rating name="simple-controlled" value={rating} />
                  </Box>
                </Stack>
              </Box>

              <Typography component={"p"} mt={4}>
                {description}
              </Typography>
              <Box mt={5}>
                <Typography component={"p"} mt={4}>
                  <LocalShippingIcon /> Delivery inside dhaka ৳ 45 / outside
                  dhaka ৳ 120
                </Typography>
                <Typography component={"p"} mt={4}>
                  <HomeRepairServiceIcon /> Delivers in: 3-7 Working Days
                  Shipping & Return
                </Typography>
              </Box>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default SingleProductPage;
