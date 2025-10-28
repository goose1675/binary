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
import { useState } from "react";

export function PdfSwitcher() {
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);

  return (
    <div>
      {/* Buttons to select which PDF to show */}
      <button onClick={() => setPdfUrl("/advfunct1.1notes.pdf")}>Open PDF 1</button>
      <button onClick={() => setPdfUrl("/advfunct1.2notes.pdf")}>Open PDF 2</button>
      <button onClick={() => setPdfUrl("/advfunct1.3notes.pdf")}>Open PDF 3</button>
      <button onClick={() => setPdfUrl("/McGrawHillChapter1.pdf")}>McGraw Hill Ch 1</button>
      <button onClick={() => setPdfUrl("/McGrawhillChapter2 (1).pdf")}>McGraw Hill Ch 2</button>
      <button onClick={() => setPdfUrl("/McGrawHillChapter3 (1).pdf")}>McGraw Hill Ch 3</button>

      {/* Only render iframe when a PDF is selected */}
      {pdfUrl && (
        <iframe
          src={pdfUrl}
          width="100%"
          height="600px"
          style={{ border: "none", marginTop: "1rem" }}
        />
      )}
    </div>
  );
}


const G12advfunctions = () => {

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
            Grade 12 advanced functions!!!!
            
            
          </Typography>
        </Box>
        


      </div>
            <Divider style={{ background: '#35a872ff' }} />
      <Grid container spacing={3} justifyContent="center" sx={{ width: '100%', m: 0 }}>
        <Grid size={{ xs: 12, sm: 10, md: 10, lg: 12, xl: 12 }}>
          <Paper
            elevation={3}
            sx={{
              p: { xs: 1, sm: 2, md: 4, lg: 6, xl: 4 },
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
              Unit 1 study notes
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
            <PdfSwitcher/>

        </Paper>
        </Grid>              

      </Grid>
    </>
  );
};
export default G12advfunctions;