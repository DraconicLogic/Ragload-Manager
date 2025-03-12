import React from "react";
import { useState } from "react";
import { Ragload } from "../../types";
// @ts-ignore
import Calendar from "react-calendar";
import RagloadTable from "../../components/RagloadTable/RagloadTable";
import CurrentMonthBar from "../../components/CurrentMonthBar/CurrentMonthBar";
import CurrentDayBar from "../../components/CurrentDayBar/CurrentDayBar";
import Toolbar from "../../components/Toolbar/Toolbar";
import Modal from "../../components/Modal/Modal";
import RagloadEntry from "../../components/RagloadEntry/RagloadEntry";
// @ts-ignore

function MonthView({ ragloadState, screenState }) {
	const { ragloads, setRagloads } = ragloadState;
	const { screen, setScreen } = screenState;

	const [modalVisible, setModalVisible] = useState<Boolean>(false);

	function fakeHander() {
		return "handled";
	}

	function handleModalVisability() {
		setModalVisible(!modalVisible);
	}

	return (
		<div id="month-view">
			<div id="month-view__current-month-bar">
				<CurrentMonthBar screenState={{ screen, setScreen }} />
			</div>
			<div id="month-view__calendar-month">
				<Calendar />
			</div>
			<div id="month-view__current-day-bar">
				<CurrentDayBar />
			</div>
			<div id="month-view__ragload-table">
				<RagloadTable ragloads={ragloads} handleRagload={null} />
			</div>
			<div id="month-view__tool-bar">
				<Toolbar
					modalVisibleState={{ modalVisible, setModalVisible }}
					modalHandler={handleModalVisability}
				/>
			</div>
			<Modal
				modalContent={RagloadEntry}
				modalVisibleState={{ modalVisible, setModalVisible }}
				modalHandler={handleModalVisability}
			/>
			{/* <RagloadEntry handlers={fakeHander} screenState={screenState} /> */}
		</div>
	);
}

export default MonthView;
