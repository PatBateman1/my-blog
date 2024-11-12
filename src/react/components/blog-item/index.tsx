import { type CollectionEntry } from 'astro:content';
import './index.less';

export default function BlogItem(params: { blogItem: CollectionEntry<'blog'>; }) {
  const { blogItem } = params;
  return (
    <a href={`/blog/${blogItem.slug}/`} className="blog-item">
      <img src={blogItem.data.heroImage} alt="" className="blog-img" />
      <h5 className="title">{blogItem.data.title}</h5>
      <p className="date">
        <time dateTime={blogItem.data.pubDate.toISOString()}>
          {
            blogItem.data.pubDate.toLocaleDateString('en-us', {
              year: 'numeric',
              month: 'short',
              day: 'numeric',
            })
          }
        </time>
      </p>
    </a>
  );
}