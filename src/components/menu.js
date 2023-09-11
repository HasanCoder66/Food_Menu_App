import { useEffect, useState } from "react";
import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';





const Menu = () => {
    


    const [menu, setMenu] = useState([])
    const [data, SetData] = useState("")
    const GetData = async () => {

        const fetchData = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${data}`)
        // console.log(fetchData)
        const res = await fetchData.json()
        // console.log(res)



        setMenu(res.data.recipes)

    }

    useEffect(() => {
        GetData()
    }, [])
    
   

    function  dataHandler  (val)  {
    SetData(val.target.value)
    }

    return (
        <div >
            <p style={{ textAlign: 'center' }}>Authentic Italian Cuisine. 6 creative dishes to choose from. All from our stone oven, all are organic, all delicious  </p>
        <div style={{display:'flex', justifyContent:'flex-end', padding:'10px 40px'}}>
        <InputGroup className="mb-5">
                <input style={{width:'23vw', padding:'15px 10px' ,borderRadius:'20px'}} value={data} onChange={dataHandler}
                    placeholder="Search over items"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                />
                <Button style={{backgroundColor:'#eda212', color:'white', width:'13vw', padding:'15px 0px' ,borderRadius:'20px'}}className="mb-5" variant="warning" id="button-addon2" onClick={GetData}>
                    Search
                </Button>
            </InputGroup>
        </div>

        <div style={{ width: "100vw", display: "flex", alignItems: "center", justifyContent: "center", flexWrap: "wrap" , paddingRight:'30px',marginBottom: "20px"}}>
            
            {menu.map((items) => (
                <CardContanier callBack={items} />

            ))}
        </div>

            {console.log(menu)}

        </div>
    )


}

function CardContanier({ callBack }) {
    return (
        <div style={{marginBottom: "20px"}}>
        <Card style={{ width: '18rem' }}>
            <Card.Img  style={{width:'200px', height:'150px'}} variant="top" src={callBack.image_url} />
            <Card.Body>
                <Card.Title>{callBack.title}</Card.Title>
                <Card.Text>
                    {callBack.publisher}
                </Card.Text>
                <Button style={{backgroundColor:'#eda212', color:'white', width:'13vw', padding:'15px 0px' ,borderRadius:'20px' }} variant="primary">Order Now</Button>
            </Card.Body>
        </Card>
        </div>
    );
}







export default Menu




