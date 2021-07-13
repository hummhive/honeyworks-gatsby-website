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
            <Group baseGroup>
              <UpperGroupContainer>
                <GroupTitle>Join Hive</GroupTitle>
                <GroupDescription>
                  By joining {hive?.name}, you get access to all of {hive?.name}
                  &apos;s public content and can get sent encrypted media
                  directly.
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
                    {group.amount * 100} {group.currency.toUpperCase()}/
                    {group.interval}
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
            onClick={() => setStage(0)}
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
