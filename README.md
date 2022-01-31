<h1 align="center">FishFry Tours Board</h1>

[![CircleCI](https://circleci.com/gh/altherlex/fishfry_tours_app/tree/master.svg?style=svg)](https://circleci.com/gh/altherlex/fishfry_tours_app/tree/master)
[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://fishfryapp.herokuapp.com/)

Demo: https://fishfryapp.herokuapp.com/

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

## Next Steps

- Build Circle CI - frontend/banckend
- Make static Dango files public in Heroku
- User Git Worflow


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

## Test:Covare

```shell
-------------------------|----------|----------|----------|----------|-------------------|
File                     |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
-------------------------|----------|----------|----------|----------|-------------------|
All files                |    41.29 |    10.89 |    24.49 |    41.37 |                   |
 src                     |    60.67 |        0 |     6.25 |    63.53 |                   |
  App.tsx                |        0 |        0 |        0 |        0 |... 20,23,26,33,34 |
  AuthenticatedApp.tsx   |        0 |      100 |        0 |        0 |... 25,36,37,42,43 |
  api.tsx                |    78.26 |        0 |        0 |    78.26 |     9,10,13,14,16 |
  const.ts               |      100 |      100 |      100 |      100 |                   |
  routing.tsx            |        0 |      100 |      100 |        0 |                 3 |
  store.ts               |        0 |        0 |        0 |        0 | 18,30,36,37,38,46 |
  styles.tsx             |    85.71 |        0 |        0 |      100 |                81 |
  types.ts               |        0 |        0 |        0 |        0 |                   |
 src/components          |     4.55 |     2.63 |        8 |      4.6 |                   |
  AvatarOption.tsx       |        0 |      100 |        0 |        0 |           7,22,23 |
  AvatarTag.tsx          |        0 |      100 |        0 |        0 |             15,16 |
  Close.tsx              |        0 |        0 |        0 |        0 |           8,19,20 |
  ColumnTitle.tsx        |        0 |        0 |        0 |        0 |... 32,133,135,151 |
  Flex.tsx               |        0 |      100 |      100 |        0 |                 3 |
  FullPageSpinner.tsx    |        0 |      100 |        0 |        0 |               4,5 |
  LabelChip.tsx          |        0 |        0 |        0 |        0 |          12,13,15 |
  MemberAvatar.tsx       |        0 |        0 |        0 |        0 |             10,11 |
  Navbar.tsx             |        0 |      100 |        0 |        0 |... 26,39,40,42,49 |
  PageError.tsx          |        0 |      100 |        0 |        0 |           5,18,19 |
  SEO.tsx                |      100 |      100 |      100 |      100 |                   |
  Spinner.tsx            |      100 |       50 |      100 |      100 |                13 |
  UserMenu.tsx           |        0 |        0 |        0 |        0 |... 41,44,45,46,49 |
 src/features/auth       |    67.47 |    21.43 |    66.67 |     67.5 |                   |
  Auth.tsx               |      100 |      100 |      100 |      100 |                   |
  AuthSlice.tsx          |    54.55 |        0 |       60 |    55.56 |... 33,134,145,147 |
  Footer.tsx             |    91.67 |      100 |    66.67 |    91.67 |                35 |
  LoginDialog.tsx        |    91.67 |       50 |       80 |       90 |                44 |
 src/features/board      |    44.53 |       25 |     37.5 |    44.53 |                   |
  Board.tsx              |        0 |        0 |        0 |        0 |... 18,131,136,142 |
  BoardList.tsx          |    91.43 |    64.29 |    83.33 |    93.33 |           127,128 |
  BoardSlice.tsx         |    48.33 |        0 |    27.78 |    48.33 |... 47,150,151,159 |
  index.ts               |        0 |        0 |        0 |        0 |                   |
 src/features/column     |    34.48 |      100 |     9.09 |    35.71 |                   |
  Column.tsx             |        0 |      100 |        0 |        0 |    14,21,39,40,43 |
  ColumnSlice.tsx        |    41.67 |      100 |    11.11 |    43.48 |... 75,76,77,80,81 |
  index.ts               |        0 |        0 |        0 |        0 |                   |
 src/features/home       |      100 |      100 |      100 |      100 |                   |
  Home.tsx               |      100 |      100 |      100 |      100 |                   |
 src/features/label      |    20.97 |        0 |     5.26 |    21.31 |                   |
  LabelFields.tsx        |        0 |        0 |        0 |        0 |... 9,40,42,44,117 |
  LabelRow.tsx           |        0 |        0 |        0 |        0 |... 58,59,64,68,81 |
  LabelSlice.tsx         |    36.11 |        0 |     9.09 |    36.11 |... 78,81,82,85,93 |
 src/features/member     |    58.33 |      100 |    16.67 |    58.33 |                   |
  MemberSlice.tsx        |    58.33 |      100 |    16.67 |    58.33 |    11,31,34,39,52 |
 src/features/profile    |    66.33 |    42.86 |    51.61 |    65.59 |                   |
  Profile.tsx            |    92.86 |    83.33 |      100 |    92.31 |             69,71 |
  ProfileSlice.tsx       |    43.75 |    16.67 |    26.67 |    44.68 |... 25,128,129,131 |
  UserAvatar.tsx         |    81.82 |        0 |       50 |       80 |    84,122,133,135 |
 src/features/responsive |    66.67 |      100 |        0 |    66.67 |                   |
  ResponsiveSlice.tsx    |    66.67 |      100 |        0 |    66.67 |             17,25 |
 src/features/sidebar    |        0 |      100 |        0 |        0 |                   |
  Sidebar.tsx            |        0 |      100 |        0 |        0 |... 82,87,88,90,93 |
 src/features/task       |     4.38 |        0 |     1.09 |     4.47 |                   |
  AddTask.tsx            |        0 |      100 |        0 |        0 | 17,18,20,21,22,25 |
  CreateTaskDialog.tsx   |        0 |        0 |        0 |        0 |... 31,135,153,157 |
  EditTaskDialog.tsx     |        0 |        0 |        0 |        0 |... 67,371,404,406 |
  Task.tsx               |        0 |        0 |        0 |        0 |... 63,164,167,173 |
  TaskLabels.tsx         |        0 |      100 |        0 |        0 |  8,18,19,20,22,25 |
  TaskList.tsx           |        0 |        0 |        0 |        0 |... 90,106,107,112 |
  TaskSlice.tsx          |    20.59 |        0 |        5 |    21.21 |... 66,167,173,174 |
 src/features/toast      |      100 |       50 |      100 |      100 |                   |
  Toast.tsx              |      100 |       50 |      100 |      100 |                26 |
  ToastSlice.tsx         |      100 |      100 |      100 |      100 |                   |
 src/utils               |    86.93 |    53.85 |    45.45 |    87.43 |                   |
  colors.ts              |    98.57 |    66.67 |    66.67 |    98.57 |           164,166 |
  localStorage.tsx       |      100 |      100 |      100 |      100 |                   |
  reorder.tsx            |        0 |        0 |        0 |        0 |... 41,49,51,53,59 |
  shortcuts.ts           |        0 |        0 |        0 |        0 |               1,2 |
  testHelpers.tsx        |    71.43 |      100 |    33.33 |    83.33 |                47 |
-------------------------|----------|----------|----------|----------|-------------------|

Test Suites: 7 passed, 7 total
Tests:       44 passed, 44 total
Snapshots:   3 passed, 3 total
Time:        8.09s
```
