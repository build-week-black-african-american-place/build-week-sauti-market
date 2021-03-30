import React from 'react';
// import './classes.css';
import { useHistory, useParams} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Header from './Header';
import Footer from './Footer';


const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth: 300,
    background: "#A8E6CE",
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
}); // material UI styles


export default function ProductCard ({product}) {
  
  // destructured keys from the product obj passed as props
  let { id, productName, country, market, price,description, isPurchased, merchantId } = product;

  // let { productID } = useParams();
  // console.log("classId from Class: ", classId); // gets the classId, A STRING

  // LOGIC NOTE: only one prop will be defined
  // If route is from Classes, indivClass will be defined, movieId will come from indivClass.id
  // If route is for a Class from home /, allMovies will be defined, movieId will come from useParams()

  // const isClassCard = allClasses === undefined;
    
  // // account if indivClass is undef or allClasses is undef
  // if (indivClass !== undefined) {
  //   classId = indivClass.id; // can get classId from allClasses, is AN INTEGER

  // } else if (allClasses !== undefined) {
  //   // we have classId, defining indivClass NOTE: integer to string with template literal `${}`
  //   indivClass = allClasses.find(indivClass => `${indivClass.id}` === classId);
  // }; 
  


  // material UI code
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  const history = useHistory(); // enables onClick on productCard --> route to productCard by ID

  return (
    <>
      {/* {!isClassCard ? 
        <div>
          <Header/>
        </div>
      : <br/> /* conditional rendering for classCard*/  } 

      <Card classname="indivCard" className={classes.root} variant="outlined" onClick={(evt) => history.push(`/classes/${id}`)} >
      <CardContent style={{textAlign: "center"}}>
      {/* // {isClassCard ? <button>Logout</button> : <button>Login</button>} */}
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {country} - {market} Market
        </Typography>
        <Typography variant="h5" component="h2">
          {bull} {productName} {bull}
        </Typography>
        <Typography className={classes.pos} color="textSecondary"><br/>
        {description}
        </Typography>
        <Typography variant="body2" component="p">
          R{price} (South African Rand / ZAR)<br/>
        <br/>
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Edit</Button>
      </CardActions>
    </Card>
    {/* {!isClassCard ? 
      <div>
        <Footer/>
      </div>
    : <br/> /* conditional rendering for classCard*/  } 
    </>
  )
};
