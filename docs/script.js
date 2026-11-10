                                                            const nome_cliente = document.getElementById("cliente")
const cpf_cliente = document.getElementById("cpf")
const telefone_cliente = document.getElementById("telefone")
const dados = document.getElementById("lista-cliente")
const cadastroo = document.getElementById("cadastro")
const clientes = JSON.parse(localStorage.getItem("clientes")) || []

const nome_clientee = document.getElementById("clientee")
const telefone_clientee = document.getElementById("telefonee")

const nome_produto = document.getElementById("nome_produto")
const preco_produto = document.getElementById("preco")
const quantidade_produto = document.getElementById("quantidade")
const tamanho_produto = document.getElementById("tamanho")
const quantidade_produtoss = document.getElementById("quantidade_produto")
const produtos = JSON.parse(localStorage.getItem("produtos")) || []

const cpf_busca = document.getElementById("cpff")
const lista_cliente = document.getElementById("listagem-cliente")

const produto_listar = document.getElementById("produtoo")
const lista_produto = document.getElementById("listagem_produto")
const listaproduto = document.getElementById("lista-produto")

const produtos_v = document.getElementById("produtos_v")
const clientes_v = document.getElementById("clientes_v")
const quantidades_v = document.getElementById("quantidades_v")
const vendas = JSON.parse(localStorage.getItem("vendas")) || []

const compras = JSON.parse(localStorage.getItem("compras")) || []

const listarcadastroproduto = document.getElementById("cadastro2")
const lista_venda = document.getElementById("lista-venda")

