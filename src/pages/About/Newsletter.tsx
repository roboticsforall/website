import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Header } from "@/components/Header";
import { NewsCard } from "@/components/About/NewsCard";
import { LongButton } from "@/components/LongButton";
import headerBlobYellow from "@/media/HeaderBlobs/yellow.png"; // add correct image here
import { SubmitButton } from "@/components/SubmitButton";
import newsletterJSON from "@/posts/newsletters.json";

import { ColorThemes } from "@/colors";

export const Newsletter: React.FC = () => {

	const positionsTitle: React.CSSProperties = {
		fontFamily: "Oswald-Medium",
		textAlign: "center",
	  };

	return (
		<>
			<Header
				headerTextColor={ColorThemes.mainYellow}
				image={headerBlobYellow}
				title={"Read more about our work!"}
				description={
					"Read through our monthly newsletter to learn more about our work!"
				}
			/>
			<Container>
				<Row>
					<h3 className = "mt-4">
						Read through our newsletters month by month down below.
          			</h3>
				</Row>
				<br />
				<Row>
					{newsletterJSON.newsletters_list.slice(0, 4).map((newsletter, i) => (
						<Col key={i} md>
							<NewsCard
								title={newsletter.date}
								file={newsletter.file_path.replace("/public", "")}
							/>
							<br />
						</Col>
					))}
				</Row>

				{/* Read Previous News Button */}
				<LongButton
					title={"Read Previous Newsletters"}
					location="/about/pastnewsletter"
				/>
				<br></br>
				<br></br>
				<Row>
					<h2 style={positionsTitle}>Subscribe for Updates!</h2>
					<iframe height = "1000vh" scrolling="yes" src="https://roboticsforall.us3.list-manage.com/subscribe/post?u=3ef87e40741b0c3fadf90e578&amp;id=0ec3a22201"></iframe>
				</Row>
				<br></br>
				<br></br>
			</Container>
		</>
	);
};
