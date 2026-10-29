
const nome_produto = document.getElementById("produto")
const produto_listar = document.getElementById("produtoo")
const lista_produto = document.getElementById("listagem_produto")

const nome_cliente = document.getElementById("cliente")
const cpf_cliente = document.getElementById("cpf")
const telefone_cliente = document.getElementById("telefone")

const clientes_v = document.getElementById("clientes_v")
const produtos_v = document.getElementById("produtos_v")
const quantidades_v = document.getElementById("quantidades_v")

const edit_nome = document.getElementById("edit_nome")
const edit_telefone = document.getElementById("edit_telefone")
const edit_cpf= document.getElementById("edit_cpf")


const dados_doestoque_atual = document.getElementById("lista-estoque-atual")
const dados = document.getElementById("lista-cliente")
const dados_do_produto = document.getElementById("lista-produto")
const dados_da_venda = document.getElementById("lista-venda")
// const dados2 = document.getElementById("lista-produto")

const cadastroo = document.getElementById("cadastro")

const produto_buscar = document.getElementById("produto_buscar")

const vendas = JSON.parse(localStorage.getItem("vendas")) || []
const produtos = JSON.parse(localStorage.getItem("produtos")) || []
const clientes = JSON.parse(localStorage.getItem("clientes")) || []

const produto = document.getElementById("produto")
const preco = document.getElementById("preco")
const quantidade = document.getElementById("quantidade")
const tamanho = document.getElementById("tamanho")
const lista_cliente = document.getElementById("listagem_cliente")
const busca_cliente = document.getElementById("cpff")
const adicionar_estq = document.getElementById("quant_estoque")
const desativar = document.getElementById("desativar")

/////////////// cadastro do cliente
function cadastro() {
    if (nome_cliente.value.trim() && cpf_cliente.value.trim() && telefone_cliente.value.trim()) {

        if (/^[A-Za-zÀ-ÿ\s]+$/.test(nome_cliente.value.trim())) {

            if (/^\d{11}$/.test(cpf_cliente.value.trim())) {

                if (/^\d{11}$/.test(telefone_cliente.value.trim())) {

                    let achou = false

                    for (let c of clientes) {
                        if (c.cpf_cliente === cpf_cliente.value.trim()) {
                            achou = true
                        }
                    }

                    if (!achou) {
                        const clientee = {
                            nome_cliente: nome_cliente.value.trim(),
                            cpf_cliente: cpf_cliente.value.trim(),
                            telefone_cliente: telefone_cliente.value.trim()
                        }

                        clientes.push(clientee)

                        localStorage.setItem(
                            "clientes",
                            JSON.stringify(clientes)
                        )

                        alert(clientee.nome_cliente + " está cadastrado(a)!")

                        listar()
                    } else {
                        alert("cpf já cadastrado!")
                    }

                } else {
                    alert("O telefone precisa conter apenas 11 números!")
                }

            } else {
                alert("O CPF precisa conter apenas 11 números!")
            }

        } else {
            alert("O nome só pode ter letras, espaços e acentos!")
        }

    } else {
        alert("Todos os campos devem ser preenchidos!")
        listar()
    }
}
///////////////// lista os clientes cadastrados no html da tela
function listar() {
    console.log(clientes)
    dados.innerHTML = "Clientes cadastrados"

    for (let clientee of clientes) {
        dados.innerHTML += `<p>Nome: ${clientee.nome_cliente} | CPF: ${clientee.cpf_cliente} | TELEFONE: ${clientee.telefone_cliente}</p>`
    }
}
////////////// cadastro dos produtos
function cadastro2() {


    if (produto.value.trim() && preco.value.trim() && quantidade.value.trim() && quantidade.value.trim()) {
        if (/^\d+$/.test(preco.value)) {
            let achou = false

            for (let c of produtos) {
                if (c.produto === produto.value.trim()) {
                    achou = true
                }
            }

            if (!achou) {

                const produtoo = {
                    produto: produto.value,
                    preco: preco.value,
                    quantidade: quantidade.value,
                    tamanho: tamanho.value
                }
                produtos.push(produtoo)
                localStorage.setItem("produtos", JSON.stringify(produtos))
                alert(produtoo.produto + "cadastrado(a)! com sucesso!!")
                listar_produto()
            } else alert(" produto ja cadastrado ")
        } else alert(" o preco deve conter apenas numeros")
    } else alert(" todos os campos devem ser preenchidos!!!")
    listar_produto()
}
//////////////// lista os produtos cadastrados no html da tela
function listar_produto() {
    dados_do_produto.innerHTML = "Produtos cadastrados"

    for (let produtoo of produtos) {
        dados_do_produto.innerHTML += `<p>produto: ${produtoo.produto} | preco: ${produtoo.preco} | quantidade: ${produtoo.quantidade} | tamanho: ${produtoo.tamanho}</p>`
    }
}

/////////////////// efetua a venda conferindo se ja existe um produto e cliente , tbm valida se a qtd a ser vendida e menor ou igual o estoque lista as informacoes da venda e a qtd atual do estoque
function vender() {
    let achouP = false, achouQtde = false, achouC = false
    for (let p of produtos) {
        if (p.produto == produtos_v.value) {
            achouP = true
            if (p.quantidade >= quantidades_v.value) {
                achouQtde = true
                for (let p of clientes) {
                    if (p.cpf_cliente == clientes_v.value) {
                        achouC = true
                        const venda = {
                            clientes_v: clientes_v.value,
                            produtos_v: produtos_v.value,
                            quantidades_v: quantidades_v.value

                        }
                        vendas.push(venda)
                        localStorage.setItem("vendas", JSON.stringify(vendas))
                        alert("Venda do produto: " + venda.produtos_v + " para o cliente: " + venda.clientes_v + " efetuada com sucesso")
                        diminuir_estoque()
                        listar_venda()
                        listar_qnt_atual()

                    }
                }
            }
        }
    }
    if (!achouP) {
        alert("produto nao encontrado")
    } else
        if (!achouQtde) {
            alert("estoque insuficiente")
        } else
            if (!achouC) {
                alert("cliente nao encontrado")
            }
}

