import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Container, Paper, Fab } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import styles from './Form.module.scss';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function AnimeList() {
  const paperStyle={
  padding: '50px 20px',
  width:"50vw",
  margin: "20px auto", 
}
  const paperStyleSmall={
    padding: '50px 20px',
    width:"30vw",
    height:"70vh",
    margin: "20px auto", }

  const containerStyle={
    display:"flex"
  }

  const classes = useStyles();
  const[name, setName]=useState('');
  const[description, setDescription]=useState('');
  const[animes, setAnimes]=useState([]);
  const[popup, setPopup]=useState(false);
  const[editName, setEditName]=useState('');
  const[editDescription, setEditDescription]= useState('');
  const[animeId, setAnimeId]=useState('');
  //const newAnime = {name: editName, description: editDescription};

  const handleAdd=(e)=>{
    e.preventDefault();
    const animeList = {name, description}
    console.log(animeList);
    fetch("http://localhost:8080/animeList/addList",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(animeList)
    }).then(()=>{
      console.log("worked");
    })
    .then(setDescription(''), setName(''))
    .then(window.location.reload())
  }

  const handleDelete =(id)=> {
      fetch(`http://localhost:8080/animeList/delete/${id}`,{
        method:"DELETE"
      })
      const newAnime = animes.filter(anime=> anime.id !== id)
      setAnimes(newAnime);
  }

  const handleEdit =(e)=> {
    console.log(animeId)
    e.preventDefault()
    togglePopup();
    const newAnime = {name: editName, description: editDescription}
    fetch(`http://localhost:8080/animeList/updateAnimeList/${animeId}`,{
      method:"PUT",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(newAnime)
    })
    setEditDescription('')
    setEditName('')
  }


  useEffect(() => {
    fetch("http://localhost:8080/animeList/allAnimeList")
    .then(res=>res.json())
    .then((result)=>{
      setAnimes(result);
    })
  },[animes])

  // --- POPUP----// 

  const togglePopup =()=> {
    setPopup(!popup);
  }

  const combinedFunction = (id) => {
    setAnimeId(id)
    togglePopup();
  }




  const animeListJSX = animes.map((anime) => {
    return <Paper elevation={6} className={styles.cards} style={{margin:"10px", padding:"15px", textAlign:"left"}} key={anime.id}>
      Anime: {anime.name} <br />
      Description: {anime.description}
      <IconButton onClick={(e)=>handleDelete(anime.id)} aria-label="delete" className={classes.margin}>
          <DeleteIcon />
        </IconButton>

        <IconButton onClick={() => combinedFunction(anime.id)}  aria-label="edit" className={classes.margin}>
          <EditIcon />
        </IconButton>
    </Paper>
  })

  

  return (
    <Container style={containerStyle} className={styles.container}>
      <Paper elevation={3} style={paperStyleSmall}>

        <h2 style={{color:"blue"}}>Add Anime</h2> 
       <form className={classes.root} noValidate autoComplete="off">
        <TextField id="outlined-basic" label="Anime name" variant="outlined" fullWidth
        value={name}
        onChange={(e)=>setName(e.target.value)}
        />
        <TextField id="outlined-basic" label="Anime description" variant="outlined" fullWidth
        value={description}
        onChange={(e)=>setDescription(e.target.value)}
        />
        <Fab color="primary" aria-label="add" onClick={handleAdd}>
          <AddIcon />
        </Fab>
    </form>

    </Paper>

    <Paper elevation={3} style={paperStyle}>
      <h2 style={{color:"blue"}}>Anime List</h2>
      {animeListJSX}
    </Paper>

{popup && (
  <form onSubmit={(e)=>handleEdit(e)} className={styles.modal}>
    <div className={styles.popup}>
      <div className={styles.popupContent}>
        <Paper style={paperStyle}>
          <h2>Edit</h2>
          <TextField id="outlined-basic" label="Anime name" variant="outlined" fullWidth
            value={editName} onChange={(e) => setEditName(e.target.value)}
            />
            <TextField id="outlined-basic" label="Anime description" variant="outlined" fullWidth
            value={editDescription} onChange={(e) => setEditDescription(e.target.value)}
            />
            <IconButton type="submit" aria-label="edit" className={classes.margin}>
              <EditIcon />
            </IconButton>
        </Paper>
      </div>
    </div>
   </form> 
)}
   


    </Container>
  );
}
