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
        <div style={{ padding: '0px 30px' }} >
            <p style={{ textAlign: 'center' }}>Authentic Italian Cuisine. 6 creative dishes to choose from. All from our stone oven, all are organic, all delicious  </p>
            <InputGroup className="mb-5">
                <input value={data} onChange={dataHandler}
                    placeholder="Search over items"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                />
                <Button className="mb-5" variant="warning" id="button-addon2" onClick={GetData}>
                    Search
                </Button>
            </InputGroup>

            {menu.map((items) => (
                <CardContanier callBack={items} />

            ))}

            {console.log(menu)}

        </div>
    )


}

function CardContanier({ callBack }) {
    return (
        <div style={{}} className="container-card ">
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={callBack.image_url} />
            <Card.Body>
                <Card.Title>{callBack.title}</Card.Title>
                <Card.Text>
                    {callBack.publisher}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
        </div>
    );
}







export default Menu




