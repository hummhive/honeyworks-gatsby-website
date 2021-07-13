import React from 'react';
import PropTypes from 'prop-types';
import CloseButton from '../CloseButton';
import {
  Container,
  DescriptionContainer,
  GroupsContainer,
  Group,
  UpperGroupContainer,
  LowerGroupContainer,
  GroupTitle,
  GroupDescription,
  GroupCost,
  JoinGroupButton,
} from './styled';

// eslint-disable-next-line react/display-name
const Groups = React.forwardRef(
  ({ hive, groups, activeStage, setStage }, ref) => {
    const handleClose = () => {
      window.localStorage.setItem('dismissed-groups-header', 'true');
      setStage(0);
    };

    return (
      <div ref={ref}>
        <Container>
          <DescriptionContainer>
            <h2>{hive?.name}</h2>
            <p>
              Hive description coming soon. Hive description coming soon. Hive
              description coming soon. Hive description coming soon. Hive
              description coming soon.
            </p>
          </DescriptionContainer>
          <GroupsContainer>
            <Group>
              <UpperGroupContainer>
                <GroupTitle>Join Hive</GroupTitle>
                <GroupDescription>
                  By joining {hive?.name}, you get access to all of {hive?.name}
                  &apos;s public content and can get sent encrypted media
                  directly. The Hive Creator may also give you access to private
                  Group content.
                </GroupDescription>
              </UpperGroupContainer>
              <LowerGroupContainer>
                <JoinGroupButton onClick={() => setStage(2)}>
                  Join
                </JoinGroupButton>
              </LowerGroupContainer>
            </Group>
            {groups?.map((group) => (
              <Group key={group.name}>
                <UpperGroupContainer>
                  <GroupTitle>{group.name}</GroupTitle>
                  <GroupDescription>{group.description}</GroupDescription>
                </UpperGroupContainer>
                <LowerGroupContainer>
                  <GroupCost>
                    {group.amount * 100} {group.currency.toUpperCase()} /{' '}
                    {group.interval.toUpperCase()}
                  </GroupCost>
                  <JoinGroupButton onClick={() => setStage(2)}>
                    Subscribe
                  </JoinGroupButton>
                </LowerGroupContainer>
              </Group>
            ))}
          </GroupsContainer>
          <CloseButton
            activeStage={activeStage}
            showingStage={1}
            onClick={handleClose}
          />
        </Container>
      </div>
    );
  }
);

Groups.propTypes = {
  hive: PropTypes.object,
  groups: PropTypes.array,
  activeStage: PropTypes.number,
  setStage: PropTypes.func,
};

export default Groups;
