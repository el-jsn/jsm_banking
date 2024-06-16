import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox';
import RightSidebar from '@/components/ui/RightSidebar';
import React from 'react'

const Home = () => {
  const loggedIn = {firstName: 'Jashan', lastName: 'JSM', email:'atomixshadow@proton.me'};

  return (
    <section className="home">
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox 
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || 'Guest'}
            subtext="Accesss and Manage your account and transactions efficiently."
          />

          <TotalBalanceBox
          accounts={[]}
          totalBanks={1}
          totalCurrentBalance={1250.35}
          />
        </header>

        RECENT TRANSACTIONS
      </div>

      <RightSidebar
        user={loggedIn}
        transactions = {[]}
        banks={[{currentBalance: 123.50}, {currentBalance: 500.40}]}
      />
    </section>
  )
}

export default Home