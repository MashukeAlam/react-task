import React, {useState, useEffect} from 'react';

import {Button, Modal} from 'react-bootstrap'
import axios from 'axios';


const Problem2 = () => {

    const [show, setShow] = useState(true);
    const [all, setAll] = useState([]);
    const [us, setUS] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

        useEffect(() => {
            
        },[])

    return (

        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-2</h4>
                
                <div className="d-flex justify-content-center gap-3">
                <button  className="btn btn-lg btn-outline-primary" type="button" >All Contacts</button>
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
          I will not close if you click outside me. Don not even try to press
          escape key.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>

        </div>
    );
};

export default Problem2;