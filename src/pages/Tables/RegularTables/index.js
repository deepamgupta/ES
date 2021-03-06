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
				<h4>View Company</h4>
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
						Category Name & Logo
						</TableHeaderColumn>

						<TableHeaderColumn
						dataField='name'
						width="15%"
						filter={ { type: 'TextFilter'} }
						dataSort>
						Subcategory
						</TableHeaderColumn>

						<TableHeaderColumn
						dataField='country'
						width="15%"
						dataSort>
						Equipments	
						</TableHeaderColumn>

						<TableHeaderColumn
						dataField='salary'
						width="15%"
						dataSort>
						Popular
						</TableHeaderColumn>

						<TableHeaderColumn
						dataField='job'
						width="15%">
						Brand
						</TableHeaderColumn>

						<TableHeaderColumn width="5%"></TableHeaderColumn>
					</BootstrapTable>

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
							Subcategory
							</TableHeaderColumn>

							<TableHeaderColumn
							dataField='name'
							width="15%"
							filter={ { type: 'TextFilter'} }
							dataSort>
							Equipments
							</TableHeaderColumn>

							<TableHeaderColumn
							dataField='country'
							width="15%"
							dataSort>
							Popular
							</TableHeaderColumn>

							<TableHeaderColumn
							dataField='salary'
							width="15%"
							dataSort>
							Brands
							</TableHeaderColumn>

							<TableHeaderColumn
							dataField='job'
							width="15%">
							Logo of Brands
							</TableHeaderColumn>

							<TableHeaderColumn width="5%"></TableHeaderColumn>
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