import swal from 'sweetalert'


export const List = (status) => status ?
    "Conteúdo adicionado com sucesso"
    : swal({
        title: "Error!",
        text: "Não foi possível carregar o conteúdo",
        icon: "error",
    });


export const Store = (status,msg) => status ?
    swal({
        title: "Sucesso!",
        text: "Conteúdo adicionado com sucesso",
        icon: "success",
    })
    : swal({
        title: "Error!",
        text: msg,
        icon: "error",
    });

export const Remove = (status) => status ?
    swal({
        title: "Sucesso!",
        text: "Conteúdo removido com sucesso",
        icon: "success",
    })
    : swal({
        title: "Error!",
        text: "Não foi possível remover o conteúdo",
        icon: "error",
    });

export const Update = (status) => status ?
    swal({
        title: "Sucesso!",
        text: "Conteúdo alterado com sucesso",
        icon: "success",
    })
    : swal({
        title: "Error!",
        text: "Não foi possível alterar o conteúdo",
        icon: "error",
    });

export const Approved = (status) => status ?
    swal({
        title: "Sucesso!",
        text: "Conteúdo aprovado com sucesso",
        icon: "success",
    })
    : swal({
        title: "Error!",
        text: "Não foi possível aprovar o conteúdo",
        icon: "error",
    });
export const Send = (status) => status ?
    swal({
        title: "Sucesso!",
        text: "Conteúdo enviado com sucesso",
        icon: "success",
    })
    : swal({
        title: "Error!",
        text: "Não foi possível enviar o conteúdo",
        icon: "error",
    });
export const Upload = (status,msg) => status ?
    swal({
        title: "Sucesso!",
        text: "Conteúdo enviado com sucesso",
        icon: "success",
    })
    : swal({
        title: "Error!",
        text: msg,
        icon: "error",
    });
export const Contact = (status,msg) => status ?
    swal({
        title: "Sucesso!",
        text: msg,
        icon: "success",
    })
    : swal({
        title: "Error!",
        text: msg,
        icon: "error",
    });
export const Custom = (status,msg) => status ?
    swal({
        title: "Sucesso!",
        text: msg,
        icon: "success",
    })
    : swal({
        title: "Error!",
        text: msg,
        icon: "error",
    });

