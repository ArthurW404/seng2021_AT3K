import React, { useState } from 'react';

import Layout from '../../components/Layout/Layout';
import { JobList, JobSelectionMenu } from '../components/job-lists';


const data = [
    {
        position: "Graduate software engineer",
        company: "Canva",
        description: "This is some random description about the job",
        link: "https://www.google.com",
        salary: "$50000/yr",
        deadline: "Tomorrow",
        location: "Sydney, NSW",
        postedDate: "Yesterday",
        requiredSkills: [
            "Node.js",
            "React",
            "Express",
            "MongoDB",
            "Python",
            "C++"
        ],
        missingSkills: [
            "React",
            "Express",
            "MongoDB"
        ]
    },
    {
        position: "Security engineer",
        company: "Citadel",
        description: "This is some random description about the job",
        link: "https://www.google.com",
        salary: "$50000/yr",
        deadline: "Tomorrow",
        location: "Sydney, NSW",
        postedDate: "Yesterday",
        requiredSkills: [
            "Node.js",
            "React",
            "Express",
            "MongoDB",
            "Python",
            "C++"
        ],
        missingSkills: [
            "React",
            "Express",
            "MongoDB"
        ]
    },
    {
        position: "Techlead",
        company: "Google",
        description: "This is some random description about the job",
        link: "https://www.google.com",
        salary: "$50000/yr",
        deadline: "Tomorrow",
        location: "Sydney, NSW",
        postedDate: "Yesterday",
        requiredSkills: [
            "Node.js",
            "React",
            "Express",
            "MongoDB",
            "Python",
            "C++"
        ],
        missingSkills: [
            "React",
            "Express",
            "MongoDB"
        ]
    },
    {
        position: "Techlead",
        company: "Google",
        description: "This is some random description about the job",
        link: "https://www.google.com",
        salary: "$50000/yr",
        deadline: "Tomorrow",
        location: "Sydney, NSW",
        postedDate: "Yesterday",
        requiredSkills: [
            "Node.js",
            "React",
            "Express",
            "MongoDB",
            "Python",
            "C++"
        ],
        missingSkills: [
            "React",
            "Express",
            "MongoDB"
        ]
    },
    {
        position: "Techlead",
        company: "Google",
        description: "This is some random description about the job",
        link: "https://www.google.com",
        salary: "$50000/yr",
        deadline: "Tomorrow",
        location: "Sydney, NSW",
        postedDate: "Yesterday",
        requiredSkills: [
            "Node.js",
            "React",
            "Express",
            "MongoDB",
            "Python",
            "C++"
        ],
        missingSkills: [
            "React",
            "Express",
            "MongoDB"
        ]
    },
];

const JobSearch = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const handleSelectCategory = () => {
        setSearchQuery("Software");
    }
    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
    }

    return (
        <Layout>
            <h1>Job Search</h1>
            {/* TODO: Search bar should be moved to this component, don't keep it in the children */}
            {(searchQuery === "") ? (
                <JobSelectionMenu
                    data={data}
                    searchValue={searchQuery}
                    onSearch={handleSearch}
                    handleSelectCategory={handleSelectCategory}
                />
            ) : (
                <JobList
                    data={data}
                    searchValue={searchQuery}
                    onSearch={handleSearch}
                />
            )}
        </Layout>
    );
};

export default JobSearch;
