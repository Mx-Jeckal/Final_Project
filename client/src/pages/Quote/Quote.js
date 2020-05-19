import React, { useState } from "react";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { Container, Form, Col, Row } from "react-bootstrap";
import API from "../../utils/API.js";
import logo from "../../images/logo.png";
import { useGlobalContext } from "../../utils/GlobalState.js";
import "./quote.scss";


function getSteps() {
  return ["Info", "Finish", "Door Design", "Barn Door Kit", "Handle", "Preferences", "Review"];
}

export default function VerticalLinearStepper() {

  const [state, dispatch] = useGlobalContext();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();
  const [validated, setValidated] = useState(false);

  function updateState(event) {
    dispatch({ type: event.target.name, value: event.target.value });
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };



  const handleNext = (event) => {
    event.preventDefault();
    if (activeStep === 0) {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
      }
      setValidated(true);
    }

    if (activeStep === 6) {
      API.saveQuote({
        firstName: state.firstName,
        lastName: state.lastName,
        phoneNumber: state.phoneNumber,
        address: state.address,
        address2: state.address2,
        email: state.email,
        city: state.city,
        state: state.state,
        zip: state.zip,
        finishColor: state.finishColor,
        doorDesign: state.doorDesign,
        doorKit: state.doorKit,
        handle: state.handle,
        installOrDelivery: state.installOrDelivery,
        dimensionsH: state.dimensionsH,
        dimensionsW: state.dimensionsW
      })
        .then(() => alert("Success"))
        .catch(err => console.log(err));
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };



  function getStepContent(step) {
    switch (step) {
    case 0:
      return (
        <div>
          <Row>
            <Col>
              <div><img className='logo mb-3' alt={logo} src={logo}></img></div>
            </Col>
          </Row>
          <Row>
            <Col className='text-center mb-4'>
              <h1>Info</h1>
            </Col>
          </Row>


          <Form noValidate validated={validated} onSubmit={handleNext} id="form0">
            <Form.Row>
              <Form.Group as={Col} md="5">
                <Form.Label>First name</Form.Label>
                <Form.Control required type="text" name="firstName" placeholder="First name" onChange={updateState} />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">Ooops!</Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md="5">
                <Form.Label>First name</Form.Label>
                <Form.Control required type="text" name="lastName" placeholder="Last name" onChange={updateState} />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">Ooops!</Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md="2">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control required type="number" placeholder="555-555-5555" name="phoneNumber" onChange={updateState} />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">Phone Number Missing!</Form.Control.Feedback>
              </Form.Group>

            </Form.Row>

            <Form.Row>

              <Form.Group as={Col} md="12">
                <Form.Label>Email</Form.Label>
                <Form.Control required type="email" placeholder="@example.com" name="email" onChange={updateState} />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">Ooops!</Form.Control.Feedback>
              </Form.Group>

            </Form.Row>
            <br />
            <h3>Optional</h3>
            <p className="text-muted">We need your address if you are chosing Delivery</p>

            <Form.Row>
              <Form.Group as={Col} md="12">
                <Form.Label>Address Line 1</Form.Label>
                <Form.Control type="text" placeholder="Address" name="address" onChange={updateState} />
              </Form.Group>

              <Form.Group as={Col} md="12">
                <Form.Label>Address Line 2</Form.Label>
                <Form.Control type="text" placeholder="Address 2" name="address2" onChange={updateState} />
              </Form.Group>

              <Form.Group as={Col} md="4">
                <Form.Label>City</Form.Label>
                <Form.Control type="text" placeholder="City" name="city" onChange={updateState} />
              </Form.Group>

              <Form.Group as={Col} md="4">
                <Form.Label>State</Form.Label>
                <Form.Control type="text" placeholder="State" name="state" onChange={updateState} />
              </Form.Group>

              <Form.Group as={Col} md="4">
                <Form.Label>Zip Code</Form.Label>
                <Form.Control type="number" placeholder="Zip" name="zip" onChange={updateState} />
              </Form.Group>

            </Form.Row>
            <button type="submit" className='btn btn-primary'>Next</button>
          </Form>
        </div>
      );
    case 1:
      return (
        <div>
          <Row>
            <Col>
              <div><img className='logo mb-3' alt={logo} src={logo}></img></div>
            </Col>
          </Row>
          <Row>
            <Col className='text-center mb-4'>
              <h1>Finish</h1>
            </Col>
          </Row>

          <Row className='mb-4'>

            <Col xs={4}>
              <div className='White'></div>
              <div className="inputGroup">
                <input id="radio1" type="radio" name="finishColor" value="White Paint" onChange={updateState} />
                <label htmlFor="radio1">White</label>
              </div>
            </Col>

            <Col xs={4}>
              <div className='Grey'></div>
              <div className="inputGroup">
                <input id="radio2" type="radio" name="finishColor" value="Grey Paint" onChange={updateState} />
                <label htmlFor="radio2">Grey</label>
              </div>
            </Col>

            <Col xs={4}>
              <div className='Easter'></div>
              <div className="inputGroup">
                <input id="radio3" type="radio" name="finishColor" value="Easter Blue Paint" onChange={updateState} />
                <label htmlFor="radio3">Easter</label>
              </div>
            </Col>
          </Row>
          <h1 className='text-center mb-4'>Stains</h1>
          <Row className="mb-5">

            <Col xs={4}>
              <div className='White-Stain'></div>
              <div className="inputGroup">
                <input id="radio4" type="radio" name="finishColor" value="White Stain" onChange={updateState} />
                <label htmlFor="radio4">White</label>
              </div>
            </Col>

            <Col xs={4}>
              <div className='Grey-Stain'></div>
              <div className="inputGroup">
                <input id="radio5" type="radio" name="finishColor" value="Grey Stain" onChange={updateState} />
                <label htmlFor="radio5">Grey</label>
              </div>
            </Col>

            <Col xs={4}>
              <div className='Medium'></div>
              <div className="inputGroup">
                <input id="radio6" type="radio" name="finishColor" value="Medium Brown Stain" onChange={updateState} />
                <label htmlFor="radio6">M-Brown</label>
              </div>
            </Col>
          </Row>
          <button className='btn' onClick={handleBack}>Back</button>
          <button type="submit" disabled={!(state.finishColor)} onClick={handleNext} className='btn btn-primary'>Next</button>
        </div>
      );
    case 2:
      return (
        <div>
          <Row>
            <Col>
              <div><img className='logo mb-3' alt={logo} src={logo}></img></div>
            </Col>
          </Row>
          <Row>
            <Col className='text-center mb-4'>
              <h1>Door Design</h1>
            </Col>
          </Row>
          <p className='text-center mb-5'>All our doors are made out of high grade cabinet pine</p>
          <Row className='mb-4'>

            <Col xs={4}>
              <div className='Arrow'></div>
              <div className="inputGroup">
                <input id="radio1" type="radio" name="doorDesign" value="Arrow Door" onChange={updateState} />
                <label htmlFor="radio1">Arrow</label>
              </div>
            </Col>

            <Col xs={4}>
              <div className='Chevron'></div>
              <div className="inputGroup">
                <input id="radio2" type="radio" name="doorDesign" value="Chevron Door" onChange={updateState} />
                <label htmlFor="radio2">Chevron</label>
              </div>
            </Col>

            <Col xs={4}>
              <div className='Multiple'></div>
              <div className="inputGroup">
                <input id="radio3" type="radio" name="doorDesign" value="Multiple X Door" onChange={updateState} />
                <label htmlFor="radio3">Multiple X</label>
              </div>
            </Col>
          </Row>

          <Row className='mb-4'>

            <Col xs={6}>
              <div className='Curved'></div>
              <div className="inputGroup">
                <input id="radio4" type="radio" name="doorDesign" value="Curved Door" onChange={updateState} />
                <label htmlFor="radio4">Curved</label>
              </div>
            </Col>

            <Col xs={6}>
              <div className='Paneled'></div>
              <div className="inputGroup">
                <input id="radio5" type="radio" name="doorDesign" value="Paneled Door" onChange={updateState} />
                <label htmlFor="radio5">Paneled</label>
              </div>
            </Col>
          </Row>
          <button className='btn' onClick={handleBack}>Back</button>
          <button type="submit" disabled={!(state.doorDesign)} onClick={handleNext} className='btn btn-primary'>Next</button>
        </div>
      );
    case 3:
      return (
        <div>
          <Row>
            <Col>
              <div><img className='logo mb-3' alt={logo} src={logo}></img></div>
            </Col>
          </Row>
          <Row>
            <Col className='text-center mb-4'>
              <h1>Barn Door Kit</h1>
            </Col>
          </Row>
          <Row className='mb-4'>

            <Col xs={4}>
              <div className='J'></div>
              <div className="inputGroup">
                <input id="radio1" type="radio" name="doorKit" value="J Shape Hanger" onChange={updateState} />
                <label htmlFor="radio1">J Shape</label>
              </div>
            </Col>

            <Col xs={4}>
              <div className='Rhombic'></div>
              <div className="inputGroup">
                <input id="radio2" type="radio" name="doorKit" value="Rhombic Shape Hanger" onChange={updateState} />
                <label htmlFor="radio2">Rhombic</label>
              </div>
            </Col>

            <Col xs={4}>
              <div className='Big'></div>
              <div className="inputGroup">
                <input id="radio3" type="radio" name="doorKit" value="Big Wheel Hanger" onChange={updateState} />
                <label htmlFor="radio3">Big Wheel</label>
              </div>
            </Col>
          </Row>
          <button className='btn' onClick={handleBack}>Back</button>
          <button type="submit" disabled={!(state.doorKit)} onClick={handleNext} className='btn btn-primary'>Next</button>
        </div>
      );
    case 4:
      return (
        <div>
          <Row>
            <Col>
              <div><img className='logo mb-3' alt={logo} src={logo}></img></div>
            </Col>
          </Row>
          <Row>
            <Col className='text-center mb-4'>
              <h1>Handles</h1>
            </Col>
          </Row>
          <Row className='mb-4'>

            <Col xs={4}>
              <div className='Square'></div>
              <div className="inputGroup">
                <input id="radio1" type="radio" name="handle" value="Square" onChange={updateState} />
                <label htmlFor="radio1">Square</label>
              </div>
            </Col>

            <Col xs={4}>
              <div className='Round'></div>
              <div className="inputGroup">
                <input id="radio2" type="radio" name="handle" value="Round" onChange={updateState} />
                <label htmlFor="radio2">Round</label>
              </div>
            </Col>

            <Col xs={4}>
              <div className='Latch'></div>
              <div className="inputGroup">
                <input id="radio3" type="radio" name="handle" value="Round with Latch" onChange={updateState} />
                <label htmlFor="radio3">With Latch</label>
              </div>
            </Col>
          </Row>
          <button className='btn' onClick={handleBack}>Back</button>
          <button type="submit" disabled={!(state.handle)} onClick={handleNext} className='btn btn-primary'>Next</button>
        </div>
      );

    case 5:
      return (
        <div>
          <Row>
            <Col>
              <div><img className='logo mb-3' alt={logo} src={logo}></img></div>
            </Col>
          </Row>
          <Row>
            <Col className='text-center mt-3 mb-4'>
              <h1>Preferences</h1>
            </Col>
          </Row>
          <Row className='mb-4'>
            <Col>
              <div className="inputGroup">
                <input id="radio1" type="radio" name="installOrDelivery" value='Installation' onChange={updateState} />
                <label htmlFor="radio1">Install</label>
              </div>
            </Col>
            <h3>Or</h3>
            <Col>
              <div className="inputGroup">
                <input id="radio2" type="radio" name="installOrDelivery" value='Delivery' onChange={updateState} />
                <label htmlFor="radio2">Delivery</label>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <h3 className='text-center mt-4'>Dimensions ?</h3>
              <p className='text-center'><span className="text-muted">(Optional)</span></p>
            </Col>
          </Row>
          <Row>
            <Col md={{ span: 6, offset: 3 }}>
              <Form>
                <Form.Row>
                  <Form.Group as={Col} xs="6">
                    <Form.Label>Height (Inches):</Form.Label>
                    <Form.Control required type="number" name="dimensionsH" onChange={updateState} />
                  </Form.Group>
                  <Form.Group as={Col} xs="6">
                    <Form.Label>Width (Inches):</Form.Label>
                    <Form.Control required type="number" name="dimensionsW" onChange={updateState} />
                  </Form.Group>
                </Form.Row>
              </Form>
            </Col>
          </Row>
          <button className='btn' onClick={handleBack}>Back</button>
          <button type="submit" onClick={handleNext} className='btn btn-primary'>Next</button>
        </div>
      );

    case 6:
      return (
        <Form className='text-center mb-5' onSubmit={handleNext}>
          <Row>
            <Col>
              <div><img className='logo mb-3' alt={logo} src={logo}></img></div>
            </Col>
          </Row>
          <Row>
            <Col className='text-center mb-4'>
              <h1>Review</h1>
            </Col>
          </Row>
          <Row>
            <Col xs={6}>
              <h3 className='caption'>Your Name:</h3><p>{state.firstName} {state.lastName}</p>
              <h3 className='caption'>Email:</h3><p>{state.email}</p>
              <h3 className='caption'>Phone Number:</h3><p>{state.phoneNumber}</p>
              <h3 className='caption'>Address:</h3><p>{state.address} {state.address2} {state.city} {state.state} {state.zip} </p>
            </Col>

            <Col xs={6}>
              <h3 className='caption'>Dimensions:</h3>
              <h5>Width :</h5> <p>{state.dimensionsW} In</p>
              <h5>Height :</h5> <p>{state.dimensionsH} In</p>
            </Col>

          </Row>
          <hr />
          <Row className='mt-4'>
            <Col xs={3}>
              <h3 className='caption'>Finish:</h3><p>{state.finishColor}</p>
            </Col>

            <Col xs={3}>
              <h3 className='caption'>Design:</h3><p>{state.doorDesign}</p>
            </Col>

            <Col xs={3}>
              <h3 className='caption'>Kit:</h3><p>{state.doorKit}</p>
            </Col>

            <Col xs={3}>
              <h3 className='caption'>Handle:</h3><p>{state.handle}</p>
            </Col>
          </Row>
          <button type='submit' className='btn btn-success' onClick={handleNext}>Finish</button>
        </Form>
      );

    default:
      return (
        <h2>Nothing to display</h2>
      );
    }
  }

  // STEPPER FROM MATERIAL UI



  return (
    <Container>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
            <StepContent>
              {getStepContent(index)}
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} >
          <Typography>All steps completed - you&apos;re finished</Typography>
        </Paper>
      )}
    </Container>
  );
}