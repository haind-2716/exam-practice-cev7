import axios from "axios";
import React from "react";

const baseURL = "https://jsonplaceholder.typicode.com/posts/1";

const listCourse = async () =>{
    return await axios.get(`${baseURL}/course`)
}