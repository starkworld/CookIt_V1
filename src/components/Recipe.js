import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Grid, makeStyles, Button } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import AddData from './AddData'
import '../App.css';

var newData = []

const BuildCard = ({ setnewDatas, newDatas }) => {
    const deleteData = (title) => {
        var deldata = newDatas.filter(el => {
            if(el.title != title){
                return el
            }
        })
        setnewDatas(deldata)
    }
    useEffect(() => {

    }, [newDatas])
    return (
        <div style={{ display: 'flex' }}>
        {newDatas.length > 0 && newDatas.map(el => (
            <Card style={{ width: '18rem',display:'flex' }}>
                    <div>
                        <img src={el.images} style={{ width: '200px' }} />
                        <Card.Body>
                            <Card.Title>{el.title}</Card.Title>
                            <Card.Text>
                                {el.content}
                            </Card.Text>
                            <Button variant="primary" onClick={() => deleteData(el.title)}>Delete</Button>
                        </Card.Body>
                    </div>
            </Card>
                ))}
        </div>
    );
};

const Recipe = () => {
    const [open, setOpen] = useState(false);
    const [newDatas, setnewDatas] = useState([])
    const [data, setdata] = useState({
        title: "",
        content: "",
        images: '',
    })
    const handleClickOpen = () => {
        setOpen(true);
    };

    useEffect(() => {
    }, [data, newData, newDatas])
    const adddata = () => {
        setnewDatas([...newDatas, data])
    }
    return (
        <div>
            <Button variant="contained" color="primary" style={{ margin: '20px 0' }} onClick={() => {
                handleClickOpen()
            }}>Add Recipes</Button>
            <AddData adddata={adddata} setdata={setdata} data={data} setOpen={setOpen} open={open} />
            <BuildCard setnewDatas={setnewDatas} newDatas={newDatas} />
        </div>

    )
}


export default Recipe;