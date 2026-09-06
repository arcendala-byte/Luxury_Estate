'use client'

import { useState } from 'react'
import { Navigation } from '@/components/navigation/Navigation'
import { Footer } from '@/components/footer/Footer'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { Search, Calendar, User, Clock, Tag, X } from 'lucide-react'

const blogPosts = [
  {
    id: 1,
    title: 'The Art of Curating a Luxury Home Collection',
    excerpt: 'Discover the principles behind building a portfolio of exceptional properties that reflect your personal style and investment vision.',
    category: 'Luxury Living',
    author: 'Sarah Johnson',
    date: 'June 15, 2026',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80',
    featured: true,
    tags: ['Luxury Homes', 'Collection', 'Investment'],
    content: 'Building a luxury home collection is an art form that requires vision, patience, and expert guidance. In this comprehensive guide, we explore the principles that distinguish exceptional portfolios from ordinary ones.'
  },
  {
    id: 2,
    title: 'Investment Trends in Ultra-Premium Real Estate',
    excerpt: 'An in-depth analysis of the global ultra-premium property market and emerging investment opportunities for discerning buyers.',
    category: 'Investment',
    author: 'Michael Chen',
    date: 'June 12, 2026',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80',
    featured: false,
    tags: ['Investment', 'Market Trends', 'Analysis'],
    content: 'The ultra-premium real estate market continues to evolve, presenting unique opportunities for sophisticated investors. This analysis examines current trends and future projections.'
  },
  {
    id: 3,
    title: 'The Rise of Sustainable Luxury Architecture',
    excerpt: 'How the world\'s leading architects are redefining luxury with sustainable design principles and eco-conscious materials.',
    category: 'Architecture',
    author: 'Emma Williams',
    date: 'June 10, 2026',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80',
    featured: false,
    tags: ['Architecture', 'Sustainability', 'Design'],
    content: 'Sustainable luxury is no longer an oxymoron. Today\'s leading architects are creating homes that are both environmentally responsible and exceptionally beautiful.'
  },
  {
    id: 4,
    title: 'Navigating the Buying Process for Luxury Estates',
    excerpt: 'A comprehensive guide to the unique considerations, challenges, and opportunities when purchasing a luxury estate.',
    category: 'Buying Guide',
    author: 'Sarah Johnson',
    date: 'June 8, 2026',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1200&q=80',
    featured: false,
    tags: ['Buying Guide', 'Process', 'Tips'],
    content: 'Purchasing a luxury estate involves unique considerations that go beyond a typical real estate transaction. This guide covers everything from due diligence to final closing.'
  },
  {
    id: 5,
    title: 'The World\'s Most Exclusive Neighborhoods',
    excerpt: 'Exploring the most coveted addresses around the globe, from Beverly Hills to the French Riviera.',
    category: 'Destinations',
    author: 'Michael Chen',
    date: 'June 5, 2026',
    readTime: '9 min read',
    image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1200&q=80',
    featured: false,
    tags: ['Neighborhoods', 'Destinations', 'Lifestyle'],
    content: 'From Beverly Hills to the French Riviera, discover the world\'s most exclusive neighborhoods and what makes each one unique.'
  },
  {
    id: 6,
    title: 'Art & Design: Curating Your Luxury Interior',
    excerpt: 'Expert insights on selecting and placing art, furniture, and design elements to create a cohesive luxury interior.',
    category: 'Interior Design',
    author: 'Emma Williams',
    date: 'June 3, 2026',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80',
    featured: false,
    tags: ['Interior Design', 'Art', 'Furniture'],
    content: 'Creating a cohesive luxury interior requires a careful balance of art, furniture, and design elements. Learn from our experts how to achieve this harmony.'
  },
]

