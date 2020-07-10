import React from 'react';
import { useLocation } from 'react-router-dom';
import {
  Title,
  EmptyState,
  EmptyStateIcon,
  EmptyStateBody,
} from '@patternfly/react-core';
import { OutlinedMehIcon } from '@patternfly/react-icons';

const PageNotFound = () => {
  const location = useLocation();

  return (
    <EmptyState>
      <EmptyStateIcon icon={OutlinedMehIcon} />
      <Title size="lg" headingLevel="h4">
        Not Found
      </Title>
      <EmptyStateBody>
        The path {location.pathname} does not exist.
      </EmptyStateBody>
    </EmptyState>
  );
};

export default PageNotFound;
