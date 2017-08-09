const URLUKA= "http://localhost:25585/";
//const URLUKA= "http://ukawebm.azurewebsites.net/";



const TIPOREACTIVO = [
    {
        id: 0,
        data: "Pregunta"
    }, {
        id: 1,
        data: "Encabezado"
    }
];
const TIPOPREGUNTAS = [
    {
        id: 0,
        data: "Abierta"
    }, {
        id: 1,
        data: "Múltiple"
    }, {
        id: 2,
        data: "Anidada"
    }, {
        id: 3,
        data: "Anidada múltiple"
    }, {
        id: 4,
        data: "Grupal"
    }

];
const STATUS = [
    {
        id: 0,
        data: "Habilitado"
    }, {
        id: 1,
        data: "Deshabilitado"
    }
];
const PERSONAS = [
    {
        id: 0,
        data: "Ninguno"
    }, {
        id: 1,
        data: "Niños menores de tres años "
    }, {
        id: 2,
        data: "Niños mayores de tres años "
    }, {
        id: 3,
        data: "Hogares"
    }
];
const _ABIERTA = {
    "question": '',
    "answer": 'undefined'
}

const _MULTIPLES = {
    "question": '',
    "options": [
        {
            "option": "",
            "condition": '',
            "type": 'radio'
        }
    ],
    "answer": 'undefined'
}
const _INDEXADA = {
    "question": '',
    "questions": [
        {
            "question": '',
            "options": [
                {
                    "option": "",
                    "condition": '',
                    "type": 'radio'
                }
            ],
            "answer": 'undefined'
        }
    ],
    "answer": 'undefined'
}