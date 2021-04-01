import React from "react";

export default class Entities extends React.Component {
    render() {
        return (
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Description</th>
                        <th>CreateTime</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.entities && this.props.entities.map(entity => {
                        return <tr key={friend._id}>
                            <td>{entity.id}</td>
                            <td>{entity.name}</td>
                            <td>{entity.type}</td>
                            <td>{entity.description}</td>
                            <td>{entity.creationTime}</td>
                        </tr>
                    })}
                </tbody>
            </table>
        );
    }

}