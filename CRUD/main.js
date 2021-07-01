const inputNome = document.getElementById('nome'); 
const inputEmail = document.getElementById('email');
const inputCelular = document.getElementById('celular'); 
const inputCidade = document.getElementById('cidade');   
    

const PegarIdModal = document.getElementById('cadastrarCliente').addEventListener('click',modal);
const pegarBotaoCancelar = document.getElementById('cancelar').addEventListener('click',limpar=>{
    inputNome.value = "";
    inputEmail.value = "";
    inputCelular.value = "";
    inputCidade.value = "";
})

function modal(){
    const pegarModal = document.getElementById('modal');
    pegarModal.classList.add('mostrar');    
}

const fecharModal = document.getElementById('close').addEventListener('click', fechar =>{
    
    const pegarModal = document.getElementById('modal');    
    pegarModal.classList.remove('mostrar'); 

    inputNome.value = "";
    inputEmail.value = "";
    inputCelular.value = "";
    inputCidade.value = "";
});


 


