const button = document.querySelector('.button-add-task')
const input = document.querySelector('.input-task')
const listaCompleta = document.querySelector('.list-task')

let minhaListaDeIntens = []

function adicionarNovaTarefa(){
  minhaListaDeIntens.push({
    tarefa : input.value,
    concluida: false, 
  })

  input.value= ''
  
  mostrarTarefas()
}

function mostrarTarefas(){

  let novaLi = ''

  minhaListaDeIntens.forEach( (intem, index) =>{

      novaLi = novaLi + `
      
        <li class="task ${intem.concluida && "done"}">
          <img src="img/checked.png" alt="checked" onclick = "tarefaConcluida(${index})"/>
          <p>${intem.tarefa}</p>
          <img src="img/trash.png" alt="trash" onclick = "deleteIntem(${index})"/>
        </li>
      
        `
  })

  listaCompleta.innerHTML = novaLi

  localStorage.setItem('lista', JSON.stringify(minhaListaDeIntens))
}

function tarefaConcluida(index){
  minhaListaDeIntens[index].concluida = ! minhaListaDeIntens[index].concluida

  mostrarTarefas()
}

function deleteIntem(index){
  minhaListaDeIntens.splice(index, 1) 

  mostrarTarefas()
}

function recarregarTarefas(){
  const localDoLocalStorage = localStorage.getItem("lista")

  if(localDoLocalStorage){
  minhaListaDeIntens = JSON.parse(localDoLocalStorage)
  }

  mostrarTarefas()
}

button.addEventListener('click', adicionarNovaTarefa)