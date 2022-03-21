import React from "react";
import { Container, Row, Image, Col } from "react-bootstrap";
import { createUseStyles } from "react-jss";

import "../../index.css";

export const AboutAffOrgsCard: React.FC<{
	mainColor: string;
	affOrgName: string;
	logo: string;
	affOrgsDescription: string;
	website: string;
	orgAbrv: string;
	linkColor: string;
}> = (props) => {

	const useStyles = createUseStyles({
		link: {
		  composes: "hyperlink text-center",
		  transition: "0.2s",
		  letterSpacing: "0.1em",
		  color: props.linkColor,
		  "&:hover": {
			transition: "0.2s",
			letterSpacing: "0.25em",
			color: props.linkColor,
		  },
		},
	  });


	  const classes = useStyles();

	return (
		<Row className="justify-content-center">
			<Col className="" md={11} lg={11} xl={11}>
				{window.innerWidth >= 768 && (
					<Row>
						<h1
							style={{color: props.mainColor}}
						>
							{props.affOrgName}
						</h1>
					</Row>
				)}
				<Row
					style={{ backgroundColor: props.mainColor + "80", borderRadius: 15 }}
				>
					{window.innerWidth >= 768 ? (
						<Col sm={3} md={3} lg={3} xl={3} className="p-3 center-align">
							<Image fluid className="" src={props.logo} />
						</Col>
					) : (
							<Col>
								<Row className="p-2">
									<Col sm={3} lg={3} md={3} className="center-align">
										<Image fluid src={props.logo} />
									</Col>
									<Col className="center-align">
										<h1
											className="text-center"
											style={{color: props.mainColor}}
										>
											{props.affOrgName}
										</h1>
									</Col>
								</Row>
							</Col>
						)}
					<Col md={5} lg={5} xl={5} className="center-align">
						<p className="text-center">
							{props.affOrgsDescription}
						</p>
					</Col>
					<Col md={4} lg={4} xl={4} className="center-align">
						<a
							rel="noopener noreferrer"
							target="_blank"
							className = {classes.link}
							href={props.website}
						>
							<p>VISIT {props.orgAbrv}</p>
						</a>
					</Col>
				</Row>
			</Col>
		</Row>
	)
}