// datos 

// LIDERES


const lideres = [
    {
        nombre: 'Natsumi Ascue',
        desc: 'Bailarina, coreógrafa y profesora de danza. Estudiante de la carrera de Danza en la Universidad Católica de Perú (PUCP). Trabaja y se capacita profesionalmente desde hace ocho años.',
        framecolor: 'frame12',
        img: './assets/images/lideres/natsumi.jfif'
    },
    {
        nombre: 'Joaquín Ogusco',
        desc: 'Actor, estudiante, peruano y migrante. Estudiante de la Universidad Nacional de las Artes (UNA - Buenos Aires). Actor de teatro y audiovisuales profesional desde hace seis años.',
        framecolor: 'frame13',
        img: './assets/images/lideres/joaquin.jfif'
    },
    {
        nombre: 'Gianfranco Jacinto',
        desc: 'Estudiante de Artes Escénicas con especialidad en música de la Pontificia Universidad Católica de Perú. Docente de Arte de niños, adolescentes, adultos y personas con habilidades diferentes desde hace más de cuatro años. Compositor desde hace siete años.',
        framecolor: 'frame14',
        img: './assets/images/lideres/gianfranco.jfif'
    },
    {
        nombre: 'Grethell Anguiano',
        desc: 'Comunicóloga y publicista, podcaster y streamer mexicana. Estudió en la Universidad de Tijuana (CUT) en México. Actualmente crea contenido digital en distintas plataformas. Durante 2017 y 2018 recibió formación de teatro musical.',
        framecolor: 'frame15',
        img: './assets/images/lideres/grethell.jfif'
    },
    {
        nombre: 'Alessandra Cortez',
        desc: 'Actriz, artista visual, profesora y creadora de Beyond Art. Estudiante de Ilustración en la Universidad de Palermo y de Actuación en la Universidad Nacional de las Artes. Trabaja en el ámbito teatral desde hace cinco años. Desde hace cuatro años dicto clases y asisto a profesores.',
        framecolor: 'frame16',
        img: './assets/images/lideres/alessandra.jfif'
    },
    {
        nombre: 'Aithana Gabrielle',
        desc: 'Estudiante de Diseño de la Ilustración en la Universidad de Palermo. Apasionada por algunas ramas como el Diseño UX/UI y el Diseño de Interiores. Actualmente se centra en ilustraciones digitales de espacios.',
        framecolor: 'frame17',
        img: './assets/images/lideres/aithana.jfif'
    },
    {
        nombre: 'Mariela Mestas',
        desc: 'Estudiante de artes escénicas en la Universidad Peruana de Ciencias Aplicadas. En formación como bailarina. Actuó en cortometrajes universitarios y se desempeñó como asistente en talleres de actuación. Perteneció a un elenco de danza urbana por dos años.',
        framecolor: 'frame18',
        img: './assets/images/lideres/mariela.jfif'
    },
    {
        nombre: 'Irene Lombard',
        desc: 'Estudiante de Licenciatura en Actuación en la Universidad Nacional de las Artes. Ejerce profesionalmente como actriz desde el año 2016 en teatro y cine. Escribió un unipersonal el cual presentó en su ciudad, Arrecifes, hace casi un año. Estudió en un taller de teatro durante seis años.',
        framecolor: 'frame19',
        img: './assets/images/lideres/irene.jfif'
    },
]

// TALLERES

