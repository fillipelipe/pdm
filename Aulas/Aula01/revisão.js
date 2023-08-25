// Variavel

const numero = 10;
numero = 20; // erro

const frutas = [];
frutas.push("banana");

const pessoa = {id: 1, nome: "Jose" };
pessoa.sexo = "M";
pessoa = {id: 2, nome: "Maria" };

let cont = 0;

// Função

const soma = (a, b) => a + b;

const App = () => {
    return(
        <View>
        
        </View>
    );
};

// Propagação

frutas.push(...["uva", "maçã"]);
["banana", "uva", "maçã"]

// Desestruturação

const {id, nome} = pessoa;

// Modulos

export default pessoa;

export { frutas, soma };

import pessoa from 'revisão';

import { frutas } from 'revisão';

import { View } from 'react-native'