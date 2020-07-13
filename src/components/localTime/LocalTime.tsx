import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  Button,
  PageSection,
  PageSectionVariants,
} from '@patternfly/react-core';

import { loadRequest } from '../../store/ducks/localtime/actions';
import { AppState } from '../../store';

const LocalTime: React.FC = () => {
  const dispatch = useDispatch();
  const localTime = useSelector(
    (state: AppState) => state.localtime.dateString
  );

  const queryLocalTime = (): void => {
    dispatch(loadRequest());
  };

  useEffect(queryLocalTime, [dispatch]);

  return (
    <PageSection variant={PageSectionVariants.dark}>
      Current date / time is {localTime}
      <Button onClick={queryLocalTime}>Refresh!</Button>
    </PageSection>
  );
};

export default LocalTime;
