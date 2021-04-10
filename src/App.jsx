import React from 'react';
import { Typography, AppBar, Button, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from '@material-ui/core';
import { PhotoCamera } from '@material-ui/icons';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import DeleteIcon from '@material-ui/icons/Delete';
import SaveIcon from '@material-ui/icons/Save';
import useStyles from './styles';

const cards = [1,2,3,4,5,6,7,8,9];

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
              Look at all those chickens
              🦢🦢🦢🦢🦢🦢🦢🦢🦢🦢🦢🦢🦢🦢🦢🦢🦢🦢🦢🦢🦢🦢🦢🦢🦢🦢🦢🦢🦢🦢🦢🦢🦢🦢🦢🦢🦢🦢🦢🦢🦢🦢🦢
            </Typography>
            <div className={classes.button}> 
              <Grid container spacing={2} justify='center'>
                <Grid item>
                  <Button variant='contained' color='primary' startIcon={<CloudUploadIcon />}>
                    Upload Butts
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant='contained' color='secondary' startIcon={<DeleteIcon />}>
                    No Mo Butts
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant='contained' color='default' startIcon={<SaveIcon />}>
                    Save A Butt
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
          Footer
        </Typography>
        <Typography variant='subtitle1' align='center' color='textSecondary'>
          Something to give our footer purpose
        </Typography>
      </footer>
    </>
  );
}

export default App;