import React from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles';

const searchStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: "center",
    
  },
  searchRes: {
    padding: theme.spacing(3, 2),
    width: '50vw',
    marginBottom: "5vh",
  },
}))


function SearchResList(props) {
  const classes = searchStyles();
  const resList = props.data;
  return (<div className={classes.root}>
    {resList.map(x => <SearchRes data={x} />)}
  </div>)
}




function SearchRes(props) {
  const classes = searchStyles();


  const {data} = props
  const {title, paragraph} = data

  const [state, setState] = React.useState({
    searchMode : '',
    searchText : '',
  })

  return (
    <Paper className={classes.searchRes}>
      <Typography variant="h5" component="h3">
        {title}
      </Typography>
      <Typography component="p">
        {paragraph}
      </Typography>
    </Paper>
  )
}

export default SearchResList;


