import Blog, { blogs } from '../components/molecules/Blog';

const blog = () => {
  return (
    <div>
      <Blog title="All Blog" end={blogs.length} />
    </div>
  );
};

export default blog;
