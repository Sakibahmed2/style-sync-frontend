"use client";

import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import banner1 from "@/assets/banner/banner-1.png";
import banner2 from "@/assets/banner/banner-2.png";
import banner3 from "@/assets/banner/banner-3.png";
import Image from "next/image";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <Box sx={{ padding: "20px" }}>
      {" "}
      {/* Apply padding to create a gap around the slider */}
      <Slider {...settings}>
        <Box
          component="div"
          sx={{
            borderRadius: "10px",
            bgcolor: "lightcoral",
            margin: "10px",
            padding: "8px", // Apply padding to create a gap between slider items
          }}
        >
          <Box display="flex" justifyContent="center">
            <Image src={banner1} width={200} height={200} alt="banner1" />
          </Box>
        </Box>
        <Box
          component="div"
          sx={{
            borderRadius: "10px",
            bgcolor: "lightcoral",
            margin: "10px",
            padding: "8px", // Apply padding to create a gap between slider items
          }}
        >
          <Box display="flex" justifyContent="center">
            <Image src={banner1} width={200} height={200} alt="banner1" />
          </Box>
        </Box>
        <Box
          component="div"
          sx={{
            borderRadius: "10px",
            bgcolor: "lightcoral",
            margin: "10px",
            padding: "8px", // Apply padding to create a gap between slider items
          }}
        >
          <Box display="flex" justifyContent="center">
            <Image src={banner1} width={200} height={200} alt="banner1" />
          </Box>
        </Box>
      </Slider>
    </Box>
  );
};

export default Carousel;
