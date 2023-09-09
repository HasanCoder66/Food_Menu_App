import { useState } from "react";
import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


const GetData = async () => {
    try {
        const fetchData = await fetch('https://forkify-api.herokuapp.com/api/v2/recipes?search=steak')
        console.log(fetchData)
        const res = await fetchData.json()
        console.log(res.data.recipes)
        
    } catch (error) {
        console.log(error)
    }
    return(
       <>
       
       </> 
    )
}

const Menu = () => {

    const [menu, setMenu] = useState()
    return (
        <div style={{padding: '0px 30px'}} className="container">
            <p style={{ textAlign: 'center' }}>Authentic Italian Cuisine. 6 creative dishes to choose from. All from our stone oven, all are organic, all delicious  </p>
            <InputGroup className="mb-5">
        <Form.Control
          placeholder="Search over items"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <Button className="mb-5" variant="outline-secondary" id="button-addon2" onClick={GetData}>
          Search
        </Button>
      </InputGroup>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src='' />
                <Card.Body>
                    <Card.Title>
                        {/* {res.data.recipes.title} */}
                    </Card.Title>
                    <Card.Text>
                    {/* {res.data.recipes.publisher} */}
                    </Card.Text>
                    <Button variant="Warning">Order Now</Button>
                </Card.Body>
            </Card>
        </div>
    )
    useState(res.data.recipes)
}

export default Menu




