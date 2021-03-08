import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    container: {
        backgroundColor:theme.palette.background.paper,
        width:'90%',
        margin: 'auto',
        padding: '0 20px'
    },
    appBar:{
            marginBottom: '50px',
            padding: '10px 20px'
    },
    navLink:{
        display:'flex',
        justifyContent: 'space-evenly',
        padding: '10px 0'
    },
    link:{
        textDecoration: 'none',
        fontSize: '20px',
        color: '#fff'
    },
    card:{
        display: 'flex',
        height: '100%',
        boxShadow: '5px 5px 10px blue',
        flexDirection: 'column'
    },
    postDetail:{
       boxShadow: '5px 5px 10px blue',
       marginBottom: '40px',
       padding: '20px'
    },
    cardDetail:{
        padding: '20px'
    }
}))
export default useStyles;