import React from 'react'
import { useParams } from 'react-router-dom';

type URLParams={
    firstname:string;
}
export default function Template() {
     const { firstname } = useParams<URLParams> ();
  return (
    <div>
      <h1>Hi my Name is {firstname}</h1>
    </div>
  )
}
