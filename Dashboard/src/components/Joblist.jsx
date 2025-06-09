import React from 'react';
import JobCard from './Card';
import AMAZON from '../assets/amazon.png'
import TESLA from '../assets/tesla.png'
import Swiggy from '../assets/swiggy.png'
import './Joblist.css'

const jobs = [
  {
    id: 1,
    logo: AMAZON,
    title: 'Full Stack Developer',
    time: '24h Ago',
    experience: '1-3 yr Exp',
    location: 'Onsite',
    salary: '12LPA',
    description: [
      'A user-friendly interface lets you browse stunning photos and videos',
      'Filter destinations based on interests and travel style, and create personalized',
    ],
  },
  {
    id: 2,
    logo: TESLA,
    title: 'Node Js Developer',
    time: '24h Ago',
    experience: '1-3 yr Exp',
    location: 'Onsite',
    salary: '12LPA',
    description: [
      'A user-friendly interface lets you browse stunning photos and videos',
      'Filter destinations based on interests and travel style, and create personalized',
    ],
  },
  {
    id: 3,
    logo: Swiggy,
    title: 'UX/UI Designer',
    time: '24h Ago',
    experience: '1-3 yr Exp',
    location: 'Onsite',
    salary: '12LPA',
    description: [
      'A user-friendly interface lets you browse stunning photos and videos',
      'Filter destinations based on interests and travel style, and create personalized',
    ],
  },
  {
    id: 4,
    logo: AMAZON,
    title: 'Full Stack Developer',
    time: '24h Ago',
    experience: '1-3 yr Exp',
    location: 'Onsite',
    salary: '12LPA',
    description: [
      'A user-friendly interface lets you browse stunning photos and videos',
      'Filter destinations based on interests and travel style, and create personalized',
    ],
  },
  {
    id: 5,
    logo: TESLA,
    title: 'Node Js Developer',
    time: '24h Ago',
    experience: '1-3 yr Exp',
    location: 'Onsite',
    salary: '12LPA',
    description: [
      'A user-friendly interface lets you browse stunning photos and videos',
      'Filter destinations based on interests and travel style, and create personalized',
    ],
  },
  {
    id: 6,
    logo: Swiggy,
    title: 'UX/UI Designer',
    time: '24h Ago',
    experience: '1-3 yr Exp',
    location: 'Onsite',
    salary: '12LPA',
    description: [
      'A user-friendly interface lets you browse stunning photos and videos',
      'Filter destinations based on interests and travel style, and create personalized',
    ],
  },
  {
    id: 7,
    logo: AMAZON,
    title: 'Full Stack Developer',
    time: '24h Ago',
    experience: '1-3 yr Exp',
    location: 'Onsite',
    salary: '12LPA',
    description: [
      'A user-friendly interface lets you browse stunning photos and videos',
      'Filter destinations based on interests and travel style, and create personalized',
    ],
  },
  {
    id: 8,
    logo: TESLA,
    title: 'Node Js Developer',
    time: '24h Ago',
    experience: '1-3 yr Exp',
    location: 'Onsite',
    salary: '12LPA',
    description: [
      'A user-friendly interface lets you browse stunning photos and videos',
      'Filter destinations based on interests and travel style, and create personalized',
    ],
  }
];

const joblist = jobs.map((job) => <JobCard key={job.id} logo={job.logo} time={job.time} 
                                           title={job.title} experience={job.experience}
                                           location={job.location} salary={job.salary} 
                                           description={job.description} />)

const JobList = () => {
  return (
    <div className="cards-container">
        {joblist}
    </div>
  );
};

export default JobList;