async function cadastro() {
    if (nome_cliente.value.trim() && cpf_cliente.value.trim() && telefone_cliente.value.trim()) {
        if (/^[A-Za-zÀ-ý\s]+$/.test(nome_cliente.value)) {
            if (/^\d{11}$/.test(telefone_cliente.value)) {
                if (/^\d{11}$/.test(cpf_cliente.value)) {
                    let achou = false
                    for (let c of clientes) {
                        if (c.cpf == cpf_cliente.value)
                            achou = true
                    }
                    if (!achou) {
                        const cliente = {
                            nome: nome_cliente.value,
                            cpf: cpf_cliente.value,
                            telefone: telefone_cliente.value
                        }
                        clientes.push(cliente)
                        await fetch("https://vitor-loja-de-tenis.onrender.com", {
                            method: "POST",
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify(cliente)
                        })
                        localStorage.setItem("clientes", JSON.stringify(clientes))
                        alert(cliente.nome + " foi cadastrado(a)")
                        nome_cliente.value = ""
                        cpf_cliente.value = ""
                        telefone_cliente.value = ""
                        listar_clientess()
                    } else {
                        alert("cliente já cadastrado ")
                    }
                } else {
                    alert("O CPF deve possuir somente números e 11 digitos!!")
                }
            } else {
                alert("O Telefone deve possuir somente números e 11 digitos!")
            }
        } else {
            alert("O Nome deve possuir somente LETRAS!")
        }
    } else {
        alert("Todos os campos devem estar preenchidos!")
    }
}
function listar_clientess() {
    dados.innerHTML = "Clientes Cadastrados"
    for (let cliente of clientes) {
        dados.innerHTML += `<p>Nome: ${cliente.nome} | CPF: ${cliente.cpf} | Telefone:: ${cliente.telefone}</p>`
    }
}
function listar_clientesatu() {
    lista_cliente.innerHTML = "Clientes Atualizados:"
    for (let cliente of clientes) {
        lista_cliente.innerHTML += `<p>Nome: ${cliente.nome} | CPF: ${cliente.cpf} | Telefone: ${cliente.telefone}</p>`
    }
}
function listar_cliente() {
    for (let cliente of clientes) {
        if (cliente.cpf == cpf_busca.value) {
            lista_cliente.innerHTML = "CLIENTE ENCONTRADO:";
            lista_cliente.innerHTML += `<p>Nome: ${cliente.nome} | CPF: ${cliente.cpf} | Telefone: ${cliente.telefone}</p>`;
            return
        }
    }
    alert("Cliente não encontrado")
}
function desativar_cliente() {
    let i = -1,
        achou = false
    if (cpf_busca.value) {
        for (let buscar of clientes) {
            i++
            if (buscar.cpf == cpf_busca.value) {
                console.log("entrou")
                achou = true
                break;
            }
        }
        if (achou) {
            excluir_cliente()
            clientes.splice(i, 1)
            localStorage.setItem("clientes", JSON.stringify(clientes))
            alert("Cliente desativado com sucesso!")
            listar_clientess()

            return
        }
    } else {
        alert("Preencha todos os campos!")
        return
    }
    alert("Cliente não encontrado!")
}
async function atualizar_cliente() {
    let achou = false
    for (let buscar of clientes) {
        if (buscar.cpf == cpf_busca.value) {
            if (nome_clientee.value.trim().length > 0)
                buscar.nome = nome_clientee.value
            if (telefone_clientee.value.trim().length > 0)
                buscar.telefone = telefone_clientee.value
            console.log(buscar)
            localStorage.setItem("clientes", JSON.stringify(clientes))
            alert("Cliente atualizado com sucesso!")
            listar_clientesatu()
            await editar_cliente(buscar)
            achou = true
            break
        }
    }
    if (!achou) {
        alert("Cliente não encontrado!")
    }
}
async function cadastro2() {
    if (nome_produto.value.trim() && preco_produto.value.trim() && quantidade_produto.value.trim() && tamanho_produto.value.trim()) {
        if (/^\d+$/.test(preco_produto.value)) {
            if (/^\d+$/.test(quantidade_produto.value)) {
                if (/^\d+$/.test(tamanho_produto.value)) {
                    if (quantidade_produto.value > 0) {
                        let achou = false
                        for (let c of produtos) {
                            if (c.produto === nome_produto.value) {
                                achou = true
                            }
                        }
                        if (!achou) {
                            const produto = {
                                produto: nome_produto.value,
                                preco: preco_produto.value,
                                quantidade: quantidade_produto.value,
                                tamanho: tamanho_produto.value
                            }
                            produtos.push(produto)
                            await fetch("http://localhost:3000/produtos", {
                                method: "POST",
                                headers: { 'Content-Type': 'application/json' },
                                body: JSON.stringify(produto)
                            })
                            localStorage.setItem("produtos", JSON.stringify(produtos))
                            alert(produto.produto + " foi cadastrado(a)!")
                            nome_produto.value = ""
                            preco_produto.value = ""
                            quantidade_produto.value = ""
                            tamanho_produto.value = ""
                            listar_produtoo()

                        } else {
                            alert("Este produto já está cadastrado!")
                        }
                    } else {
                        alert("A quantidade deve ser maior que 0!")
                    }
                } else {
                    alert("O Tamanho deve possuir somente números!")
                }
            } else {
                alert("A Quantidade deve possuir somente números!")
            }
        } else {
            alert("O Preço deve possuir somente números!")
        }
    } else {
        alert("Todos os campos devem estar preenchidos!")
    }
}
function listar_produtoo() {
    listaproduto.innerHTML = "Produtos Cadastrados"
    for (let produtoo of produtos) {
        listaproduto.innerHTML += `<p>produto: ${produtoo.produto} | preco: ${produtoo.preco} | quantidade: ${produtoo.quantidade} | tamanho: ${produtoo.tamanho}</p>`
    }
}
async function vender() {
    let i = -1
    let achou = false
    for (let pro of produtos) {
        i++
        if (pro.produto == produtos_v.value) {
            achou = true
            break
        }
    }
    if (produtos_v.value.trim() && clientes_v.value.trim() && quantidades_v.value.trim()) {
        if (achou) {
            for (let c of clientes) {
                if (clientes_v.value == c.cpf) {
                    const venda = {
                        cpf: clientes_v.value,
                        nome_produto: produtos_v.value,
                        quantidade: quantidades_v.value
                    }
                    vendas.push(venda)
                    await fetch("http://localhost:3000/vendas", {
                        method: "POST",
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(venda)
                    })
                    produtos[i].quantidade -= quantidades_v.value;
                    await fetch(`http://localhost:3000/produtos/${produtos[i].id}`, {
                        method: "PUT",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(produtos[i])
                    })
                    localStorage.setItem("vendas", JSON.stringify(vendas))
                    alert("A venda do produto: " + venda.nome_produto + " foi cadastrada")
                    localStorage.setItem("produtos", JSON.stringify(produtos))
                    produtos_v.value = ""
                    clientes_v.value = ""
                    quantidades_v.value = ""
                    listar_venda()
                    return
                }
            }
        }
    } else {
        alert("Todos os campos devem estar preenchidos!")
        return
    }
    alert("Não encontramos o Produto ou Cliente!")
    listar_venda()
}
function listar_venda() {
    lista_venda.innerHTML = "CADASTRADOS:"
    for (let venda of vendas) {
        lista_venda.innerHTML += `<p>CPF Cliente: ${venda.cpf} | Nome Produto: ${venda.nome_produto} | Quantidade Produto: ${venda.quantidade}</p>`
    }
}
async function cadastrar_compra() {
    let i = -1
    let guardar
    let achou = false
    for (let pro of produtos) {
        i++
        if (pro.produto == produto_listar.value) {
            achou = true
            guardar = pro
            break
        }
    }
    if (produto_listar.value && quantidade_produtoss.value) {
            if (achou) {
                const compra = {
                    nome_produto: produto_listar.value,
                    quantidade_produto: quantidade_produtoss.value
                }
                guardar.quantidade += Number(quantidade_produtoss.value)
                console.log(guardar)
                await fetch(`http://localhost:3000/produtos/${guardar.id}`, {
                    method: "PUT",
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(guardar)
                })
                produtos[i].quantidade + Number(quantidade_produtoss.value);
                localStorage.setItem("produtos", JSON.stringify(produtos))
                alert("A compra do produto: " + compra.nome_produto + " foi realizada!")
                localStorage.setItem("produtos", JSON.stringify(produtos))
                produto_listar.value = ""
                quantidade_produtoss.value = ""
                listar_compra()
                return
            }
    } else {
        alert("Todos os campos devem estar preenchidos!")
        return
    }
     alert("Não encontramos o Produto!")
}
function listar_compra() {
    lista_produto.innerHTML = "COMPRAS CADASTRADOS:"
    for (let produto of produtos) {
        lista_produto.innerHTML += `<p>produto: ${produto.produto} | quantidade: ${produto.quantidade}</p>`
    }
}
//------------------------------CLIENTES------------------------//
async function buscar_cliente() {
    const busca = await fetch("https://vitor-loja-de-tenis.onrender.com")
    const dados = await busca.json()
    clientes.length = 0
    clientes.push(...dados)
    listar_clientess()
}
buscar_cliente()
async function editar_cliente(c) {
    let resposta = await fetch(`https://vitor-loja-de-tenis.onrender.com/${c.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(c)
    })
    await buscar_cliente()
}
async function excluir_cliente() {
    const c = await clientes.find(item => item.cpf === cpf_busca.value)
    console.log(c)
    if (c) {
        let resposta = await fetch(`http://vitor-loja-de-tenis.onrender.com/${c.id}`, {
            method: "DELETE"
        })
        buscar_cliente()
    }

}
//------------------------------PRODUTOS------------------------//
async function buscar_produto() {
    const buscaa = await fetch("https://vitor-loja-de-tenis.onrender.com")
    const dadoss = await buscaa.json()
    produtos.length = 0
    produtos.push(...dadoss)
    listar_produtoo()
}
buscar_produto()
//------------------------------COMPRA------------------------//
async function buscar_compra() {
    const buscarar = await fetch("https://vitor-loja-de-tenis.onrender.com")
    const dadosrr = await buscarar.json()
    compras.length = 0
    compras.push(...dadosrr)
    listar_compra()
}
buscar_compra()
//------------------------------VENDAS------------------------//
async function buscar_venda() {
    const buscara = await fetch("https://vitor-loja-de-tenis.onrender.com")
    const dadosr = await buscara.json()
    vendas.length = 0
    vendas.push(...dadosr)
    listar_venda()
}
buscar_venda()