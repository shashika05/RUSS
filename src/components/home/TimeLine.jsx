import { useEffect } from 'react';
import 'react-vertical-timeline-component/style.min.css';
import './timeline.css';

import InternationalServiceImage from '../../assets/proceeding.png';
import EnvironmentalServiceImage from '../../assets/proceeding.png';
import CommunityServiceImage from '../../assets/proceeding.png';
import ClubServiceImage from '../../assets/proceeding.png';
import {useState} from "react";

export default function TimeLine() {

    const [expandedItem, setExpandedItem] = useState(null);

    const timelineData = [
        {
            year: '2021',
            branches: [
                {
                    title: 'Title 1',
                    date: 'July 13, 2021',
                    description: 'Demo Description',
                },
                {
                    title: 'Title 2',
                    date: 'September 14, 2021',
                    description: 'Demo Description',
                },
            ],
            images : [InternationalServiceImage,EnvironmentalServiceImage]
        },
        {
            year: '2021 - 2022',
            branches: [
                {
                    title: 'Title 1',
                    date: 'October 17, 2021',
                    description: 'Demo Description',
                },
                {
                    title: 'Title 2',
                    date: 'December 26, 2021',
                    description: 'Demo Description',
                },
            ],
            images: [EnvironmentalServiceImage, CommunityServiceImage]
        },
        {
            year: '2022 - 2023',
            branches: [
                {
                    title: 'Title 1',
                    date: 'October 1, 2022',
                    description: 'Demo Description',
                },
                {
                    title: 'Title 2',
                    description: 'Demo Description',
                },
                {
                    title: 'Title 3',
                    description: 'Demo Description',
                },
                {
                    title: 'Title 4',
                    description: 'Demo Description',
                },
                {
                    title: 'Title 5',
                    description: 'Demo Description',
                },
            ],
            significantProjects: [
                {
                    title: 'Title 1',
                    description: 'Demo Description',
                },
                {
                    title: 'Title 2',
                    description: 'Demo Description',
                },
                {
                    title: 'Title 3',
                    description: 'Demo Description',
                },
                {
                    title: 'Title 4',
                    description: 'Demo Description',
                },
                {
                    title: 'Title 5',
                    description: 'Demo Description',
                },
            ],
            images: [CommunityServiceImage, ClubServiceImage]
        },
        {
            year: '2023 - 2024',
            branches: [
                {
                    title: 'Title 1',
                    description: 'Demo Description',
                },
                {
                    title: 'Title 2',
                    description: 'Demo Description',
                },
                {
                    title: 'Title 3',
                    description: 'Demo Description',
                },
            ],
            ongoingProjects: [
                'Special 1',
                'Special 2',
                'Special 3',
            ],
            images: [ClubServiceImage,InternationalServiceImage]
        },
    ];

    useEffect(() => {
        const handleScroll = () => {
            const timelineElements = document.querySelectorAll('.vertical-timeline-element');
            timelineElements.forEach((el, index) => {
                const rect = el.getBoundingClientRect();
                if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
                    el.classList.remove('genie-in');
                    el.classList.add('genie-out');
                } else {
                    el.classList.remove('genie-out');
                    el.classList.add('genie-in');
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    const toggleExpand = (index) => {
        setExpandedItem(expandedItem === index ? null : index);
    };


    return (
        <div>
            <div className="tim-container">
                <div className="vertical-line" style={{border: '3px solid red'}}></div>
                {timelineData.map((item, index) => (
                    <div key={index} className={`box ${index % 2 === 0 ? 'box-left' : 'box-right'}`}>

                        <div className="info" style={{border: '1px solid black'}}>

                            <h2>{item.year}</h2>
                            {item.branches.map((branch, branchIndex) => (
                                <div key={branchIndex}>
                                    <b><h3>{branchIndex + 1} -  {branch.title}</h3></b>
                                    <p>{branch.date ? `${branch.date}: ` : ''}{branch.description}</p>
                                </div>
                            ))}


                            <button
                                className="mb-4 rounded-md bg-gray-300 px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
                                onClick={() => toggleExpand(index)}>
                                {expandedItem === index ? 'Show less' : 'Learn more...'}
                            </button>


                            {expandedItem === index && (
                                <div className="additional-content">
                                    {item.significantProjects && item.significantProjects.map((project, projectIndex) => (
                                        <div key={projectIndex}>
                                            <b><h4>Project {projectIndex + 1} - {project.title}</h4></b>
                                            <p>{project.description}</p>
                                        </div>
                                    ))}
                                    {item.ongoingProjects && item.ongoingProjects.length > 0 && (
                                        <div>
                                            <h4>Ongoing Projects</h4>
                                            <ul>
                                                {item.ongoingProjects.map((project, projectIndex) => (
                                                    <li key={projectIndex}>{project}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
