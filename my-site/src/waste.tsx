

import './technoFont.css';
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


const waste = () => {
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
            This is a sample blank page!!!!!!
            
            
          </Typography>
        </Box>


      </div>
      </>
    );
};

export default waste;