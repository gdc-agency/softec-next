import Wrapper from "@/layouts/wrapper";
import Blog from "@/components/blog";

export const metadata = {
  title: "Blogs - Softec",
};

const BlogPage = () => {
  return (
    <Wrapper>
      <Blog />
    </Wrapper>
  );
};

export default BlogPage;