const talleres = [
    {
        nombre: 'juegos teatrales',
        img: './assets/images/talleres/curso-juegos-teatrales.png',
        desc: 'Escuchamos, transitamos y trabajamos nuestras emociones a través del arte, el teatro y el cuerpo.',
        innerDesc: 'Este taller es un espacio de construcción en conjunto, en donde clase a clase realizaremos actividades lúdicas que nos ayudarán a abordar herramientas como el hablar en público, presentarnos, perder la timidez y trabajar el cuerpo desde un espacio lúdico.',
        profesor: 'Joaquín Ogusco',
        alt: '',
        horario: 'Lunes y Miércoles 20:00 a 21:00 p.m. (hora peruana)',
        modalidad: '8 encuentros virtuales a través de Zoom',
        precio: 25,
        framecolor: 'frame1'
    },
    {
        nombre: 'cuerpo',
        img: './assets/images/talleres/curso-cuerpo.png',
        desc: 'Forma de exploración personal a través de las herramientas de las danzas urbanas.',
        innerDesc: 'En este taller, el movimiento es nuestra estrella. Está dedicado a todo aquél que desee danzar y explorar mediante las herramientas de las danzas urbanas, dejando de lado el estereotipo físico para sumergirse en las vías del movimiento mediante la diversión.',
        profesor: 'Natsumi Ascue',
        alt: '',
        horario: 'Martes y Jueves 16:00 a 17:00 p.m. (hora peruana)',
        modalidad: '8 encuentros virtuales a través de Zoom',
        precio: 25,
        framecolor: 'frame2'
    },
    {
        nombre: 'dibujo animado',
        img: './assets/images/talleres/curso-dibujo-animado.png',
        desc: 'Dibujo animado y su composición para principiantes. Orientado a niños y abierto a la comunidad.',
        innerDesc: 'Taller orientado a niños y a todo el que quiera aprender a dibujar su personaje animado favorito. El objetivo del curso es poder desarrollar en cada estudiante la búsqueda de la abstracción de las figuras geométricas que componen lo esencial de cada personaje para así entenderlo mejor al momento de dibujarlo.',
        profesor: 'Gianfranco Jacinto',
        alt: '',
        horario: 'Jueves 21:00 a 22:00 p.m. y 11:00 a.m. a 12:00 p.m. (hora peruana)',
        modalidad: '8 encuentros virtuales a través de Zoom',
        precio: 25,
        framecolor: 'frame3'
    },
    {
        nombre: 'improvisación',
        img: './assets/images/talleres/curso-improvisación.png',
        desc: 'Las herramientas más importantes para improvisar enseñadas a partir juegos lúdicos.',
        innerDesc: 'Este taller brindará, a través de juegos, la posibilidad de aprender las herramientas más importantes para improvisar. Serán juegos integrales, con devoluciones individuales, y momentos de puesta en común para poder conocernos cada vez más y aprender entre todos y todas.',
        profesor: 'Irene Lombard',
        alt: '',
        horario: 'Lunes y Miércoles 10:00 a 11:00 a.m. o Martes y Jueves 19:00 a 20:00 p.m. (hora peruana)',
        modalidad: '8 encuentros virtuales a través de Zoom',
        precio: 25,
        framecolor: 'frame6'
    },
    {
        nombre: 'mandalas',
        img: './assets/images/talleres/curso-mandalas.png',
        desc: 'Orientado a niños y adolscentes. Aprendé a crear un mandala y conectá con vos mismo.',
        innerDesc: 'En este taller se brindará un espacio para conectar con uno mismo a través del dibujo. Al crear tramas se realiza un tipo de meditación, lo cual permite que los niveles de estrés y ansiedad disminuyan. Asimismo, se mejoran la concentración y la confianza en al crear diseños propios.',
        profesor: 'Alessandra Cortez',
        alt: '',
        horario: 'Martes 17:00 a 18:00 p.m. y Jueves 18:00 a 19:00 p.m. (hora peruana)',
        modalidad: '8 encuentros virtuales a través de Zoom',
        precio: 25,
        framecolor: 'frame4'
    },
    {
        nombre: 'movimiento',
        img: './assets/images/talleres/curso-movimiento.png',
        desc: 'Canalización de emociones a través del movimiento corporal. Libertad de vulnerabilidad sin miedo al juicio.',
        innerDesc: 'Este taller brindará al alumno la posibilidad de explorar su movimiento orgánico involucrando principios básicos de respiración y consciencia corporal, logrando despejar su mente de preocupaciones externas a través de la conexión con su cuerpo.',
        profesor: 'Mariela Mestas',
        alt: '',
        horario: 'Martes 10:00 a 11:00 a.m. (hora peruana)',
        modalidad: '8 encuentros virtuales a través de Zoom',
        precio: 25,
        framecolor: 'frame5'
    },
    {
        nombre: 'pack 3 talleres',
        img: './assets/images/talleres/imagen-pack-3-clases.png',
        desc: 'Brindamos la posibilidad de adquirir tres talleres a elección, es decir, tres meses de clases semanales.',
        innerDesc: 'Brindamos la posibilidad de adquirir tres talleres a elección, es decir, tres meses de clases semanales.',
        profesor: '',
        alt: 'Pack tres talleres a elección',
        horario: '',
        modalidad: '',
        precio: 0,
        framecolor: 'frame1'
    },
    {
        nombre: 'sólo 1 clase',
        img: './assets/images/talleres/imagen-1-sola-clase.png',
        desc: 'Se brinda la posibilidad de adquirir una sola clase de cualquier taller a elección.',
        innerDesc: 'Se brinda la posibilidad de adquirir una sola clase de cualquier taller a elección.',
        profesor: '',
        alt: 'Adquiere sólo 1 clase de 1 curso a elección',
        horario: '',
        modalidad: '',
        precio: 0,
        framecolor: 'frame2'
    }
]


