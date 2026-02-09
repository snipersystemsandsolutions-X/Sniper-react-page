import { Layout } from "@/components/Layout";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Blog = () => {
  const [scrollY, setScrollY] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const blogPosts = [
    {
      id: 1,
      title: "The Future of Enterprise IT Infrastructure in 2025",
      excerpt: "Exploring emerging trends in cloud computing, edge computing, and hybrid infrastructure solutions that are reshaping how enterprises manage their IT operations.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&q=80",
      date: "November 25, 2025",
      readTime: "8 min read",
      category: "IT Infrastructure"
    },
    {
      id: 2,
      title: "Maximizing ROI with Managed IT Services",
      excerpt: "How businesses are reducing costs and improving efficiency by partnering with managed service providers for comprehensive IT support and strategic consulting.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&q=80",
      date: "November 20, 2025",
      readTime: "6 min read",
      category: "Managed Services"
    },
    {
      id: 3,
      title: "Mobile Device Management Best Practices",
      excerpt: "Essential strategies for implementing effective MDM solutions that balance security, user experience, and organizational control across diverse device ecosystems.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1600&q=80",
      date: "November 15, 2025",
      readTime: "7 min read",
      category: "Device Management"
    },
    {
      id: 4,
      title: "Cybersecurity in the Age of Remote Work",
      excerpt: "Addressing the evolving security challenges of distributed workforces and implementing robust protection strategies for remote and hybrid work environments.",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1600&q=80",
      date: "November 10, 2025",
      readTime: "9 min read",
      category: "Security"
    },
    {
      id: 5,
      title: "Sustainable IT: Environmental Responsibility in Technology",
      excerpt: "How organizations are adopting green IT practices, from responsible asset disposal to energy-efficient infrastructure, to reduce their environmental footprint.",
      image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=1600&q=80",
      date: "November 5, 2025",
      readTime: "5 min read",
      category: "Sustainability"
    },
    {
      id: 6,
      title: "AI and Machine Learning in Business Operations",
      excerpt: "Practical applications of artificial intelligence and machine learning technologies that are transforming business processes and driving competitive advantage.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1600&q=80",
      date: "October 30, 2025",
      readTime: "10 min read",
      category: "Innovation"
    },
    {
      id: 7,
      title: "Network Infrastructure Modernization Guide",
      excerpt: "A comprehensive approach to upgrading legacy network systems with modern, scalable solutions that support growing business demands and digital transformation.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1600&q=80",
      date: "October 25, 2025",
      readTime: "8 min read",
      category: "Networking"
    },
    {
      id: 8,
      title: "The Rise of Global Capability Centers in India",
      excerpt: "Understanding the GCC boom in India and how technology partnerships are enabling multinational corporations to establish successful operations in the region.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80",
      date: "October 20, 2025",
      readTime: "7 min read",
      category: "Industry Insights"
    }
  ];

  const featuredPost = blogPosts[0];
  const regularPosts = blogPosts.slice(1);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-white pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-white opacity-60"></div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-6xl md:text-7xl font-semibold text-gray-900 mb-6 leading-tight font-sans">
              Blog
            </h1>
            <p className="text-xl text-gray-700 max-w-5xl mx-auto leading-relaxed">
              Discover the latest insights, news, and updates from Sniper Systems and Solutions.
              Stay informed about technology trends, best practices, and industry developments
              that matter to your business.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-6xl md:text-7xl font-semibold text-gray-900 mb-6 leading-tight">
              Featured article
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start pb-20 border-b border-gray-300">
            <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden h-96">
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-6 left-6">
                <div className="bg-black bg-opacity-70 text-white px-4 py-2 rounded-full backdrop-blur-sm">
                  <span className="text-xs font-medium uppercase tracking-wider">
                    {featuredPost.category}
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{featuredPost.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{featuredPost.readTime}</span>
                </div>
              </div>

              <h3 className="text-3xl lg:text-4xl font-semibold text-gray-900 leading-tight">
                {featuredPost.title}
              </h3>

              <p className="text-lg text-gray-800 leading-relaxed">
                {featuredPost.excerpt}
              </p>

              <Link
                to={`/blog/${featuredPost.id}`}
                className="inline-flex items-center px-8 py-3 border-2 border-gray-900 rounded-full text-gray-900 font-medium hover:bg-gray-900 hover:text-white transition-colors duration-300"
              >
                Read article
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* All Posts Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-6xl md:text-7xl font-semibold text-gray-900 mb-6 leading-tight">
              Latest insights
            </h2>
          </div>

          <div className="space-y-16">
            {regularPosts.map((post, index) => (
              <div
                key={post.id}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start pb-12 border-b border-gray-300 last:border-0"
              >
                <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden h-80">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-6 left-6">
                    <div className="bg-black bg-opacity-70 text-white px-4 py-2 rounded-full backdrop-blur-sm">
                      <span className="text-xs font-medium uppercase tracking-wider">
                        {post.category}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center gap-6 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <h3 className="text-2xl lg:text-3xl font-semibold text-gray-900 leading-tight">
                    {post.title}
                  </h3>

                  <p className="text-lg text-gray-800 leading-relaxed">
                    {post.excerpt}
                  </p>

                  <Link
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center px-8 py-3 border-2 border-gray-900 rounded-full text-gray-900 font-medium hover:bg-gray-900 hover:text-white transition-colors duration-300"
                  >
                    Read more
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-black text-white py-20 px-6 rounded-[4rem] mx-6 my-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-6xl md:text-7xl font-semibold mb-6 leading-tight">
              Stay updated
            </h2>
            <p className="text-lg text-gray-200 leading-relaxed max-w-2xl mx-auto">
              Subscribe to our newsletter and never miss the latest insights,
              technology trends, and exclusive updates from Sniper Systems.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-full bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="px-8 py-4 border-2 border-white rounded-full text-white font-medium hover:bg-white hover:text-black transition-colors duration-300 whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-black text-white py-20 px-6 rounded-[4rem] mx-6 my-12">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <h2 className="text-7xl md:text-8xl font-semibold mb-6 leading-tight">
              Have an idea?<br />We make it happen
            </h2>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center px-12 py-4 border-2 border-white rounded-full text-white font-medium text-lg hover:bg-white hover:text-black transition-colors duration-300"
          >
            TELL US
          </Link>
        </div>
      </section>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-14 h-14 bg-white border-2 border-gray-900 rounded-full flex items-center justify-center text-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300 z-50 shadow-lg"
          aria-label="Scroll to top"
        >
          <ArrowRight className="w-6 h-6 -rotate-90" />
        </button>
      )}
    </Layout>
  );
};

export default Blog;
