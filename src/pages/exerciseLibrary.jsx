import styles from "./ExerciseLibrary.module.css";
import { MainContentCard } from "../components/mainContentCard/MainContentCard.jsx";
import { EXERCISES } from "../data/exercises.js";
import { ExerciseTable } from "../components/exerciseTable/ExerciseTable.jsx";
import { Button } from "../components/button/Button.jsx";
import { InputField } from "../components/inputField/InputField.jsx";
import { MainContentWrapper } from "../components/mainContentWrapper/MainContentWrapper.jsx";
import { PageControls } from "../components/pageControls/PageControls.jsx";

export function ExerciseLibrary() {
  return (
    <MainContentCard title="exercise library" flexDirection="column">
      <MainContentWrapper>
        <PageControls>
          <Button
            variant="primary-cta"
            type="button"
            label="add new exercise"
          />
          <InputField
            type="text"
            label="Search exercise"
            id="search-exercise"
            name="search-exercise"
            direction="row"
            width="full"
          />
        </PageControls>
        <ExerciseTable data={EXERCISES} />
      </MainContentWrapper>
    </MainContentCard>
  );
}
