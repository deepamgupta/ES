import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import generateData from '../generateData';

const data = generateData(1000);

class ReactBootstrapTable extends Component {

	state = {
		data: generateData(500, false)
	};

	removeItem = itemId => {
		this.setState({
			data: data.filter(item => item.id !== itemId)
		});
	}

	render() {
		const { data } = this.state;
		const options = {
			sizePerPage: 10,
			prePage: 'Previous',
			nextPage: 'Next',
			firstPage: 'First',
			lastPage: 'Last',
			hideSizePerPage: true,
		};

		return (
			<div className="container-fluid">
				<div className="row">
				<div className="col-md-12">
				<div className="card">
				<div className="header">
				<h4>Company List</h4>
			</div>

			<div className="content">
				<BootstrapTable
				data={data}
				bordered={false}
				striped
				pagination={true}
				options={options}>

						<TableHeaderColumn
						dataField='id'
						isKey
						width="50px"
						dataSort>
						Company Name
						</TableHeaderColumn>

						<TableHeaderColumn
						dataField='name'
						width="15%"
						filter={ { type: 'TextFilter'} }
						dataSort>
						Projects
						</TableHeaderColumn>

						<TableHeaderColumn
						dataField='country'
						width="15%"
						dataSort>
						Users	
						</TableHeaderColumn>

						<TableHeaderColumn
						dataField='salary'
						width="15%"
						dataSort>
						Role
						</TableHeaderColumn>

						<TableHeaderColumn
						dataField='job'
						width="15%">
						Type
						</TableHeaderColumn>

						<TableHeaderColumn
						dataField='job'
						width="15%">
						Equipments
						</TableHeaderColumn>

						<TableHeaderColumn width="1%"></TableHeaderColumn>
					</BootstrapTable>
				</div>
				</div>
				</div>
				</div>
			</div>

			);
		}
	}
	export default ReactBootstrapTable