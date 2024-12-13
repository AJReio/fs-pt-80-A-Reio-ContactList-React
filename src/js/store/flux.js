const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			url: 'https://playground.4geeks.com/contact',
			selected: [],
			contact: [],
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			createAgenda: async () => {
				try {
					const response = await fetch(getStore().url + '/agendas/rello', {
						method: 'POST',
						headers: {
							'Content-Type': 'application/json'
						},
						body: JSON.stringify()
					});
					if (!response.ok) throw new Error('Something went wrong...');
					const data = await response.json();
					getActions().getAgenda();
					return true
				} catch (error) {
					console.error(error)
				}
			},

			getAgenda: async () => {
				try {
					const response = await fetch(getStore().url + '/agendas/rello');
					if (response.status == 404) return getActions().createAgenda();
					if (!response.ok) throw new Error('Something went wrong...');
					const data = await response.json();
					setStore({ contacts: data.contacts })
				} catch (error) {
					console.error(error)
				}
			},

			createContact: async (contact) => {
				try {
					const response = await fetch(getStore().url + '/agendas/rello/contacts', {
						method: 'POST',
						headers: {
							'Content-Type': 'application/json'
						},
						body: JSON.stringify(contact)
					});
					if (!response.ok) throw new Error('Something went wrong...');
					const data = await response.json();
					console.log(data)
					getActions().getAgenda()
				} catch (error) {
					console.error(error)
				}
			},

			selectContact: (id, name, address, email, phone) => {
				setStore({
					selected: { id, name, address, email, phone}
				})
			},

			updateContact: async (id, contact) => {
				try {
					const response = await fetch(getStore().url + '/agendas/rello/contacts/' + id, {
						method: 'PUT',
						headers: {
							'Content-Type': 'application/json'
						},
						body: JSON.stringify(contact)
					});
					if (!response.ok) throw new Error('Something went wrong...');
					const data = await response.json();
					// setStore({ contacts: data.contacts })
					getActions().getAgenda()
				} catch (error) {
					console.error(error)
				}
			},

			delContact: async (id) => {
				try {
					const response = await fetch(getStore().url + '/agendas/rello/contacts/' + id, {
						method: 'DELETE'
					});
					if (!response.ok) throw new Error('Something went wrong...');
					getActions().getAgenda()
				} catch (error) {
					console.error(error)
				}
			},

		}
	};
};


export default getState;
