"use client";

import { TProduct } from "@/types/global";
import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const ClothCard = ({ product }: { product: TProduct }) => {
  return (
    <div className="rounded-lg bg-white text-white shadow-secondary-1 dark:bg-surface-dark w-[300px] border-2 border-gray-500 p-2 mx-auto">
      <Box position="relative">
        <Typography
          position="absolute"
          top={10}
          right={10}
          component="span"
          sx={{
            bgcolor: "black",
            color: "white",
            padding: "2px 10px",
            borderRadius: "5px",
          }}
        >
          20%
        </Typography>
      </Box>
      <Image
        className="rounded-lg"
        src={product.image}
        width={300}
        height={300}
        alt="products"
      />
      <Box px={1} mt={1}>
        <Typography component="p" fontSize={20}>
          {product.title}
        </Typography>
        <Stack direction={"row"} justifyContent="space-between">
          <Typography fontWeight={600}>৳ {product.price}</Typography>
          <Typography component="span">
            {" "}
            <AddShoppingCartIcon sx={{ fontSize: "20px" }} />
          </Typography>
        </Stack>
      </Box>
    </div>
  );
};

export default ClothCard;
