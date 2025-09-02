import styles from "./Library.module.css";
import { MainContentCard } from "../../components/mainContentCard/MainContentCard.jsx";
import workoutImage from "../../assets/workout-image.jpg";
import programImage from "../../assets/program-image.jpg";
import exerciseImage from "../../assets/exercise-image.jpg";
import { Button } from "../../components/button/Button.jsx";
import { Link, useNavigate } from "react-router-dom";

function LibraryCard({ image, title, description }) {
  const navigate = useNavigate();
  return (
    <Link to={title.toLowerCase()} className={styles["library-card"]}>
      <div className={styles["image-wrapper"]}>
        <img src={image} alt={`${title} library card image`} />
      </div>
      <div className={styles["card-content"]}>
        <header className={styles.copy}>
          <h2>{title}</h2>
          <p>{description}</p>
        </header>

        <div className={styles["card-meta"]}>
          <span>
            <strong>248</strong> {title.toLowerCase()}
          </span>
          <span>
            <strong>12</strong> updated this week
          </span>
        </div>

        <div className={styles["action-wrapper"]}>
          <Button
            type="button"
            label={`View all ${title.toLowerCase()}`}
            size="md"
            fluid={true}
            variant="tertiary-cta"
            onClick={() => navigate(title.toLowerCase())}
          />
          <Button
            type="button"
            label={`New ${title.toLowerCase().slice(0, -1)}`}
            size="md"
            fluid={true}
            variant="primary-cta"
            onClick={() => navigate(title.toLowerCase())}
          />
        </div>
      </div>
    </Link>
  );
}

export function Library() {
  return (
    <MainContentCard
      title="Library"
      flexDirection="column"
      alignItems="flex-start"
    >
      <div className={styles["library-container"]}>
        <LibraryCard
          title="Exercises"
          image={exerciseImage}
          description={
            "Manage a searchable exercise library: create, edit, delete, tag, and add media. Store muscles, equipment, cues, and progressions to pick the right variant fast."
          }
        />
        <LibraryCard
          title="Workouts"
          image={workoutImage}
          description={
            "Build workouts from exercises with sets/reps, tempo, rest, and notes. Save as templates and assign to programs or directly to clients."
          }
        />
        <LibraryCard
          title="Programs"
          image={programImage}
          description={
            "Create goal-driven programs built from workouts. Set duration and weekly schedule, assign to clients, and update versions without losing history."
          }
        />
      </div>
    </MainContentCard>
  );
}
