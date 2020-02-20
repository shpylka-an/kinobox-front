import React from "react";
import {Datagrid, DeleteButton, EditButton, List, ShowButton, TextField} from "react-admin";

const ActorList = props => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="firstName" />
            <TextField source="lastName" />
            <ShowButton/>
            <EditButton/>
            <DeleteButton/>
        </Datagrid>
    </List>
)

export default ActorList