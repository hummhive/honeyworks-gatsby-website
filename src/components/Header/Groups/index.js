import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  DescriptionContainer,
  ShowMoreContianer,
  GroupsContainer,
  GroupCard,
  UpperGroupContainer,
  LowerGroupContainer,
  GroupTitle,
  GroupDescription,
  GroupCost,
  JoinGroupButton,
} from './styled';

// eslint-disable-next-line react/display-name
const Groups = React.forwardRef(({ hive, groups, setStage }, ref) => {
  const [showFullDescription, setShowFullDescription] = React.useState(false);
  return (
    <div ref={ref}>
      <Container>
        <DescriptionContainer showFull={showFullDescription}>
          <h2>{hive?.name}</h2>
          <p>
            Hive description coming soon. Hive description coming soon. Hive
            description coming soon. Hive description coming soon. Hive
            description coming soon.
          </p>
          {!showFullDescription && (
            <ShowMoreContianer onClick={() => setShowFullDescription(true)}>
              Show More
            </ShowMoreContianer>
          )}
        </DescriptionContainer>
        <GroupsContainer>
          <GroupCard>
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
          </GroupCard>
          {groups?.map((group) => (
            <GroupCard key={group.name}>
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
            </GroupCard>
          ))}
        </GroupsContainer>
      </Container>
    </div>
  );
});

Groups.propTypes = {
  hive: PropTypes.object,
  groups: PropTypes.array,
  setStage: PropTypes.func,
};

export default Groups;
