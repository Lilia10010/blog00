import {
  PageDocument,
  PostsDocument,
  usePageQuery,
  usePostsQuery,
} from "../../generated/graphql";
import { client, ssrCache } from "../../lib/urql";

import { GetStaticProps } from "next";
import Link from "next/link";

export default function Blog() {
  const [{ data: posts }] = usePostsQuery();
  const [{ data: page }] = usePageQuery({
    variables: {
      slug: "blog",
    },
  });
  console.log("🚀 ~ file: index.tsx:16 ~ Blog ~ page", page);

  return (
    <div>
      <h1>{page?.page?.title}</h1>
      <h3>{page?.page?.subtitle}</h3>
      {posts?.posts.map((post, index) => (
        <div key={index}>
          <Link href={`/blog/${post.slug}`}>
            <h3>{post.title}</h3>
          </Link>
          <p>{post.excerpt}</p>
          <br />
        </div>
      ))}
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  await Promise.all([
    client.query(PostsDocument).toPromise(),
    client.query(PageDocument, { slug: "blog" }).toPromise(),
  ]);

  return {
    props: {
      urqlState: ssrCache.extractData(),
    },
  };
};
