import { Button, Modal } from "react-bootstrap";
import React,{useState} from "react";


const Pj = ({ imagen, nombre,imagenDeCara, profesion }) => {
    const [smShow, setSmShow] = useState(false);

  return (
    <div>
      <img onClick={() => setSmShow(true)} className={nombre} src={imagen} alt="" />
      <Modal
        size="sm"
        show={smShow}
        onHide={() => setSmShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            {nombre}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Profesión: {profesion} </p>
            <img src={imagenDeCara} alt="" />
        {nombre === 'bob' ? 'soy bob carajo' : 'Hola!'}
        </Modal.Body>
      </Modal>

    </div>
  );
};

export default Pj;
