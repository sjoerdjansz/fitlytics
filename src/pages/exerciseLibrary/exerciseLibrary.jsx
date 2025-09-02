import styles from "./ExerciseLibrary.module.css";
import { MainContentCard } from "../../components/mainContentCard/MainContentCard.jsx";
import { EXERCISES } from "../../constants/exercises.js";
import { Table } from "../../components/Table/Table.jsx";
import { Button } from "../../components/button/Button.jsx";
import { InputField } from "../../components/inputFields/InputField.jsx";
import { PageControls } from "../../components/pageControls/PageControls.jsx";
import { SelectField } from "../../components/selectField/SelectField.jsx";
import { InputWrapper } from "../../components/InputWrapper/InputWrapper.jsx";
import { useNavigate } from "react-router-dom";
import { DUMMY_FILTER_OPTIONS } from "../../constants/tempMuscles.js";

export function ExerciseLibrary() {
  const navigate = useNavigate();

  const exerciseTableHeaders = [
    {
      name: "Name",
      label: "name",
      sortable: true,
      render: true,
    },
    {
      name: "Body part",
      label: "bodyPart",
      sortable: true,
      render: true,
    },
    {
      name: "Primary",
      label: "primaryMuscle",
      sortable: true,
      render: true,
    },
    {
      name: "Secondary",
      label: "secondaryMuscles",
      sortable: false,
      render: true,
    },
    {
      name: "Joints",
      label: "primaryJoints",
      sortable: false,
      render: false,
    },
    {
      name: "Movement",
      label: "movement",
      sortable: true,
      render: true,
    },
    {
      name: "Load",
      label: "systemicLoad",
      sortable: true,
      render: true,
    },
  ];

  return (
    <MainContentCard
      title="exercise library"
      flexDirection="column"
      alignItems="stretch"
      actions={
        <Button
          variant="primary-cta"
          type="button"
          size="md"
          label="Add new exercise"
          onClick={() => {
            navigate("create");
          }}
        />
      }
    >
      <PageControls>
        <InputWrapper width="md" direction="row">
          <InputField
            type="text"
            id="search-exercise"
            placeholder="Search exercise"
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
      <Table data={EXERCISES} headers={exerciseTableHeaders} />
    </MainContentCard>
  );
}
