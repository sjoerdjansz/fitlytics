import { MainContentCard } from "../components/mainContentCard/MainContentCard.jsx";
import { PageControls } from "../components/pageControls/PageControls.jsx";
import { Button } from "../components/button/Button.jsx";
import { InputWrapper } from "../components/InputWrapper/InputWrapper.jsx";
import { InputField } from "../components/inputFields/InputField.jsx";
import { SelectField } from "../components/selectField/SelectField.jsx";
import { DUMMY_FILTER_OPTIONS } from "../constants/tempMuscles.js";
import { Table } from "../components/Table/Table.jsx";
import { PROGRAMS } from "../constants/programs.js";

export function Programs() {
  const programTableHeaders = [
    {
      name: "ID",
      label: "id",
      sortable: true,
      render: false,
    },
    {
      name: "Created",
      label: "dateCreated",
      sortable: true,
      render: false,
    },
    {
      name: "Name",
      label: "programName",
      sortable: true,
      render: true,
    },
    {
      name: "Duration",
      label: "duration",
      sortable: true,
      render: true,
      suffix: " wks",
    },
    {
      name: "Workouts",
      label: "workoutsPerWeek",
      sortable: true,
      render: true,
      suffix: " / wk",
    },
    {
      name: "Active Clients",
      label: "activeClients",
      sortable: true,
      render: true,
    },
    {
      name: "Completed",
      label: "completed",
      sortable: true,
      render: true,
    },
    {
      name: "Compliance",
      label: "compliance",
      sortable: true,
      render: true,
      suffix: "%",
    },
  ];

  const gridColSettings = ["2fr", "1fr", "1fr", "1fr", "1fr", "1fr"];

  return (
    <MainContentCard
      title="programs"
      flexDirection="column"
      alignItems="stretch"
      actions={
        <Button
          variant="primary-cta"
          size="md"
          label="Create program"
          type="button"
        />
      }
    >
      <PageControls>
        <InputWrapper width="md" direction="row">
          <InputField
            type="text"
            id="search-program"
            placeholder="Search program"
            name="search-program"
          />
        </InputWrapper>
        <InputWrapper width="md" direction="row">
          <SelectField
            name="type"
            id="program-type"
            options={DUMMY_FILTER_OPTIONS}
            direction="row"
          />
        </InputWrapper>
      </PageControls>

      <Table
        data={PROGRAMS}
        headers={programTableHeaders}
        gridColumns={gridColSettings}
      />
    </MainContentCard>
  );
}
