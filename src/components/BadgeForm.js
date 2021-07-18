import React from 'react';

class BadgeForm extends React.Component {
  
    handleClick = e => {
      console.log('Button was clicked');
    };
  
    handleSubmit = e => {
      e.preventDefault();
      console.log('Form was submitted');
      console.log(this.state);
    };

  render() {
    return (<div>
        <h1>New Attendant</h1>

        <form onSubmit={this.handleSubmit}>
          <div className="mb-3">
            <label>First Name</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="firstName"
              value={this.props.firstName}
            />
          </div>

          <div className="mb-3">
            <label>Last Name</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="lastName"
              value={this.props.lastName}
            />
          </div>

          <div className="mb-3">
            <label>Email</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="email"
              name="email"
              value={this.props.email}
            />
          </div>

          <div className="mb-3">
            <label>Job Title</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="jobTitle"
              value={this.props.jobTitle}
            />
          </div>

          <div className="mb-3">
            <label>Twitter</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="twitter"
              value={this.props.twitter}
            />
          </div>

          <button onClick={this.handleClick} className="btn btn-primary">
            Save
          </button>
        </form>
      </div>
    );
  }
}

export default BadgeForm;