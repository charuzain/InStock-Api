# InStock

## Project Setup

### Installation - Server

#### Clone Repository

Clone the project repository to your local machine by running the following command:

```bash
git clone https://github.com/charuzain/InStock-Api.git
```

#### Setup

1. Navigate to the project folder in your terminal.

2. Install the project dependencies by running the following command:

```bash
npm install
```

#### Run

To run the server locally, use nodemon by executing the following command:

```bash
npm start
```

### .env file

Create an \`.env\` file in your root folder and replace the values with your own configuration values.

```env
# The port that the server will listen on.
PORT=8080
BACKEND_URL=http://localhost
DB_LOCAL_DBNAME='instock'
DB_LOCAL_USER='root'
DB_LOCAL_PASSWORD='your local password'
```

## MySQL DB and Data

To set up the database for the project, follow these steps:

1. **Create Database**: Connect to your local MySQL server and run the following command to create a database named 'instock':

```sql
create database instock;
```

2. **Switch to Database**: After creating the database, switch to the 'instock' database by running the following command:

```sql
use instock;
```

3. **Run Migrations and Seed Data**: Navigate to the server folder of your project and run the migrations and seed data scripts. 

```bash
npx knex migrate:latest
```
```bash
npx knex seed:run
```


These commands will set up the necessary tables and seed data for the project.


## 👷‍♂️ About The Project

This was an Agile project leveraging JIRA and mimicking a sprint. We were given a list of required features/functionality and a figma mockup.

### The Application:
InStock is a fully-fledged warehouse and inventory tracking full-stack web application. It is designed with a mobile-first approach, ensuring full responsiveness across different screen sizes.


### The Approach:
- **Requirement Breakdown:** We divided the project requirements into manageable tickets, accurately estimating the effort required in developer hours for each task.

- **Sprint Planning:** Our team meticulously planned each sprint, strategically assigning tickets to team members based on their expertise and availability.

- **Rotating Leadership:** To foster collaboration and ensure accountability, each team member took turns serving as the team lead for a day. During their leadership day, they were responsible for reviewing and approving pull requests from other team members.

- **Daily Stand-ups:** Every morning, we convened for a brief stand-up meeting to discuss our progress, address any challenges or blockers encountered during ticket execution, and coordinate efforts to ensure seamless workflow.


### Features:
- **View all Warehouses:** Users can see a list of all warehouses along with their details.
- **Add/Edit/Delete Warehouses:** Users have the ability to add new warehouses, edit existing ones, and delete warehouses as needed.
- **View Warehouse Details:** Users can view detailed information about a specific warehouse, including its inventory.
- **Edit/Delete Inventory:** Users can make changes to the inventory of a specific warehouse, including editing and deleting items.
- **View All Inventory:** Users can see a comprehensive list of all inventory items, along with the warehouse to which each item belongs.
- **Sort and Search:** Users can sort the warehouse and inventory lists based on different criteria and perform searches to filter the results.

### Built With

#### Front-end

- React
- JavaScript
- HTML5
- Sass
- CSS3

#### Back-end

- Node.js
- Express


## 👷 Contributors

- [Charu](https://github.com/charuzain)
- [Chao](https://github.com/Chao-Meng)
- [Hilary](https://github.com/hilarykhc/instock-client)
- [Pallavi](https://github.com/Pallavi1844)
- [Preety](https://github.com/preety92)