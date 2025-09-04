import styles from "./NewClient.module.css";
import { MainContentCard } from "../../components/mainContentCard/MainContentCard.jsx";
import { Card } from "../../components/uiCard/Card.jsx";
import { InputWrapper } from "../../components/InputWrapper/InputWrapper.jsx";
import { InputField } from "../../components/inputFields/InputField.jsx";
import { Barbell, XCircle } from "@phosphor-icons/react";
import { Avatar } from "../../components/avatar/Avatar.jsx";
import { Button } from "../../components/button/Button.jsx";

export function NewClient() {
  return (
    <MainContentCard flexDirection="row" alignItems="" title="Add new client">
      <div className={styles["new-client__container"]}>
        <form className={styles["new-client__form"]} action="">
          <header>
            <h2>Basic client details</h2>
            <XCircle size={24} />
          </header>
          <div className={styles["head-coach__controls"]}>
            <div>
              <InputWrapper
                id="head-coach"
                label="Head coach"
                direction="column"
                width="md"
              >
                <InputField
                  type="text"
                  id="head-coach"
                  name="head-coach"
                  placeholder="Sjoerd Jansz"
                />
              </InputWrapper>
            </div>
            <div className={styles.coach}>
              <Avatar size="55px" alt="Sjoerd Jansz" />
              <span>Sjoerd Jansz</span>
            </div>
          </div>
          <div className={styles["head-coach__content-wrapper"]}>
            <span>
              <Barbell size={20} />
            </span>
            <p>
              The head coach is the trainer responsible for the client’s
              programming and primary coaching. In most cases, the head coach is
              also the one who works with the client most frequently. You can
              always change this later.
            </p>
          </div>
          <hr />
          <div className={styles["form-elements"]}>
            <InputWrapper
              id="first-name"
              label="First name"
              direction="column"
              width="full"
            >
              <InputField
                type="text"
                id="first-name"
                name="first-name"
                placeholder="Hank"
              />
            </InputWrapper>
            <InputWrapper
              id="last-name"
              label="Last name"
              direction="column"
              width="full"
            >
              <InputField
                type="text"
                id="last-name"
                name="last-name"
                placeholder="the Tank"
              />
            </InputWrapper>
          </div>
          <div className={styles["form-elements"]}>
            <InputWrapper
              id="email"
              label="E-mail"
              direction="column"
              width="full"
            >
              <InputField
                type="email"
                id="email"
                name="email"
                placeholder="hankthetank@fitness.com"
              />
            </InputWrapper>

            <InputWrapper
              id="phone"
              label="Phone"
              direction="column"
              width="full"
            >
              <InputField
                type="phone"
                id="phone"
                name="phone"
                placeholder="0612345678"
              />
            </InputWrapper>
          </div>
          <Button
            type="submit"
            label="Add client and start coaching"
            size="md"
            fluid={true}
            variant="primary-cta"
          />
        </form>
      </div>
    </MainContentCard>
  );
}
