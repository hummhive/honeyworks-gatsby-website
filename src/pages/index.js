import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import SEO from '../components/seo';
import Layout from '../components/layout';
import Loader from '../components/Loader';
import NoPlublicContent from '../components/NoPlublicContent';
import { HummContext } from 'gatsby-plugin-hummhive-react-web-data';
import formatDateString from '../utils/formatDateString';

const Home = () => {
  const { state, actions } = React.useContext(HummContext);
  let { storyIndex, isLoadingStoryIndex } = state;

  React.useEffect(() => {
    if (!storyIndex && !isLoadingStoryIndex) actions.getStoryIndex();
  });

  return (
    <Layout>
      <SEO title="Stories" />
      <div className="readable-content">
        {storyIndex?.length === 0 && <NoPlublicContent />}

        <Loader isLoading={!storyIndex} size={48} color="rgba(0, 0, 0, 0.5)" />
        {storyIndex?.map((story, index) => {
          const publishedAt = formatDateString(story.publishedAt);

          return (
            <div key={story.slug} className="post">
              <Link to={`/story/${story.id}`}>
                <div className="index-title" key={`content_item_${index}`}>
                  <h1>{story.title}</h1>
                </div>
                <p className="summary pt-1">
                  {story.summary?.length > 150
                    ? story.summary.substr(0, 150 - 1) + '...'
                    : story.summary}
                </p>
              </Link>
              <div className="meta d-flex pt-1">
                <div className="date">{publishedAt}</div>
              </div>
            </div>
          );
        })}
      </div>
    </Layout>
  );
};

Home.propTypes = {
  pageContext: PropTypes.object,
};

export default Home;
