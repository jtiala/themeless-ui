import { mdxComponents } from "@/utils/mdx";
import { Heading, Stack } from "@themeless-ui/react";
import { allPosts } from "contentlayer/generated";
import { format, parseISO } from "date-fns";
import { getMDXComponent } from "next-contentlayer/hooks";
import { notFound } from "next/navigation";

export const generateStaticParams = async () =>
  allPosts.map((post) => ({ slug: post._raw.flattenedPath }));

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);

  if (!post) {
    notFound();
  }

  return { title: post.title };
};

export default async function Post({ params }: { params: { slug: string } }) {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);

  if (!post) {
    notFound();
  }

  const Content = getMDXComponent(post.body.code);

  return (
    <article>
      <Stack>
        <Heading level={1}>{post.title}</Heading>
        {/* TODO: Add `time` type to <Text> and use it here */}
        <time dateTime={post.date}>
          {format(parseISO(post.date), "LLLL d, yyyy")}
        </time>
        <Content components={mdxComponents} />
      </Stack>
    </article>
  );
}
