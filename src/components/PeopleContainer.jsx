import React from 'react'
import { getClients } from "../services/Services";
import {useState,useEffect} from 'react'

const PeopleContainer = () => {
    const [clients, setClients] = useState(null);
    useEffect(async () => {
      const _clients = await getClients();
      setClients(_clients);
    }, []);


    return (
        <div>
            {clients[0]?.name}
        </div>
    )
}

export default PeopleContainer
