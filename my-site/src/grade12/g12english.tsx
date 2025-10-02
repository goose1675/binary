import '../technoFont.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
/*import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
*/
import { Link } from 'react-router-dom';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import React from 'react';
import { useState, useEffect } from 'react';
import './flashcards.css';


type Card = {
  term: string;
  back: string;
};

type Decks = {
  [key: string]: Card[];
};

const decks: Decks = {
  marxism: [
    {
      term: "Dialectical Materialism",
      back: "Definition: Whoever controls tools/resources controls society and beliefs. Examples: In Animal Farm, pigs take over resources; in The OC, wealth decides who has social power.",
    },
    {
      term: "Ideologies",
      back: "Definition: A system of ideas shaping goals, actions, and beliefs. Examples: Animalism in Animal Farm; life path ideology shown in Brooks' Life commercial.",
    },
    {
      term: "Reflectionism",
      back: "Definition: Texts reflect the society that created them. Examples: Animal Farm mirrors Russian Revolution; The Fly reflects post-war trauma.",
    },
    {
      term: "Proletariat",
      back: "Definition: Working class whose labor benefits the rich. Examples: Boxer in Animal Farm; workers in Career Builder ad are powerless compared to bosses.",
    },
    {
      term: "Bourgeoisie",
      back: "Definition: Owners of production, holding wealth and control. Examples: Pigs as elite in Animal Farm; businessman in Life ad climbing corporate ladder.",
    },
    {
      term: "Capitalism",
      back: "Definition: Private ownership of production for profit. Examples: Mr. Jones exploits animals in Animal Farm; Career Builder shows profit-driven work culture.",
    },
    {
      term: "Communism",
      back: "Definition: System where resources are shared equally (in theory). Examples: Animalism starts equal in Animal Farm; contrast with society in Hammad’s poem rejecting inequality.",
    },
    {
      term: "Commodification",
      back: "Definition: Valuing things for social meaning, not use. Examples: Pigs wear clothes in Animal Farm; in The Fly, ink is used as power over the fly.",
    },
    {
      term: "False Consciousness",
      back: "Definition: People accept unfair systems as normal. Examples: Animals think they’re free in Animal Farm; workers in Career Builder accept bad jobs.",
    },
    {
      term: "Conspicuous Consumption",
      back: "Definition: Buying to show off wealth, not need. Examples: Rich parties in The OC; businessman in Life flaunts success.",
    },
    {
      term: "Sign Value",
      back: "Definition: Worth based on impressing others. Examples: Pigs’ clothes in Animal Farm; material wealth as identity in The OC.",
    },
    {
      term: "Alienation",
      back: "Definition: Feeling estranged from society or labor. Examples: Boxer repeats slogans without change; woman in Run feels trapped by beauty standards.",
    },
  ],
  feminism: [
    { term: "Patriarchal", back: "Definition: Male dominance in power and society. Examples: The OC shows men controlling narratives; Life shows almost no women in meaningful roles." },
    { term: "Gender", back: "Definition: Socially constructed roles of masculinity and femininity. Examples: Seth mocked in The OC for not fitting jock role; Angelou’s 'Still I Rise' challenges gendered oppression." },
    { term: "Gender Study", back: "Definition: Study of gender identity and representation. Examples: Marissa in The OC as fragile beauty; Thomas’ poem explores Indigenous identity vs. imposed roles." },
    { term: "The Other", back: "Definition: Being treated as different or excluded. Examples: Ryan in The OC as outsider; Hammad’s poem shows Arab identity marked as Other." },
    { term: "Paternalism", back: "Definition: Men seen as protectors over women. Examples: Ryan saves Marissa in The OC; Career Builder ad stereotypes women as emotional." },
    { term: "Matriarchy", back: "Definition: Female-centered leadership instead of male dominance. Examples: Rarely shown, but Angelou imagines female strength and resilience as defiance." },
    { term: "Objectification", back: "Definition: Seeing people, especially women, as objects. Examples: Party women in The OC shown for looks; woman runner in Run shown only for her body." },
    { term: "Misogyny", back: "Definition: Dislike or prejudice against women. Examples: Career Builder ad mocking women; lack of respect for women’s voices in The OC culture." },
    { term: "Infantilization", back: "Definition: Treating adults like children, limiting agency. Examples: Marissa’s struggles ignored in The OC; women in Run shown as incapable of leadership." },
  ],
  psychoanalysis: [
    { term: "Personal Conscious", back: "Definition: Awareness of present surroundings. Examples: Boss’s friend in The Fly openly mentions his son’s death; OC teens aware of social roles." },
    { term: "Personal Unconscious", back: "Definition: Repressed thoughts unique to a person. Examples: Boss hides grief in The Fly; woman runner dreams of escaping expectations in Run." },
    { term: "Collective Unconscious", back: "Definition: Shared human patterns and archetypes. Examples: Animal Farm uses archetype of tyrant; Angelou’s poem echoes universal fight for freedom." },
    { term: "Archetypes", back: "Definition: Recurring story characters and symbols. Examples: Villain pigs in Animal Farm; Hero outsider Ryan in The OC." },
    { term: "The Shadow", back: "Definition: Dark side of the self we hide. Examples: Boss torturing fly; man in Life indulging in drugs and pranks." },
    { term: "Anima/Animus", back: "Definition: Inner opposite-gender traits of psyche. Examples: Runner in Run dreams of eating freely; Career Builder ad shows desires through unconscious scenes." },
    { term: "Projection", back: "Definition: Attributing inner traits to others. Examples: Boss blames fly for his anger in The Fly; OC characters project insecurity onto Ryan." },
    { term: "The Persona", back: "Definition: Mask shown to society. Examples: Businessman in Life looks successful but empty; OC teens put on social masks at parties." },
    { term: "Individuation", back: "Definition: Accepting all sides of the self for wholeness. Examples: Runner in Run fails to integrate desires; Angelou’s poem models acceptance and pride." },
  ],
};

