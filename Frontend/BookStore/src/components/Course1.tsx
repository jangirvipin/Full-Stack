 const c="Lorem ipsum dolor sit amet. Ex provident officiis et voluptatem mollitia aut recusandae odit aut aperiam animi. Vel quibusdam eaque in dolores excepturi non sequi quidem sit officia libero.Est exercitationem quae est veritatis odit ut recusandae dolore et ipsum earum qui autem voluptatem eum nesciunt quas. 33 illum velit ut tempora voluptas aut enim molestiae ut sint illum. Et laborum enim ut itaque ipsa in quis molestias eos modi"
import { Link } from "react-router-dom";

import Card from "./Card";
import { useEffect, useState } from "react";
import axios from "axios";


 export default function Course1(){
        const [book,setbook]=useState([]);
        useEffect(()=>{
            const getbooks=async()=>{
                try{
                    const res=await axios.get("http://localhost:3000/book");
                    setbook(await res.data);
                   // console.log(await res.data);
                   // console.log(book[0]);
                }catch(e){
                    console.log(e);
                }}
                getbooks();
        });

    return(
        <>
        <div className="max-w-screen-2xl container  mx-auto md:px-20 px-4">
            <div className="pt-28 justify-center items-center text-center">
                <h1 className="text-2xl  md:text-4xl ">We are delighted to have you 
                <span className="text-pink-500">
                Here!:
                    </span></h1>
                    <p className="mt-12">{c}</p>
                    <Link to="/">
                    <button className="bg-pink-500 px-4 py-2 rounded-md text-white mt-6">Back</button>
                    </Link>
                  
            </div>
            <div className="ml-10 grid grid-cols-1 md:grid-cols-3 gap-5 gap-y-10 mt-12 justify-center">
            {
                book.map((item)=>(
                        <Card item={item} />
                ))
            }
            </div>
           
        </div>
        </>

    )
}