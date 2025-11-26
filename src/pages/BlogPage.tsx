import { Link } from "react-router-dom";
import { Clock, ArrowRight, Search } from "lucide-react";
import { useState } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { blogPosts } from "@/data/blogPosts";

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...Array.from(new Set(blogPosts.map(post => post.category)))];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen text-black dark:text-white transition-colors duration-300">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-black/80 backdrop-blur-xl border-b border-black/10 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold">
              <span className="bg-gradient-to-r from-indigo-400 via-rose-300 to-amber-300 bg-clip-text text-transparent">
                WePrior
              </span>
            </Link>
            <div className="flex items-center gap-4">
              <Link to="/" className="text-sm text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white transition-colors">
                Back to Home
              </Link>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#C036A5]/10 via-transparent to-[#E04C7D]/10" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              DevOps{" "}
              <span className="bg-gradient-to-r from-[#C036A5] via-[#8B2F8E] to-[#E04C7D] bg-clip-text text-transparent">
                Insights
              </span>
            </h1>
            <p className="text-xl text-black/70 dark:text-white/70 mb-8">
              Expert articles, tutorials, and best practices for modern DevOps and cloud infrastructure
            </p>
          </div>

          {/* Search and Filter */}
          <div className="max-w-4xl mx-auto mb-12">
            {/* Search Bar */}
            <div className="relative mb-6">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-black/40 dark:text-white/40" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white dark:bg-black/40 border border-black/10 dark:border-[#C036A5]/20 text-black dark:text-white placeholder:text-black/40 dark:placeholder:text-white/40 focus:border-[#C036A5]/50 focus:ring-2 focus:ring-[#C036A5]/20 outline-none transition-all"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full transition-all duration-300 font-medium ${
                    selectedCategory === category
                      ? "bg-gradient-to-r from-[#C036A5] via-[#8B2F8E] to-[#E04C7D] text-white shadow-[0_0_20px_rgba(192,54,165,0.6)]"
                      : "bg-transparent text-black/70 dark:text-white/70 border border-black/20 dark:border-white/20 hover:border-[#C036A5]/50 hover:text-black dark:hover:text-white"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 bg-transparent">
        <div className="max-w-7xl mx-auto px-6">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-xl text-black/50 dark:text-white/50">No articles found matching your criteria.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <Link
                  key={post.slug}
                  to={`/blog/${post.slug}`}
                  className="group relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#1A0F1F] to-[#0A070D] border border-[#C036A5]/20 hover:border-[#C036A5]/50 transition-all duration-300 hover:shadow-[0_0_40px_rgba(192,54,165,0.4)] hover:-translate-y-2"
                >
                  {/* Blog Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A0F1F] to-transparent opacity-60" />
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-[#C036A5] to-[#E04C7D] text-white">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Blog Content */}
                  <div className="p-6">
                    {/* Read Time */}
                    <div className="flex items-center gap-2 text-sm text-white/50 mb-3">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                      <span className="mx-2">•</span>
                      <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-[#E7D4F8] transition-colors">
                      {post.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-white/60 mb-4 line-clamp-3 leading-relaxed">
                      {post.description}
                    </p>

                    {/* Read More Link */}
                    <div className="flex items-center gap-2 text-sm font-semibold text-[#C036A5] group-hover:text-[#E04C7D] transition-colors">
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
