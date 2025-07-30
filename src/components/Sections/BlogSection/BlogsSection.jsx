import React, { useEffect, useState } from "react";
import axios from "axios";
import viewMore from "../../../assets/Blog/viewMore.png";
import prof from "../../../assets/Blog/prof.jpg";
import fallback3 from "../../../assets/Blog/1.webp";
import fallback2 from "../../../assets/Blog/2.webp";
import fallback1 from "../../../assets/Blog/3.webp";
import fallback4 from "../../../assets/Blog/4.webp";

const fallbackImages = [fallback1, fallback2, fallback3, fallback4];

const BlogsSection = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get(
          "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@sixthsenseleadership"
        );

        if (res.data.status === "ok") {
          const allPosts = res.data.items || [];
          const limitedPosts =
            allPosts.length > 9 ? allPosts.slice(0, 9) : allPosts;
          setBlogs(limitedPosts);
        } else {
          throw new Error(res.data.message || "Failed to fetch blogs");
        }
      } catch (error) {
        console.error("Error fetching Medium blogs:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const extractImage = (description, index) => {
    try {
      const match = description.match(/<img[^>]+src="([^">]+)"/);
      return match ? match[1] : fallbackImages[index % fallbackImages.length];
    } catch {
      return fallbackImages[index % fallbackImages.length];
    }
  };

  const cleanDescription = (html) => {
    try {
      let text = html.replace(/<img[^>]*>/g, "");
      text = text.replace(/<[^>]+>/g, "");
      return text.trim().slice(0, 150) + (text.length > 150 ? "..." : "");
    } catch {
      return "Read the full article for more details...";
    }
  };

  if (loading) {
    return (
      <div className="bg-white py-20 md:py-40 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-pulse space-y-4">
            <div className="h-6 bg-gray-200 rounded w-1/2 md:w-1/4 mx-auto"></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="bg-gray-100 rounded-lg p-4 h-64 md:h-80"
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white py-20 md:py-40 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-red mb-4">Error: {error}</p>
          <button
            onClick={() => window.location.reload()}
            className="bg-blue2 text-white px-4 py-2 rounded"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <section className="bg-white py-12 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {blogs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
            {blogs.map((blog, index) => (
              <article
                key={blog.guid}
                className="bg-white rounded-b-2xl rounded-t-4xl overflow-hidden shadow hover:shadow-xl transition-shadow duration-300 flex flex-col"
              >
                <div className="h-48 sm:h-56 md:h-64 lg:h-72 overflow-hidden">
                  <img
                    src={extractImage(blog.description, index)}
                    alt={blog.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src =
                        fallbackImages[index % fallbackImages.length];
                    }}
                  />
                </div>
                <div className="p-4 sm:p-5 md:p-6 flex-grow flex flex-col">
                  <a
                    href={blog.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg sm:text-xl md:text-[22px] font-semibold text-blue mb-2 md:mb-3 line-clamp-2"
                  >
                    {blog.title}
                  </a>
                  <p className="text-sm md:text-base text-gray mb-3 md:mb-4 line-clamp-3 flex-grow">
                    {cleanDescription(blog.description)}
                  </p>
                  <div className="flex justify-between items-center mt-auto">
                    <a
                      href="https://medium.com/@sixthsenseleadership"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#007AFF] font-medium text-sm md:text-base flex items-center gap-2"
                    >
                      <img
                        src={prof}
                        alt="author"
                        className="rounded-full w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
                      />
                      {blog.author}
                    </a>
                    <a
                      href={blog.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-red font-medium text-xs sm:text-sm border border-[#FF0C10] rounded-full px-2 py-1 underline flex items-center gap-1 hover:bg-[#E2EDFF] transition duration-300"
                    >
                      view more
                      <img
                        src={viewMore}
                        alt="Arrow icon"
                        className="w-4 h-4 sm:w-5 sm:h-5 inline-block"
                      />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <p className="text-center col-span-3 text-black text-lg">
            No blog posts found.
          </p>
        )}

        {blogs.length > 0 && (
          <div className="text-center mt-8 md:mt-10">
            <button
              className="bg-red text-white uppercase cursor-pointer text-xs sm:text-sm md:text-base px-5 sm:px-10 md:px-14 py-2 sm:py-3 rounded-full font-medium transition duration-300 hover:bg-red-700"
              onClick={() =>
                window.open(
                  "https://medium.com/@sixthsenseleadership",
                  "_blank"
                )
              }
            >
              LOAD MORE....
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogsSection;
