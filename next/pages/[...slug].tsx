import { GetStaticPathsResult, GetStaticPropsResult } from "next"
import Head from "next/head"
import { DrupalNode } from "next-drupal"

import { drupal } from "lib/drupal"
import { NodeArticle } from "components/templates/node/article/node--article"
import { NodeBasicPage } from "components/templates/node/basic-page/node--basic-page"
import { Layout } from "components/base/layout"

/**
 * Expected node types to display on this path (...slug from Drupal).
 */
const RESOURCE_TYPES = ["node--page", "node--article"]

/**
 * Generates a list of pages that will be pre-rendered at build time.
 */
export async function getStaticPaths(context): Promise<GetStaticPathsResult> {
  return {
    paths: await drupal.getStaticPathsFromContext(RESOURCE_TYPES, context),
    fallback: "blocking",
  }
}

/**
 * The page that will be pre-rendered at build time.
 */
export async function getStaticProps(
  context
): Promise<GetStaticPropsResult<NodePageProps>> {
  const path = await drupal.translatePathFromContext(context)

  if (!path) {
    return {
      notFound: true,
    }
  }

  // Determine the content type being displayed from the path.
  const type = path.jsonapi.resourceName

  // Modify query parameters of data to fetch depending on what content type is
  // being retrieved.
  let params = {}
  if (type === "node--article") {
    params = {
      include: "field_image," +
        "uid" //+
        // "field_content_items," +
        // "field_content_items.field_content_items," +
        // "field_content_items.field_content",
    }
  }

  // Fetch the data from Drupal.
  const resource = await drupal.getResourceFromContext<DrupalNode>(
    path,
    context,
    {
      params,
    }
  )

  // At this point, we know the path exists and it points to a resource.
  // If we receive an error, it means something went wrong on Drupal.
  // We throw an error to tell revalidation to skip this for now.
  // Revalidation can try again on next request.
  if (!resource) {
    throw new Error(`Failed to fetch resource: ${path.jsonapi.individual}`)
  }

  // If we're not in preview mode and the resource is not published,
  // Return page not found.
  if (!context.preview && resource?.status === false) {
    return {
      notFound: true,
    }
  }

  // Return the fetched data.
  return {
    props: {
      resource,
    },
  }
}

interface NodePageProps {
  resource: DrupalNode
}

export default function NodePage({ resource }: NodePageProps) {
  if (!resource) return null

  return (
    <Layout>
      <Head>
        <title>{resource.title}</title>
        <meta name="description" content="A Next.js site powered by Drupal." />
      </Head>
      {resource.type === "node--page" && <NodeBasicPage node={resource} />}
      {resource.type === "node--article" && <NodeArticle node={resource} />}
    </Layout>
  )
}
