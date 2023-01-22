## Setup

1. `lando start`
2. Navigate to: https://decoupled.lndo.site
3. Install Drupal with "Standard" profile
4. Enter database credentials:

  - Username: drupal10
  - Password: drupal10
  - Database: drupal10
  - Host: database

5. `lando drush en next_jsonapi admin_toolbar_tools -y`
6. Add a pathauto pattern alias for Articles as blog/[node:title]
7. Create an Article
8. Copy the contents of the .env.local example below into `next`
9. `lando next`
10. Navigate to: http://next.decoupled.lndo.site
11. `lando storybook`
12. Navigate to: http://storybook.decoupled.lndo.site


### .env.local
```
# See https://next-drupal.org/docs/environment-variables
NEXT_PUBLIC_DRUPAL_BASE_URL=https://decoupled.lndo.site
NEXT_IMAGE_DOMAIN=decoupled.lndo.site

# Required for On-demand Revalidation
DRUPAL_REVALIDATE_SECRET=secret
````
