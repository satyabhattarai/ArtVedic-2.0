import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import React, { useEffect, useState } from "react";

import CommissionForm from "./CommissionForm";
import Productcard from "./Productcard";
import { fetchDataFromApi } from "../API/api";
import { useParams } from "react-router-dom";

const Artist = () => {
  const { artist_email } = useParams();
  const [Artist, setArtist] = useState();
  const [Artist_data, setArtist_data] = useState();

  useEffect(() => {
    GetArtistDetails();
    GetArtistArtworks();
  }, []);
  const GetArtistDetails = async () => {
    let res = await fetchDataFromApi(
      `/api/auths?populate=*&filters[email]=${artist_email}`
    );
    setArtist(res.data);
  };
  const GetArtistArtworks = async () => {
    let res = await fetchDataFromApi(
      `/api/alls?populate=*&filters[email]=${artist_email}`
    );
    setArtist_data(res.data);
  };

  const [form, set_form] = useState(false);

  return (
    <div>
      {form && <CommissionForm />}
      {Artist && Artist.length > 0 && (
        <div className="mt-32 ">
          <div className="relative">
            <div className="relative w-[1120px] h-80 ">
              <img
                src="/artvedic20.jpeg"
                alt="bg-image"
                className="object-cover w-full h-full opacity-60"
              />
            </div>
            <div className="absolute mb-32 -translate-x-[70px] translate-y-[250px] bottom-1 left-1/2 gap-9">
              <div className="relative w-48 h-48">
                <img
                  className="absolute top-0 left-0 w-full h-auto overflow-hidden rounded-full "
                  src={
                    process.env.REACT_APP_DEV_URL +
                    Artist[0].attributes.img.data.attributes.url
                  }
                  alt="Satya"
                />
              </div>
            </div>
          </div>
          <div className="p-4">
            <h1 className="text-3xl font-bold text-[#2dd4bf] ">
              {Artist[0].attributes.name}
            </h1>
            <h3 className="mb-2 text-[#aee9f2] text-opacity-40">
              {Artist[0].attributes.email}
            </h3>
          </div>
          <div className="mb-8">
            <button
              onClick={() => {
                set_form(true);
              }}
              className="px-12 py-2 text-black bg-green-200 border rounded"
            >
              Hire Now
            </button>
          </div>
          <div className="mb-4 text-3xl text-green-200">artworks</div>
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 768: 2, 900: 3 }}
          >
            <Masonry gutter="24px">
              {Artist_data &&
                Artist_data.length > 0 &&
                Artist_data.map((item) => <Productcard artwork={item} />)}
            </Masonry>
          </ResponsiveMasonry>
        </div>
      )}
    </div>
  );
};

export default Artist;
