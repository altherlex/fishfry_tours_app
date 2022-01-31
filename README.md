<h1 align="center">FishFry Tours Board</h1>

[![CircleCI](https://circleci.com/gh/altherlex/fishfry_tours_app/tree/master.svg?style=svg)](https://circleci.com/gh/altherlex/fishfry_tours_app/tree/master)
[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://fishfryapp.herokuapp.com/api/)

Demo: [fishfryapp Admin](https://fishfryapp.herokuapp.com/backdoor/)
API code: [github.com/altherlex/fishfry_tours_api](https://github.com/altherlex/fishfry_tours_api)

This is a simple Web application that tracks and manages boats.

Fishfry Tours is a small salmon guiding outfit based out of Cascadia, British Columbia - along the coast. They run a seasonal guided sport fishing tour of some of the more hidden inlets of Coastal British Columbia. In total they have 8 sport fishing boats with 12 guides.  At any given time there are at least 4 or 5 boats out in the waters. Sometimes the boats will meet each other to exchange gear and fuel for longer days at sea. 
 
The control office maintains a kanban-like control chart on a white board which describes the state of each boat. Some of the swimlanes are ‘Docked, Outbound to Sea, Inbound to Harbor, Maintenance’ 
 
The Boat Guides have expressed interest in having the control chart accessible online through their mobile phones (whenever there is service). Sometimes radio contact to other boats is not possible and using satellite services are too expensive to maintain constant communication. 
 
One of the boat guides is a web developer during the off season and offered to build the app. He insists on building it using an Agile Approach. 
 
The boat guides have varying computer skills. They mainly want to see the status of all the guide boats in the area at a glance and be able to move their cards into different swimlanes as needed.

## Assessment Scoring

### Back-end component assessment
- :heavy_check_mark: Loads without errors
- :heavy_check_mark: has multiple modules/components/classes
- :heavy_check_mark: implement error handling
- :heavy_check_mark: RESTful
- :heavy_check_mark: Good formatting and comments
- :heavy_check_mark: Can list, view, create, update, delete items

### Front-end component assessment
- :heavy_check_mark: Loads without errors
- :heavy_check_mark: has multiple modules/components/class
- :heavy_check_mark: implements data binding
- :heavy_check_mark: Mobile friendly
- :heavy_check_mark: Good formatting and comments
- :heavy_check_mark: Can list, view, create, update, delete items

### QA test assessment
- :heavy_check_mark: Executable test plans & scripts that will ensure applications meet business requirements, system goals, and fulfill end-user requirement.
- :heavy_check_mark: Sufficient amount (>5 valuable unit tests) of test coverage (TDD) using a modern testing framework.
- :heavy_check_mark: Written paragraph on what approach you would take for writing functional tests for this application:
  - :heavy_check_mark: Functional tests are written and executed with [Cypress](https://www.cypress.io/) (End to end tests)

### DevOps Pipeline Assessment
- :heavy_check_mark: The pipeline checks out code from a public repository
- :heavy_check_mark: The pipeline checks builds code (if applicable)
- :heavy_check_mark: The pipeline sets configuration settings
- :heavy_check_mark: The pipeline deploys the app to a cloud-hosted environment


## Technical Info

### Open Source Tools

- [Node.js](https://nodejs.org) v12 or greater
- Typescript
- React with functional components and hooks
- Redux Toolkit
- Components & styling with Material-UI and Emotion
- Drag & Drop using react-beautiful-dnd
- Bootstrapped with KnBoard & cra-template-typekit
- Unit tests with React Testing Library
- Integration tests with Cypress
- typescript
- redux
- react
- axios
- eslint
- prettier
- craco


### Next Steps

- <strike>Build Circle CI - frontend/banckend</strike>
- Integrate CircleCi tests + linter on Heroku pipeline
- <strike>Make static Dango files public in Heroku</strike>
- Use Git Worflow
- Add linter to the pipeline
- <strike>Remove column dragdrop</strike>
- <strike>Fix updating</strike>
- <strike>Fix Linter</strike>
- <strike>Fix avatar feature</strike>
- <strike>Fix updating task label</strike>


### Commands

```shell
npm start
npm build

npm test
npm test:coverage

# Check formatting & quality with eslint
npm lint
npm lint:fix

# Integration tests
npm cypress run
npm cypress open

# Check formatting with Black
black --exclude .venv .
```

### Test:Covare

```shell
Test Suites: 7 passed, 7 total
Tests:       44 passed, 44 total
Snapshots:   3 passed, 3 total
Time:        8.09s
```
