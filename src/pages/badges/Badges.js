import React from 'react';
import { Link } from 'react-router-dom';
import api from '../../api';
import confLogo from '../../assets/images/badge-header.svg';
import BadgesList from '../../components/badgesList/BadgesList';
import './Badges.css';

class Badges extends React.Component {
  state = {
    error: null,
    data: [],
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null });

    try {
      const data = await api.badges.list();
      this.setState({ data: data });
    } catch (error) {
      this.setState({ error: error });
    }
  };

  render() {
    return (
      <div>
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img
                className="Badges_conf-logo"
                src={confLogo}
                alt="Conf Logo"
              />
            </div>
          </div>
        </div>

        <div className="Badges__container">
            <div className="Badges__buttons">
              <Link to="/badges/new" className="btn btn-primary">
                New Badge
              </Link>
            </div>
            <BadgesList badges={this.state.data} />
        </div>
      </div>
      );
    }
}

export default Badges;