# Monorepo for teaching Angular concepts
**create a new repo**
* npx nx g @nx/angular:application standalone-app


## Run projects
**change-detection:**
  * npx nx run change-detection:serve
  * npx nx run change-detection:test
  * npx nx run change-detection:lint
  * npx nx run change-detection:build
  * npx nx g @nrwl/angular:component todos --project=change-detection

**ngrx:**
 * npx nx run ngrx:serve

**custom-protocol:**
* npx nx run custom-protocol:serve

**standalone-app:**
* npx nx run standalone-app:serve

## Understand this workspace

Run `nx graph` to see a diagram of the dependencies of the projects.

