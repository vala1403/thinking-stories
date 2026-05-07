import React, { useMemo, useState } from 'react';
import { stories } from './stories.js';
import quietGirlImage from './assets/quiet-girl.png';
import storyPathImage from './assets/story-path.png';

function StoryArtwork({ story, variant = 'quiet' }) {
  const image = variant === 'path' ? storyPathImage : quietGirlImage;

  return (
    <div className={`story-artwork ${variant}`}>
      <img src={image} alt={story.imagePrompt} />
    </div>
  );
}

function HomeScreen({ onSelectStory }) {
  return (
    <section className="screen menu-screen" aria-labelledby="home-title">
      <div className="menu-art">
        <StoryArtwork story={stories[0]} />
      </div>

      <div className="menu-content">
        <p className="eyebrow">Feelings storybook</p>
        <h1 id="home-title">Thinking Stories</h1>
        <div className="story-grid" aria-label="Choose a story">
          {stories.map((story, index) => (
            <button
              className="story-title-button"
              type="button"
              key={story.id}
              onClick={() => onSelectStory(story)}
            >
              <span className="story-number">{index + 1}</span>
              <span>{story.title}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

function StoryIntroScreen({ story, onExplore, onMenu }) {
  return (
    <section className="screen intro-screen" aria-labelledby="story-title">
      <header className="top-bar">
        <button className="quiet-button" type="button" onClick={onMenu}>
          Menu
        </button>
      </header>

      <div className="intro-layout">
        <StoryArtwork story={story} variant="path" />

        <article className="story-intro">
          <p className="eyebrow">{story.category}</p>
          <h2 id="story-title">{story.title}</h2>
          <p className="scenario-text">{story.scenario}</p>
          <button className="primary-button" type="button" onClick={onExplore}>
            Explore
          </button>
        </article>
      </div>
    </section>
  );
}

function ReflectionScreen({ story, onBack, onMenu }) {
  const choices = useMemo(() => Object.entries(story.choices), [story]);

  return (
    <section className="screen reflection-screen" aria-labelledby="reflection-title">
      <header className="top-bar">
        <button className="quiet-button" type="button" onClick={onBack}>
          Back
        </button>
        <button className="quiet-button" type="button" onClick={onMenu}>
          Menu
        </button>
      </header>

      <div className="reflection-heading">
        <StoryArtwork story={story} variant="quiet-small" />
        <div>
          <p className="eyebrow">Reflections</p>
          <h2 id="reflection-title">{story.title}</h2>
        </div>
      </div>

      <div className="reflection-grid" aria-label="A, B, and C reflections">
        {choices.map(([letter, text]) => (
          <article className="reflection-card" key={letter}>
            <span className="letter-badge">{letter}</span>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default function App() {
  const [screen, setScreen] = useState('menu');
  const [selectedStory, setSelectedStory] = useState(stories[0]);

  function selectStory(story) {
    setSelectedStory(story);
    setScreen('intro');
  }

  function showMenu() {
    setScreen('menu');
  }

  return (
    <main className="app-shell">
      {screen === 'menu' && <HomeScreen onSelectStory={selectStory} />}

      {screen === 'intro' && (
        <StoryIntroScreen
          story={selectedStory}
          onExplore={() => setScreen('reflection')}
          onMenu={showMenu}
        />
      )}

      {screen === 'reflection' && (
        <ReflectionScreen
          story={selectedStory}
          onBack={() => setScreen('intro')}
          onMenu={showMenu}
        />
      )}
    </main>
  );
}
