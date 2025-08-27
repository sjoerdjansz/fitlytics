import { MainContentCard } from "../components/mainContentCard/MainContentCard.jsx";
import { PageControls } from "../components/pageControls/PageControls.jsx";
import { MainContentWrapper } from "../components/mainContentWrapper/MainContentWrapper.jsx";

export function Programs() {
  return (
    <MainContentCard title="programs" flexDirection="column">
      <PageControls></PageControls>
      <MainContentWrapper></MainContentWrapper>
    </MainContentCard>
  );
}
