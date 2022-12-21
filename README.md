1. `lando start`
2. Navigate to: https://decoupled.lndo.site
3. Install Drupal with "Standard" profile
3. Enter database credentials:
   4. Username: drupal10
   5. Password: drupal10
   6. Database: drupal10
   7. Host: database
8. Enable NextJS JSON:API module
9. Add a pathauto pattern alias for Articles as blog/[node:title]
10. Create an Article
11. Copy the contents of the .env.local example below into `next` and `next2`
12. `lando ssh -s next`
13. `npm install && npm run build && npm run dev`
14. In another terminal: `lando ssh -s next2`
15. `npm install && npm run build && npm run dev`
16. Navigate to: http://next.decoupled.lndo.site
17. Navigate to: http://next2.decoupled.lndo.site


### `.env.local
```
# See https://next-drupal.org/docs/environment-variables
NEXT_PUBLIC_DRUPAL_BASE_URL=https://decoupled.lndo.site
NEXT_IMAGE_DOMAIN=decoupled.lndo.site

# Required for On-demand Revalidation
DRUPAL_REVALIDATE_SECRET=secret
````
