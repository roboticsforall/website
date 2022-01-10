import React from "react";
import { Header } from "@/components/Header";
import headerBlobYellow from "@/media/HeaderBlobs/yellow.png"; // add correct image here
import "react-multi-carousel/lib/styles.css";
import bmInfoJSON from "@/posts/board_members.json";
import ccInfoJSON from "@/posts/curriculum_committee.json";
import adInfoJSON from "@/posts/assistant_directors.json";
import pcInfoJSON from "@/posts/pub_committee.json";

import { MeetTheTeamCard } from "@/components/About/MeetTheTeamCard";

import { ColorThemes } from "@/colors";

import "../../index.css";

export const MeetTheTeam: React.FC = () => {
	const yellowRow = {
		backgroundColor: ColorThemes.lightYellow,
	};
	const greenRow = {
		backgroundColor: ColorThemes.lightGreen,
	};
	const blueRow = {
		backgroundColor: ColorThemes.lightBlue,
	};
	const orangeRow = {
		backgroundColor: ColorThemes.lightOrange,
	};

	return (
		<>
			<Header
				headerTextColor={ColorThemes.mainYellow}
				image={headerBlobYellow}
				title={"Get to Know our Team!"}
				description={"Get to know the faces behind Robotics for All!"}
			/>
			<br />
			<h1 className="header" style={{ color: ColorThemes.mainOrange }}>
				BOARD OF DIRECTORS
			</h1>
			<div style={yellowRow}>
				<MeetTheTeamCard
					infoJSON={bmInfoJSON.board_members_list}
					backgroundColor={ColorThemes.mainYellow}
					color={ColorThemes.darkYellow}
				></MeetTheTeamCard>
			</div>
			<br />
			<br />
			<h1 className="header" style={{ color: ColorThemes.mainGreen }}>
				EXECUTIVE ASSISTANT DIRECTOR
			</h1>
			<div style={greenRow}>
				<MeetTheTeamCard
					infoJSON={adInfoJSON.assistant_directors_list}
					backgroundColor={ColorThemes.mainGreen}
					color={ColorThemes.darkGreen}
				></MeetTheTeamCard>
			</div>
			<br />
			<br />
			<h1 className="header" style={{ color: ColorThemes.mainBlue }}>
				CURRICULUM COMMITTEE
			</h1>
			<div style={blueRow}>
				<MeetTheTeamCard
					infoJSON={ccInfoJSON.curriculum_committee_list}
					backgroundColor={ColorThemes.mainBlue}
					color={ColorThemes.darkBlue}
				></MeetTheTeamCard>
			</div>

			<br />
			<br />

			<h1 className="header" style={{ color: ColorThemes.mainYellow }}>
				PUBLICITY COMMITTEE
			</h1>
			<div style={orangeRow}>
				<MeetTheTeamCard
					infoJSON={pcInfoJSON.pub_committee}
					backgroundColor={ColorThemes.mainOrange}
					color={ColorThemes.darkOrange}
				></MeetTheTeamCard>
			</div>
		</>
	);
};
