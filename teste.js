// import { useEffect, useState } from "react";


// const semnome = () => "ola";
// const semnome2 = function () {
//   return "ola";
// };

// const [nome, setNome] = useState();

// useEffect(() => {
//   alert("ola user");
// }, []);

// useEffect(() => {
//   alert("alterou nome: " + nome);
// }, [nome]);

const aluno = {
  nome: "bruno",
  idade: 31,
  cidade: "sao jose dos pinhais",
  curso: "React",
};

const { nome } = aluno;

console.log(nome);

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 2, 3, 4, 5, 6, 7, 8, 9];

// const resultado = array.map((item, indice)=>{
//   return `posicao ${item}`;
// })

// console.log(resultado);

// const axios = require('axios');

// async function getUser(){
//   try {
//     const resultado = await axios.get('http://webapp353621.ip-45-79-142-173.cloudezapp.io/api/productlistbyremark/home')
//     console.log(resultado);

//   } catch (error) {
//     console.error('Erro ao buscar', error.message);
//   }
// }
// getUser();

// const nossoArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// function retornaArray(){
//   return [1, 2, 3, 4, 5, 6, 7, 8, 9]
// }

// const [_,__,___,____,abc5 ] = retornaArray()

// console.log(abc5);

// // const [_, __,___, posicao3, posicao4] = nossoArray;

// // console.log('posicao3: ',posicao3);
// // console.log('nossoArray: ',nossoArray);

// // const objetoNome = { nome: "brunoi", idade: 31, cidade: 'sjp' };

// // const { nome, idade, cidade } = objetoNome;

// //  console.log(objetoNome.nome, objetoNome.idade, objetoNome.cidade);

// // console.log(nome, idade, cidade);

// // var array = [1,2,3,4,5,6,7,8,9];

// // var novoArray = array.map((item)=>{
// //   // console.log("print :",item);

// //   return `meu item ${item}`
// // })

// // console.log(novoArray);

// // let observacao = ""

// // observacao = observacao! ?? "Erro na consulta (M)"

// // console.log(observacao);

// // const pessoa = {nome:'bruno', idade:31, apelido:"bru", endereco:'sjs'}

// // const {endereco, ...restante} = pessoa

// // console.log('endereco', endereco);
// // console.log('restante', restante);
// // console.log('pessoa', pessoa);

// // const newPessoa =  {...pessoa, cidade: 'CUritiba', uf:'pr' }

// // console.log(endereco, idade);

// // console.log(newPessoa);

// // const meuArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// // const [ _, __, posicao3, posicao4  ] = meuArray

// // console.log(posicao3)

// // console.log(meuArray);

// // const objetoPessoa = {
// //   nome: "brruno",
// //   idade: "31",
// //   apelido: "bru",
// // };

// // const { nome, apelido } = objetoPessoa;

// // const objetoPessoaNovo = { cidade: "SJP", ...objetoPessoa };

// // console.log("objetoPessoaNovo", objetoPessoaNovo);

// // useCallback
// // function soma1(num1, num2,num3, calback) {

// //   return setTimeout(() => {
// //     console.log("SOMA 1");
// //     const result = num1 + num2;

// //     console.log("result 1", result);

// //     calback(result, num3);
// //     return result;
// //   }, 2000);
// // }

// // function soma2(result, num3) {
// //   console.log("SOMA 2");

// //   const result2 = result + num3;

// //   console.log("result 2", result2);
// // }

// // const resultado1 = soma1(1, 2, 3 ,soma2)

// // // calback
// // function soma1(num1, num2, calback) {
// //   console.log('SOMA');

// //   const result = num1 + num2;

// //   return calback(result, 5);
// // }

// // const resultado1 = soma1(1, 2);

// // const resultfinal = soma1(1, 2, (res, nume) => {

// //   console.log("OLAAAAAAAAAAA");

// //   return 200 + res+ nume
// // });

// // console.log(resultfinal);
