import styles from "./clients.module.css";
import { MainContentCard } from "../../components/mainContentCard/MainContentCard.jsx";
import { Button } from "../../components/button/Button.jsx";
import { PageControls } from "../../components/pageControls/PageControls.jsx";
import { InputWrapper } from "../../components/InputWrapper/InputWrapper.jsx";
import { InputField } from "../../components/inputFields/InputField.jsx";
import { SelectField } from "../../components/selectField/SelectField.jsx";
import { DUMMY_FILTER_OPTIONS } from "../../constants/tempMuscles.js";
import { Table } from "../../components/table/Table.jsx";
import { CLIENTS } from "../../constants/clients.js";
import profilePicture from "../../assets/no-profile-image-correct.jpeg";
import { Avatar } from "../../components/avatar/Avatar.jsx";
import { useNavigate } from "react-router-dom";

export function Clients() {
  const navigate = useNavigate();

  const clientNavItems = [
    {
      name: "Details",
      path: "/edit-profile",
      showInNav: true,
    },
    {
      name: "Password",
      path: "/change-password",
      showInNav: true,
    },
    {
      name: "notifications",
      path: "/notifications",
      showInNav: true,
    },
    {
      name: "privacy policy",
      path: "/privacy-policy",
      showInNav: true,
    },
  ];

  const clientTableHeaders = [
    {
      name: "ID",
      label: "id",
      sortable: true,
      render: false,
    },
    {
      name: "",
      label: "avatar",
      sortable: false,
      render: true,
    },
    {
      name: "Name",
      label: "fullName",
      sortable: true,
      render: true,
    },

    {
      name: "Client since",
      label: "start-date",
      sortable: true,
      render: true,
    },
    {
      name: "Program",
      label: "current-program",
      sortable: false,
      render: true,
    },
    {
      name: "Compliance",
      label: "compliance",
      sortable: true,
      render: true,
    },
    {
      name: "Trainer",
      label: "trainer",
      sortable: true,
      render: true,
    },
  ];

  const clientsWithAvatar = CLIENTS.map((item) => {
    return {
      ...item,
      fullName: `${item["first-name"]} ${item["last-name"].trim()}`,
      avatar: <Avatar size={40} image={profilePicture} alt="temporary-alt" />,
    };
  });

  //
  const gridColSettings = ["0.75fr", "1.25fr", "1fr", "1fr", "1fr", "1fr"];

  // <aside className={styles["inner-nav"]}>
  //   <ul className={styles["inner-navigation"]}>
  //     {clientNavItems.map((item) => {
  //       if (item.showInNav) {
  //         return <li>{item.name}</li>;
  //       }
  //     })}
  //   </ul>
  // </aside>

  return (
    <MainContentCard
      flexDirection="column"
      alignItems=""
      title="Clients"
      actions={
        <Button
          type="button"
          label="New client"
          size="md"
          variant="primary-cta"
          onClick={() => {
            navigate("new");
          }}
        />
      }
    >
      <PageControls>
        <InputWrapper width="md" direction="row">
          <InputField
            type="text"
            id="search-client"
            placeholder="Search client"
            name="search-client"
          />
        </InputWrapper>

        <InputWrapper width="md" direction="row">
          <SelectField
            name="client"
            id="client-type"
            options={DUMMY_FILTER_OPTIONS}
            direction="row"
            baseValueName="Filter by"
          />
        </InputWrapper>
      </PageControls>
      <Table
        headers={clientTableHeaders}
        data={clientsWithAvatar}
        gridColumns={gridColSettings}
      />
    </MainContentCard>
  );
}
