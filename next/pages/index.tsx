import Head from "next/head"
import { GetStaticPropsResult } from "next"
import { DrupalNode } from "next-drupal"
import { drupal } from "lib/drupal"
import {absoluteUrl} from "../lib/utils";

import { Layout } from "components/layout"
import { CardGrid } from "components/organisms/card-grid/CardGrid";

export async function getStaticProps(
  context
): Promise<GetStaticPropsResult<IndexPageProps>> {
  const nodes = await drupal.getResourceCollectionFromContext<DrupalNode[]>(
    "node--article",
    context,
    {
      params: {
        "filter[status]": 1,
        "fields[node--article]": "title,path,field_image,uid,created",
        include: "field_image,uid",
        sort: "-created",
      },
    }
  )

  return {
    props: {
      nodes,
    },
  }
}

interface IndexPageProps {
  nodes: DrupalNode[]
}

const cards = [];

export default function IndexPage({ nodes }: IndexPageProps) {
  if (nodes.length > 0) {
    nodes.forEach((node) => {
      cards.push({
        title: node.title,
        imagePath: absoluteUrl(node.field_image.uri.url),
        imageAlt: node.field_image.resourceIdObjMeta.alt,
        description: "Testing 123...",
        link: node.path.alias,
        tags: ""
      });
    });
  }

  return (
    <Layout>
      <Head>
        <title>Next.js for Drupal</title>
        <meta
          name="description"
          content="A Next.js site powered by a Drupal backend."
        />
      </Head>
      <div>
        <h1 className="mb-10 text-6xl font-black">Latest Articles.</h1>
        {nodes?.length ? (
          <CardGrid columns="3" cards={cards}/>
        ) : (
          <p className="py-4">No nodes found</p>
        )}
      </div>
    </Layout>
  )
}
