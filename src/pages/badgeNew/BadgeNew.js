import React from 'react';
import './BadgeNew.css';
import header from '../../assets/images/badge-header.svg';

import BadgeForm from '../../components/badgeForm/BadgeForm';
import Badge from '../../components/badge/Badge';

class BadgeNew extends React.Component {
    state = {
        form: {}
    }

    handleChanges = e => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name] : e.target.value
            }
        })
    }
    render() {
      return (
        <div>
          <div className="BadgeNew__hero">
            <img className="img-fluid" src={header} alt="Logo" />
          </div>
  
          <div className="container">
            <div className="row">
              <div className="col-6">
                <Badge
                  firstName={this.state.form.firstName}
                  lastName={this.state.form.lastName}
                  twitter={this.state.form.twitter}
                  jobTitle={this.state.form.jobTitle}
                />
              </div>
              <div className="col-6">
                  <BadgeForm 
                    onChange={this.handleChanges}
                    formValues={this.state.form}
                   />
              </div>
            </div>
          </div>
        </div>
      );
    }
}

export default BadgeNew;