///// funcao que entra dentro do vender que diminui a quantidade original menos a quantidade que sera vendida
function diminuir_estoque() {
    
    let numero = Number(quantidades_v.value);
    for (let p of produtos) {
        if (p.produto === produtos_v.value) {
            let numero2 = Number(p.quantidade);
            p.quantidade = numero2 - numero
            break;
        }
    }
    localStorage.setItem("produtos", JSON.stringify(produtos));
    //localStorage.setItem("produtos" , JSON.stringify(vendas)
    // 
    // let numero3 = numero - numero2;
    // document.getElementById("quantidades_v").value = numero3;
}

////////////// lista a quantidade restante do estoque do produto no html da tela
function listar_qnt_atual() {
    dados_doestoque_atual.innerHTML = "Estoque atual do produto "

    for (let produtoo of produtos) {
        dados_doestoque_atual.innerHTML += `<p>produto: ${produtoo.produto} | quantidade: ${produtoo.quantidade} </p>`
    }
}

/////////////// coloca no html da tela todas as informacoes da venda e os dados
function listar_venda() {
    dados_da_venda.innerHTML = "Vendas efetuadas"

    for (let venda of vendas) {
        dados_da_venda.innerHTML += `<p>produto: ${venda.produtos_v} | cliente: ${venda.clientes_v} | quantidade vendida: ${venda.quantidades_v}  </p>`
    }
}

function listar_produto3() {
    for (let p of produtos) {
        if (p.produto == produto_buscar.value) {

            dados_do_produto.innerHTML = "PRODUTO ENCONTRADO:";
            dados_do_produto.innerHTML += `<p>Produto: ${p.produto} | Preço: ${p.preco} | Quantidade: ${p.quantidade} | Tamanho: ${p.tamanho}</p>`;
            return
        }
    }
    alert("Produto não encontrado!")
}

function listar_cliente() {
    for (let cli of clientes) {
        if (cli.cpf_cliente == busca_cliente.value) {
            lista_cliente.innerHTML = "CLIENTE ENCONTRADO:";
            lista_cliente.innerHTML += `<p>Nome: ${cli.nome_cliente} | CPF: ${cli.cpf_cliente} | Telefone: ${cli.telefone_cliente}</p>`
            return
        }
    }
    alert("Cliente não encontrado")
}

function adicionar() {


    for (let p of produtos) {
        let numero = Number(adicionar_estq.value);
        if (p.produto == produto_buscar.value) {
            let numero2 = Number(p.quantidade);
            p.quantidade = numero2 + numero
            localStorage.setItem("produtos", JSON.stringify(produtos));
            alert(" alteração feita com sucesso estoque atual de " + p.quantidade)
            return
        }
    }


}

function desativar_cliente() {
    let i = -1, achou = false
    const cpff_cliente = document.getElementById("cpff").value

    for (let buscar of clientes) {
        i++
        if (buscar.cpf_cliente == cpff_cliente) {
            achou = true
            break;
        }

    }
    if (achou) {
        clientes.splice(i, 1)
        localStorage.setItem(
            "clientes",
            JSON.stringify(clientes)
        )
        alert("Cliente desativado com sucesso!")
        listar2()

    }
}

function atualizar_cliente() {
    let achou = false
    for (let buscar of clientes) {

        if (buscar.cpf_cliente == edit_cpf.value) {
            buscar.nome_cliente = edit_nome.value ?? buscar.nome_cliente,
            buscar.telefone_cliente = edit_telefone.value ?? buscar.telefone_cliente
            localStorage.setItem("clientes", JSON.stringify(clientes))
            alert("Cliente atualizado com sucesso!")
            listar_clientesatu()
            achou = true
            break
        }
    }
    if (!achou) {
        alert("Cliente não encontrado!")
    }
}

function listar_clientesatu() {
    lista_cliente.innerHTML = "Clientes Atualizados:"
    for (let cli of clientes) {
        lista_cliente.innerHTML += `<p>Nome: ${cli.nome_cliente} | CPF: ${cli.cpf_cliente} | Telefone: ${cli.telefone_cliente}</p>`
    }
}
// const busca_cliente = document.getElementById("cpff")
// const dados2 = document.getElementById("listagem-cliente")

// function buscar_cliente() {
//     let cl = false;

//     for (let cliente of clientes) {
//         if (cliente.nome_cliente == nome_cliente.value) {
//             cl = true;
//         }
//     }
//     if (!cl) {
//         alert("Cliente não encontrado!")
//     }
//     else {
//         alert("cliente encontrado")
//     }
//     listar2()
// }
// function listar2() {
//     console.log(clientes)
//     dados.innerHTML = "Clientes cadastrados"

//     for (let clientee of clientes) {
//         dados.innerHTML += `<p>Nome: ${clientee.nome_cliente} | CPF: ${clientee.cpf_cliente} | TELEFONE: ${clientee.telefone_cliente}</p>`
//     }
// }


// listar2()