import React, { useEffect, useState } from 'react'

async function fetchData(setData) {
  const url = 'https://free-nba.p.rapidapi.com/stats?page=0&per_page=25';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2889c59817mshc38f7ac242382c8p1af259jsn031b1a5c7f69',
		'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	setData(result.data);
} catch (error) {
	console.error(error);
}
}


export default function GameStat() {
  const [data, setData] = useState([])

  useEffect(() => {
fetchData(setData);
}, [])
console.log(data);

  return (
    <div>
{data.map((el)=>{
  return <p>{el.team.city}</p>
})}
    </div>
  )
}
