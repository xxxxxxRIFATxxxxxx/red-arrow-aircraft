import React from 'react';

const Team = props => {
    const { team } = props;
    let totalCost = 0;
    for (const person of team) {
        totalCost += person.remuneration;
    };

    return (
        <div>
            <table className="table table-striped my-3">
                <thead>
                    <tr>
                        <th scope="col" className="bg-danger text-white fw-normal">Total Person Added</th>
                        <th scope="col" className="bg-danger text-white fw-normal">Total Cost</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="text-white text-center">{team.length}</td>
                        <td className="text-white text-center">
                            {totalCost}
                        </td>
                    </tr>
                </tbody>
            </table>

            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col" className="bg-danger text-white text-center">Name</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        team.map(person => {
                            return (
                                <tr key={person.id + Math.random()}>
                                    <td className="text-white text-center">
                                        {person.name}
                                    </td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Team;