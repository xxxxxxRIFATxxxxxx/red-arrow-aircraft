import React, { useEffect, useState } from 'react';
import Person from '../Person/Person';
import Team from '../Team/Team';
import Alert from '../Alert/Alert';

const Persons = () => {
    const [persons, setPersons] = useState([]);
    const [team, setTeam] = useState([]);
    const [alert, setAlert] = useState(false);

    const handleSelectPerson = person => {
        const personFound = team.find(item => item.id === person.id);
        if (personFound) {
            setAlert(true);

            setTimeout(() => {
                setAlert(false);
            }, 2000);
        }

        else {
            const newTeam = [...team, person];
            setTeam(newTeam);
        };
    };

    useEffect(() => {
        fetch("./aircraft.json")
            .then(res => res.json())
            .then(data => setPersons(data))
            .catch(err => console.log(err));
    }, []);

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-12 col-sm-12 col-md-9">
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        {
                            persons.map(person => {
                                return (
                                    <Person
                                        key={person.id}
                                        person={person}
                                        handleSelectPerson={handleSelectPerson}
                                    >
                                    </Person>
                                )
                            })
                        }
                    </div>
                </div>

                <div className="col-12 col-sm-12 col-md-3">
                    {alert ? <Alert></Alert> : null}
                    <Team team={team}></Team>
                </div>
            </div>
        </div>
    );
};

export default Persons;