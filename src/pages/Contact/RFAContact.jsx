import React from 'react';
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import RFAHeader from '../../components/RFAHeader';
import headerBlobYellow from '../../media/HeaderBlobs/Blob-RFA-4.png'; // add correct image and filepath here
import { useFormik } from 'formik';
import * as emailjs from 'emailjs-com';
import RFAFormInput from "../../components/RFAFormInput";
import RFATextArea from "../../components/RFATextArea";
import RFASubmitButton from "../../components/RFASubmitButton";


export default function RFAContact(props) {


  const contactInfo = {
    fontFamily: "BeVietnam-SemiBold",
  }

  const linkStyle = {
    color: "#C06202"
  }

  const formik = useFormik({
    initialValues: {
      user_name: '',
      user_email: '',
      message: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));


      // generate a five digit number for the contact_number variable
      values.contact_number = (Math.random() * 100000 | 0).toString();

      // these IDs from the previous steps

      emailjs.send('service_t6ov7gc', 'contact_form', values, "user_UgObGpueIJlqijMucq52k")
        .then(function (response) {
          console.log('SUCCESS!', response.status, response.text);
        }, function (error) {
          console.log('FAILED...', error);
        });
    },
  });
  return (
    <div>
      <RFAHeader
        headerTextColor={"#ffcc00"}
        image={headerBlobYellow}
        title={"Want to know more? Contact us!"}
        description={"Contact us for more information, questions, partnerships and much more!"}
      />

      <Container className="border">
        <br />
        <Row className="justify-content-between">
          <Col style={contactInfo} md={5}>
            <Row className="flex-column">
              <h3>
                EMAIL | <a className="hyperlink" style={linkStyle} href={"mailto:" + props.email}>{props.email}</a>
              </h3>
              <br></br>
              <h3>
                PHONE | <a className="hyperlink" style={linkStyle} href={"tel:+" + props.telephone}>+{props.telephone}</a>
              </h3>
              <br></br>
              <h3>
                ADDRESS | <p style={linkStyle}>{props.address}</p>
              </h3>
            </Row>
            <Row>
              Add Icons here
              </Row>
          </Col>
          <Col md={6} className="justify-content-end">
            <Form id="contact-form" onSubmit={formik.handleSubmit}>
              <RFAFormInput
                type = "text"
                placeholder = "Full Name"
                height = "3em"
                id="user_name"
                name="user_name"  
                onChange={formik.handleChange}
                value={formik.values.user_name}
              />
              <RFAFormInput
                type="email"
                placeholder="Email"
                height = "3em"
                id="user_email"
                name="user_email"
                onChange={formik.handleChange}
                value={formik.values.user_email}
              />
              <RFATextArea
                rows = {4}
                placeholder="Question, Comments, Concerns"
                id="message"
                name="message"
                onChange={formik.handleChange}
                value={formik.values.message}
              />
              <RFASubmitButton/>
            </Form>
          </Col>
        </Row>
        <br></br>
        <br></br>

        <br></br>

        <br></br>

        <br></br>

        <br></br>

        <br></br>

      </Container>

    </div>
  );
}
