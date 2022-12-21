## Setup

1. `lando start`
2. Navigate to: https://decoupled.lndo.site
3. Install Drupal with "Standard" profile
3. Enter database credentials:

  - Username: drupal10
  - Password: drupal10
  - Database: drupal10
  - Host: database

4. Enable NextJS JSON:API module
5. Add a pathauto pattern alias for Articles as blog/[node:title]
6. Create an Article
7. Copy the contents of the .env.local example below into `next` and `next2`
8. `lando ssh -s next`
9. `npm install && npm run build && npm run dev`
10. In another terminal: `lando ssh -s next2`
11. `npm install && npm run build && npm run dev`
12. Navigate to: http://next.decoupled.lndo.site
13. Navigate to: http://next2.decoupled.lndo.site


### `.env.local
```
# See https://next-drupal.org/docs/environment-variables
NEXT_PUBLIC_DRUPAL_BASE_URL=https://decoupled.lndo.site
NEXT_IMAGE_DOMAIN=decoupled.lndo.site

# Required for On-demand Revalidation
DRUPAL_REVALIDATE_SECRET=secret
````
