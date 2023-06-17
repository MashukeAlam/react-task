import React, { useState, useEffect } from 'react';

import { Button, Modal } from 'react-bootstrap'
import axios from 'axios';
import InfiniteScroll from "react-infinite-scroll-component";


const Problem2 = () => {

    const [show, setShow] = useState(false);
    const [more, setMore] = useState(true);
    const [page, setPage] = useState(1);
    const [all, setAll] = useState([]);
    const [us, setUS] = useState(['aa']);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    useEffect(() => {
        const load = async () => {
            const result = await axios('https://contact.mediusware.com/api/contacts/')
            setAll([...all ,...result.data.results]);
            console.log(result.data.results);
            setPage(page + 1)
            console.log(page);
        }
        load()
        console.log(all, page);
    }, [page]);

    


    return (

        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-2</h4>

                <div className="d-flex justify-content-center gap-3">
                    <button onClick={handleShow} className="btn btn-lg btn-outline-primary" type="button" >All Contacts</button>
                    <button className="btn btn-lg btn-outline-warning" type="button" >US Contacts</button>
                </div>

            </div>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div style={{overflow: 'auto', height: '300px'}}></div>
                <table className="table table-striped ">
                        <thead>
                            <tr>
                                <th scope="col">Phone</th>
                                <th scope="col">Country</th>
                            </tr>
                        </thead>
                        <tbody>
                            {all.map(item => (
                                <tr key={item.id}>
                                    <td>{item.phone}</td>
                                    <td>{item.country.name}</td>
                                </tr>
                            ))}


                        </tbody>
                    </table>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>

                </Modal.Footer>
            </Modal>

        </div>
    );
};

export default Problem2;