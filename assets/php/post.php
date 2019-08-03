<?php
   
    $nome = $_POST['nome'];
    $cpf = $_POST['cpf'];
    $email = $_POST['email'];
    $telefone = $_POST['telefone'];
    $urlImg = $_POST['urlImg'];
    
    $dados = array[$nome, $cpf, $email, $telefone, $urlImg];

    for($i = 0; i < count($dados); i++){
        if(empty($dados[i]) === true){
            echo json_encode('Dados vazios');
            
            break;
        }else echo json_encode($dados);
    }
?>