const Flashcards: React.FC = () => {
  const [currentDeck, setCurrentDeck] = useState<Card[]>(decks.marxism);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const loadDeck = (name: string) => {
    if (name === "all") {
      setCurrentDeck([
        ...decks.marxism,
        ...decks.feminism,
        ...decks.psychoanalysis,
      ]);
    } else {
      setCurrentDeck(decks[name]);
    }
    setCurrentIndex(0);
    setFlipped(false);
  };

  const showCard = () => currentDeck[currentIndex];

  const flipCard = () => setFlipped(!flipped);

  const nextCard = () => {
    setCurrentIndex((prev) => (prev + 1) % currentDeck.length);
    setFlipped(false);
  };

  const prevCard = () => {
    setCurrentIndex((prev) => (prev - 1 + currentDeck.length) % currentDeck.length);
    setFlipped(false);
  };

  const shuffleDeck = () => {
    const shuffled = [...currentDeck];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    setCurrentDeck(shuffled);
    setCurrentIndex(0);
    setFlipped(false);
  };

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") nextCard();
      if (e.key === "ArrowLeft") prevCard();
      if (e.key === " ") flipCard();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  });

  const card = showCard();

  return (
    <div style={{ display: "flex", height: "100vh", margin: 0 }}>
      <div className="sidebar">
        <h2>Flashcard Decks</h2>
        <button onClick={() => loadDeck("marxism")}>Marxism</button>
        <button onClick={() => loadDeck("feminism")}>Feminism</button>
        <button onClick={() => loadDeck("psychoanalysis")}>Psychoanalysis</button>
        <button onClick={() => loadDeck("all")}>All Decks</button>
      </div>

      <div className="main">
        <div
          className={`flashcard ${flipped ? "flipped" : ""}`}
          onClick={flipCard}
        >
          <div className="card-inner">
            <div className="card-front">{card?.term}</div>
            <div className="card-back">{card?.back}</div>
          </div>
        </div>
        <div className="controls">
          <button onClick={prevCard}>⟵ Prev</button>
          <button onClick={nextCard}>Next ⟶</button>
          <button onClick={shuffleDeck}>Shuffle</button>
        </div>
      </div>
    </div>
  );
};

