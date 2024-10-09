document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    event.preventDefault(); //Impede o envio padrão do formulário

    const nome = document.getElementById('nome').value;
    const email = document.getElementsByClassName('email')[0].value;
    console.log(email);
    const senha = document.querySelector('input[type="password"]').value;

    const mensagem = document.getElementById('mensagem');
    window.alert(`Essa senha ${senha} já existe!`);
    mensagem.textContent = `Obrigado, ${nome}! Seu cadastro foi realizado com sucesso. Veirifique o email: ${email}`

    this.reset();
});

const formGroup = document.querySelectorAll('.form-group');

formGroup.forEach(group => {
    group.addEventListener('mouseover', function() {
        this.style.backgroundColor = 'lightblue'
    });

    group.addEventListener('mouseout', function() {
        this.style.backgroundColor = '';
    })
});

const mensagemDiv = document.getElementById('mensagem');
mensagemDiv.textContent = 'Preencha os campos acima antes de submeter!';


