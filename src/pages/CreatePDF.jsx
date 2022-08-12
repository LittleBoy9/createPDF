import React, { useState } from 'react'
import {
    useParams,
  } from "react-router-dom";
import Footer from '../components/Footer';
import MainTable from '../components/MainTable';
import TopBar from "../components/TopBar";
import UserIdentity from "../components/UserIdentity";
import axios from 'axios';
import { useEffect } from 'react';

const CreatePDF = () => {
let { labName, id } = useParams();
console.log(labName + id)

  const [headers, setHeaders] = useState({
      database: labName,
      table: '/patientresult',
    }
  )
  

  useEffect(() => {
    (async () => {
      const data = await fetchData();
      //console.log(data)
    })();
    
  },[]);

  const fetchData = async() => {
    const url = '';
    const config ={ 
      headers: headers
    }
    console.log(config)
    // try {
    //   const res = await axios.get(url, config);
    // }catch(e) {
    //   console.log(e);
    // }

  }



  return (
    <>
   
    <TopBar />
    <UserIdentity />
    <hr/>
    <MainTable />
    <Footer />
    
    </>
  )
}

export default CreatePDF