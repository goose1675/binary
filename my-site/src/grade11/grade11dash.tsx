

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


const Grade11dash = () => {
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
            <Button
              component={Link}
            to="/waste"
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
              dont click
            </Button>
            <Button
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
              Functions
            </Button>
            <Button
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
              English
            </Button>
            <Button
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
              Chemistry
            </Button>
            <Button
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
              Biology
            </Button>
            <Button
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
              Physics
            </Button>
            <Button
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
              Accounting
            </Button>
            <Button
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
              Tech
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <div
        className="animated-bg"
        style={{
          backgroundColor: '#000000ff',
          minHeight: '100vh',
          padding: 0,
          paddingTop: '4vw',
          paddingBottom: '6vw',
        }}
      >
        <Box sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' }, // stack on mobile, row on desktop
            alignItems: 'center',
            justifyContent: 'center',
            mt: { xs: 4, md: 8 },
            gap: { xs: 2, md: 6 },
          }}>
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
            The initial dashboard for grade 11 posts.
            ignore for now
            In honor of Alexander Martin the goat.
            
            
          </Typography>

          <Box>
            <Box
              component="img"
              src="/logo.jpg"
              alt="logo"
              sx={{
                height: { xs: 90, sm: 200, md: 220, lg: 220, xl: 230 },
                width: { xs: 95, sm: 265, md: 360, lg: 320, xl: 360 },
                borderRadius: 2,
                border: '2px solid #35a872ff',
                boxShadow: 1,
                objectFit: 'fit',
                p: 2,
                mx: 'auto',
                ml: { xs: 2, sm: 6, md: 10 },
                mr: { xs: 2, sm: 6, md: 10 },

              }}
            />
          </Box>
        </Box>
      </div>
      <Divider style={{ background: '#35a872ff' }} />
      <Grid container spacing={3} justifyContent="center" sx={{ width: '100%', m: 0 }}>
        <Grid size={{ xs: 12, sm: 10, md: 8, lg: 7, xl: 9 }}>
          <Paper
            elevation={3}
            sx={{
              p: { xs: 1, sm: 2, md: 4, lg: 4, xl: 4 },
              backgroundColor: '#000000ec',
              width: { xs: '99%', sm: '97%', md: '90%', lg: '75%', xl: '75%' },
              maxWidth: { xs: '100%', sm: '95vw', md: '900px', lg: '1400px', xl: '1600px' },
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
              coming son...
            </Typography>
            <Box sx={{
              display: 'grid',
              gridTemplateColumns: { 
                xs: '1fr', 
                sm: 'repeat(2, 1fr)',
                md: 'repeat(3, 1fr)',
                lg: 'repeat(4, 1fr)',
                xl: 'repeat(5, 1fr)'
              },
              gap: 3
            }}>

              {/* No blog posts, just HUD */}

            </Box>
          </Paper>        
          <Divider style={{ background: '#35a872ff' }} />

        </Grid>              

      </Grid>
    </>
  );
};



export default Grade11dash;