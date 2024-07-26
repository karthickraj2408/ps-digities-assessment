import axios from 'axios';
import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component';

const DataTableComponent = () => {
    const [data, setData] = useState([]);
   

const columns = [
	{
		name: 'Name',
		selector: row => row.name,
	},
	{
		name: 'Username',
		selector: row => row.username,
	},
	{
		name: 'Email',
		selector: row => row.email,
	},
	{
		name: 'Phone',
		selector: row => row.phone,
	},
	{
		name: 'Company Name',
		selector: row => row.company.name,
	},
	{
		name: 'Address',
		selector: row => row.address.city,
	},
];

const fetchData = async() =>{
    try{
        const response = await axios.get("https://jsonplaceholder.typicode.com/users")
       
        setData(response.data)

    } catch{
        console.error("The Api is not working")
    }

  
}
useEffect(()=>{
    fetchData()
},[])

const customStyles = {
	rows: {
		style: {
			minHeight: '72px',
            backgroundColor:'yelloe',
             // override the row height
		},
	},
	headCells :{
        style:{
          backgroundColor: '#fd5c63',
          color :'white',
          paddingTop : '10px',
          fontSize: "20px",
          fontWeight: "bold",
  
        }
	},
	cells: {
		style: {
			paddingLeft: '8px', // override the cell padding for data cells
			paddingRight: '8px',
		},
	},
};

  return (
    <>
    <div className='text-3xl font-sans font-bold p-5 text-center'>Data Table</div>
    <div className='container w-full  m-auto'>
    <DataTable
			columns={columns}
			data={data}
            className='w-3/4'
            customStyles={customStyles}
            pagination

		/>
        </div>
    </>
    
  )
}

export default DataTableComponent