const categories = ['All', 'Luxury Living', 'Investment', 'Architecture', 'Buying Guide', 'Destinations', 'Interior Design']

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedPost, setSelectedPost] = useState<typeof blogPosts[0] | null>(null)

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const featuredPost = blogPosts.find(post => post.featured)

  return (
    <>
      <Navigation />
      <main className="pt-20 bg-white overflow-hidden">
        {/* Hero */}
        <section className="py-20 bg-gradient-to-br from-white via-gray-50/50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal direction="up">
              <div className="text-center max-w-3xl mx-auto">
                <div className="flex items-center justify-center gap-4 mb-6">
                  <div className="w-12 h-px bg-[#C9A227]" />
                  <span className="text-[10px] tracking-[0.3em] uppercase text-[#C9A227] font-sans font-medium">
                    Journal
                  </span>
                  <div className="w-12 h-px bg-[#C9A227]" />
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-light text-charcoal leading-[1.1]">
                  The Luxury <span className="font-bold">Journal</span>
                </h1>
                <p className="text-gray-500 font-light mt-4 max-w-2xl mx-auto">
                  Insights, stories, and perspectives from the world of luxury real estate.
                </p>
              </div>
            </ScrollReveal>

            {/* Search */}
            <div className="mt-12 max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-white border border-gray-200 rounded-full pl-12 pr-4 py-4 text-charcoal placeholder:text-gray-400 focus:border-[#C9A227]/50 outline-none transition-colors"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 bg-gray-50/30 border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === category
                      ? 'bg-[#C9A227] text-white'
                      : 'bg-white text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Post */}
        {featuredPost && filteredPosts.length > 0 && (
          <section className="py-16 bg-white border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <ScrollReveal direction="up">
                <div className="relative group overflow-hidden rounded-2xl cursor-pointer" onClick={() => setSelectedPost(featuredPost)}>
                  <div className="relative aspect-[21/9] md:aspect-[21/7] overflow-hidden">
                    <Image
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                    <div className="max-w-3xl">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-[10px] tracking-[0.2em] uppercase text-[#C9A227] font-sans font-medium">
                          Featured
                        </span>
                        <span className="w-8 h-px bg-[#C9A227]" />
                        <span className="text-sm text-white/60 font-light">{featuredPost.category}</span>
                      </div>
                      <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-white font-light leading-[1.2]">
                        {featuredPost.title}
                      </h2>
                      <p className="text-white/70 font-light mt-3 max-w-2xl">
                        {featuredPost.excerpt}
                      </p>
                      <div className="flex flex-wrap items-center gap-4 mt-4 text-sm text-white/50">
                        <span className="flex items-center gap-2">
                          <User className="w-4 h-4" />
                          {featuredPost.author}
                        </span>
                        <span className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {featuredPost.date}
                        </span>
                        <span className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          {featuredPost.readTime}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </section>
        )}

        {/* Blog Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {filteredPosts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-gray-400 font-light">No articles found matching your criteria.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    whileHover={{ y: -8 }}
                    onClick={() => setSelectedPost(post)}
                    className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-[#C9A227]/30 transition-all shadow-sm hover:shadow-xl cursor-pointer"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute top-4 left-4">
                        <span className="text-[10px] tracking-[0.2em] uppercase bg-[#C9A227]/90 text-white px-3 py-1 rounded-full font-medium">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-serif text-charcoal group-hover:text-[#C9A227] transition-colors font-light leading-[1.3]">
                        {post.title}
                      </h3>
                      <p className="text-gray-400 text-sm font-light mt-2 line-clamp-2">
                        {post.excerpt}
                      </p>
                      <div className="flex flex-wrap items-center gap-3 mt-4 text-xs text-gray-400">
                        <span className="flex items-center gap-1">
                          <User className="w-3 h-3" />
                          {post.author}
                        </span>
                        <span className="w-px h-4 bg-gray-200" />
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {post.date}
                        </span>
                        <span className="w-px h-4 bg-gray-200" />
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </span>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>

      {/* Article Modal */}
      <AnimatePresence>
        {selectedPost && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
            onClick={() => setSelectedPost(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <button
                  onClick={() => setSelectedPost(null)}
                  className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors"
                >
                  <X className="w-5 h-5 text-charcoal" />
                </button>
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={selectedPost.image}
                    alt={selectedPost.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 80vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <span className="text-[10px] tracking-[0.2em] uppercase text-[#C9A227] font-sans font-medium">
                      {selectedPost.category}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-serif text-white font-light mt-2">
                      {selectedPost.title}
                    </h2>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-6">
                    <span className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      {selectedPost.author}
                    </span>
                    <span className="w-px h-4 bg-gray-200" />
                    <span className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {selectedPost.date}
                    </span>
                    <span className="w-px h-4 bg-gray-200" />
                    <span className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {selectedPost.readTime}
                    </span>
                  </div>
                  <p className="text-gray-600 font-light leading-relaxed text-lg">
                    {selectedPost.content}
                  </p>
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <div className="flex flex-wrap gap-2">
                      {selectedPost.tags.map((tag) => (
                        <span key={tag} className="text-xs text-gray-500 bg-gray-50 px-3 py-1 rounded-full">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </>
  )
}
