//const URLUKA= "http://localhost:25585/";
const URLUKA= "http://ukawebm.azurewebsites.net/";

var Modal = ReactBootstrap.Modal;
const OverlayTrigger = ReactBootstrap.OverlayTrigger;
const Popover = ReactBootstrap.Popover;
const Panel = ReactBootstrap.Panel;
const Button = ReactBootstrap.Button;
const Fade = ReactBootstrap.Fade;
var DropdownButton = ReactBootstrap.DropdownButton;
var MenuItem = ReactBootstrap.MenuItem;
var Tab = ReactBootstrap.Tab;
var Tabs = ReactBootstrap.Tabs;
const Collapse = ReactCollapse.Collapse;
moment.locale('es');

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
        data: "Deshabilitado"
    }, {
        id: 1,
        data: "Habilitado"
    }
];
const PERSONAS = [
    {
        id: 0,
        data: "Ninguno"
    }, {
        id: 1,
        data: "Niños/as menores de cinco años "
    }, {
        id: 2,
        data: "Niños/as y adolecentes (5 a 17 )"
    }, {
        id: 3,
        data: "Hogares"
    },   
     {
        id: 4,
        data: "Mujeres"
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