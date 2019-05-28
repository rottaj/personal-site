import React from 'react'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

const styles = {
  card: {
    margin: '16px',
    minWidth: 275,
    padding: '10px'
  },
  title: {
    fontSize: 14,
    'text-align': 'center'
  },
  pos: {
    marginBottom: 5,
    padding: '30px'
  },
};


const StarRepo = (props) => (
    <div>
        {console.log(props.repo.name)}
        <Card className="starRepo" style={{ ...styles.card,  ...styles.pos}}>
            <CardContent style={styles.title}>
                {props.repo.name}
            </CardContent>
            <CardContent>
                {props.repo.language}
            </CardContent>
            <CardContent>
              
            </CardContent>
        </Card>
    </div>
)

export default StarRepo;