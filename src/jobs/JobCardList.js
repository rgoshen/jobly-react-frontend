import React from "react";
import JobCard from "./JobCard";

/** Show list of job cards.
 *
 * Used by both JobList and CompanyDetail to list jobs. Receives an apply
 * func prop which will be called by JobCard on apply.
 *
 * JobList -> JobCardList -> JobCard
 * CompanyDetail -> JobCardList -> JobCard
 *
 */

function JobCardList({ jobs, apply }) {
  console.debug("JobCardList", "jobs=", jobs);

  return (
    <div className="JobCardList container-fluid">
      <div className="JobCardList-list row row-cols1 row-cols-md-3 g-4">
        {jobs.map((job) => (
          <JobCard
            key={job.id}
            id={job.id}
            title={job.title}
            salary={job.salary}
            equity={job.equity}
            companyName={job.companyName}
          />
        ))}
      </div>
    </div>
  );
}

export default JobCardList;
