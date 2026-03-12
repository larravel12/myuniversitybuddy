import './App.css'
import FAQSection from './components/FAQSection'
import ContactHelp from './components/ContactHelp'

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>MyUniversityBuddy</h1>
        <p>Your simple student dashboard</p>
      </header>

      <section className="hero">
        <h2>Welcome, Student!</h2>
        <p>
          This dashboard helps you quickly access common university information,
          support details, and frequently asked questions.
        </p>
      </section>

      <section className="card-grid">
        <div className="card">
          <h3>Student</h3>
          <p>Name: Larra Student</p>
          <p>Student ID: 2023-01707</p>
          <p>Program: BSICT</p>
          <p>Year Level: 3rd Year</p>
        </div>

        <div className="card">
          <h3>Today’s Reminder</h3>
          <p>Check class updates and prepare your study tasks.</p>
        </div>

        <div className="card">
          <h3>Quick Access</h3>
          <p>View FAQs and school contact details below.</p>
        </div>
      </section>

      <FAQSection />
      <ContactHelp />
    </div>
  )
}

export default App