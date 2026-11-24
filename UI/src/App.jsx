
import './App.css'

function App() {
  const handleSubmit = (e) => {
    e.preventDefault()

    alert('Message sent successfully! Thank you for contacting us.')

    e.target.reset()
  }

  return (
    <>
      {/* Navbar */}
      <div className="w3-flex w3-top w3-white w3-wide w3-padding w3-card">
        <a href="#home" className="w3-button">
          Gourmet au Catering
        </a>

        <nav className="w3-flex w3-hide-small" style={{ marginLeft: 'auto' }}>
          <a href="#about" className="w3-button">About</a>
          <a href="#menu" className="w3-button">Menu</a>
          <a href="#contact" className="w3-button">Contact</a>
        </nav>
      </div>

      {/* Header */}
      <header id="home" className="w3-display-container">
        <img
          src="/img_catering.jpg"
          style={{ width: '100%' }}
          alt="Catering"
        />

        <div className="w3-display-bottomleft w3-padding w3-text-white w3-opacity-min">
          <h1>Le Catering</h1>
        </div>
      </header>

      {/* Page Content */}
      <main className="w3-content" style={{ maxWidth: '1000px' }}>

        {/* About Section */}
        <section
          id="about"
          className="w3-grid w3-padding-64"
          style={{
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))'
          }}
        >
          <div className="w3-padding-large">
            <img
              src="/img_tablesetting2.jpg"
              className="w3-round w3-opacity-min"
              style={{ width: '100%' }}
              alt="Table"
            />
          </div>

          <div className="w3-padding-large">
            <h1 className="w3-center">About Catering</h1>

            <h5 className="w3-center">
              Tradition since 1889
            </h5>

            <p className="w3-large">
              The Catering was founded in blabla by Mr. Smith in lorem ipsum
              dolor sit amet, consectetur adipiscing elit consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>

            <p className="w3-large w3-text-grey">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa
              qui officia deserunt mollit anim id est laborum consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
          </div>
        </section>

        <hr />

        {/* Menu Section */}
        <section
          id="menu"
          className="w3-grid w3-padding-64"
          style={{
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))'
          }}
        >
          <div className="w3-padding-large">
            <h1 className="w3-center">Our Menu</h1>

            <h4>Bread Basket</h4>
            <p className="w3-text-grey">
              Assortment of fresh baked fruit breads and muffins 5.50
            </p>

            <h4>Belgian Waffle</h4>
            <p className="w3-text-grey">
              Vanilla flavored batter with malted flour 7.50
            </p>

            <h4>Scrambled Eggs</h4>
            <p className="w3-text-grey">
              Scrambled eggs, roasted red pepper and garlic, with green onions 7.50
            </p>

            <h4>Blueberry Pancakes</h4>
            <p className="w3-text-grey">
              With syrup, butter and lots of berries 8.50
            </p>
          </div>

          <div className="w3-padding-large">
            <img
              src="/img_tablesetting.jpg"
              className="w3-round w3-opacity-min"
              alt="Menu"
              style={{ width: '100%' }}
            />
          </div>
        </section>

        <hr />

        {/* Contact Section */}
        <section id="contact" className="w3-container w3-padding-64">
          <h1>Contact</h1>

          <p>
            We offer full-service catering for any event, large or small.
          </p>

          <p className="w3-text-blue-grey w3-large">
            <b>
              Catering Service, 42nd Living St, 43043 New York, NY
            </b>
          </p>

          <p>
            You can also contact us by phone 00553123-2323 or email
            catering@catering.com, or send us a message here:
          </p>

          <form onSubmit={handleSubmit}>
            <p>
              <input
                className="w3-input w3-padding-16"
                type="text"
                placeholder="Name"
                required
                name="Name"
              />
            </p>

            <p>
              <input
                className="w3-input w3-padding-16"
                type="number"
                placeholder="How many people"
                required
                name="People"
                min="1"
              />
            </p>

            <p>
              <input
                className="w3-input w3-padding-16"
                type="datetime-local"
                required
                name="date"
              />
            </p>

            <p>
              <input
                className="w3-input w3-padding-16"
                type="text"
                placeholder="Message / Special requirements"
                required
                name="Message"
              />
            </p>

            <p>
              <button
                className="w3-button w3-light-grey w3-section"
                type="submit"
              >
                SEND MESSAGE
              </button>
            </p>
          </form>
        </section>

      </main>

      {/* Map */}
      <img
        src="/map.jpg"
        style={{ width: '100%' }}
        alt="Map"
      />

      {/* Footer */}
      <footer className="w3-center w3-light-grey w3-padding-32">
        <p>
          Powered by{' '}
          <a
            href="https://www.w3schools.com/w3css/default.asp"
            title="W3.CSS"
            target="_blank"
            rel="noreferrer"
          >
            w3.css
          </a>
        </p>
      </footer>
    </>
  )
}

export default App
