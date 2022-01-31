<h1 align="center">FishFry Tours Board</h1>

Demo: https://fishfryapp.herokuapp.com/
[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://fishfryapp.herokuapp.com/)

This is a simple Web application that tracks and manages boats.

Fishfry Tours is a small salmon guiding outfit based out of Cascadia, British Columbia - along the coast. They run a seasonal guided sport fishing tour of some of the more hidden inlets of Coastal British Columbia. In total they have 8 sport fishing boats with 12 guides.  At any given time there are at least 4 or 5 boats out in the waters. Sometimes the boats will meet each other to exchange gear and fuel for longer days at sea. 
 
The control office maintains a kanban-like control chart on a white board which describes the state of each boat. Some of the swimlanes are ‘Docked, Outbound to Sea, Inbound to Harbor, Maintenance’ 
 
The Boat Guides have expressed interest in having the control chart accessible online through their mobile phones (whenever there is service). Sometimes radio contact to other boats is not possible and using satellite services are too expensive to maintain constant communication. 
 
One of the boat guides is a web developer during the off season and offered to build the app. He insists on building it using an Agile Approach. 
 
The boat guides have varying computer skills. They mainly want to see the status of all the guide boats in the area at a glance and be able to move their cards into different swimlanes as needed.

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


## Commands

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