// productos

const elefante = [
    {
        id: 'el01',
        tipo: 'Print',
        titulo: 'Elefante',
        precio: 500,
        desc: '',
        img: './assets/images/productos/elefante/IMG_0654.jpg'
    },
    {
        id: 'el02',
        tipo: 'Print',
        titulo: 'Elefante',
        precio: 500,
        desc: '',
        img: './assets/images/productos/elefante/IMG_0656.jpg'
    },
    {
        id: 'el03',
        tipo: 'Print',
        titulo: 'Elefante',
        precio: 500,
        desc: '',
        img: './assets/images/productos/elefante/IMG_0657.jpg'
    },
    {
        id: 'el04',
        tipo: 'Print',
        titulo: 'Elefante',
        precio: 500,
        desc: '',
        img: './assets/images/productos/elefante/IMG_0659.jpg'
    },
    {
        id: 'el05',
        tipo: 'Print',
        titulo: 'Elefante',
        precio: 500,
        desc: '',
        img: './assets/images/productos/elefante/IMG_0660.jpg'
    },
    {
        id: 'el06',
        tipo: 'Print',
        titulo: 'Elefante',
        precio: 500,
        desc: '',
        img: './assets/images/productos/elefante/IMG_0661.jpg'
    },
    {
        id: 'el07',
        tipo: 'Print',
        titulo: 'Elefante',
        precio: 500,
        desc: '',
        img: './assets/images/productos/elefante/IMG_0663.jpg'
    },
    {
        id: 'el08',
        tipo: 'Print',
        titulo: 'Elefante',
        precio: 500,
        desc: '',
        img: './assets/images/productos/elefante/IMG_0664.jpg'
    },
    {
        id: 'el09',
        tipo: 'Print',
        titulo: 'Elefante',
        precio: 500,
        desc: '',
        img: './assets/images/productos/elefante/IMG_0665.jpg'
    },
    {
        id: 'el10',
        tipo: 'Print',
        titulo: 'Elefante',
        precio: 500,
        desc: '',
        img: './assets/images/productos/elefante/IMG_0666.jpg'
    },
    {
        id: 'el11',
        tipo: 'Print',
        titulo: 'Elefante',
        precio: 500,
        desc: '',
        img: './assets/images/productos/elefante/IMG_0667.jpg'
    },
    {
        id: 'el12',
        tipo: 'Print',
        titulo: 'Elefante',
        precio: 500,
        desc: '',
        img: './assets/images/productos/elefante/IMG_0668.jpg'
    },
    {
        id: 'el13',
        tipo: 'Print',
        titulo: 'Elefante',
        precio: 500,
        desc: '',
        img: './assets/images/productos/elefante/IMG_0669.jpg'
    },
    {
        id: 'el14',
        tipo: 'Print',
        titulo: 'Elefante',
        precio: 500,
        desc: '',
        img: './assets/images/productos/elefante/IMG_0670.jpg'
    },
    {
        id: 'el15',
        tipo: 'Print',
        titulo: 'Elefante',
        precio: 500,
        desc: '',
        img: './assets/images/productos/elefante/IMG_0671.jpg'
    },
    {
        id: 'el16',
        tipo: 'Print',
        titulo: 'Elefante',
        precio: 500,
        desc: '',
        img: './assets/images/productos/elefante/IMG_0675.jpg'
    }
]


