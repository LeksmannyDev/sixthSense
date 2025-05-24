import React, { useState, useEffect } from "react";
import axios from "axios";
import { homeAsset } from "./homeAsset";
import next from "../../../assets/Home/nect.svg";
import fallback1 from "../../../assets/Blog/1.jpg";
import fallback2 from "../../../assets/Blog/2.jpg";
import fallback3 from "../../../assets/Blog/3.jpg";
import fallback4 from "../../../assets/Blog/4.jpg";

const fallbackImages = [fallback1, fallback2, fallback3, fallback4];

const HomeBlog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get(
          `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@alessbutler`
        );
        if (res.data.status === "ok") {
          setBlogs(res.data.items.slice(0, 9));
        } else {
          throw new Error(res.data.message || "Failed to fetch blogs");
        }
      } catch (err) {
        console.error("Blog fetch error:", err);
        setError(err.message);
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
      return text.trim().slice(0, 100) + (text.length > 100 ? "..." : "");
    } catch {
      return "Read the full article for more details...";
    }
  };

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? blogs.length - 1 : (prev - 1 + blogs.length) % blogs.length
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % blogs.length);
  };

  if (loading) return <div className="text-center py-20">Loading...</div>;
  if (error)
    return <div className="text-red text-center py-20">Error: {error}</div>;

  return (
    <section className="py-20 px-4 sm:px-6 md:px-10 bg-light relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-6 sm:gap-10 w-full max-w-6xl mx-auto px-4 sm:px-6 mb-8 sm:mb-20">
          <div className="w-full text-center lg:text-left">
            <p className="text-red text-2xl sm:text-3xl font-semibold uppercase">
              Blogposts
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-blue mt-2">
              Our Latest Blogs
            </h2>
          </div>
          <div className="flex gap-3 ">
            <img
              src={homeAsset.prevArrow}
              alt="Prev"
              onClick={handlePrev}
              className="w-8 h-8 sm:w-12 sm:h-12 cursor-pointer"
            />
            <img
              src={homeAsset.nextArrow}
              alt="Next"
              onClick={handleNext}
              className="w-8 h-8 sm:w-12 sm:h-12 cursor-pointer"
            />
          </div>
        </div>

        {/* Blog Cards */}
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {[0, 1, 2].map((offset) => {
            const index = (currentIndex + offset) % blogs.length;
            const blog = blogs[index];

            return (
              <div
                key={blog.guid}
                className="rounded-2xl overflow-hidden shadow text-red flex flex-col"
              >
                <img
                  src={extractImage(blog.description, index)}
                  alt={blog.title}
                  className="w-full h-48 object-cover"
                  onError={(e) => {
                    e.target.src =
                      fallbackImages[index % fallbackImages.length];
                  }}
                />
                <div className="p-4 flex flex-col justify-between flex-grow">
                  <div>
                    <a
                      href={blog.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg sm:text-xl md:text-[22px] font-semibold text-red mb-2 md:mb-3 line-clamp-2"
                    >
                      {blog.title}
                    </a>
                    <p className="text-sm text-gray mb-4 line-clamp-3">
                      {cleanDescription(blog.description)}
                    </p>
                  </div>
                  <div className="border border-[#1F3864] rounded-md flex justify-center items-center p-2">
                    <a
                      href={blog.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex justify-center items-center gap-4 text-blue rounded-full text-lg"
                    >
                      Read Blog
                      <img src={next} alt="" className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center items-center gap-2 mt-8">
          {Array.from({ length: Math.ceil(blogs.length / 3) }).map((_, idx) => {
            const isActive = Math.floor(currentIndex / 3) === idx;
            return (
              <span
                key={idx}
                className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
                  isActive ? "w-5 h-5 bg-[#1F3864]" : "w-2.5 h-2.5 bg-[#D9D9D9]"
                }`}
                onClick={() => setCurrentIndex(idx * 3)}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HomeBlog;
