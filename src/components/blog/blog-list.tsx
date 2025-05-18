import { useEffect, useRef, useState } from "react";
import BlogCard from "./index";
import blogsData from "../../data/blogs.json";

const Blogs = () => {

  const BLOG_PER_PAGE = 12;
  const [visibleBlogs, setVisibleBlogs] = useState(
    blogsData.blogs.slice(0, BLOG_PER_PAGE)
  );
  const [page, setPage] = useState(1);
  const sentinelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const nextPage = page + 1;
          const nextBlogs = blogsData.blogs.slice(0, nextPage * BLOG_PER_PAGE);

          if (nextBlogs.length > visibleBlogs.length) {
            setVisibleBlogs(nextBlogs);
            setPage(nextPage);
          }
        }
      },
      { threshold: 1 }
    );

    if (sentinelRef.current) {
      observer.observe(sentinelRef.current);
    }

    return () => {
      if (sentinelRef.current) {
        observer.unobserve(sentinelRef.current);
      }
    };
  }, [page, visibleBlogs]);

return (
  <>
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-[22px]">
      {visibleBlogs.map((blog) => (
        <BlogCard key={blog.id} data={blog} />
      ))}
    </div>
    {visibleBlogs.length < blogsData.blogs.length && (
  <div ref={sentinelRef} className="flex justify-center items-center h-16">
    <span className="animate-spin rounded-full h-6 w-6 bg-[#DDE1F2]" />
  </div>
)}

  </>
);

};

export default Blogs;
