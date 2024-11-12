import type { CollectionEntry } from 'astro:content';

declare interface DirNode {
  name: string;
  type: string;gi: CollectionEntry<'blog'>[];
}
