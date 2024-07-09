<h3 align="center">ZenBank: A Modern Fintech Bank Application</h3>

## 📋 <a name="table">Table of Contents</a>

1. 🌟 [Introduction](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🔋 [Features](#features)
4. 🚀 [Benefits](#benefits)
5. 🤸 [Quick Start](#quick-start)
6. 📷 [Screenshots](#screenshots)

## <a name="introduction">🌟 Introduction</a>

ZenBank is a cutting-edge financial SaaS platform built with Next.js, designed to revolutionize personal banking experiences. It offers a seamless interface for managing multiple bank accounts, real-time transaction tracking, and effortless fund transfers between users.

### Why ZenBank?

In today's fast-paced digital world, managing finances across multiple accounts can be overwhelming. ZenBank simplifies this process by providing a unified platform that brings all your financial data together, offering insights and control like never before.

## <a name="tech-stack">⚙️ Tech Stack</a>

- Next.js
- TypeScript
- Appwrite
- Plaid
- Dwolla
- React Hook Form
- Zod
- TailwindCSS
- Chart.js
- ShadCN

## <a name="features">🔋 Features</a>

👉 **Authentication**: Ultra-secure SSR authentication with robust validations

👉 **Multi-Bank Integration**: Connect and manage multiple bank accounts in one place

👉 **Real-Time Transaction Tracking**: Stay updated with your financial activities as they happen

👉 **Comprehensive Dashboard**: Get a bird's-eye view of your finances with total balance, recent transactions, and spending categories

👉 **Inter-User Fund Transfers**: Easily transfer money to other ZenBank users

👉 **Responsive Design**: Seamless experience across desktop, tablet, and mobile devices

## <a name="benefits">🚀 Benefits</a>

1. **Centralized Financial Management**: No more juggling between different banking apps
2. **Enhanced Financial Visibility**: Gain insights into your spending patterns and account balances at a glance
3. **Time-Saving**: Streamlined processes for account management and fund transfers
4. **Security**: Built with modern security practices to keep your financial data safe
5. **User-Friendly Interface**: Intuitive design for effortless navigation and management

## <a name="quick-start">🤸 Quick Start</a>

**Prerequisites**

To run the project following is required: 
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

## <a name="screenshots">📷 Screenshots</a>

![ZenBank Dashboard](/screenshots/Dashboard.png)

*ZenBank's intuitive dashboard provides a comprehensive overview of your finances.*



![Transaction History](/screenshots/Transaction-History.png)

*Easily track and categorize your spending with our detailed transaction history.*

---

Built with ❤️
