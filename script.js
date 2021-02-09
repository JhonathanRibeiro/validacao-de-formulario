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
				icon: 'success',
				text: 'Enviado com sucesso!'
			});
		}, 300);
	} catch (error) {
		setTimeout(() => {
			displayMessage({
				icon: 'warning',
				text: `${error.message}`
			});
		}, 300);
	}
});

function displayMessage({ text, icon }) {
	var display = document.querySelector('.displayMessage');
	display.style.display = 'block';

	var panel = document.createElement('div');
	panel.setAttribute('class', 'msgBox');
	display.appendChild(panel);

	var msg = document.createElement('p');
	msg.textContent = text;
	panel.appendChild(msg);

	var closeBtn = document.createElement('button');
	closeBtn.textContent = 'OK';
	panel.appendChild(closeBtn);

	closeBtn.addEventListener('click', () => {
		display.style.display = 'none';
		panel.parentNode.removeChild(panel);
	});
	if(icon === 'warning' ? panel.classList.add('warningAlert') : msg.style.paddingLeft = '20px');
	if(icon === 'success' ? panel.classList.add('successAlert') : msg.style.paddingLeft = '20px');
}