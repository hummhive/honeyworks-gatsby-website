import React from "react"
import Layout from "../components/layout"
import PropTypes from "prop-types"
import { HummContext } from "gatsby-plugin-hummhive-react-web-data"
import Moment from "react-moment"
import SEO from "../components/seo"
import Loader from "../components/Loader"
import { FiClock } from "react-icons/fi"
import DocumentBuilder from "../components/to-decouple/story/documentBuilder"

const Story = ({ id }) => {
  const { state, actions } = React.useContext(HummContext)
  const isLoading = state.loadingStories.some(loadingId => loadingId === id)
  const story = state.stories[id]

  React.useEffect(() => {
    if (!story && !isLoading) actions.getStory(id)
  }, [])

  return (
    <Layout>
      <div className="container content">
        <Loader isLoading={isLoading} size={48} color="rgba(0, 0, 0, 0.5)" />
        {!story && !isLoading && (
          <div className="alert alert-danger" role="alert">
            Story not found
          </div>
        )}
        {story && (
          <>
            <SEO title={story?.title} />
            <div className="post-title">
              <h1>{story.title}</h1>
            </div>
            <div className="meta d-flex pt-1">
              <div className="date">
                <FiClock /> Date Published:{" "}
                <Moment format="DD/MM/YYYY">{story.createdAt}</Moment>
              </div>
            </div>
            {JSON.parse(story.body).map((element, i) => (
              <DocumentBuilder key={i} element={element} />
            ))}
          </>
        )}
      </div>
    </Layout>
  )
}

Story.propTypes = {
  id: PropTypes.string,
}

export default Story
