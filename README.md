
# Project : Atlan SQL Datahouse

This is a full web based application to run and handle all the data instensive queries. 
The application is made using React with Next.js as the supporting framwework.
 


## Features

- ☀️/🌚 Light/dark mode toggle editor theme
- 🌐 Cross platform ( Being web based) 
- 💪🏼 Ability to render large sets of rows and filter results on each column
- 🧐 Basic validations on queries such as is table name missing 
- ⌛️ Ability to store your queries history and reuse them ⏮️
- 👨🏼‍💻 Database engineers  love their queries (we got you covered) *BOOKMARK* 📌 them 
- 📑 Quickly get access to all tables and their schemas 


## Optimizations

* **Accessibility**
  >This application is designed keeping in my mind the nature of users. There can many queries which are repeattedly used , and copy-pasting evertime is not productive. Hence we introduced BOOKMARK option. Just load them quickly

* **Performance**
  >The application passes all the performace criteria in terms of web vitals scores. Adding below the same
  These results are obtained from running tests on lighthouse.
  ![image](https://user-images.githubusercontent.com/40730167/198918592-cb7e8cd3-f167-444a-ac26-50e1b19c26d9.png)

* **Plugins and Framework**
    | Name | Usgae         |
    |-----:|---------------|
    |     Next.js| front-end and back-end framework        |
    |     Vercel| Hosting solution               |
    |     Tailwind CSS| UI library                | 
    |Monaco Editor| To add support for intellisense and langauge support (also used in VS-CODE) https://github.com/microsoft/monaco-editor#readme |
    |React-icons| To use the basic SVG's for presenation purporse https://github.com/react-icons/react-icons#readme|
    |ag-grid| Used for displaying all the table data fetched , this library is very efficient in handling all UI adjustments and does not bottle necks when given heavy data sets https://www.ag-grid.com/react-grid/|

* **Hosting**
  >Used vercel as hosting solution, as both Next.js and Vercel are devloped by same team and are optimised to handle Next.js apps.
  






