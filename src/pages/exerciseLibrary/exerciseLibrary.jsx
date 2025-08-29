import styles from "./ExerciseLibrary.module.css";
import { MainContentCard } from "../../components/mainContentCard/MainContentCard.jsx";
import { EXERCISES } from "../../constants/exercises.js";
import { Table } from "../../components/Table/Table.jsx";
import { Button } from "../../components/button/Button.jsx";
import { InputField } from "../../components/inputField/InputField.jsx";
import { MainContentWrapper } from "../../components/mainContentWrapper/MainContentWrapper.jsx";
import { PageControls } from "../../components/pageControls/PageControls.jsx";
import { SelectField } from "../../components/selectField/SelectField.jsx";
import { InputWrapper } from "../../components/InputWrapper/InputWrapper.jsx";
import { useNavigate } from "react-router-dom";

const EXERCISE_FILTER_OPTIONS = [
  {
    value: "filter-exercises",
    name: "Filter exercises",
  },
  {
    value: "bodypart",
    name: "Body part",
  },
  {
    value: "primary-muscle",
    name: "Primary muscle",
  },
  {
    value: "movement",
    name: "Movement",
  },
];

export function ExerciseLibrary() {
  const navigate = useNavigate();

  return (
    <MainContentCard
      title="exercise library"
      flexDirection="column"
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
        <InputWrapper width="sm" direction="row">
          <InputField
            type="text"
            id="search-exercise"
            placeholder="Search exercise"
            name="search-exercise"
          />
        </InputWrapper>
        <InputWrapper width="sm" direction="row">
          <SelectField
            name="type"
            id="exercise-type"
            options={EXERCISE_FILTER_OPTIONS}
            direction="row"
          />
        </InputWrapper>
      </PageControls>
      <MainContentWrapper>
        <Table data={EXERCISES} />
      </MainContentWrapper>
    </MainContentCard>
  );
}
