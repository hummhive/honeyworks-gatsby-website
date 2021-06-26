import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import Moment from "react-moment";
import { FiClock } from "react-icons/fi";
import Layout from "../components/layout";
import Loader from "../components/Loader";
import { HummContext } from "gatsby-plugin-hummhive-react-web-data";

const Home = () => {
  const { state, actions } = React.useContext(HummContext);
  const { storyIndex } = state;

  React.useEffect(() => {
    if (!storyIndex) actions.getStoryIndex();
  }, []);

  return (
    <Layout>
      <div className="container content">
        <Loader isLoading={!storyIndex} size={48} color="rgba(0, 0, 0, 0.5)" />
        {storyIndex?.map((story, index) => (
          <div key={story.slug} className="post">
            <div className="post-title" key={`content_item_${index}`}>
              <h1>
                <Link to={`/story/${story.id}`}>{story.title}</Link>
              </h1>
            </div>
            <div className="meta d-flex pt-1">
              <div className="date">
                <FiClock /> Date Published:{" "}
                <Moment format="DD/MM/YYYY">{story.createdAt}</Moment>
              </div>
            </div>
            <div className="summary pt-3">
              {story.summary?.length > 350
                ? story.summary.substr(0, 350 - 1) + "..."
                : story.summary}
            </div>
            <div className="entry-footer pt-3"></div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

Home.propTypes = {
  pageContext: PropTypes.object,
};

export default Home;
