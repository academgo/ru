import React from 'react'
import styles from './RelatedPosts.module.scss';
import Link from 'next/link';

export const RelatedPosts = ({ posts }) => {
  return (
    <div className={styles.relatedPosts}>
      <h2 className={styles.header}>Также интересно почитать</h2>
      {posts && (
        <ul className={styles.list}>
          {posts.map((post) => (
            <li className={styles.relatedPost} key={post.destination}>
              <span className={styles.category}>{post.category}</span>
              <Link
                className={styles.link}
                href={post.destination}
              >
                {post.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
