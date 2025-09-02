import styles from "./workouts.module.css";
import { MainContentCard } from "../../components/mainContentCard/MainContentCard.jsx";
import { PageControls } from "../../components/pageControls/PageControls.jsx";
import { Button } from "../../components/button/Button.jsx";
import { InputWrapper } from "../../components/InputWrapper/InputWrapper.jsx";
import { InputField } from "../../components/inputFields/InputField.jsx";
import { SelectField } from "../../components/selectField/SelectField.jsx";
import { Table } from "../../components/table/Table.jsx";
import { DUMMY_FILTER_OPTIONS } from "../../constants/tempMuscles.js";
import { WORKOUTS } from "../../constants/workouts.js";
import { ROUTES } from "../../constants/routes.jsx";

export function Workouts() {
  const workoutTableHeaders = [
    {
      name: "ID",
      label: "id",
      sortable: true,
      render: false,
    },
    {
      name: "Name",
      label: "name",
      sortable: true,
      render: true,
    },
    {
      name: "Type",
      label: "type",
      sortable: true,
      render: true,
    },
    {
      name: "Exercises",
      label: "exercises",
      sortable: false,
      render: true,
    },
    {
      name: "Programs",
      label: "programs",
      sortable: false,
      render: true,
    },
    {
      name: "Assigned to",
      label: "assignedTo",
      sortable: false,
      render: true,
    },
  ];

  const gridColSettings = ["1.5fr", "1fr", "1fr", "1fr", "2fr"];

  const libraryChildrenRoutes = ROUTES.find((item) => {
    return item.name === "library";
  });

  return (
    <MainContentCard
      title="workouts"
      flexDirection="column"
      alignItems="stretch"
      urls={libraryChildrenRoutes}
      actions={
        <Button
          variant="primary-cta"
          type="button"
          size="md"
          label="Create workout"
        />
      }
    >
      <PageControls>
        <InputWrapper width="md" direction="row">
          <InputField
            type="text"
            id="search-workout"
            placeholder="Search workout"
            name="search-exercise"
          />
        </InputWrapper>

        <InputWrapper width="md" direction="row">
          <SelectField
            name="type"
            id="exercise-type"
            options={DUMMY_FILTER_OPTIONS}
            direction="row"
          />
        </InputWrapper>
      </PageControls>
      <Table
        data={WORKOUTS}
        headers={workoutTableHeaders}
        gridColumns={gridColSettings}
      />
    </MainContentCard>
  );
}
