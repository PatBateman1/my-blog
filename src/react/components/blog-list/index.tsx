import { SimpleTreeView } from '@mui/x-tree-view/SimpleTreeView';
import { TreeItem } from '@mui/x-tree-view/TreeItem';
import type { DirNode } from '../../../types';
import BlogItem from '../blog-item';
import './index.less';
import { useState } from 'react'

export default function BlogList(params: { blogList: DirNode[]; }) {
  const { blogList } = params;
  const [expandedItems] = useState(blogList.map(item => item.name));

  return (
    <SimpleTreeView defaultExpandedItems={expandedItems}>
      {
        blogList.map((dirNode) => (
          <TreeItem itemId={dirNode.name} label={dirNode.name}>
            <div className="blog-item-container">{
              dirNode.children.map(
                item => <BlogItem blogItem={item} />
              )
            }</div>
          </TreeItem>
        ))
      }
    </SimpleTreeView>
  );
}