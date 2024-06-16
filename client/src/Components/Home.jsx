import "react-multi-carousel/lib/styles.css";

import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { fetchDataFromApi, postDataToApi } from "../API/api";
import { useContext, useEffect, useState } from "react";

import Carousel from "react-multi-carousel";
import Productcard from "./Productcard";
import React from "react";
import Search from "./Search";
import { useStateContext } from "../ContextProvider/ContextProvider";

const Home = () => {
  // const [isMoving, setIsMoving] = useState(false);
  const [featuredItems, setFeaturedItems] = useState([]);
  const [workshop, setworkshop] = useState([]);
  const { ShowSearch, set_ShowSearch } = useStateContext();
  // const handleviewmore = () => {
  //   setvisible((prev) => prev + 4);
  // };
  // const handleviewmorecat = () => {
  //   setvisiblecat((prev) => prev + 3);
  // };
  // const handleviewless = () => {
  //   setvisible((prev) => prev - 4);
  // };
  // const handleviewlesscat = () => {
  //   setvisiblecat((prev) => prev - 3);
  // };
  // const [visible, setvisible] = useState(8);
  // const [visiblecat, setvisiblecat] = useState(3);
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  useEffect(() => {
    //fetchDataFromApi("...").then(res => setFeaturedItems(res.data)).catch(err => console.log(err));
    getFeaturedItems();
  }, []);
  useEffect(() => {
    getWorkshopItems();
  }, []);
  async function getFeaturedItems() {
    let result = await fetchDataFromApi(`/api/alls?populate=*`);
    setFeaturedItems(result.data);
  }
  async function getWorkshopItems() {
    let result = await fetchDataFromApi(`/api/workshops?populate=*`);
    setworkshop(result.data);
  }
  console.log(featuredItems);
  return (
    <div className="mt-2">
      <div className="grid grid-cols-2 gap-8 py-[48px]">
        <div className=" border border-[#5C6B94] rounded p-[12px]  ">
          <img
            className="w-full h-full rounded "
            src="/featured.jpg"
            alt="img1"
          />
        </div>
        <div className="grid grid-rows-2 gap-8 border-none rounded-lg ">
          <div className="">
            <img className="" src="/home.jpg" alt="img1" />
          </div>
          <div className="r">
            <img className="" src="/ski.jpg" alt="img1" />
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-[#F7F8F8] ">BROWSE BY CATEGORY</h3>
        <div className=" grid grid-cols-3 gap-8 mt-[16px] mb-[12px] ">
          <div className="relative w-full rounded-sm group">
            <a href="/category/acrylics">
              <img
                src="/acrylicbox.jpeg"
                alt="imagebrowse"
                className="absolute inset-0 object-cover w-full h-full group-hover:opacity-50 "
              />
            </a>
            <div className="px-[4px] text-white opacity-0 group-hover:opacity-100 hover:text-3xl transition-all duration-500 ease-in-out">
              <h2 className="pb-[4px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
                Acrylics
              </h2>
            </div>
          </div>
          <div className="relative w-full rounded-sm group">
            <a href="/category/portrait">
              <img
                src="/ps7.jpeg"
                className="absolute inset-0 object-cover w-full h-full group-hover:opacity-50 "
                alt="imagebrowse"
              />
            </a>
            <div className="px-[4px] text-white opacity-0 group-hover:opacity-100 hover:text-3xl transition-all duration-500 ease-in-out">
              <h2 className="pb-[4px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                Portraits
              </h2>
            </div>
          </div>
          <div className="relative aspect-square group">
            <a href="/category/oil">
              <img
                src="/oil1.jpeg"
                alt="imagebrowse"
                className="absolute inset-0 object-cover w-full h-full group-hover:opacity-50"
              />
            </a>
            <div className="px-[4px] text-white opacity-0 group-hover:opacity-100 hover:text-3xl transition-all duration-500 ease-in-out">
              <h2 className="pb-[4px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
                Oil Painting
              </h2>
            </div>
          </div>
          <div className="relative aspect-square group">
            <a href="/category/watercolor">
              <img
                src="/water.jpeg"
                alt="imagebrowse"
                className="absolute inset-0 object-cover w-full h-full group-hover:opacity-50"
              />
            </a>
            <div className="px-[4px] text-white opacity-0 group-hover:opacity-100 hover:text-3xl transition-all duration-500 ease-in-out">
              <h2 className="pb-[4px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
                Watercolor
              </h2>
            </div>
          </div>
          <div className="relative aspect-square group ">
            <a href="/category/abstract">
              <img
                src="/artvedic17.jpeg"
                alt="imagebrowse"
                className="absolute inset-0 object-cover w-full h-full group-hover:opacity-50"
              />
            </a>
            <div className="px-[4px] text-white opacity-0 group-hover:opacity-100 hover:text-3xl transition-all duration-500 ease-in-out">
              <h2 className="pb-[4px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
                Abstract
              </h2>
            </div>
          </div>
          <div className="relative aspect-square group">
            <a href="/category/glass">
              <img
                src="/GlassArt9.jpeg"
                alt="imagebrowse"
                className="absolute inset-0 object-cover w-full h-full group-hover:opacity-50 "
              />
            </a>
            <div className="px-[4px] text-white opacity-0 group-hover:opacity-100 hover:text-3xl transition-all duration-500 ease-in-out">
              <h2 className="pb-[4px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
                Glass Art
              </h2>
            </div>
          </div>
          <div className="relative aspect-square group">
            <a href="/category/pixel">
              <img
                src="pixel.jpeg"
                alt="imagebrowse"
                className="absolute inset-0 object-cover w-full h-full group-hover:opacity-50 "
              />
            </a>
            <div className="text-white transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100 hover:text-3xl ">
              <h2 className="pb-[4px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                Pixel Art
              </h2>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <h3
            className="text-[#F7F8F8] cursor-pointer"
            // onClick={handleviewmorecat}
          >
            VIEW MORE (arrow)
          </h3>
          <h3
            className="text-[#F7F8F8] cursor-pointer"
            // onClick={handleviewlesscat}
          >
            VIEW LESS (arrow)
          </h3>
        </div>
      </div>
      <div className="py-[48px]">
        <h3 className="text-[#F7F8F8] pb-[16px] ">ALL ARTWORKS</h3>
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 768: 2, 900: 3 }}>
          <Masonry gutter="24px">
            {/* {console.log(products)} */}
            {featuredItems &&
              featuredItems.map((art) => (
                <a href={`/art/${art.id}`}>
                  <Productcard key={`allartwork-${art.id}`} artwork={art} />
                </a>
              ))}

            <h3
              className="text-[#F7F8F8] py-[12px] cursor-pointer"
              // onClick={handleviewmore}
            >
              VIEW MORE (arrow)
            </h3>
            <h3
              className="text-[#F7F8F8] py-[12px] cursor-pointer"
              // onClick={handleviewless}
            >
              VIEW LESS (arrow)
            </h3>
          </Masonry>
        </ResponsiveMasonry>
      </div>
      <h3 className="text-[#F7F8F8] pb-[16px] ">AVAILABLE WORKSHOPS</h3>

      {workshop && (
        <Carousel
          swipeable={true}
          draggable={true}
          responsive={responsive}
          infiniteLoop={true}
          autoPlay={true}
          autoPlaySpeed={1000}
          className="flex gap-4"
          arrows={true}
          centerMode={true}
          slidesToSlide={1}
        >
          {workshop &&
            workshop.map((workshop) => (
              <div className="p-4 aspect-square" key={`categoory-${"utsav"}`}>
                <a href={`/work/${workshop.id}`}>
                  <div className="h-64">
                    <img
                      className="w-full h-full "
                      src={
                        process.env.REACT_APP_DEV_URL +
                        workshop.attributes.img.data.attributes.url
                      }
                      alt="home"
                    />
                  </div>
                </a>
              </div>
            ))}
        </Carousel>
      )}

      <div>
        <div>
          {/* <input type="file" id="myFile" name="filename"/>
  <button type="submit" className="bg-white border rounded " onClick={uploadfile}>Upload File</button> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
