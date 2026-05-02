import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Compass, BookOpen } from 'lucide-react';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { SectionTitle } from '../components/ui/SectionTitle';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { mockArticles } from '../data/mockArticles';

export const ArticleListPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'architecture', 'tips', 'story'];

  const filteredArticles = mockArticles.filter((art) => {
    const matchesSearch =
      art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === 'All' || art.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="flex flex-col gap-12 font-sans select-none animate-fade-in">
      {/* Breadcrumbs */}
      <Breadcrumb items={[{ label: 'Articles' }]} />

      {/* Hero / Page Header */}
      <div className="text-center max-w-2xl mx-auto flex flex-col gap-4">
        <SectionTitle
          title="The Journal"
          subtitle="Insights, Culture & Experiences"
        />
        <p className="text-sm text-slate-500 leading-relaxed max-w-lg mx-auto font-light tracking-wide -mt-6">
          Immerse yourself in our collection of articles, design studies, spa advice, and culinary masterpieces curated for the discerning traveler.
        </p>
      </div>

      {/* Filter / Search Bar Section */}
      <section className="flex flex-col md:flex-row items-center justify-between gap-6 bg-slate-50 border border-slate-100 rounded-2xl p-4 md:p-6 shadow-sm">
        {/* Category filtering chips */}
        <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 select-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-sans font-medium uppercase tracking-wider border transition-all duration-300 whitespace-nowrap ${
                selectedCategory === cat
                  ? 'bg-primary text-white border-primary shadow-sm hover:bg-opacity-95'
                  : 'bg-white border-slate-200 text-slate-600 hover:bg-primary/5 hover:text-primary hover:border-primary/40'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-72">
          <input
            type="text"
            placeholder="Search journal entries..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-slate-200 focus:border-secondary focus:ring-1 focus:ring-secondary rounded-full bg-white text-sm text-slate-800 placeholder-slate-400 font-sans focus:outline-none transition-colors duration-300 shadow-sm"
          />
          <Search size={16} className="absolute left-3.5 top-2.5 text-slate-400 select-none" />
        </div>
      </section>

      {/* Article Cards Grid */}
      <section className="min-h-[300px]">
        {filteredArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {filteredArticles.map((art) => (
              <Card key={art.id} className="flex flex-col group h-full select-none">
                <div className="relative h-56 w-full overflow-hidden">
                  <img
                    src={art.featuredImage}
                    alt={art.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 select-none"
                  />
                  <Badge variant="primary" className="absolute top-4 left-4 bg-white/90 text-primary border-primary/20 backdrop-blur-sm select-none">
                    {art.category}
                  </Badge>
                </div>
                <div className="p-6 flex flex-col flex-grow justify-between gap-4">
                  <div className="flex flex-col gap-2">
                    <span className="text-xs text-slate-400 font-sans tracking-wide">
                      {art.publishedAt} • {art.readTime} min read
                    </span>
                    <h3 className="font-serif text-xl font-bold text-primary group-hover:text-secondary transition-colors duration-300 leading-snug">
                      {art.title}
                    </h3>
                    <p className="text-sm text-slate-500 leading-relaxed line-clamp-3">
                      {art.excerpt}
                    </p>
                  </div>
                  <Link to={`/article/${art.slug}`} className="text-secondary font-semibold text-sm hover:text-primary transition-colors duration-300 flex items-center self-start mt-2">
                    Read Journal Entry <BookOpen size={14} className="ml-1.5" />
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 flex flex-col items-center gap-2">
            <Compass size={40} className="text-slate-300 animate-pulse" />
            <h4 className="text-lg font-serif text-primary font-bold">No articles match your query.</h4>
            <p className="text-xs text-slate-400 max-w-sm">
              Try choosing a different category chip or broadening your search keywords.
            </p>
          </div>
        )}
      </section>
    </div>
  );
};
