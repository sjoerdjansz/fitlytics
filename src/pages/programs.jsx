import { MainContentCard } from "../components/mainContentCard/MainContentCard.jsx";
import { PageControls } from "../components/pageControls/PageControls.jsx";

export function Programs() {
  return (
    <MainContentCard title="programs" flexDirection="column">
      <PageControls></PageControls>

      {/*  main content here */}
    </MainContentCard>
  );
}
