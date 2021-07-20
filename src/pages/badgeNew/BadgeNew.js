import React from 'react';
import './BadgeNew.css';
import header from '../../assets/images/badge-header.svg';

import BadgeForm from '../../components/badgeForm/BadgeForm';
import Badge from '../../components/badge/Badge';
import api from '../../api';
import md5 from 'md5';

class BadgeNew extends React.Component {
    state = {
        form: {
          firstName: '',
          lastName: '',
          email: '',
          jobTitle: '',
          twitter: '',
        }
    }

  handleChanges = e => {
    this.setState({
        form: {
            ...this.state.form,
            [e.target.name] : e.target.value
        }
    })
  };

  handleSubmit = async e => {
    e.preventDefault();
    try {
      await api.badges.create({...this.state.form, avatarUrl: `https://www.gravatar.com/avatar/${md5(this.state.form.email)}?d=identicon`});
      this.props.history.push('/badges')
    } catch (error) {
      this.setState({error: error})
    }
  };

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
                  firstName = {this.state.form.firstName || 'FIRST NAME'}
                  lastName = {this.state.form.lastName || 'LASTNAME'}
                  twitter = {this.state.form.twitter || 'username'}
                  jobTitle = {this.state.form.jobTitle || 'JOB TITLE'}
                  avatarUrl = {`https://www.gravatar.com/avatar/${md5(this.state.form.email)}?d=identicon`}
                />
              </div>
              <div className="col-6">
                  <BadgeForm 
                    onChange={this.handleChanges}
                    onSubmit={this.handleSubmit}
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