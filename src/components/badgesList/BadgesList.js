import md5 from 'md5';
import React, { useMemo, useState } from 'react';
import './BadgesList.css';

class BadgesListItem extends React.Component {
    render() {
      return (
        <div className="BadgesListItem">
          <img
            className="BadgesListItem__avatar"
            src={this.props.badge.avatarUrl}
            alt={`${this.props.badge.firstName} ${this.props.badge.lastName}`}
          />
  
          <div>
            <strong>
              {this.props.badge.firstName} {this.props.badge.lastName}
            </strong>
            <br />@{this.props.badge.twitter}
            <br />
            {this.props.badge.jobTitle}
          </div>
        </div>
      );
    }
  }

function BadgesList(props) {
    const badges = props.badges;
    const {query, filteredBadges, setQuery} = useSearchBadge(badges);

    return (
      <div className="BadgesList">
        <div className="mb-3">
          <label className="form-label">Search an badge:</label>
          <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Example..." 
            value={query}
            onChange={ e => setQuery(e.target.value) }
          />
        </div>
          { 
            filteredBadges.length === 0 ? 'Data not found!' :
            <ul className="list-unstyled">
                {filteredBadges.map(badge => {
                    return(
                      <li key={badge.id}> 
                        <BadgesListItem 
                          badge={badge} />
                      </li>
                    );
                })}
            </ul>
          }
      </div>
    );
}

/**
 * Custom hook for get filtered badges when typing an value
 * @param {*} badges 
 * @returns {query, filteredBadges, setQuery}
 */
function useSearchBadge(badges) {
  const [query, setQuery] = useState('');

  const [filteredBadges, setFilteredBadges] = useState(badges);
  useMemo(() => 
    setFilteredBadges(
      badges.filter(badge => 
          `${badge.firstName} ${badge.lastName} ${badge.jobTitle} @${badge.twitter}`
          .toLowerCase().includes(query.toLowerCase())
      )
    )
  , [badges, query]);

  return {query, filteredBadges, setQuery}
}

export default BadgesList