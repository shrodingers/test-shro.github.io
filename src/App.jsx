import React, { useState } from 'react';

const TABS = [
  { key: 'about', label: 'About' },
  { key: 'experience', label: 'Experience' },
  { key: 'articles', label: 'Articles' },
  { key: 'contact', label: 'Contact' },
];

function App() {
  const [tab, setTab] = useState('about');

  return (
    <div className="app-container">
      <header>
        <h1>Margot Hutton</h1>
        <h2>Journalist at TV5Monde</h2>
        <nav className="tabs-nav">
          {TABS.map(({ key, label }) => (
            <button
              key={key}
              className={tab === key ? 'tab active' : 'tab'}
              onClick={() => setTab(key)}
              type="button"
            >
              {label}
            </button>
          ))}
        </nav>
      </header>

      {tab === 'about' && (
        <section className="about-section">
          <div className="about-photo-wrap">
            <img
              src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=facearea&w=140&h=140&facepad=2"
              alt="Margot Hutton"
              className="about-photo"
              width={140}
              height={140}
            />
          </div>
          <h3>About</h3>
          <p>
            Margot Hutton is a passionate journalist currently working at TV5Monde. She specializes in international news, storytelling, and investigative reporting. Margot is dedicated to bringing untold stories to light and making complex topics accessible to a broad audience.
          </p>
          <p>
            Welcome to her portfolio. Explore her biography, experience, selected articles, and get in touch.
          </p>
        </section>
      )}

      {tab === 'experience' && (
        <section>
          <h3>Experience</h3>
          <ul className="experience-list">
            <li>
              <strong>TV5MONDE</strong> – Journaliste web (Permanent)<br/>
              <span className="exp-date">Oct 2021 – Present · 3 yrs 10 mos</span>
            </li>
            <li>
              <strong>TV5MONDE</strong> – Journaliste pigiste (Freelance)<br/>
              <span className="exp-date">Jul 2021 – Sep 2021 · 3 mos</span><br/>
              <span className="exp-location">Paris, Île-de-France, France</span>
            </li>
            <li>
              <strong>BFMTV</strong> – Journaliste pigiste (Freelance)<br/>
              <span className="exp-date">Jun 2021 – Sep 2021 · 4 mos</span><br/>
              <span className="exp-location">Paris, Île-de-France, France</span>
            </li>
            <li>
              <strong>France Télévisions</strong> – Journaliste pigiste (Freelance)<br/>
              <span className="exp-date">May 2021 – Sep 2021 · 5 mos</span>
            </li>
            <li>
              <strong>France Télévisions</strong> – Journaliste (Contract)<br/>
              <span className="exp-date">Feb 2021 – Apr 2021 · 3 mos</span><br/>
              <span className="exp-location">Saint-Pierre-et-Miquelon</span>
            </li>
            <li>
              <strong>France Télévisions</strong> – Journaliste pigiste (Freelance)<br/>
              <span className="exp-date">Oct 2020 – Jan 2021 · 4 mos</span><br/>
              <span className="exp-location">Saint-Denis, Reunion</span><br/>
              <span className="exp-desc">- Réalisation de reportages web radio et TV sur l'actualité de l'île de La Réunion<br/>- Tenue du fil d'actualité "Les Outre-mer en continu"</span>
            </li>
            <li>
              <strong>France Télévisions</strong> – Journaliste multimédia (Apprenticeship)<br/>
              <span className="exp-date">Sep 2019 – Aug 2020 · 1 yr</span><br/>
              <span className="exp-location">Paris Area, France</span>
            </li>
            <li>
              <strong>Ouest-France</strong> – Secrétaire de rédaction (Internship)<br/>
              <span className="exp-date">Jul 2019 – Aug 2019 · 2 mos</span><br/>
              <span className="exp-location">Nantes, Pays de la Loire, France</span>
            </li>
            <li>
              <strong>France Télévisions</strong> – Journaliste stagiaire (Internship)<br/>
              <span className="exp-date">Jun 2019 – Jun 2019 · 1 mo</span><br/>
              <span className="exp-location">Saint-Pierre, Saint-Pierre, Saint Pierre and Miquelon</span>
            </li>
            <li>
              <strong>McGill Le Délit</strong> – Éditrice actualité (Part-time)<br/>
              <span className="exp-date">Jan 2018 – Apr 2018 · 4 mos</span><br/>
              <span className="exp-location">Montreal, Canada Area</span><br/>
              <span className="exp-desc">- Coordination de la section "actualités" du Délit, journal francophone hebdomadaire de l'Université McGill<br/>- Recherche de contributeurs, édition, mise en page, participation aux conférences de rédaction<br/>- Rédaction d'articles sur l'actualité du campus et le monde francophone</span>
            </li>
          </ul>
        </section>
      )}

      {tab === 'articles' && (
        <section>
          <h3>Featured Articles</h3>
          <ul className="featured-articles">
            <li>
              <a href="#">The Changing Face of Global News</a>
              <span className="article-desc"> – An in-depth look at how global news is evolving in the digital age.</span>
            </li>
            <li>
              <a href="#">Inside the World of Investigative Journalism</a>
              <span className="article-desc"> – Exploring the challenges and triumphs of investigative reporting.</span>
            </li>
            <li>
              <a href="#">Reporting from the Frontlines: A Journalist's Perspective</a>
              <span className="article-desc"> – First-hand accounts from reporting in the field.</span>
            </li>
          </ul>
        </section>
      )}

      {tab === 'contact' && (
        <section>
          <h3>Contact</h3>
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows={4} required />
            <button type="submit">Send</button>
          </form>
        </section>
      )}

      <footer className="footer">
        <div>
          &copy; {new Date().getFullYear()} Margot Hutton. All Rights Reserved.
        </div>
        <div>
          Portfolio inspired by <a href="https://www.ericrstone.com/" target="_blank" rel="noopener noreferrer">ericrstone.com</a>
        </div>
      </footer>
    </div>
  );
}

export default App; 