const mariposa = [
    {
        id: 'ma01',
        tipo: 'Print',
        titulo: 'Mariposa',
        precio: 500,
        desc: '',
        img: './assets/images/productos/mariposa/IMG_0636.jpg'
    },
    {
        id: 'ma02',
        tipo: 'Print',
        titulo: 'Mariposa',
        precio: 500,
        desc: '',
        img: './assets/images/productos/mariposa/IMG_0637.jpg'
    },
    {
        id: 'ma03',
        tipo: 'Print',
        titulo: 'Mariposa',
        precio: 500,
        desc: '',
        img: './assets/images/productos/mariposa/IMG_0638.jpg'
    },
    {
        id: 'ma04',
        tipo: 'Print',
        titulo: 'Mariposa',
        precio: 500,
        desc: '',
        img: './assets/images/productos/mariposa/IMG_0639.jpg'
    },
    {
        id: 'ma05',
        tipo: 'Print',
        titulo: 'Mariposa',
        precio: 500,
        desc: '',
        img: './assets/images/productos/mariposa/IMG_0646.jpg'
    },
    {
        id: 'ma06',
        tipo: 'Print',
        titulo: 'Mariposa',
        precio: 500,
        desc: '',
        img: './assets/images/productos/mariposa/IMG_0647.jpg'
    },
    {
        id: 'ma07',
        tipo: 'Print',
        titulo: 'Mariposa',
        precio: 500,
        desc: '',
        img: './assets/images/productos/mariposa/IMG_0649.jpg'
    },
    {
        id: 'ma08',
        tipo: 'Print',
        titulo: 'Mariposa',
        precio: 500,
        desc: '',
        img: './assets/images/productos/mariposa/IMG_0650.jpg'
    },
    {
        id: 'ma09',
        tipo: 'Print',
        titulo: 'Mariposa',
        precio: 500,
        desc: '',
        img: './assets/images/productos/mariposa/IMG_0651.jpg'
    },
    {
        id: 'ma10',
        tipo: 'Print',
        titulo: 'Mariposa',
        precio: 500,
        desc: '',
        img: './assets/images/productos/mariposa/IMG_0652.jpg'
    },
    {
        id: 'ma11',
        tipo: 'Print',
        titulo: 'Mariposa',
        precio: 500,
        desc: '',
        img: './assets/images/productos/mariposa/IMG_0653.jpg'
    },
    {
        id: 'ma12',
        tipo: 'Print',
        titulo: 'Mariposa',
        precio: 500,
        desc: '',
        img: './assets/images/productos/mariposa/IMG_0672.jpg'
    },
    {
        id: 'ma13',
        tipo: 'Print',
        titulo: 'Mariposa',
        precio: 500,
        desc: '',
        img: './assets/images/productos/mariposa/IMG_0676.jpg'
    },
    {
        id: 'ma14',
        tipo: 'Print',
        titulo: 'Mariposa',
        precio: 500,
        desc: '',
        img: './assets/images/productos/mariposa/IMG_0677.jpg'
    },
    {
        id: 'ma15',
        tipo: 'Print',
        titulo: 'Mariposa',
        precio: 500,
        desc: '',
        img: './assets/images/productos/mariposa/IMG_0678.jpg'
    },
    {
        id: 'ma16',
        tipo: 'Print',
        titulo: 'Mariposa',
        precio: 500,
        desc: '',
        img: './assets/images/productos/mariposa/IMG_0679.jpg'
    }
]

const unDiaALaVez = [
    {
        id: 'un01',
        tipo: 'Print',
        titulo: 'Un día a la vez',
        precio: 500,
        desc: '',
        img: './assets/images/productos/undia/IMG_0640.jpg'
    },
    {
        id: 'un02',
        tipo: 'Print',
        titulo: 'Un día a la vez',
        precio: 500,
        desc: '',
        img: './assets/images/productos/undia/IMG_0641.jpg'
    },
    {
        id: 'un03',
        tipo: 'Print',
        titulo: 'Un día a la vez',
        precio: 500,
        desc: '',
        img: './assets/images/productos/undia/IMG_0642.jpg'
    },
    {
        id: 'un04',
        tipo: 'Print',
        titulo: 'Un día a la vez',
        precio: 500,
        desc: '',
        img: './assets/images/productos/undia/IMG_0643.jpg'
    },
    {
        id: 'un05',
        tipo: 'Print',
        titulo: 'Un día a la vez',
        precio: 500,
        desc: '',
        img: './assets/images/productos/undia/IMG_0644.jpg'
    },
    {
        id: 'un06',
        tipo: 'Print',
        titulo: 'Un día a la vez',
        precio: 500,
        desc: '',
        img: './assets/images/productos/undia/IMG_0645.jpg'
    },
    {
        id: 'un07',
        tipo: 'Print',
        titulo: 'Un día a la vez',
        precio: 500,
        desc: '',
        img: './assets/images/productos/undia/IMG_0648.jpg'
    },
    {
        id: 'un08',
        tipo: 'Print',
        titulo: 'Un día a la vez',
        precio: 500,
        desc: '',
        img: './assets/images/productos/undia/IMG_0655.jpg'
    },
    {
        id: 'un09',
        tipo: 'Print',
        titulo: 'Un día a la vez',
        precio: 500,
        desc: '',
        img: './assets/images/productos/undia/IMG_0673.jpg'
    },
    {
        id: 'un10',
        tipo: 'Print',
        titulo: 'Un día a la vez',
        precio: 500,
        desc: '',
        img: './assets/images/productos/undia/IMG_0674.jpg'
    },
    {
        id: 'un11',
        tipo: 'Print',
        titulo: 'Un día a la vez',
        precio: 500,
        desc: '',
        img: './assets/images/productos/undia/IMG_0680.jpg'
    },
    {
        id: 'un12',
        tipo: 'Print',
        titulo: 'Un día a la vez',
        precio: 500,
        desc: '',
        img: './assets/images/productos/undia/IMG_0681.jpg'
    },
    {
        id: 'un13',
        tipo: 'Print',
        titulo: 'Un día a la vez',
        precio: 500,
        desc: '',
        img: './assets/images/productos/undia/IMG_0682.jpg'
    },
    {
        id: 'un14',
        tipo: 'Print',
        titulo: 'Un día a la vez',
        precio: 500,
        desc: '',
        img: './assets/images/productos/undia/IMG_0711.jpg'
    }
]

