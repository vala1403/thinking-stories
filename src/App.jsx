import React, { useEffect, useState } from 'react';
import { stories } from './stories.js';

function ImageArea({ label, mood }) {
  return (
    <div className={`image-area ${mood}`}>
      <div className="sun"></div>
      <div className="window">
        <span></span>
        <span></span>
      </div>
      <div className="rug"></div>
      <p>{label}</p>
    </div>
  );
}

function HomeScreen({ onStart }) {
  return (
    <section className="slide home-slide" aria-labelledby="home-title">
      <div className="classroom-top">
        <span className="pencil"></span>
        <span className="star"></span>
        <span className="book"></span>
      </div>

      <div>
        <p className="eyebrow">Feelings story deck</p>
        <h1 id="home-title">
          <span>Thinking</span>
          <span>Stories</span>
        </h1>
        <p className="subtitle">
          Short stories that help kids understand feelings, choices, and other
          people's perspectives.
        </p>
      </div>

      <button className="primary-button" type="button" onClick={onStart}>
        Start a Story
      </button>
    </section>
  );
}

function StoryScreen({ stories, selectedStory, onSelectStory, onChoose }) {
  return (
    <section className="slide story-slide" aria-labelledby="story-title">
      <div className="slide-header">
        <p className="eyebrow">Story choices</p>
        <h2 id="story-title">Choose a story</h2>
        <p className="instruction-text">
          Pick a situation and explore three different ways to think and feel
          about it.
        </p>
      </div>

      <div className="story-picker" aria-label="Choose a story">
        {stories.map((story) => (
          <button
            className={`story-card ${
              story.id === selectedStory.id ? 'selected' : ''
            }`}
            type="button"
            key={story.id}
            onClick={() => onSelectStory(story)}
          >
            <span>{story.title}</span>
            <p>{story.shortLabel}</p>
          </button>
        ))}
      </div>

      <ImageArea label={selectedStory.imageLabel} mood="story-mood" />

      <article className="scenario-card">
        <p>{selectedStory.scenario}</p>
      </article>

      <div className="choices" aria-label="Story choices">
        {selectedStory.choices.map((choice) => (
          <button
            className="choice-button"
            type="button"
            key={choice.letter}
            onClick={() => onChoose(choice)}
          >
            <span>{choice.letter}</span>
            <p>{choice.text}</p>
          </button>
        ))}
      </div>
    </section>
  );
}

function ReflectionScreen({ choice, onBack, onHome }) {
  return (
    <section className="slide reflection-slide" aria-labelledby="reflection-title">
      <div className="slide-header">
        <p className="eyebrow">Reflection</p>
        <h2 id="reflection-title">What could this mean?</h2>
      </div>

      <ImageArea label="Think together" mood="reflection-mood" />

      <article className="reflection-card">
        <span className="letter-badge">{choice.letter}</span>
        <p className="choice-text">{choice.text}</p>
        <p>{choice.reflection}</p>
      </article>

      <div className="reflection-actions">
        <button className="back-button" type="button" onClick={onBack}>
          Back to story
        </button>
        <button className="home-button" type="button" onClick={onHome}>
          Choose another story
        </button>
      </div>
    </section>
  );
}

export default function App() {
  const [isReady, setIsReady] = useState(false);
  const [screen, setScreen] = useState('home');
  const [selectedStory, setSelectedStory] = useState(stories[0]);
  const [selectedChoice, setSelectedChoice] = useState(null);

  useEffect(() => {
    const frameId = requestAnimationFrame(() => setIsReady(true));
    return () => cancelAnimationFrame(frameId);
  }, []);

  // Stories live in src/stories.js so adding more decks later stays simple.
  function startStory() {
    setSelectedChoice(null);
    setScreen('story');
  }

  function selectStory(story) {
    setSelectedStory(story);
    setSelectedChoice(null);
  }

  function chooseReflection(choice) {
    setSelectedChoice(choice);
    setScreen('reflection');
  }

  function goBackToStory() {
    setScreen('story');
  }

  function chooseAnotherStory() {
    setSelectedChoice(null);
    setScreen('story');
  }

  return (
    <main className="app-shell">
      {!isReady && (
        <section className="slide loading-slide" aria-live="polite">
          <p className="eyebrow">Thinking Stories</p>
          <h1>Loading...</h1>
        </section>
      )}

      {isReady && screen === 'home' && <HomeScreen onStart={startStory} />}

      {isReady && screen === 'story' && (
        <StoryScreen
          stories={stories}
          selectedStory={selectedStory}
          onSelectStory={selectStory}
          onChoose={chooseReflection}
        />
      )}

      {isReady && screen === 'reflection' && selectedChoice && (
        <ReflectionScreen
          choice={selectedChoice}
          onBack={goBackToStory}
          onHome={chooseAnotherStory}
        />
      )}
    </main>
  );
}
