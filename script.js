var btn = document.getElementById('submit')
btn.addEventListener('click', () => {
	const Form = {
		nome: document.getElementById('nome'),
		email: document.getElementById('email'),

		getValues() {
			return {
				nome: Form.nome.value,
				email: Form.email.value,
			}
		},
		validateFields() {		
			const { nome, email } = Form.getValues();
			if (nome.trim() == '') {
				Form.nome.classList.add('outlineDanger');
				Form.email.classList.remove('outlineDanger');
				throw new Error('O campo nome é obrigatório!');
			} else if (email.trim() == '') {
				Form.email.classList.add('outlineDanger');
				Form.nome.classList.remove('outlineDanger');
				throw new Error('O campo email é obrigatório!');
			} else {
				console.log(Form.getValues());
				Form.nome.classList.remove('outlineDanger');
				Form.email.classList.remove('outlineDanger');
				Form.nome.value = '';
				Form.email.value = '';
			}
		}
	}

	try {
		Form.validateFields();
		setTimeout(() => {
			displayMessage({
				title: 'Sucesso!',
				icon: 'success',
				text: 'Contato enviado com sucesso!'
			});
		}, 300);
	} catch (error) {
		setTimeout(() => {
			displayMessage({
				title: 'Atenção!',
				icon: 'warning',
				text: `${error.message}`
			});
		}, 300);
	}
});

function displayMessage({ title, text, icon }) {
	var display = document.querySelector('.modal-container');
	display.classList.add('show')

	var panel = document.createElement('div');
	panel.setAttribute('class', 'modal');
	display.appendChild(panel);
	
	var titleEl = document.createElement('h1');
	titleEl.textContent = title;
	panel.appendChild(titleEl);
	
	var msg = document.createElement('p');
	msg.textContent = text;
	panel.appendChild(msg);

	var closeBtn = document.createElement('button');
	closeBtn.textContent = 'OK';
	panel.appendChild(closeBtn);

	closeBtn.addEventListener('click', () => {
		display.classList.remove('show')
		panel.parentNode.removeChild(panel);
	});

	if(icon === 'warning') {
		titleEl.classList.add('text-warning');
		closeBtn.classList.add('btn-warning');
	} else if(icon === 'success'){
		titleEl.classList.add('text-success');
		closeBtn.classList.add('btn-success');
	}
}