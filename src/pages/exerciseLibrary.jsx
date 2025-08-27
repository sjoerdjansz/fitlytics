import styles from "./ExerciseLibrary.module.css";
import { MainContentCard } from "../components/mainContentCard/MainContentCard.jsx";
import { EXERCISES } from "../data/exercises.js";
import { ExerciseTable } from "../components/exerciseTable/ExerciseTable.jsx";
import { Button } from "../components/button/Button.jsx";
import { InputField } from "../components/inputField/InputField.jsx";

export function ExerciseLibrary() {
  return (
    <MainContentCard title="exercise library" flexDirection="column">
      <section className={styles.exercises}>
        <div className={styles.controls}>
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
        </div>
        <ExerciseTable data={EXERCISES} />
      </section>
    </MainContentCard>
  );
}
