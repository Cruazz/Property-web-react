import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, BookOpen, Calendar, Clock, Share2, Compass } from 'lucide-react';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { SectionTitle } from '../components/ui/SectionTitle';
import { Badge } from '../components/ui/Badge';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { mockArticles } from '../data/mockArticles';

export const ArticleDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const currentArticle = mockArticles.find((art) => art.slug === slug);

  if (!currentArticle) {
    return (
      <div className="text-center py-24 flex flex-col items-center gap-4 select-none animate-fade-in">
        <Compass size={44} className="text-slate-300 animate-pulse" />
        <h2 className="text-2xl font-serif font-bold text-primary">Article Not Found</h2>
        <p className="text-sm text-slate-500 max-w-sm">
          We couldn't locate the specific journal entry you requested.
        </p>
        <Link to="/article">
          <Button variant="outline">Browse All Articles</Button>
        </Link>
      </div>
    );
  }

  // Get related articles
  const relatedArticles = mockArticles
    .filter((art) => art.id !== currentArticle.id)
    .slice(0, 3);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    alert('Link copied to clipboard successfully!');
  };

  return (
    <div className="flex flex-col gap-12 font-sans select-none animate-fade-in">
      {/* Breadcrumbs & Navigation */}
      <div className="flex items-center justify-between">
        <Breadcrumb
          items={[
            { label: 'Articles', to: '/article' },
            { label: currentArticle.title }
          ]}
        />
        <Button
          variant="ghost"
          size="sm"
          onClick={() => navigate('/article')}
          className="text-slate-500 hover:text-primary transition-colors flex items-center group select-none"
        >
          <ArrowLeft size={16} className="mr-1.5 group-hover:-translate-x-1 transition-transform" /> Back
        </Button>
      </div>

      {/* Hero / Header Section */}
      <div className="flex flex-col gap-6 max-w-4xl mx-auto">
        <div className="flex flex-wrap items-center gap-3 select-none">
          <Badge variant="primary" className="bg-primary/10 text-primary border-primary/20 backdrop-blur-sm">
            {currentArticle.category}
          </Badge>
          <span className="text-xs text-slate-400 flex items-center gap-1">
            <Calendar size={13} /> {currentArticle.publishedAt}
          </span>
          <span className="text-xs text-slate-400 flex items-center gap-1">
            <Clock size={13} /> {currentArticle.readTime} min read
          </span>
        </div>

        <h1 className="text-3xl md:text-5xl font-serif font-bold text-primary leading-tight tracking-wide">
          {currentArticle.title}
        </h1>

        <p className="text-lg font-sans font-light tracking-wide text-slate-600 leading-relaxed max-w-3xl">
          {currentArticle.excerpt}
        </p>

        {/* Action share button */}
        <div className="self-start">
          <Button variant="outline" size="sm" onClick={handleShare} className="flex items-center gap-2 select-none">
            <Share2 size={14} /> Share Link
          </Button>
        </div>
      </div>

      {/* Featured Header Image */}
      <div className="relative w-full h-[45vh] md:h-[60vh] rounded-3xl overflow-hidden shadow-xl border border-slate-100 mt-2">
        <img
          src={currentArticle.featuredImage}
          alt={currentArticle.title}
          className="w-full h-full object-cover select-none"
        />
      </div>

      {/* Content & Author Panel */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto w-full">
        {/* Main Article Body */}
        <div className="md:col-span-2 flex flex-col gap-6 text-slate-600 text-sm md:text-base leading-relaxed font-sans">
          <div
            className="prose prose-slate max-w-none prose-headings:font-serif prose-headings:text-primary prose-a:text-secondary hover:prose-a:text-primary prose-strong:text-slate-800 prose-img:rounded-2xl"
            dangerouslySetInnerHTML={{ __html: currentArticle.content }}
          />

          {/* Bottom tag clouds */}
          <div className="flex flex-wrap items-center gap-2 border-t border-slate-100 pt-6 mt-4 select-none">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest mr-2">Tags:</span>
            {currentArticle.tags.map((tag, idx) => (
              <Badge key={idx} variant="accent" className="bg-accent/10 border-accent/20 text-slate-700 select-none">
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        {/* Sidebar Panel - Author Card */}
        <div className="flex flex-col gap-8 h-full">
          <Card className="p-6 flex flex-col gap-4 border border-slate-100 bg-slate-50/50 shadow-sm select-none sticky top-32">
            <h4 className="text-xs font-semibold text-primary uppercase tracking-wider border-b border-slate-100 pb-2">
              Author
            </h4>
            <div className="flex items-center gap-3">
              <img
                src={currentArticle.author.avatar}
                alt={currentArticle.author.name}
                className="w-12 h-12 object-cover rounded-full shadow-sm"
              />
              <div>
                <h5 className="text-sm font-bold text-primary">{currentArticle.author.name}</h5>
                <p className="text-[11px] text-slate-400 font-medium">Wellness & Design Contributor</p>
              </div>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed border-t border-slate-100/60 pt-3">
              {currentArticle.author.bio}
            </p>
          </Card>
        </div>
      </div>

      {/* Related articles section */}
      {relatedArticles.length > 0 && (
        <section className="flex flex-col gap-10 border-t border-slate-100 pt-16">
          <SectionTitle
            title="Read More from the Journal"
            subtitle="Related Articles"
            align="left"
            className="mb-0"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedArticles.map((art) => (
              <Card key={art.id} className="flex flex-col group h-full select-none">
                <div className="relative h-52 w-full overflow-hidden">
                  <img
                    src={art.featuredImage}
                    alt={art.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 select-none"
                  />
                  <Badge variant="primary" className="absolute top-4 left-4 bg-white/90 text-primary border-primary/20 backdrop-blur-sm select-none">
                    {art.category}
                  </Badge>
                </div>
                <div className="p-5 flex flex-col flex-grow justify-between gap-4">
                  <div className="flex flex-col gap-2">
                    <span className="text-xs text-slate-400 font-sans tracking-wide">
                      {art.publishedAt} • {art.readTime} min read
                    </span>
                    <h3 className="font-serif text-lg font-bold text-primary group-hover:text-secondary transition-colors duration-300 leading-snug">
                      {art.title}
                    </h3>
                  </div>
                  <Link to={`/article/${art.slug}`} className="text-secondary font-semibold text-sm hover:text-primary transition-colors duration-300 flex items-center mt-2">
                    View Journal Entry <BookOpen size={14} className="ml-1.5" />
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};
