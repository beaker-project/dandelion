import React from 'react';

import {
  Button,
  PageSection,
  PageSectionVariants,
} from '@patternfly/react-core';

const LocalTime: React.FC = () => {
  return (
    <PageSection variant={PageSectionVariants.dark}>
      Current date / time is
      <Button>Refresh!</Button>
    </PageSection>
  );
};

export default LocalTime;