export { Flashcards };


const G12english = () => {

  return (
    <>
      <AppBar position="fixed" style={{ background: '#000000ff' }}>
        <Toolbar>
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', gap: 2 }}>
            <Button
              component={Link}
              to="/"
              color="inherit"
              sx={{
                fontFamily: 'BrunoAceSC',
                fontSize: '1rem',
                color: '#35a872ff',
                border: '2px solid #35a872ff',
                borderRadius: '8px',
                px: 3,
                py: 1,
                mx: 2,
                background: 'rgba(0,0,0,0.15)',
                '&:hover': {
                  background: 'rgba(53,168,114,0.1)',
                  borderColor: '#35a872ff',
                },
              }}
            >
              Home
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <div
        className="animated-bg"
        style={{
          backgroundColor: '#000000ff',
          minHeight: '50vh',
          padding: 0,
          paddingTop: '2vw',
          paddingBottom: '3vw',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', mt: 8 }}>
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              color: '#35a872ff',
              fontFamily: 'BrunoAceSC',
              textAlign: 'center',
              fontStyle: 'italic',
              pl: { xs: 2, sm: 6, md: 10 },
              pr: { xs: 2, sm: 6, md: 10 },
              pt: { xs: 3, sm: 5 },  // smaller padding on phones
              pb: { xs: 2, sm: 4 },
              fontSize: { xs: '2rem', sm: '3rem', md: '3.8rem' }, // responsive font size
            }}
          >
            Grade 12 English!!!!
            
            
          </Typography>
        </Box>
        


      </div>
            <Divider style={{ background: '#35a872ff' }} />
      <Grid container spacing={3} justifyContent="center" sx={{ width: '100%', m: 0 }}>
        <Grid size={{ xs: 12, sm: 10, md: 8, lg: 7, xl: 12 }}>
          <Paper
            elevation={3}
            sx={{
              p: { xs: 1, sm: 2, md: 4, lg: 4, xl: 4 },
              backgroundColor: '#000000ec',
              width: { xs: '99%', sm: '97%', md: '90%', lg: '100%', xl: '100%' },
              maxWidth: { xs: '100%', sm: '100vw', md: '100vw', lg: '100vw', xl: '100vw' },
              mx: 'auto',
              boxSizing: 'border-box',
            }}
          >
            <Typography
              variant="h4" gutterBottom sx={{
                color: '#35a872ff',
                textAlign: 'center',
                fontFamily: 'BrunoAceSC',
                textDecoration: 'underline',
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                lineHeight: 2.5
              }}
            >
              Lit theory test study guide. (Credits to Rayyan J.)
            </Typography>

              {/* No blog posts, just HUD */}

          </Paper>        
          <Divider style={{ background: '#35a872ff' }} />
            <Paper
            elevation={3}
            sx={{
              p: { xs: 1, sm: 2, md: 4, lg: 4, xl: 4 },
              backgroundColor: '#000000ec',
              width: { xs: '99%', sm: '97%', md: '90%', lg: '100%', xl: '100%' },
              maxWidth: { xs: '100%', sm: '100vw', md: '100vw', lg: '100vw', xl: '100vw' },
              mx: 'auto',
              boxSizing: 'border-box',
              height: { xs: '99%', sm: '97%', md: '90%', lg: '100%', xl: '100%' },
              maxHeight: { xs: '100%', sm: '100vh', md: '100vh', lg: '100vh', xl: '100vh' }

            }}
          >
            
        <Flashcards />
            

        </Paper>
        </Grid>              

      </Grid>
    </>
  );
};
export default G12english;