import React from 'react';
import { Typography, AppBar, Button, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from '@material-ui/core';
import { PhotoCamera } from '@material-ui/icons';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import DeleteIcon from '@material-ui/icons/Delete';
import SaveIcon from '@material-ui/icons/Save';
import useStyles from './styles';

const cards = [1,2,3,4,5,6];

const App = () => {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <AppBar position='relative'>
        <Toolbar>
          <PhotoCamera className={classes.icon}/>
          <Typography variant='h6'>
            An_al_bum_cover
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div className={classes.container}>
          <Container maxWidth='sm'>
            <Typography variant='h2' align='center' color='textPrimary' gutterBottom>
              Photo Album
            </Typography>
            <Typography variant='h5' align='center' color='textSecondary' paragraph>
              Look at all these media cards. This will probably say something relevant eventually. Maybe. 
            </Typography>
            <div className={classes.button}> 
              <Grid container spacing={2} justify='center'>
                <Grid item>
                  <Button variant='contained' color='primary' startIcon={<CloudUploadIcon />}>
                    Upload
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant='contained' color='secondary' startIcon={<DeleteIcon />}>
                    Delete
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant='contained' color='default' startIcon={<SaveIcon />}>
                    Save
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth='md'> 
          <Grid container spacing={4}>
          {cards.map((card) => (
            <Grid item key={card} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia 
                  className={classes.cardMedia}
                  image='https://source.unsplash.com/random'
                  title='image title'
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant='h5'>
                    Heading
                  </Typography>
                  <Typography>
                    This is the media card. Use this section to describe content.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size='small' color='primary'>View</Button>
                  <Button size='small' color='primary'>Edit</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
            
          </Grid>
        </Container>
      </main>
      <footer className={classes.footer}>
        <Typography variant='h6' align='center' gutterBottom>
          Petrolnaut
        </Typography>
        <Typography variant='subtitle1' align='center' color='textSecondary'>
          If you are reading this, I bet you're nice
        </Typography>
      </footer>
    </>
  );
}

export default App;