import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Collapse } from 'react-bootstrap';


class Nav extends Component {

  state = {};

  render() {
    let { location } = this.props;
    return (
      <ul className="nav">
        <li className={location.pathname === '/' ? 'active' : null}>
          <Link to="/">
            <i className="pe-7s-graph"></i>
            <p>Dashboard</p>
          </Link>
        </li>
        <li className={this.isPathActive('/companies') || this.state.companyMenuOpen ? 'active' : null}>
          <a onClick={() => this.setState({ companyMenuOpen: !this.state.companyMenuOpen })}
            data-toggle="collapse">
            <i className="pe-7s-plugin"></i>
            <p>
              Companies
            <b className="caret"></b>
            </p>
          </a>
          <Collapse in={this.state.companyMenuOpen}>
            <div>
              <ul className="nav">
                <li className={this.isPathActive('/companies/rentalContractor') ? 'active' : null}>
                  <Link to="/companies/rentalContractor">Rental Contractor</Link>
                </li>
                <li className={this.isPathActive('/companies/oemBanks') ? 'active' : null}>
                  <Link to="/companies/oemBanks">OEM Banks</Link>
                </li>
                <li className={this.isPathActive('/companies/suppliers') ? 'active' : null}>
                  <Link to="/companies/suppliers">Suppliers</Link>
                </li>
                <li className={this.isPathActive('/companies/mechanics') ? 'active' : null}>
                  <Link to="/companies/mechanics">Mechanics</Link>
                </li>
              </ul>
            </div>
          </Collapse>
        </li>
        
        <li className={this.isPathActive('/equipmentMaster') || this.state.equipmentMasterMenuOpen ? 'active' : null}>
          <a onClick={() => this.setState({ equipmentMasterMenuOpen: !this.state.equipmentMasterMenuOpen })}
            data-toggle="collapse">
            <i className="pe-7s-plugin"></i>
            <p>
              Equipment Master
            <b className="caret"></b>
            </p>
          </a>
          <Collapse in={this.state.equipmentMasterMenuOpen}>
            <div>
              <ul className="nav">
                <li className={this.isPathActive('/equipmentMaster/regular-tables') ? 'active' : null}>
                  <Link to="/tables/regular-tables">Category</Link>
                </li>
                <li className={this.isPathActive('/equipmentmaster/extended-tables') ? 'active' : null}>
                  <Link to="/tables/extended-tables">Subcategory</Link>
                </li>
                <li className={this.isPathActive('/equipmentMaster/react-bootstrap-table') ? 'active' : null}>
                  <Link to="/tables/react-bootstrap-table">Equipment</Link>
                </li>                
              </ul>
            </div>
          </Collapse>
        </li>

        <li className={this.isPathActive('/ams') || this.state.amsMenuOpen ? 'active' : null}>
          <a onClick={() => this.setState({ amsMenuOpen: !this.state.amsMenuOpen })}
            data-toggle="collapse">
            <i className="pe-7s-plugin"></i>
            <p>
              AMS
            <b className="caret"></b>
            </p>
          </a>
          <Collapse in={this.state.amsMenuOpen}>
            <div>
              <ul className="nav">
                <li className={this.isPathActive('/ams/activateClient') ? 'active' : null}>
                  <Link to="/ams/activateClient">Activate Client</Link>
                </li>
                <li className={this.isPathActive('/ams/mapView') ? 'active' : null}>
                  <Link to="/ams/mapView">Map View</Link>
                </li>
              </ul>
            </div>
          </Collapse>
        </li>

        <li className={this.isPathActive('/rental') || this.state.rentalMenuOpen ? 'active' : null}>
          <a onClick={() => this.setState({ rentalMenuOpen: !this.state.rentalMenuOpen })}
            data-toggle="collapse">
            <i className="pe-7s-plugin"></i>
            <p>
              Rental
            <b className="caret"></b>
            </p>
          </a>
          <Collapse in={this.state.rentalMenuOpen}>
            <div>
              <ul className="nav">
                <li className={this.isPathActive('/rental/viewRequest') ? 'active' : null}>
                  <Link to="/rental/viewRequest">View Request</Link>
                </li>
                <li className={this.isPathActive('/rental/viewConfirmation') ? 'active' : null}>
                  <Link to="/rental/viewConfirmation">View Confirmation</Link>
                </li>
              </ul>
            </div>
          </Collapse>
        </li>

        <li className={this.isPathActive('/auction') || this.state.auctionMenuOpen ? 'active' : null}>
          <a onClick={() => this.setState({ auctionMenuOpen: !this.state.auctionMenuOpen })}
            data-toggle="collapse">
            <i className="pe-7s-plugin"></i>
            <p>
              Auction
            <b className="caret"></b>
            </p>
          </a>
          <Collapse in={this.state.auctionMenuOpen}>
            <div>
              <ul className="nav">
                <li className={this.isPathActive('/auction/create') ? 'active' : null}>
                  <Link to="/auction/create">Create</Link>
                </li>
                <li className={this.isPathActive('/auction/results') ? 'active' : null}>
                  <Link to="/auction/results">Results</Link>
                </li>
                <li className={this.isPathActive('/auction/defaulters') ? 'active' : null}>
                  <Link to="/auction/defaulters">Defaulters</Link>
                </li>
              </ul>
            </div>
          </Collapse>
        </li>

        <li className={this.isPathActive('/components') || this.state.componentMenuOpen ? 'active' : null}>
          <a onClick={() => this.setState({ componentMenuOpen: !this.state.componentMenuOpen })}
            data-toggle="collapse">
            <i className="pe-7s-plugin"></i>
            <p>
              Components
            <b className="caret"></b>
            </p>
          </a>
          <Collapse in={this.state.componentMenuOpen}>
            <div>
              <ul className="nav">
                <li className={this.isPathActive('/components/buttons') ? 'active' : null}>
                  <Link to="/components/buttons">Buttons</Link>
                </li>
                <li className={this.isPathActive('/components/grid') ? 'active' : null}>
                  <Link to="/components/grid">Grid System</Link>
                </li>
                <li className={this.isPathActive('/components/icons') ? 'active' : null}>
                  <Link to="/components/icons">Icons</Link>
                </li>
                <li className={this.isPathActive('/components/notifications') ? 'active' : null}>
                  <Link to="/components/notifications">Notifications</Link>
                </li>
                <li className={this.isPathActive('/components/panels') ? 'active' : null}>
                  <Link to="/components/panels">Panels</Link>
                </li>
                <li className={this.isPathActive('/components/sweetalert') ? 'active' : null}>
                  <Link to="/components/sweetalert">Sweet Alert</Link>
                </li>
                <li className={this.isPathActive('/components/typography') ? 'active' : null}>
                  <Link to="/components/typography">Typography</Link>
                </li>
              </ul>
            </div>
          </Collapse>
        </li>

        <li className={this.isPathActive('/forms') || this.state.formMenuOpen ? 'active' : null}>
          <a onClick={() => this.setState({ formMenuOpen: !this.state.formMenuOpen })} data-toggle="collapse">
            <i className="pe-7s-note2"></i>
            <p>Forms <b className="caret"></b></p>
          </a>
          <Collapse in={this.state.formMenuOpen}>
            <div>
              <ul className="nav">
                <li className={this.isPathActive('/forms/regular-forms') ? 'active' : null}>
                  <Link to="/forms/regular-forms">Regular Forms</Link>
                </li>
                <li className={this.isPathActive('/forms/extended-forms') ? 'active' : null}>
                  <Link to="/forms/extended-forms">Extended Forms</Link>
                </li>
                <li className={this.isPathActive('/forms/validation-forms') ? 'active' : null}>
                  <Link to="/forms/validation-forms">Validation Forms</Link>
                </li>
              </ul>
            </div>
          </Collapse>
        </li>
        
        <li className={this.isPathActive('/tables') || this.state.tableMenuOpen ? 'active' : null}>
          <a onClick={() => this.setState({ tableMenuOpen: !this.state.tableMenuOpen })} data-toggle="collapse">
            <i className="pe-7s-news-paper"></i>
            <p>Tables <b className="caret"></b></p>
          </a>
          <Collapse in={this.state.tableMenuOpen}>
            <div>
              <ul className="nav">
                <li className={this.isPathActive('/tables/regular-tables') ? 'active' : null}>
                  <Link to="/tables/regular-tables">Regular Table</Link>
                </li>
                <li className={this.isPathActive('/tables/extended-tables') ? 'active' : null}>
                  <Link to="/tables/extended-tables">Extended Tables</Link>
                </li>
                <li className={this.isPathActive('/tables/fixed-data-table') ? 'active' : null}>
                  <Link to="/tables/react-bootstrap-table">React Bootstrap Table</Link>
                </li>
              </ul>
            </div>
          </Collapse>
        </li>

        <li className={this.isPathActive('/maps') || this.state.mapMenuOpen ? 'active' : null}>
          <a onClick={() => this.setState({ mapMenuOpen: !this.state.mapMenuOpen })} data-toggle="collapse">
            <i className="pe-7s-map-marker"></i>
            <p>Map <b className="caret"></b></p>
          </a>
          <Collapse in={this.state.mapMenuOpen}>
            <div>
              <ul className="nav">
                <li className={this.isPathActive('/maps/google-map') ? 'active' : null}>
                  <Link to="/maps/google-map">Google Map</Link>
                </li>
                <li className={this.isPathActive('/maps/vector-map') ? 'active' : null}>
                  <Link to="/maps/vector-map">Vector Map</Link>
                </li>
              </ul>
            </div>
          </Collapse>
        </li>
        <li className={this.isPathActive('/charts') ? 'active' : null}>
          <Link to="/charts">
            <i className="pe-7s-graph"></i>
            <p>Charts</p>
          </Link>
        </li>
        <li className={this.isPathActive('/calendar') ? 'active' : null}>
          <Link to="/calendar">
            <i className="pe-7s-date"></i>
            <p>Calendar</p>
          </Link>
        </li>
      </ul>
    );
  }

  isPathActive(path) {
    return this.props.location.pathname.startsWith(path);
  }
}

export default withRouter(Nav);