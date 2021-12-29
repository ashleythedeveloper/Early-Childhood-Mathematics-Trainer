import './App.css';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import {React, useState} from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';




function App() {

  const generateRandomNumber = () => {
    const num = Math.random()*5
    const flooredNum = Math.floor(num)+1
    
    return flooredNum
  }

  const [numberOne, setNumberOne] = useState(generateRandomNumber())
  const [numberTwo, setNumberTwo] = useState(generateRandomNumber())
  const [answer, setAnswer] = useState('')
  const [answerIcon, setAnswerIcon] = useState(null)

  const handleChange = (e) => {
    const answer = e.target.value;
    setAnswer(answer)
  }

  const nextQuestion = () => {
    setNumberOne(generateRandomNumber())
    setNumberTwo(generateRandomNumber())
    setAnswer('')
    setAnswerIcon(null)
    
  }

  const checkAnswer = () => {
    console.log(answer)
    if ((parseInt(numberOne) + parseInt(numberTwo)) === parseInt(answer)) {
      setAnswerIcon(<CheckIcon sx={{fontSize: '100px', backgroundColor: 'green', color: 'white', borderRadius: '50px'}}/>)
    } else {
      setAnswerIcon(<ClearIcon sx={{fontSize: '100px', backgroundColor: 'red', color: 'white', borderRadius: '50px'}}/>)
    }
  }



  return (
    <>
    <div className="App">
      <Grid container spacing={2} sx={{display: 'flex', justifyContent: 'center', alignContent: 'center', paddingTop: '25%'}}>
        <Grid item xs={2}>
        <Typography variant={'h2'}>
          {numberOne}
        </Typography>
        </Grid>
        <Grid item xs={2} >
          <Typography variant={'h2'}>
          +
        </Typography>
          </Grid>
          <Grid item xs={2}>
          <Typography variant={'h2'}>
          {numberTwo}
        </Typography>
          </Grid>
          <Grid item xs={2}>
          <Typography variant={'h2'}>
          =
        </Typography>
          </Grid>
          <Grid item xs={2}>
          <TextField inputProps={{style: {fontSize: 40}}} id="outlined-basic" variant={'outlined'} value={answer} onChange={handleChange} />
          </Grid>
          <Grid item xs={12} sx={{display: 'flex', justifyContent: 'center', marginTop: '100px'}}>
          <Grid item xs={6}>
          <Button variant="contained" onClick={nextQuestion}>Next Question</Button>
          </Grid>
          <Grid item xs={6}>
          <Button variant="contained" onClick={checkAnswer}>Submit Answer</Button>
          </Grid>
          </Grid>
          <Grid item xs={12} sx={{display: 'flex', justifyContent: 'center', marginTop: '100px'}}>
            {answerIcon}
          </Grid>
      </Grid>
      
    </div>
    </>
  );
}

export default App;
