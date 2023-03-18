const tbody = document.querySelector('tbody');
const addForm = document.querySelector('.add-form');

const fetchImoveis = async () => {
    const response = await fetch('http://localhost:3333/imoveis');
    const imoveis = await response.json();
    return imoveis;
}

const addImovel = async (event) => {
    event.preventDefault();

    const title = document.querySelector('.input-task').value;
    // const title = document.querySelector('#title').value;
    // const bairro = document.querySelector('#bairro').value;
    // const status = document.querySelector('#status').value;
    // const title = 'Titulo Teste';
    const bairro = 'Bairro Teste';
    const status = 'pendente';

    const response = await fetch('http://localhost:3333/imoveis', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title,
            bairro,
            status 
        })
    });

    loadImoveis();
    document.querySelector('.input-task').value = '';
}

const deleteImovel = async (id) => {
    await fetch(`http://localhost:3333/imoveis/${id}`, {
        method: 'DELETE',
    });
    // alert('Apagar Imovel ' + id);
    loadImoveis();
};

const updateImovel = async (imovel) => {
    const { id, title, bairro, status, created_at, updated_at } = imovel;
    console.log({ title, bairro, status, created_at, updated_at });

    await fetch(`http://localhost:3333/imoveis/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, bairro, status, created_at, updated_at }),
});

    loadImoveis();
}

const formatDate = (dateUTC) => {
    const options = { dateStyle: 'long', timeStyle: 'short' };
    const date = new Date(dateUTC).toLocaleString('pt-br', options);
    return date;
}

const createElement = (tag, innerText = '', innerHTML = '') => {
    const element = document.createElement(tag);

    if (innerText) {
        element.innerText = innerText;
    }

    if (innerHTML) {
        element.innerHTML = innerHTML;
    }

    return element;
};


const createSelect = (value) => {
    const options = `
        <option value="pendente">pendente</option>
        <option value="em andamento">em andamento</option>
        <option value="ativo">ativo</option>
    `
    const select = createElement('select', '', options);

    select.value = value;

    return select;
}

const createRow = (imovel) => {
    const { id, title, bairro, status, created_at, updated_at } = imovel;
    // console.log(imovel);

    const tr = createElement('tr');
    const tdTitle = createElement('td', title);
    const tdCreatedAt = createElement('td', formatDate(created_at));
    const tdStatus = createElement('td');
    const tdActions = createElement('td');

    const select = createSelect(status);

    //Gerando a Data em UTC
    const dateUTC = new Date(Date.now()).toUTCString();
    select.addEventListener('change', ({ target }) => updateImovel({ id, title, bairro, status: target.value, created_at, updated_at: dateUTC }));

    const editButton = createElement('button', '', '<span class="material-symbols-outlined">edit</span>');
    const deleteButton = createElement('button', '', '<span class="material-symbols-outlined">delete</span>');

    const editForm = createElement('form');
    const editInput = createElement('input');

    editInput.value = title;
    editForm.appendChild(editInput);

    editForm.addEventListener('submit', (event) => {
        event.preventDefault();
        updateImovel({ id, title: editInput.value, bairro, status,created_at, updated_at: dateUTC });
        // alert('Testando o Form');
    });

    editButton.addEventListener('click', () => {
        tdTitle.innerText = '';
        tdTitle.appendChild(editForm);
    });


    editButton.classList.add('btn-action');
    deleteButton.classList.add('btn-action');

    deleteButton.addEventListener('click', () => deleteImovel(id));

    tdStatus.appendChild(select);

    tdActions.appendChild(editButton);
    tdActions.appendChild(deleteButton);

    tr.appendChild(tdTitle);
    tr.appendChild(tdCreatedAt);
    tr.appendChild(tdStatus);
    tr.appendChild(tdActions);

    return tr;
}

const loadImoveis = async () => {
    const imoveis = await fetchImoveis();
    // console.log(imoveis);
    tbody.innerHTML = '';

    imoveis.forEach((imovel) => {
        const tr = createRow(imovel);
        // console.log(imovel);
        tbody.appendChild(tr);
    });
}


addForm.addEventListener('submit', addImovel);

loadImoveis();