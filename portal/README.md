# Portal

## Prepare articles

C:\temp\git\homepage\portal\copyArticles.py

## Next.js Instructions

`npm install --legacy-peer-deps` to install dependencies

for local run, rename next.config.js to _next.config.js

`npm run dev` to run for development

open in the browser: http://localhost:3000

you can stop the hosting by pressing STRG + C

for server hosting, rename _next.config.js to next.config.js

`npm run build` to create build folder

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Remarks

Image duplication required in "public/images" and "images" due static final rendering

Display content is managed in JSON files, e.g. "tools overview" is located in "resources/overview_tools.json". An overview about all possible tool attributes is avaiable in "resources/overview_metadata.json".

## packages

New packages release to CRAN June which may be of interest are:
* [clinDataReview](https://cran.r-project.org/package=clinDataReview)
* [clinUtils](https://cran.r-project.org/package=clinUtils)
* [inTextSummaryTable](https://cran.r-project.org/package=inTextSummaryTable)
* [patientProfilesVis](https://cran.r-project.org/package=patientProfilesVis)
* [visR](https://cran.r-project.org/package=visR)
