import styles from "./ExerciseLibrary.module.css";
import { MainContentCard } from "../components/mainContentCard/MainContentCard.jsx";
import { EXERCISES } from "../data/exercises.js";
import { ExerciseTable } from "../components/exerciseTable/ExerciseTable.jsx";

export function ExerciseLibrary() {
  return (
    <MainContentCard title="exercise library" flexDirection="column">
      <section className={styles.exercises}>
        <div className={styles.controls}>
          <button>add exercise</button>
          <input type="text" placeholder="search exercise" />
          <input type="text" placeholder="filter by" />
        </div>
        <ExerciseTable data={EXERCISES} />
      </section>
    </MainContentCard>
  );
}
