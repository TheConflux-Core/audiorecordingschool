import fs from 'fs';
import path from 'path';

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  topics: string[];
  relatedArticles: string[];
  content: ArticleBlock[];
}

export interface InlineLink {
  text: string;
  url: string;
}

export interface AffiliateProduct {
  name: string;
  description: string;
  price?: string;
  url: string;
  retailer: string;
}

export interface ArticleBlock {
  type: 'intro' | 'h2' | 'h3' | 'p' | 'ul' | 'ol' | 'gear' | 'ad';
  text?: string;
  items?: string[];
  links?: InlineLink[];
  title?: string;
  products?: AffiliateProduct[];
  slot?: string;
  format?: string;
}

export interface Topic {
  slug: string;
  title: string;
  description: string;
}

const contentDir = path.join(process.cwd(), 'content');

export function getAllArticles(): Article[] {
  const articlesDir = path.join(contentDir, 'articles');
  const files = fs.readdirSync(articlesDir).filter(f => f.endsWith('.json'));
  const articles = files.map(file => {
    const raw = fs.readFileSync(path.join(articlesDir, file), 'utf-8');
    return JSON.parse(raw) as Article;
  });
  return articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getArticleBySlug(slug: string): Article | undefined {
  const filePath = path.join(contentDir, 'articles', `${slug}.json`);
  if (!fs.existsSync(filePath)) return undefined;
  const raw = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(raw) as Article;
}

export function getAllTopics(): Topic[] {
  const filePath = path.join(contentDir, 'topics', 'index.json');
  const raw = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(raw) as Topic[];
}

export function getTopicBySlug(slug: string): Topic | undefined {
  const topics = getAllTopics();
  return topics.find(t => t.slug === slug);
}

export function getArticlesByTopic(topicSlug: string): Article[] {
  return getAllArticles().filter(a => a.topics.includes(topicSlug));
}

export function getAllArticleSlugs(): string[] {
  return getAllArticles().map(a => a.slug);
}

export function getAllTopicSlugs(): string[] {
  return getAllTopics().map(t => t.slug);
}
