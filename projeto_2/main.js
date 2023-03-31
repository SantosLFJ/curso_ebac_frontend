const formContato = document.getElementById('form-contato');
const inputNome = document.getElementById('nome-contato');
const inputTelefone = document.getElementById('telefone-contato');
const tabelaContatos = document.getElementById('tabela-contatos');

formContato.addEventListener('submit', function(event) {
  event.preventDefault();
  const nome = inputNome.value.trim();
  const telefone = inputTelefone.value.trim();
  if (nome !== '' && telefone !== '') {
    adicionarContato(nome, telefone);
    inputNome.value = '';
    inputTelefone.value = '';
  }
});

function adicionarContato(nome, telefone) {
  const tr = document.createElement('tr');
  const tdNome = document.createElement('td');
  tdNome.textContent = nome;
  const tdTelefone = document.createElement('td');
  tdTelefone.textContent = telefone;
  tr.appendChild(tdNome);
  tr.appendChild(tdTelefone);
  tabelaContatos.appendChild(tr);
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
