import React from 'react';
import PropTypes from 'prop-types';
import { useSpring } from 'react-spring';
import { useMeasure } from 'react-use';
import {
  Container,
  DescriptionContainer,
  HiveDescription,
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
  const [collapsedHeightDescriptionRef, collapsedHeightDescriptionSize] =
    useMeasure();
  const [fullHeightDescriptionRef, fullHeightDescriptionSize] = useMeasure();

  const descriptionSpring = useSpring({
    height: showFullDescription
      ? fullHeightDescriptionSize.height
      : collapsedHeightDescriptionSize.height,
  });

  return (
    <div ref={ref}>
      <Container>
        <DescriptionContainer>
          <h2>{hive?.name}</h2>
          <HiveDescription
            showFull={showFullDescription}
            style={descriptionSpring}
          >
            {hive?.description}
          </HiveDescription>
          <HiveDescription
            ref={collapsedHeightDescriptionRef}
            showFull={false}
            style={{ position: 'fixed', zIndex: -10, opacity: 0 }}
          >
            {hive?.description}
          </HiveDescription>
          <HiveDescription
            ref={fullHeightDescriptionRef}
            showFull
            style={{ position: 'fixed', zIndex: -10, opacity: 0 }}
          >
            {hive?.description}
          </HiveDescription>

          <ShowMoreContianer
            isHidden={
              showFullDescription ||
              collapsedHeightDescriptionSize.height >=
                fullHeightDescriptionSize.height
            }
            onClick={() => setShowFullDescription(true)}
          >
            Show More
          </ShowMoreContianer>
        </DescriptionContainer>
        <GroupsContainer>
          <GroupCard>
            <UpperGroupContainer>
              <GroupTitle>Join Hive</GroupTitle>
              <GroupDescription>{hive?.joinText}</GroupDescription>
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
