import styles from "./ExerciseCreate.module.css";
import { MainContentCard } from "../../components/mainContentCard/MainContentCard.jsx";
import { InputWrapper } from "../../components/InputWrapper/InputWrapper.jsx";
import { InputField } from "../../components/inputFields/InputField.jsx";
import { SelectField } from "../../components/selectField/SelectField.jsx";
import { Textarea } from "../../components/inputFields/Textarea.jsx";
import { Info, TrashSimple } from "@phosphor-icons/react";
import { RangeSlider } from "../../components/inputFields/RangeSlider.jsx";
import { useState } from "react";
import { Tooltip } from "../../components/Tooltip/Tooltip.jsx";
import { Button } from "../../components/button/Button.jsx";

import profilePicture from "../../assets/profile-picture-sjoerd.jpg";
import hamstrings from "../../assets/bodyparts/hamstrings.svg";
import { Avatar } from "../../components/avatar/Avatar.jsx";
import { Card } from "../../components/uiCard/Card.jsx";
import {
  DUMMY_FILTER_OPTIONS,
  TEMP_MUSCLES,
} from "../../constants/tempMuscles.js";

export function ExerciseCreate() {
  const [systemicLoad, setSystemicLoad] = useState("");

  return (
    <MainContentCard
      title="Create new exercise"
      actions={
        <Button
          type="button"
          label="Delete exercise"
          size="md"
          variant="destructive-cta"
        />
      }
      flexDirection="row"
      alignItems="flex-start"
    >
      <div className={styles["create-exercise"]}>
        <form action="" className={styles["create-exercise-form"]}>
          <fieldset>
            <legend>Information</legend>
            <InputWrapper
              direction="column"
              id="exercise-name"
              label="Exercise name"
              width={"sm"}
            >
              <InputField
                type="text"
                id="exercise-name"
                name="exercise name"
                label="Exercise name"
                required={true}
              />
            </InputWrapper>
            <InputWrapper
              direction="column"
              id="body-part"
              label="Body part"
              width={"sm"}
            >
              <SelectField
                name="body part"
                id="body-part"
                options={DUMMY_FILTER_OPTIONS}
                required={true}
              />
            </InputWrapper>
            <InputWrapper
              direction="column"
              id="movement"
              label="Movement"
              width="sm"
            >
              <SelectField
                name="movement"
                id="movement"
                options={DUMMY_FILTER_OPTIONS}
                required={true}
              />
            </InputWrapper>
          </fieldset>

          <fieldset>
            <legend>Anatomy</legend>
            <InputWrapper
              direction="column"
              id="primary-muscle"
              label="Primary muscle"
              width="sm"
            >
              <SelectField
                name="primary muscle"
                id="primary-muscle"
                options={DUMMY_FILTER_OPTIONS}
                required={true}
              />
            </InputWrapper>
            <InputWrapper
              direction="column"
              id="secondary-muscles"
              label="Secondary muscles"
              width="sm"
            >
              <SelectField
                name="secondary muscles"
                id="secondary-muscles"
                options={DUMMY_FILTER_OPTIONS}
                required={true}
              />
            </InputWrapper>
            <InputWrapper
              direction="column"
              id="joints"
              label="Joints"
              width="sm"
            >
              <SelectField
                name="Joints"
                id="joints"
                options={DUMMY_FILTER_OPTIONS}
              />
            </InputWrapper>
          </fieldset>

          <fieldset>
            <legend>Other</legend>
            <InputWrapper
              direction="column"
              id="systemic-load"
              label="Systemic load"
              icon={<Info size={20} />}
              description={
                <Tooltip message="A higher systemic load score indicates more strain on the body." />
              }
            >
              <RangeSlider
                id="systemic-load"
                name="systemic load"
                min={1}
                max={5}
                width="md"
                value={systemicLoad}
                onChange={(e) => {
                  setSystemicLoad(e.target.value);
                }}
              />
            </InputWrapper>

            <InputWrapper
              direction="column"
              id="video-url"
              label="Video url"
              width="full"
            >
              <InputField type="text" id="video-url" name="video url" />
            </InputWrapper>
            <InputWrapper
              direction="column"
              id="instructions"
              label="Instructions"
              width="full"
            >
              <Textarea
                name="instructions"
                id="instructions"
                cols={20}
                rows={4}
                placeholder="Add instructions about how to perform the exercise."
              />
            </InputWrapper>
          </fieldset>
          <div className={styles["form-footer"]}>
            <Button
              type="submit"
              label="Create exercise"
              size="md"
              variant="success-cta"
            />
            <Button
              type="button"
              label="Cancel"
              size="md"
              variant="tertiary-cta"
            />
          </div>
        </form>
        <aside className={styles["create-exercise-sidebar"]}>
          <Card
            flexDirection="column"
            background={"surface"}
            defaultOpen={true}
          >
            <div className={styles["user-wrapper"]}>
              <Avatar
                size={50}
                alt="sjoerd"
                image={profilePicture}
                position="top"
              />
              <p>Created by Sjoerd</p>
            </div>
          </Card>
          <Card
            flexDirection="column"
            background={"surface"}
            defaultOpen={true}
          >
            {({ open, setOpen }) => (
              <>
                <Card.Header
                  open={open}
                  setOpen={setOpen}
                  title="Secondary muscles"
                  toggle
                ></Card.Header>
                <Card.Body open={open}>
                  <ul className={styles["muscles-list"]}>
                    {TEMP_MUSCLES.map((item) => (
                      <li key={item}>
                        {item}
                        <TrashSimple size={16} color="#f44336" />
                      </li>
                    ))}
                  </ul>
                </Card.Body>
              </>
            )}
          </Card>
          <Card
            flexDirection="column"
            background={"surface"}
            defaultOpen={true}
          >
            {({ open, setOpen }) => (
              <>
                <Card.Header
                  open={open}
                  setOpen={setOpen}
                  title="Joints"
                  toggle
                ></Card.Header>
                <Card.Body open={open}>
                  <ul className={styles["joints-list"]}>
                    {["Glenohumeral", "Olecranon"].map((item) => (
                      <li key={item}>
                        {item}
                        <TrashSimple size={16} color="#f44336" />
                      </li>
                    ))}
                  </ul>
                </Card.Body>
                <Card.Footer open={open}>
                  I am a card footer, woohoo
                </Card.Footer>
              </>
            )}
          </Card>
          <Card
            flexDirection="column"
            background={"surface"}
            defaultOpen={true}
          >
            {({ open, setOpen }) => (
              <>
                <Card.Header
                  open={open}
                  setOpen={setOpen}
                  title="Body part"
                  toggle
                ></Card.Header>
                <Card.Body open={open}>
                  <img
                    className={styles.hamstrings}
                    src={hamstrings}
                    alt="hamstrings"
                  />
                </Card.Body>
              </>
            )}
          </Card>
        </aside>
      </div>
    </MainContentCard>
  );
}
