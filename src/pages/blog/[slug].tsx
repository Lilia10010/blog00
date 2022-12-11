import { GetStaticPaths, GetStaticProps } from "next";
import { PostDocument, usePostQuery } from "../../generated/graphql";
import { client, ssrCache } from "../../lib/urql";

export default function Post({ slug }) {
  const [{ data: post }] = usePostQuery({
    variables: { slug },
  });
  return (
    <div>
      <p>{post?.post?.title}</p>
      <img
        className="w-full h-96 object-cover"
        src={post?.post?.coverImage?.url}
        alt="imagem"
      />
      <div
        className="mt-6 prose prose-lg mx-auto"
        dangerouslySetInnerHTML={{ __html: post?.post?.content.html }}
      />
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  await client.query(PostDocument, { slug: params?.slug }).toPromise();

  return {
    props: {
      urqlState: ssrCache.extractData(),
      slug: params?.slug,
    },
    revalidate: 60 * 60 * 24, //a cada 24 horas
  };
};
