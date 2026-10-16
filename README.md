# ZenBank

An unfinished learning project based on JavaScript Mastery's [banking app tutorial](https://www.youtube.com/watch?v=PuOVqP_cjkE). I followed the tutorial and changed the project naming; I did not complete the implementation.

The original project design and implementation approach come from the tutorial. This repository is kept as a record of my learning.

## Stack

Next.js, TypeScript, Appwrite, Plaid, Dwolla, React Hook Form, Zod, Tailwind CSS, Chart.js, and shadcn/ui.

## Local setup

The instructions below describe the existing development setup. Some flows may be incomplete.


Prerequisites: 
- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/el-jsn/jsm_banking.git
cd jsm_banking
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Set Up Environment Variables**

Create a new file named `.env` in the root of your project and add the following content:

```env
#NEXT
NEXT_PUBLIC_SITE_URL=

#APPWRITE
NEXT_PUBLIC_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
NEXT_PUBLIC_APPWRITE_PROJECT=
APPWRITE_DATABASE_ID=
APPWRITE_USER_COLLECTION_ID=
APPWRITE_BANK_COLLECTION_ID=
APPWRITE_TRANSACTION_COLLECTION_ID=
APPWRITE_SECRET=

#PLAID
PLAID_CLIENT_ID=
PLAID_SECRET=
PLAID_ENV=
PLAID_PRODUCTS=
PLAID_COUNTRY_CODES=

#DWOLLA
DWOLLA_KEY=
DWOLLA_SECRET=
DWOLLA_BASE_URL=https://api-sandbox.dwolla.com
DWOLLA_ENV=sandbox
```

Replace the placeholder values with your actual respective account credentials.

**Running the Project**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.

## Screenshots

![ZenBank Dashboard](/screenshots/Dashboard.png)

![Transaction History](/screenshots/Transaction-History.png)
