
//Importaciones
const express = require('express');
const uuid = require('uuid');
const HttpError = require('../models/http-error');

const peliculasController = require('../Controllers/peliculas-controllers');

const router = express.Router();

const MEJORES_PELICULAS = [
    {
        id: "p1",
        title: "Batman",
        creator: "Tim Burton"
    },
    {
        id: "p2",
        title: "El Padrino",
        creator: "Francis Ford Coppola"
    },
    {
        id: "p3",
        title: "Sueño de Fuga",
        creator: "Frank Darabont"
    },
    {
        id: "p4",
        title: "Tiempos Violentos",
        creator: "Quentin Tarantino"
    },
    {
        id: "p5",
        title: "El Caballero de la Noche",
        creator: "Christopher Nolan"
    },
    {
        id: "p6",
        title: "Forrest Gump",
        creator: "Robert Zemeckis"
    },
    {
        id: "p7",
        title: "El Origen",
        creator: "Christopher Nolan"
    },
    {
        id: "p8",
        title: "El Club de la Pelea",
        creator: "David Fincher"
    },
    {
        id: "p9",
        title: "Matrix",
        creator: "Las Wachowski"
    },
    {
        id: "p10",
        title: "La Guerra de las Galaxias: Episodio IV - Una Nueva Esperanza",
        creator: "George Lucas"
    },
    {
        id: "p11",
        title: "El Señor de los Anillos: La Comunidad del Anillo",
        creator: "Peter Jackson"
    },
    {
        id: "p12",
        title: "Parque Jurásico",
        creator: "Steven Spielberg"
    },
    {
        id: "p13",
        title: "Titanic",
        creator: "James Cameron"
    },
    {
        id: "p14",
        title: "Avatar",
        creator: "James Cameron"
    },
    {
        id: "p15",
        title: "Gladiador",
        creator: "Ridley Scott"
    },
    {
        id: "p16",
        title: "Volver al Futuro",
        creator: "Robert Zemeckis"
    }
]
router.get('/',peliculasController.getAllPeliculas); 

router.get('/:pid',peliculasController.getPeliculasById);

router.get('/creator/:uid',peliculasController.getPeliculaByCreatorId);

router.post('/',peliculasController.postPelicula);

router.patch('/:pid',peliculasController.updatedPelicula);

router.delete('/:pid',peliculasController.deletePeliculaById);


module.exports = router;