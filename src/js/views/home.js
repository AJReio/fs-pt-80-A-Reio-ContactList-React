import React, { useEffect, useContext} from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { ContactComponent } from "../component/ContactComponent.jsx";
import { FormContact } from "../component/FormContact.jsx";



export const Home = () => {
 
	const {store, actions}= useContext(Context)
	useEffect(() => {
		actions.createAgenda();	
		actions.getAgenda();
		actions.createContact();
		actions.updateContact();
		actions.delContact();
	  }, []);

	return(
	<div className="text-center mt-5">
		{
			store.contacts?.map(el=><ContactComponent key={el.id} id ={el.id} name={el.name} email={el.email} address={el.address} phone={el.phone}/>

			)
		}
		
		<FormContact />
	</div>
	)
} ;
