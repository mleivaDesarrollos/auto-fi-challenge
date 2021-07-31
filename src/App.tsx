import Layout from "components/layout";
import { actions } from "redux/main/slice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Post from "components/post";
import { postsSelectors } from "redux/main/selectors";

const App = () => {
  const dispatch = useDispatch();
  const posts = useSelector(postsSelectors);
  useEffect(() => {
    dispatch(actions.fetch());
  }, [dispatch]);
  return (
    <Layout>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          body={post.body}
          title={post.title}
          comments={post.comments}
        />
      ))}
    </Layout>
  );
};

export default App;
