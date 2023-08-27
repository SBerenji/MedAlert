import React, { useState } from 'react';
import { Avatar, Button, Card, IconButton, Input, List, ListItem, ListItemPrefix, Typography } from '@material-tailwind/react';
import Patients from '../../dummyPatients.json';
import PatientPhoto from '../../assets/patient.png'

const DoctorDashboard = () => {
    const [searchValue, setSearchValue] = useState('');
    const [closestPatients, setClosestPatients] = useState([]);
    const [isSearchActive, setIsSearchActive] = useState(false);


    const handleSearch = (e) => {
        const inputValue = e.target.value.toUpperCase();
        setSearchValue(inputValue);

        if (inputValue === '') {
            setClosestPatients([]);
            return;
        }

        const closest = Patients.filter(patient => patient.patientId.includes(inputValue));
        setClosestPatients(closest);
    }

    const handleAddButton = () => {
        setSearchValue('');
        setClosestPatients([]);
    }

    return (
        <div className='pt-16'>
            <Typography variant="h5" className="text-left">Welcome Dr.<span className='font-normal'>Smith,</span></Typography>
            <div className='flex flex-col items-center gap-8'>
                <div>
                    <Typography variant="h3">Connect to a Patient</Typography>
                </div>
                <div className='relative w-4/5 md:w-3/5'>
                    <Input label='Patient Number' onChange={handleSearch}/>
                {searchValue && (
                    <Card className="absolute w-full ">
                        {closestPatients.length > 0 ? (
                            <List>
                            {closestPatients.map(patient => (
                                <ListItem key={patient.patientId} className='flex flex-col gap-2 bg-gray-200 md:flex-row'>
                                    <ListItemPrefix>
                                        <Avatar variant="circular" alt="candice" src={PatientPhoto} />
                                    </ListItemPrefix>
                                    <div className='grid w-full md:grid-flow-col md:grid-cols-3 md:items-center md:gap-6'>
                                        <div className=''>
                                            <Typography>Patient Id: </Typography>
                                            <Typography variant="h6" color="blue-gray"> {patient.patientId}</Typography>
                                        </div>
                                        <div className='break-words'>
                                            <Typography>Email Address:</Typography>
                                            <Typography variant="h6" color="blue-gray"> {patient.email}</Typography>
                                        </div>
                                        <div className=''>
                                            <Typography>Age: </Typography>
                                            <Typography variant="h6" color="blue-gray"> {patient.age}</Typography>
                                        </div>
                                    </div>
                                    <div>
                                        <IconButton color='blue-gray' onClick={handleAddButton}>
                                            <i className='fa-solid fa-plus'/>
                                        </IconButton>
                                    </div>
                                </ListItem>
                            ))}
                        </List>
                        ) : (
                            searchValue && (
                                <ListItem>
                                    <Typography>No Matching Patient!</Typography>
                                </ListItem>
                            )
                            )}
                    </Card>
                )
            }
            </div>

            {/* Patient List Button */}
            <Button>Patient List</Button>
            </div>
        </div>
    );
}

export default DoctorDashboard;