const trabajos = [
    {
        id: 'tr01',
        tipo: 'Print',
        titulo: '#0001',
        desc: '',
        img: './assets/images/productos/trabajos/IMG_0688.jpg'
    },
    {
        id: 'tr02',
        tipo: 'Print',
        titulo: '#0002',
        desc: '',
        img: './assets/images/productos/trabajos/IMG_0690.jpg'
    },
    {
        id: 'tr03',
        tipo: 'Print',
        titulo: '#0003',
        desc: '',
        img: './assets/images/productos/trabajos/IMG_0692.jpg'
    },
    {
        id: 'tr04',
        tipo: 'Print',
        titulo: '#0004',
        desc: '',
        img: './assets/images/productos/trabajos/IMG_0693.jpg'
    },
    {
        id: 'tr05',
        tipo: 'Print',
        titulo: '#0005',
        desc: '',
        img: './assets/images/productos/trabajos/IMG_0696.jpg'
    },
    {
        id: 'tr06',
        tipo: 'Print',
        titulo: '#0006',
        desc: '',
        img: './assets/images/productos/trabajos/IMG_0707.jpg'
    },
    {
        id: 'tr07',
        tipo: 'Print',
        titulo: '#0006',
        desc: '',
        img: './assets/images/productos/trabajos/IMG_0708.jpg'
    },
    {
        id: 'tr08',
        tipo: 'Print',
        titulo: '#0008',
        desc: '',
        img: './assets/images/productos/trabajos/IMG_0709.jpg'
    },
    {
        id: 'tr09',
        tipo: 'Print',
        titulo: '#0009',
        desc: '',
        img: './assets/images/productos/trabajos/IMG_0710.jpg'
    },
    {
        id: 'tr10',
        tipo: 'Print',
        titulo: '#0010',
        desc: '',
        img: './assets/images/productos/trabajos/IMG_0712.jpg'
    },
    {
        id: 'tr11',
        tipo: 'Print',
        titulo: '#0011',
        desc: '',
        img: './assets/images/productos/trabajos/IMG_0714.jpg'
    },
    {
        id: 'tr12',
        tipo: 'Print',
        titulo: '#0012',
        desc: '',
        img: './assets/images/productos/trabajos/IMG_0715.jpg'
    },
    {
        id: 'tr13',
        tipo: 'Print',
        titulo: '#0013',
        desc: '',
        img: './assets/images/productos/trabajos/IMG_0716.jpg'
    },
    {
        id: 'tr14',
        tipo: 'Print',
        titulo: '#0014',
        desc: '',
        img: './assets/images/productos/trabajos/IMG_0717.jpg'
    },
    {
        id: 'tr15',
        tipo: 'Print',
        titulo: '#0015',
        desc: '',
        img: './assets/images/productos/trabajos/IMG_0721.jpg'
    },
    {
        id: 'tr16',
        tipo: 'Print',
        titulo: '#0016',
        desc: '',
        img: './assets/images/productos/trabajos/IMG_0723.jpg'
    }
]