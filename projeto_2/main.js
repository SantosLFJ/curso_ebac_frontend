const formContato = document.getElementById('form-contato');
const inputNome = document.getElementById('nome-contato');
const inputTelefone = document.getElementById('telefone-contato');
const tabelaContatos = document.getElementById('tabela-contatos');

formContato.addEventListener('submit', function(event) {
  event.preventDefault();
  const nome = inputNome.value.trim();
  const telefone = inputTelefone.value.trim();
  if (nome !== '' && telefone !== '') {
    const contatoExistente = buscarContatoPeloNome(nome);
    if (contatoExistente !== null) {
      if (confirm(`Já existe um contato com o nome ${nome}. Deseja atualizar o número de telefone?`)) {
        contatoExistente.telefone = telefone;
        atualizarTabelaContatos();
        inputNome.value = '';
        inputTelefone.value = '';
      }
    } else {
      adicionarContato(nome, telefone);
      inputNome.value = '';
      inputTelefone.value = '';
    }
  }
});

function adicionarContato(nome, telefone) {
  const novoContato = { nome, telefone };
  contatos.push(novoContato);
  atualizarTabelaContatos();
}

function buscarContatoPeloNome(nome) {
  return contatos.find(contato => contato.nome === nome) || null;
}

function atualizarTabelaContatos() {
  tabelaContatos.innerHTML = '';
  contatos.forEach(contato => {
    const tr = document.createElement('tr');
    const tdNome = document.createElement('td');
    tdNome.textContent = contato.nome;
    const tdTelefone = document.createElement('td');
    tdTelefone.textContent = contato.telefone;
    tr.appendChild(tdNome);
    tr.appendChild(tdTelefone);
    tabelaContatos.appendChild(tr);
  });
}

function formatPhone(value) {
  // Remove todos os caracteres que não são dígitos
  const digits = value.replace(/\D/g, '');

  // Define o formato do telefone
  const pattern = /(\d{2})(\d{5})(\d{4})/;

  // Formata o telefone usando o padrão definido
  return digits.replace(pattern, '($1) $2-$3');
}

const telefoneInput = document.getElementById('telefone-contato');

telefoneInput.addEventListener('input', (event) => {
  const value = event.target.value;
  event.target.value = formatPhone(value);
});

// Lista de contatos
let contatos = [];
