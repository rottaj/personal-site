import React from 'react'
import Card from '@material-ui/core/Card'
import { EditorFormatAlignCenter } from 'material-ui/svg-icons';

export default class SoftwareStack extends React.Component {
    
    styles = {
        card: {
            'margin-left': '16px',
            minWidth: 275,
            padding: '10px',
        },
        title: {
            'margin-top': '0px',
            margin: '10px'
        },
        div: {
            'margin-top': '90px',
            'margin-left': '115px',
            display: 'flex',
            'flex-flow': 'row wrap',
        }
    }
    
    render() {
        return (
            <div>
                <h1 style={this.styles.title}>Solution Stack</h1>
                <div style={this.styles.div}>
                    <Card>
                        <div style={this.styles.card}>
                            <h3>Frontend</h3>
                            <h5> React - Bootstrap - Material UI  </h5>
                        </div>
                    </Card>
                    <Card>
                        <div style={this.styles.card}>
                            <h3>Backend</h3>
                            <h5>NodeJS and Express.</h5>
                            <h5>JSON Web Tokens for security</h5>
                        </div>
                    </Card>
                    <Card>
                        <div style={this.styles.card}>
                            <h3>Database</h3>
                            <h5>Postgresql</h5>
                            <h5>Sequelize for object mapping</h5>
                        </div>
                    </Card>
                </div>
            </div>
        )
    }
}