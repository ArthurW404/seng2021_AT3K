import {
    Button, Grid
} from '@material-ui/core';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import {
    BoardCardGrid,
    CardCarousel
} from '../components/job-dashboard';
import {
    Dropdown
} from '../components/dropdowns';
import {
    BoardCreateModal
} from '../components/modals';
import {
    ContentLoader
} from '../components/loaders';


// Force update hook
const useForceUpdate = () => {
    const [value, setValue] = useState(0);             
    return () => setValue(value => value + 1); 
}

const JobDashboardIndex = ({ boards, companies, handleSelectBoard, updateBoardList, boardSortStrategy, handleSetBoardSorter, fetchBoards }) => {
    const [modalOpen, setModalOpen] = React.useState(false);

    const handleModalOpen = () => {
        setModalOpen(true);
    };
    const handleModalClose = () => {
        setModalOpen(false);
    };

    const isLoading = (boards == null);

    return (
        <div>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Grid container spacing={3}>
                        <Grid item xs={6}>
                            <h2>Personal Boards</h2>
                        </Grid>
                        <Grid item xs={6}>
                            <Dropdown 
                                label="Sort by"
                                value={boardSortStrategy}
                                onChange={handleSetBoardSorter}
                                items={[
                                    { value: "alphabetical", text: "Alphabetical A-Z" },
                                    { value: "reverse-alphabetical", text: "Alphabetical Z-A" },
                                    { value: "recency", text: "Most recently interacted" },
                                    { value: "reverse-recency", text: "Least recently interacted" },
                                    { value: "priority", text: "Highest priority" },
                                    { value: "reversepriority", text: "Lowest priority" }
                                ]}
                            />
                        </Grid>
                    </Grid>
                    {isLoading ? (
                        <ContentLoader />
                    ) : (
                        <>
                            <BoardCardGrid
                                selectBoard={handleSelectBoard}
                                boards={boards}
                                fetchBoards={fetchBoards}
                            />
                            <div style={{"textAlign": "center", "margin": "20px"}}>
                                <Button 
                                    variant="contained" 
                                    color="primary"
                                    onClick={handleModalOpen}
                                >
                                    Create New Board
                                </Button>
                            </div>
                        </>
                    )} 
                </Grid>
            </Grid>
            <hr />
            <h2>Favourited Companies</h2>
            <CardCarousel 
                companies={companies}
            />
            <BoardCreateModal 
                updateBoardList={updateBoardList}
                handleClose={handleModalClose} 
                open={modalOpen} 
            />
        </div>
    )
}

JobDashboardIndex.propTypes = {
    boards: PropTypes.array,
    companies: PropTypes.array,
    handleSelectBoard: PropTypes.func
};

export default JobDashboardIndex;
