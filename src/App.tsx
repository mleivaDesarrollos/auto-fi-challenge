import Pagination from "components/app/Pagination";
import Layout from "components/layout";
import Post from "components/post";
import { useApp } from "hooks/useApp";

const App = () => {
  const { posts, handleSearchPosts, handleChangePagination, totals } = useApp();
  return (
    <Layout onPostSearch={handleSearchPosts}>
      <>
        {posts.map((post) => (
          <Post
            key={post.id}
            id={post.id}
            body={post.body}
            title={post.title}
            comments={post.comments}
          />
        ))}
        <Pagination
          onChangePagination={handleChangePagination}
          totals={totals}
        />
      </>
    </Layout>
  );
};

export default App;
