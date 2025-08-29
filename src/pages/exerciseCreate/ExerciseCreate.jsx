import styles from "./ExerciseCreate.module.css";
import { MainContentCard } from "../../components/mainContentCard/MainContentCard.jsx";
import { PageControls } from "../../components/pageControls/PageControls.jsx";
import { MainContentWrapper } from "../../components/mainContentWrapper/MainContentWrapper.jsx";
import { InputWrapper } from "../../components/InputWrapper/InputWrapper.jsx";
import { InputField } from "../../components/inputField/InputField.jsx";
import { SelectField } from "../../components/selectField/SelectField.jsx";
import { Textarea } from "../../components/inputField/Textarea.jsx";

export function ExerciseCreate() {
  return (
    <MainContentCard
      title="Create new exercise"
      flexDirection="column"
      actions={"een of andere message component"}
    >
      <MainContentWrapper>
        <form action="" className={styles["create-exercise-form"]}>
          <fieldset className={styles["create-exercise-form__info"]}>
            <legend>Information</legend>
            <InputWrapper width="sm">
              <InputField
                type="text"
                id="exercise-name"
                name="exercise name"
                label="Exercise name"
                required={true}
              />
            </InputWrapper>
            <InputWrapper width="sm">
              <SelectField
                name="body part"
                id="body-part"
                label="Body part"
                options={[]}
                required={true}
              />
            </InputWrapper>
            <InputWrapper width="sm">
              <SelectField
                name="movement"
                id="movement"
                label="Movement"
                options={[]}
                required={true}
              />
            </InputWrapper>
          </fieldset>

          <fieldset>
            <legend>Anatomy</legend>
            <InputWrapper width="sm">
              <SelectField
                name="primary muscle"
                id="primary-muscle"
                label="Primary muscle"
                options={[]}
                required={true}
              />
            </InputWrapper>
            <InputWrapper width="sm">
              <SelectField
                name="secondary muscles"
                id="secondary-muscles"
                label="Secondary muscles"
                options={[]}
                required={true}
              />
            </InputWrapper>
            <InputWrapper width="sm">
              <SelectField
                name="Joints"
                id="joints"
                label="Joints"
                options={[]}
              />
            </InputWrapper>
          </fieldset>

          <fieldset className={styles["create-exercise__other"]}>
            <legend>Other</legend>
            <InputWrapper width="sm" direction="row">
              <InputField
                type="range"
                label="Systemic load"
                id="systemic-load"
                name="systemic load"
                min={0}
                max={5}
              />{" "}
            </InputWrapper>

            <span>5</span>
            <p>
              A higher systemic load score indicates more strain on the body.
            </p>
            <InputWrapper width="sm">
              <InputField
                type="text"
                id="exercise-name"
                name="exercise name"
                label="Exercise name"
                required={true}
              />
            </InputWrapper>
            <InputWrapper width="full">
              <Textarea
                name="instructions"
                id="instructions"
                label="Instructions"
                cols={20}
                placeholder="Add instructions about how to perform the exercise."
              />
            </InputWrapper>
          </fieldset>
        </form>
      </MainContentWrapper>
    </MainContentCard>
  );
}
