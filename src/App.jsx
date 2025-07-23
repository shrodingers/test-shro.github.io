import React from 'react';

const ARTICLES = [
  {
    title: "Que faut-il retenir de la Conférence des Nations Unies sur l'océan ?",
    desc: "Le sommet onusien sur les océans s’achève ce 13 juin. Plusieurs annonces diplomatiques et de financement ont été faites. Tour d’horizon.",
    link: "https://information.tv5monde.com/unoc-que-faut-il-retenir-de-la-conference-des-nations-unies-sur-locean-123456",
    img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "Pourquoi les femmes sont-elles si peu présentes dans le milieu de la mer ?",
    desc: "Selon un rapport de l’Organisation maritime internationale, les femmes ne représentent que 29% de la main-d'œuvre globale dans le secteur maritime.",
    link: "https://information.tv5monde.com/femmes-de-mer-pourquoi-les-femmes-sont-elles-si-peu-presentes-dans-le-milieu-de-la-mer-654321",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "L'ONU dans le flou sur l'aide humanitaire livrée par la Fondation humanitaire de Gaza",
    desc: "Les Nations unies ne savent pas si la fondation humanitaire de Gaza, soutenue par les États-Unis, a commencé ses livraisons d'aide.",
    link: "https://information.tv5monde.com/bocage-de-laide-humanitaire-lonu-dans-le-flou-sur-laide-humanitaire-livree-par-la-fondation-humanitaire-de-gaza-789012",
    img: "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "En Afrique, l'air est-il plus pollué ?",
    desc: "Deux des cinq pays les plus pollués au monde se trouvent en Afrique, selon une étude de l’IQAir.",
    link: "https://information.tv5monde.com/en-afrique-lair-est-il-plus-pollue-456789",
    img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80"
  }
];

const VIDEOS = [
  {
    title: "JT international - 13 juin 2025",
    desc: "Le journal télévisé international de TV5Monde.",
    link: "https://information.tv5monde.com/jt-international-13-juin-2025"
  },
  {
    title: "Le 64' - 12 juin 2025",
    desc: "L'actualité internationale en 64 minutes.",
    link: "https://information.tv5monde.com/le-64-12-juin-2025"
  },
  {
    title: "JT Afrique - 10 juin 2025",
    desc: "Le journal télévisé dédié à l'Afrique.",
    link: "https://information.tv5monde.com/jt-afrique-10-juin-2025"
  }
];

const ARTICLE_PLACEHOLDER = "https://via.placeholder.com/90x90?text=Photo";
const VIDEO_PLACEHOLDER = "https://www.youtube.com/embed/dQw4w9WgXcQ";

function App() {
  return (
    <div className="app-container">
      <header>
        <h1>Margot Hutton</h1>
        <h2>Journalist at TV5Monde</h2>
      </header>
      <div className="main-content" style={{ alignItems: 'flex-start', position: 'relative' }}>
        <div className="articles-list">
          <h3>Articles</h3>
          <div className="articles-grid">
            {ARTICLES.map((article, idx) => (
              <div className="article-card" key={idx}>
                <img className="article-img" src={article.img || ARTICLE_PLACEHOLDER} alt={article.title} />
                <div className="article-content">
                  <a href={article.link} className="article-title" target="_blank" rel="noopener noreferrer">
                    {article.title}
                  </a>
                  <div className="article-desc">{article.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ flex: '0 0 320px', alignSelf: 'flex-start', margin: '0 32px', minWidth: 0, maxWidth: 400 }}>
          <section className="about-section" style={{ background: '#fff0f6', borderRadius: 14, boxShadow: '0 2px 12px rgba(233, 30, 99, 0.08)', padding: 24, marginBottom: 24, textAlign: 'center' }}>
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
        </div>
        <div className="videos-list">
          <h3>Vidéos</h3>
          <ul>
            {VIDEOS.map((video, idx) => (
              <li className="video-card" key={idx}>
                <div style={{ width: '100%', marginBottom: 8 }}>
                  <iframe
                    width="100%"
                    height="180"
                    src={VIDEO_PLACEHOLDER}
                    title="Video player placeholder"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{ borderRadius: 8, background: '#eee' }}
                  ></iframe>
                </div>
                <a href={video.link} className="video-title" target="_blank" rel="noopener noreferrer">
                  {video.title}
                </a>
                <div className="video-desc">{video.desc}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
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