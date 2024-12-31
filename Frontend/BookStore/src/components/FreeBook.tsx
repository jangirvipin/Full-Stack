
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from "./Card";
import { useEffect, useState } from "react";
import axios from "axios";

export default function FreeBook(){

  const [book,setbook]=useState([]);
  useEffect(()=>{
      const getbooks=async()=>{
          try{
              const res=await axios.get("http://localhost:3000/book");
              const data=await res.data.filter((item: { category: string })=>item.category==="Free");
              setbook(data);
             // console.log(await res.data);
              //console.log(book[0]);
          }catch(e){
              console.log(e);
          }}
          getbooks();
  });


var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

    return (<>
        <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">

            <div>
            <h1 className="text-xl font-bold pb-2">Free Offered Courses</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent maur</p>
            </div>

        <div className="lg:mt-20 mt-10 ">
        <Slider {...settings}>
        {
            book.map((data,index)=>(
                <Card  id={index} item={data}  />
            ))
        }
      </Slider>
        </div>
        </div>
    </>
        
    )
}