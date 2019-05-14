import React from 'react'
import ReactTable from "react-table";
import "react-table/react-table.css";

export default class Repos extends React.Component {

    state = {
        repos: []
    }

    componentDidMount() {
        fetch('https://api.github.com/users/rottaj/repos')
            .then(res => {return res.json()})
            .then(data => {
                console.log(data)
                this.setState({...this.state.state, repos: data.map(x => this.filterData(x))})
            })
    }

    filterData = (repo) => {
        console.log(repo)
        return {url: repo.html_url, name: repo.full_name, language: repo.language}
    }

    
    render() {
        const { repos } = this.state
        console.log(this.state)   

        const columns = [{
            Header: 'Name',
            accessor: 'name',
            render: e =><a href={e.url}> </a>
          }, {
            Header: 'Description',
            accessor: 'description',
            Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
          }, {
            id: 'Language', // Required because our accessor is not a string
            Header: 'Language',
            accessor: 'language'
          }]

        return (
            <div>
                {console.log(this.state)}
                <ReactTable
                    data={repos}
                    columns={columns}

                    defaultPageSize={10}
                />
            </div>
        )
    }
}