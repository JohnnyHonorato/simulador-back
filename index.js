import app from './src/app';

app.listen(app.get('port'), () => {
  console.log(`app running on ${app.get('port')}`);
});