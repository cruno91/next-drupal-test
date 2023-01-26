import { DrupalNode } from "next-drupal"
import { absoluteUrl, formatDate } from "lib/utils"

import { Card } from "../../../molecules/cards/card/Card";

interface NodeArticleTeaserProps {
  node: DrupalNode
}

export function NodeArticleTeaser({ node, ...props }: NodeArticleTeaserProps) {
  return (
    <Card
      title={node.title}
      imagePath={absoluteUrl(node.field_image.uri.url)}
      imageAlt={node.field_image.resourceIdObjMeta.alt}
      description="Testing 123..."
      link={node.path.alias} tags=""
    />
  )
}
