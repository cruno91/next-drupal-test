## Setup

1. `lando start`
2. Navigate to: https://decoupled.lndo.site
3. Install Drupal with "Standard" profile
4. Enter database credentials:

  - Username: drupal10
  - Password: drupal10
  - Database: drupal10
  - Host: database

5. Enable NextJS JSON:API module
6. Add a pathauto pattern alias for Articles as blog/[node:title]
7. Create an Article
8. Copy the contents of the .env.local example below into `next` and `next2`
9. `lando ssh -s next`
10. `npm install && npm run build && npm run dev`
11. In another terminal: `lando ssh -s next2`
12. `npm install && npm run build && npm run dev`
13. Navigate to: http://next.decoupled.lndo.site
14. Navigate to: http://next2.decoupled.lndo.site


### `.env.local
```
# See https://next-drupal.org/docs/environment-variables
NEXT_PUBLIC_DRUPAL_BASE_URL=https://decoupled.lndo.site
NEXT_IMAGE_DOMAIN=decoupled.lndo.site

# Required for On-demand Revalidation
DRUPAL_REVALIDATE_SECRET=secret
````
