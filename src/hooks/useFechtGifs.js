import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFechtGifs = (category) => {

const [data, setData] = useState([])
const [isLoading, setIsLoading] = useState(true)

const getImages = async() => {
    const newImages = await getGifs(category);
    setData(newImages)
    setIsLoading(false)
  }
  useEffect(()=>{
    getImages();
  },[])
  
//   console.log(data)
    return{
        data:data,
        isLoading
    }
}
