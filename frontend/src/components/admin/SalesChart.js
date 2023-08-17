import React, { Component } from "react";
import { Card, Col, Nav, Navbar, Row } from "react-bootstrap";
import "./styles.css";

export default class SalesChart extends Component {
	render() {
		return (
			<div>
				<p className="text-display-xs-bold pt-4">Revenua</p>
				{/* <Card bg="light" variant="light">
					<Card.Body className="d-flex">
						<Navbar>
							<Nav.Link className="m-0 line-nav">Based on Movie</Nav.Link>
							{/* <Nav.Link className="m-0 line-nav">Based on Location</Nav.Link> 
						</Navbar>
					</Card.Body>
				</Card> */}
				<Card className="text-left" bg="light
				
				" variant="light" style={{ maxWidth: "250px" }}>
					<Card.Body className="d-flex justify-content-start align-items-center p-2">
						<Navbar>
							<Nav.Link className="m-0 line-nav">Based on Movie</Nav.Link>
							{/* <Nav.Link className="m-0 line-nav">Based on Location</Nav.Link> */}
						</Navbar>
					</Card.Body>
				</Card>

				<Row className="pt-4 pb-5">
					<Col md={4}>
						<Card>
							<Card.Body>
								<p>Spider-Man: Homecoming</p>
		
								<Navbar className="p-0">
									<div className="row m-0">
										<div className="col text-center line-nav" style={{ color: "#6699FF", paddingRight: "20px", paddingLeft: "20px", paddingTop: "10px", paddingBottom: "10px" }}>
											Purchases
										</div>
										<div className="col text-center line-nav" style={{ color: "black", paddingRight: "20px", paddingLeft: "20px", paddingTop: "10px", paddingBottom: "10px" }}>
											.....
										</div>
									</div>
									<div className="row m-0">
										<div className="col text-center line-nav" style={{ color: "#6699FF", paddingRight: "20px", paddingLeft: "20px", paddingTop: "10px", paddingBottom: "10px" }}>
											Revenua
										</div>
										<div className="col text-center line-nav" style={{ color: "black", paddingRight: "20px", paddingLeft: "20px", paddingTop: "10px", paddingBottom: "10px" }}>
											....
										</div>
									</div>
								</Navbar>




							</Card.Body>
						</Card>
					</Col>
					{/* ==== */}
					<Col md={4}>
						<Card>
							<Card.Body>
								<p>Master</p>
		
								<Navbar className="p-0">
									<div className="row m-0">
										<div className="col text-center line-nav" style={{ color: "#6699FF", paddingRight: "20px", paddingLeft: "20px", paddingTop: "10px", paddingBottom: "10px" }}>
											Purchases
										</div>
										<div className="col text-center line-nav" style={{ color: "black", paddingRight: "20px", paddingLeft: "20px", paddingTop: "10px", paddingBottom: "10px" }}>
											.....
										</div>
									</div>
									<div className="row m-0">
										<div className="col text-center line-nav" style={{ color: "#6699FF", paddingRight: "20px", paddingLeft: "20px", paddingTop: "10px", paddingBottom: "10px" }}>
											Revenua
										</div>
										<div className="col text-center line-nav" style={{ color: "black", paddingRight: "20px", paddingLeft: "20px", paddingTop: "10px", paddingBottom: "10px" }}>
											....
										</div>
									</div>
								</Navbar>




							</Card.Body>
						</Card>
					</Col>
					{/* ===== */}
					<Col md={4}>
						<Card>
							<Card.Body>
								<p>Doctor Strange</p>

								<Navbar className="p-0">
									<div className="row m-0">
										<div className="col text-center line-nav" style={{ color: "#6699FF", paddingRight: "20px", paddingLeft: "20px", paddingTop: "10px", paddingBottom: "10px" }}>
											Purchases
										</div>
										<div className="col text-center line-nav" style={{ color: "black", paddingRight: "20px", paddingLeft: "20px", paddingTop: "10px", paddingBottom: "10px" }}>
											.....
										</div>
									</div>
									<div className="row m-0">
										<div className="col text-center line-nav" style={{ color: "#6699FF", paddingRight: "20px", paddingLeft: "20px", paddingTop: "10px", paddingBottom: "10px" }}>
											Revenua
										</div>
										<div className="col text-center line-nav" style={{ color: "black", paddingRight: "20px", paddingLeft: "20px", paddingTop: "10px", paddingBottom: "10px" }}>
											....
										</div>
									</div>
								</Navbar>




							</Card.Body>
						</Card>
					</Col>
					
				</Row>
				{/* ----------------------------------------- */}
				<Row className="pt-4 pb-5">
					<Col md={4}>
						<Card>
							<Card.Body>
								<p>Maze Runner</p>
		
								<Navbar className="p-0">
									<div className="row m-0">
										<div className="col text-center line-nav" style={{ color: "#6699FF", paddingRight: "20px", paddingLeft: "20px", paddingTop: "10px", paddingBottom: "10px" }}>
											Purchases
										</div>
										<div className="col text-center line-nav" style={{ color: "black", paddingRight: "20px", paddingLeft: "20px", paddingTop: "10px", paddingBottom: "10px" }}>
											.....
										</div>
									</div>
									<div className="row m-0">
										<div className="col text-center line-nav" style={{ color: "#6699FF", paddingRight: "20px", paddingLeft: "20px", paddingTop: "10px", paddingBottom: "10px" }}>
											Revenua
										</div>
										<div className="col text-center line-nav" style={{ color: "black", paddingRight: "20px", paddingLeft: "20px", paddingTop: "10px", paddingBottom: "10px" }}>
											....
										</div>
									</div>
								</Navbar>




							</Card.Body>
						</Card>
					</Col>
					{/* ==== */}
					<Col md={4}>
						<Card>
							<Card.Body>
								<p>Maze Runner</p>
		
								<Navbar className="p-0">
									<div className="row m-0">
										<div className="col text-center line-nav" style={{ color: "#6699FF", paddingRight: "20px", paddingLeft: "20px", paddingTop: "10px", paddingBottom: "10px" }}>
											Purchases
										</div>
										<div className="col text-center line-nav" style={{ color: "black", paddingRight: "20px", paddingLeft: "20px", paddingTop: "10px", paddingBottom: "10px" }}>
											.....
										</div>
									</div>
									<div className="row m-0">
										<div className="col text-center line-nav" style={{ color: "#6699FF", paddingRight: "20px", paddingLeft: "20px", paddingTop: "10px", paddingBottom: "10px" }}>
											Revenua
										</div>
										<div className="col text-center line-nav" style={{ color: "black", paddingRight: "20px", paddingLeft: "20px", paddingTop: "10px", paddingBottom: "10px" }}>
											....
										</div>
									</div>
								</Navbar>




							</Card.Body>
						</Card>
					</Col>
					{/* ===== */}
				
					
				</Row>

				{/* <Card className="text-left" bg="light
				
				" variant="light" style={{ maxWidth: "250px" }}>
					<Card.Body className="d-flex justify-content-start align-items-center p-2">
						<Navbar>
							<Nav.Link className="m-0 line-nav">Based on Time</Nav.Link>
							{/* <Nav.Link className="m-0 line-nav">Based on Location</Nav.Link> 
						</Navbar>
					</Card.Body>
				</Card> */}
			</div>
		);
	}
}