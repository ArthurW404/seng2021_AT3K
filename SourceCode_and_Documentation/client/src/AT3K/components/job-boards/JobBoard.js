import React from 'react';
import Board from 'react-trello';
import boardStyles from './JobBoard.module.scss';

// Documentation:
// https://github.com/rcdexta/react-trello

// What is this: https://github.com/atlassian/react-beautiful-dnd
// Could this be helpful?

const data = {
    lanes: [
        {
            id: 'lane1',
            title: 'Planned Tasks',
            label: '2/2',
            cards: [
                {id: 'Card1', title: 'Write Blog', description: 'Can AI make memes', label: '30 mins'},
                {id: 'Card2', title: 'Pay Rent', description: 'Transfer via NEFT', label: '5 mins', metadata: {sha: 'be312a1'}},
                {id: 'Card3', title: 'Write Blog', description: 'Can AI make memes', label: '30 mins'},
                {id: 'Card4', title: 'Pay Rent', description: 'Transfer via NEFT', label: '5 mins', metadata: {sha: 'be312a1'}},
                {id: 'Card5', title: 'Write Blog', description: 'Can AI make memes', label: '30 mins'},
                {id: 'Card6', title: 'Pay Rent', description: 'Transfer via NEFT', label: '5 mins', metadata: {sha: 'be312a1'}}
            ]
        },
        {
            id: 'lane2',
            title: 'Completed',
            label: '0/0',
            cards: []
        }
    ]
}

const JobBoard = () => {
    return (
        <div className={boardStyles.container}>
            <Board 
                className={boardStyles.board} 
                data={data} 
            />
        </div>
    );
};

export default JobBoard;
