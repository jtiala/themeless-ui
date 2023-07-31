import { Anchor, Heading, List, Stack, Text } from "@themeless-ui/react";
import { allPosts } from "contentlayer/generated";
import { compareDesc } from "date-fns";
import Link from "next/link";

export default async function Home() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date)),
  );

  return (
    <article>
      <Stack>
        <Heading level={1}>All posts</Heading>
        {posts.length === 0 && <Text>No posts.</Text>}
        {posts.length > 0 && (
          <List>
            {posts.map((post) => (
              <List.Item key={post._id}>
                <Link href={post.url} passHref legacyBehavior>
                  <Anchor>{post.title}</Anchor>
                </Link>
              </List.Item>
            ))}
          </List>
        )}
      </Stack>
    </article>
  );
}
