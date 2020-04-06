
export default (status) => ({
    list: status ?
        "Conteúdo listado com sucesso" :
        "Não foi possível carregar o conteúdo",

    store: status ?
        "Conteúdo adicionado com sucesso" :
        "Error ao adicionar o conteúdo",

    remove: status ?
        "Conteúdo removido com sucesso" :
        "Error ao remover o conteúdo",


    update: status ?
        "Conteúdo alterado com sucesso" :
        "Error ao alterar o conteúdo",

    send: status ?
        "Conteúdo enviado com sucesso" :
        "Error ao enviar o conteúdo",
});