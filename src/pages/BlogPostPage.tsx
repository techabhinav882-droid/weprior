import { Link, useParams, Navigate } from "react-router-dom";
import { Clock, Calendar, User, ArrowLeft, ArrowRight, Tag } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { GradientButton } from "@/components/ui/gradient-button";
import { blogPosts } from "@/data/blogPosts";

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const currentIndex = blogPosts.findIndex(p => p.slug === slug);
  const previousPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;
  const relatedPosts = blogPosts
    .filter(p => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3);

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
              <Link to="/blog" className="text-sm text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white transition-colors">
                Back to Blog
              </Link>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Image */}
      <div className="relative h-[60vh] overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        
        {/* Breadcrumb */}
        <div className="absolute top-24 left-0 right-0">
          <div className="max-w-4xl mx-auto px-6">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to all articles
            </Link>
          </div>
        </div>

        {/* Title and Meta */}
        <div className="absolute bottom-0 left-0 right-0 pb-12">
          <div className="max-w-4xl mx-auto px-6">
            <div className="mb-4">
              <span className="px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-[#C036A5] to-[#E04C7D] text-white">
                {post.category}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-white/80">
              <div className="flex items-center gap-2">
                <img
                  src={post.authorImage}
                  alt={post.author}
                  className="w-10 h-10 rounded-full border-2 border-white/20"
                />
                <span className="font-medium">{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <article className="py-16 bg-transparent">
        <div className="max-w-4xl mx-auto px-6">
          {/* Excerpt */}
          <div className="text-xl text-black/70 dark:text-white/70 leading-relaxed mb-12 p-6 rounded-2xl bg-gradient-to-br from-[#C036A5]/5 to-[#E04C7D]/5 border-l-4 border-[#C036A5]">
            {post.excerpt}
          </div>

          {/* Main Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:text-black dark:prose-headings:text-white prose-h1:text-4xl prose-h1:font-bold prose-h1:mb-6 prose-h2:text-3xl prose-h2:font-bold prose-h2:mt-12 prose-h2:mb-4 prose-h3:text-2xl prose-h3:font-semibold prose-h3:mt-8 prose-h3:mb-3 prose-p:text-black/80 dark:prose-p:text-white/80 prose-p:leading-relaxed prose-p:mb-6 prose-a:text-[#C036A5] prose-a:no-underline hover:prose-a:text-[#E04C7D] prose-strong:text-black dark:prose-strong:text-white prose-code:text-[#C036A5] prose-code:bg-black/5 dark:prose-code:bg-white/5 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-pre:bg-[#1A0F1F] prose-pre:border prose-pre:border-[#C036A5]/20 prose-ul:list-disc prose-ul:ml-6 prose-ol:list-decimal prose-ol:ml-6 prose-li:text-black/80 dark:prose-li:text-white/80 prose-li:mb-2">
            <div
              dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br/>') }}
              className="whitespace-pre-wrap"
            />
          </div>

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-black/10 dark:border-white/10">
            <div className="flex items-center gap-3 flex-wrap">
              <Tag className="w-5 h-5 text-black/50 dark:text-white/50" />
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 rounded-full text-sm bg-black/5 dark:bg-white/5 text-black/70 dark:text-white/70 border border-black/10 dark:border-white/10 hover:border-[#C036A5]/50 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Author Card */}
          <div className="mt-12 p-8 rounded-3xl bg-gradient-to-br from-[#1A0F1F] to-[#0A070D] border border-[#C036A5]/20">
            <div className="flex items-start gap-6">
              <img
                src={post.authorImage}
                alt={post.author}
                className="w-20 h-20 rounded-full border-2 border-[#C036A5]/30"
              />
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-2">About {post.author}</h3>
                <p className="text-white/60 leading-relaxed">
                  {post.author} is a senior DevOps engineer and cloud architect with extensive experience in building scalable infrastructure solutions. Passionate about automation, CI/CD, and modern cloud technologies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Navigation to Previous/Next Posts */}
      {(previousPost || nextPost) && (
        <section className="py-12 bg-transparent border-y border-black/10 dark:border-white/10">
          <div className="max-w-4xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-6">
              {previousPost && (
                <Link
                  to={`/blog/${previousPost.slug}`}
                  className="group p-6 rounded-2xl bg-gradient-to-br from-[#1A0F1F] to-[#0A070D] border border-[#C036A5]/20 hover:border-[#C036A5]/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(192,54,165,0.3)]"
                >
                  <div className="flex items-center gap-2 text-sm text-white/50 mb-2">
                    <ArrowLeft className="w-4 h-4" />
                    <span>Previous Article</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-[#E7D4F8] transition-colors line-clamp-2">
                    {previousPost.title}
                  </h3>
                </Link>
              )}
              {nextPost && (
                <Link
                  to={`/blog/${nextPost.slug}`}
                  className="group p-6 rounded-2xl bg-gradient-to-br from-[#1A0F1F] to-[#0A070D] border border-[#C036A5]/20 hover:border-[#C036A5]/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(192,54,165,0.3)] text-right"
                >
                  <div className="flex items-center justify-end gap-2 text-sm text-white/50 mb-2">
                    <span>Next Article</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-[#E7D4F8] transition-colors line-clamp-2">
                    {nextPost.title}
                  </h3>
                </Link>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-20 bg-transparent">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Related{" "}
              <span className="bg-gradient-to-r from-[#C036A5] to-[#E04C7D] bg-clip-text text-transparent">
                Articles
              </span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.slug}
                  to={`/blog/${relatedPost.slug}`}
                  className="group relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#1A0F1F] to-[#0A070D] border border-[#C036A5]/20 hover:border-[#C036A5]/50 transition-all duration-300 hover:shadow-[0_0_40px_rgba(192,54,165,0.4)] hover:-translate-y-2"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A0F1F] to-transparent opacity-60" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-sm text-white/50 mb-3">
                      <Clock className="w-4 h-4" />
                      <span>{relatedPost.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 line-clamp-2 group-hover:text-[#E7D4F8] transition-colors">
                      {relatedPost.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-transparent">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your{" "}
            <span className="bg-gradient-to-r from-[#C036A5] to-[#E04C7D] bg-clip-text text-transparent">
              Infrastructure?
            </span>
          </h2>
          <p className="text-xl text-black/70 dark:text-white/70 mb-8">
            Let's discuss how we can help you implement these best practices
          </p>
          <GradientButton asChild>
            <Link to="/#contact">Get Started Today</Link>
          </GradientButton>
        </div>
      </section>
    </div>
  );
}
