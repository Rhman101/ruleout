import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

interface SettingProps {
    handleClose: Function
}

const WelcomeModal: React.FC<SettingProps> = (props: SettingProps) => {
    const [show, setShow] = useState(true);

    const handleClose = () => {
        setShow(false)
        props.handleClose();
    };

    return <>

        <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header closeButton>
                <Modal.Title>Welcome!</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>I see that you have already enjoyed poking around my math app!</p>
                <p>I am Ruan Huysen, a developer and math teacher, and what you are looking at is my work-in-progress web app
                    with one goal in mind: <span style={{ fontWeight: 'bold' }}>To increase the mathematics skills of South African primary and high school learners
                    through focused skill-building challenges and both develop and require competence.</span></p>
                <p>Please feel free to review the code on github and / or contact me on <span style={{ fontWeight: 'bold' }}>rhuysen@gmail.com</span> if you need to.</p>
                <p>I am open to opportunities in software development.</p>
                <p>Tech stack: Javascript, Node and React, built using Next.js, a server-side React framework.</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    </>

}

export default WelcomeModal;