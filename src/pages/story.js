import React from 'react';
import Layout from '../components/layout';
import PropTypes from 'prop-types';
import { HummContext } from 'gatsby-plugin-hummhive-react-web-data';
import formatDateString from '../utils/formatDateString';
import SEO from '../components/seo';
import Loader from '../components/Loader';
import DocumentBuilder from '../components/to-decouple/story/documentBuilder';

const Story = ({ id }) => {
  const { state, actions } = React.useContext(HummContext);
  const isLoading = state.loadingStories.some((loadingId) => loadingId === id);
  const story = state.stories[id];
  const publishedAt = story && formatDateString(story.publishedAt);

  React.useEffect(() => {
    if (!story && !isLoading) actions.getStory(id);
  });

  return (
    <Layout>
      <div className="readable-content">
        <Loader isLoading={isLoading} size={48} color="rgba(0, 0, 0, 0.5)" />
        {state.stories[id] === 'NOT_FOUND' ? (
          <div className="alert alert-danger" role="alert">
            Story not found, or you don&apos;t have access to it.
          </div>
        ) : (
          story && (
            <>
              <SEO title={story?.title} />
              <div className="post-title">
                <h1>{story.title}</h1>
              </div>
              <div className="meta d-flex pt-1 mb-3">
                <div className="date">{publishedAt}</div>
              </div>
              {JSON.parse(story.body).map((element, i) => (
                <DocumentBuilder key={i} element={element} />
              ))}
            </>
          )
        )}
      </div>
    </Layout>
  );
};

Story.propTypes = {
  id: PropTypes.string,
};

export default Story;
