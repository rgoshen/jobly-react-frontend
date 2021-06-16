import React from "react";
import { Link } from "react-router-dom";

import "./CompanyCard.css";

/** Show limited information about a company
 *
 * Is rendered by CompanyList to show a "card" for each company.
 *
 * CompanyList -> CompanyCard
 */

function CompanyCard({ name, description, logoUrl, handle }) {
  console.debug("CompanyCard", logoUrl);

  return (
    <div className="col">
      <Link className="CompanyCard card h-100" to={`/companies/${handle}`}>
        <div className="card-header text-center">
          <h6 className="card-title">{name}</h6>
        </div>
        <div className="card-body">
          {logoUrl && (
            <img src={logoUrl} alt={name} className="float-right ml-5" />
          )}
          <p>
            <small>{description}</small>
          </p>
        </div>
      </Link>
    </div>
  );
}

export default CompanyCard;
