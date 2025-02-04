const viaggi = [
    // Viaggi in corso
    {
        id: 1,
        meta: "Roma",
        partenza: "2025-02-01",
        ritorno: "2025-02-05",
        immagine: "src/data/images/roma.webp",
        tutor: "Mario Rossi",
        partecipanti: [
            { nome: "Luca Bianchi", telefono: "3331112233", email: "luca.bianchi@example.com", codiceFiscale: "CF0001", contattoEmergenza: { nome: "Giulia Bianchi", relazione: "Sorella", telefono: "3334445566" } },
            { nome: "Marco Verdi", telefono: "3332223344", email: "marco.verdi@example.com", codiceFiscale: "CF0002", contattoEmergenza: { nome: "Francesco Verdi", relazione: "Padre", telefono: "3335556677" } },
            { nome: "Chiara Rossi", telefono: "3333334455", email: "chiara.rossi@example.com", codiceFiscale: "CF0003", contattoEmergenza: { nome: "Martina Rossi", relazione: "Madre", telefono: "3336667788" } },
            { nome: "Andrea Ferri", telefono: "3451112233", email: "andrea.ferri@example.com", codiceFiscale: "CF0004", contattoEmergenza: { nome: "Sara Ferri", relazione: "Madre", telefono: "3454445566" } },
            { nome: "Elena Neri", telefono: "3452223344", email: "elena.neri@example.com", codiceFiscale: "CF0005", contattoEmergenza: { nome: "Luca Neri", relazione: "Fratello", telefono: "3455556677" } },
            { nome: "Giorgio Testa", telefono: "3511112233", email: "giorgio.testa@example.com", codiceFiscale: "CF0021", contattoEmergenza: { nome: "Claudio Testa", relazione: "Padre", telefono: "3514445566" } },
            { nome: "Silvia Mancini", telefono: "3512223344", email: "silvia.mancini@example.com", codiceFiscale: "CF0022", contattoEmergenza: { nome: "Elena Mancini", relazione: "Madre", telefono: "3515556677" } },
            { nome: "Alberto Fabbri", telefono: "3513334455", email: "alberto.fabbri@example.com", codiceFiscale: "CF0023", contattoEmergenza: { nome: "Gianni Fabbri", relazione: "Padre", telefono: "3516667788" } },
            { nome: "Giada Ricci", telefono: "3521112233", email: "giada.ricci@example.com", codiceFiscale: "CF0024", contattoEmergenza: { nome: "Sara Ricci", relazione: "Sorella", telefono: "3524445566" } },
            { nome: "Daniele Contini", telefono: "3522223344", email: "daniele.contini@example.com", codiceFiscale: "CF0025", contattoEmergenza: { nome: "Marta Contini", relazione: "Madre", telefono: "3525556677" } },
            { nome: "Valeria Longo", telefono: "3523334455", email: "valeria.longo@example.com", codiceFiscale: "CF0026", contattoEmergenza: { nome: "Giovanni Longo", relazione: "Padre", telefono: "3526667788" } },
            { nome: "Cristian De Santis", telefono: "3531112233", email: "cristian.desantis@example.com", codiceFiscale: "CF0027", contattoEmergenza: { nome: "Paolo De Santis", relazione: "Padre", telefono: "3534445566" } },
            { nome: "Monica Pini", telefono: "3532223344", email: "monica.pini@example.com", codiceFiscale: "CF0028", contattoEmergenza: { nome: "Carla Pini", relazione: "Madre", telefono: "3535556677" } },
            { nome: "Emanuele Vitali", telefono: "3533334455", email: "emanuele.vitali@example.com", codiceFiscale: "CF0029", contattoEmergenza: { nome: "Stefano Vitali", relazione: "Fratello", telefono: "3536667788" } },
            { nome: "Alice Bortolotti", telefono: "3541112233", email: "alice.bortolotti@example.com", codiceFiscale: "CF0030", contattoEmergenza: { nome: "Michela Bortolotti", relazione: "Madre", telefono: "3544445566" } },
            { nome: "Nicola Greco", telefono: "3542223344", email: "nicola.greco@example.com", codiceFiscale: "CF0031", contattoEmergenza: { nome: "Anna Greco", relazione: "Sorella", telefono: "3545556677" } },
            { nome: "Serena Morelli", telefono: "3543334455", email: "serena.morelli@example.com", codiceFiscale: "CF0032", contattoEmergenza: { nome: "Roberto Morelli", relazione: "Padre", telefono: "3546667788" } }]
    },
    {
        id: 2,
        meta: "Parigi",
        partenza: "2025-01-20",
        ritorno: "2025-02-10",
        immagine: "src/data/images/parigi.jpg",
        tutor: "Anna Bianchi",
        partecipanti: [
            { nome: "Luca Bianchi", telefono: "3331112233", email: "luca.bianchi@example.com", codiceFiscale: "CFROMA01", contattoEmergenza: { nome: "Giulia Bianchi", relazione: "Sorella", telefono: "3334445566" } },
            { nome: "Marco Verdi", telefono: "3332223344", email: "marco.verdi@example.com", codiceFiscale: "CFROMA02", contattoEmergenza: { nome: "Francesco Verdi", relazione: "Padre", telefono: "3335556677" } },
            { nome: "Chiara Rossi", telefono: "3333334455", email: "chiara.rossi@example.com", codiceFiscale: "CFROMA03", contattoEmergenza: { nome: "Martina Rossi", relazione: "Madre", telefono: "3336667788" } },
            { nome: "Andrea Ferri", telefono: "3451112233", email: "andrea.ferri@example.com", codiceFiscale: "CFPARIGI01", contattoEmergenza: { nome: "Sara Ferri", relazione: "Madre", telefono: "3454445566" } },
            { nome: "Elena Neri", telefono: "3452223344", email: "elena.neri@example.com", codiceFiscale: "CFPARIGI02", contattoEmergenza: { nome: "Luca Neri", relazione: "Fratello", telefono: "3455556677" } },
            { nome: "Matteo Russo", telefono: "3453334455", email: "matteo.russo@example.com", codiceFiscale: "CFPARIGI03", contattoEmergenza: { nome: "Paolo Russo", relazione: "Padre", telefono: "3456667788" } },
            { nome: "Giovanni Esposito", telefono: "3461112233", email: "giovanni.esposito@example.com", codiceFiscale: "CF0007", contattoEmergenza: { nome: "Silvia Esposito", relazione: "Madre", telefono: "3464445566" } },
            { nome: "Sara Conti", telefono: "3462223344", email: "sara.conti@example.com", codiceFiscale: "CF0008", contattoEmergenza: { nome: "Gianni Conti", relazione: "Padre", telefono: "3465556677" } },
            { nome: "Davide Lombardi", telefono: "3463334455", email: "davide.lombardi@example.com", codiceFiscale: "CF0009", contattoEmergenza: { nome: "Laura Lombardi", relazione: "Madre", telefono: "3466667788" } },
            { nome: "Francesca Moretti", telefono: "3471112233", email: "francesca.moretti@example.com", codiceFiscale: "CF0010", contattoEmergenza: { nome: "Michela Moretti", relazione: "Sorella", telefono: "3474445566" } },
            { nome: "Antonio De Luca", telefono: "3472223344", email: "antonio.deluca@example.com", codiceFiscale: "CF0011", contattoEmergenza: { nome: "Alessandro De Luca", relazione: "Padre", telefono: "3475556677" } },
            { nome: "Martina Romano", telefono: "3473334455", email: "martina.romano@example.com", codiceFiscale: "CF0012", contattoEmergenza: { nome: "Federico Romano", relazione: "Fratello", telefono: "3476667788" } },
            { nome: "Simone Galli", telefono: "3481112233", email: "simone.galli@example.com", codiceFiscale: "CF0013", contattoEmergenza: { nome: "Alberto Galli", relazione: "Padre", telefono: "3484445566" } },
            { nome: "Paola Marchetti", telefono: "3482223344", email: "paola.marchetti@example.com", codiceFiscale: "CF0014", contattoEmergenza: { nome: "Claudia Marchetti", relazione: "Madre", telefono: "3485556677" } },
            { nome: "Riccardo Ferrara", telefono: "3483334455", email: "riccardo.ferrara@example.com", codiceFiscale: "CF0015", contattoEmergenza: { nome: "Serena Ferrara", relazione: "Sorella", telefono: "3486667788" } }]
    },

    // Viaggi futuri
    {
        id: 3,
        meta: "Tokyo",
        partenza: "2025-06-10",
        ritorno: "2025-06-30",
        immagine: "src/data/images/tokyo.jpg",
        tutor: "Francesca Rizzo",
        partecipanti: [
            { nome: "Valentina Barbieri", telefono: "3491112233", email: "valentina.barbieri@example.com", codiceFiscale: "CF0016", contattoEmergenza: { nome: "Roberto Barbieri", relazione: "Padre", telefono: "3494445566" } },
            { nome: "Federico Rizzo", telefono: "3492223344", email: "federico.rizzo@example.com", codiceFiscale: "CF0017", contattoEmergenza: { nome: "Davide Rizzo", relazione: "Fratello", telefono: "3495556677" } },
            { nome: "Alessia Gentile", telefono: "3493334455", email: "alessia.gentile@example.com", codiceFiscale: "CF0018", contattoEmergenza: { nome: "Carla Gentile", relazione: "Madre", telefono: "3496667788" } },
            { nome: "Gabriele Fontana", telefono: "3501112233", email: "gabriele.fontana@example.com", codiceFiscale: "CF0019", contattoEmergenza: { nome: "Stefano Fontana", relazione: "Padre", telefono: "3504445566" } },
            { nome: "Elisa Caruso", telefono: "3502223344", email: "elisa.caruso@example.com", codiceFiscale: "CF0020", contattoEmergenza: { nome: "Marta Caruso", relazione: "Sorella", telefono: "3505556677" } },
            { nome: "Davide Romano", telefono: "3561112233", email: "davide.romano@example.com", codiceFiscale: "CF0036", contattoEmergenza: { nome: "Giovanni Romano", relazione: "Padre", telefono: "3564445566" } },
            { nome: "Martina Riva", telefono: "3562223344", email: "martina.riva@example.com", codiceFiscale: "CF0037", contattoEmergenza: { nome: "Lucia Riva", relazione: "Madre", telefono: "3565556677" } },
            { nome: "Gabriele De Luca", telefono: "3563334455", email: "gabriele.deluca@example.com", codiceFiscale: "CF0038", contattoEmergenza: { nome: "Antonio De Luca", relazione: "Padre", telefono: "3566667788" } },
            { nome: "Sara Colombo", telefono: "3571112233", email: "sara.colombo@example.com", codiceFiscale: "CF0039", contattoEmergenza: { nome: "Elisa Colombo", relazione: "Sorella", telefono: "3574445566" } },
            { nome: "Riccardo Pellegrini", telefono: "3572223344", email: "riccardo.pellegrini@example.com", codiceFiscale: "CF0040", contattoEmergenza: { nome: "Franco Pellegrini", relazione: "Padre", telefono: "3575556677" } },
            { nome: "Elisa Gentile", telefono: "3573334455", email: "elisa.gentile@example.com", codiceFiscale: "CF0041", contattoEmergenza: { nome: "Anna Gentile", relazione: "Madre", telefono: "3576667788" } },
            { nome: "Matteo Ruggieri", telefono: "3581112233", email: "matteo.ruggieri@example.com", codiceFiscale: "CF0042", contattoEmergenza: { nome: "Luca Ruggieri", relazione: "Fratello", telefono: "3584445566" } },
            { nome: "Federica Conti", telefono: "3582223344", email: "federica.conti@example.com", codiceFiscale: "CF0043", contattoEmergenza: { nome: "Marta Conti", relazione: "Madre", telefono: "3585556677" } },
            { nome: "Stefano Lombardi", telefono: "3583334455", email: "stefano.lombardi@example.com", codiceFiscale: "CF0044", contattoEmergenza: { nome: "Roberto Lombardi", relazione: "Padre", telefono: "3586667788" } },
            { nome: "Angela Fiore", telefono: "3591112233", email: "angela.fiore@example.com", codiceFiscale: "CF0045", contattoEmergenza: { nome: "Clara Fiore", relazione: "Madre", telefono: "3594445566" } },
            { nome: "Alessandro Marini", telefono: "3592223344", email: "alessandro.marini@example.com", codiceFiscale: "CF0046", contattoEmergenza: { nome: "Paolo Marini", relazione: "Padre", telefono: "3595556677" } }]
    },
    {
        id: 4,
        meta: "New York",
        partenza: "2025-07-05",
        ritorno: "2025-07-25",
        immagine: "src/data/images/new_york.jpg",
        tutor: "Stefano De Luca",
        partecipanti: [
            { nome: "Giada Ricci", telefono: "3521112233", email: "giada.ricci@example.com", codiceFiscale: "CF0024", contattoEmergenza: { nome: "Sara Ricci", relazione: "Sorella", telefono: "3524445566" } },
            { nome: "Daniele Contini", telefono: "3522223344", email: "daniele.contini@example.com", codiceFiscale: "CF0025", contattoEmergenza: { nome: "Marta Contini", relazione: "Madre", telefono: "3525556677" } },
            { nome: "Valeria Longo", telefono: "3523334455", email: "valeria.longo@example.com", codiceFiscale: "CF0026", contattoEmergenza: { nome: "Giovanni Longo", relazione: "Padre", telefono: "3526667788" } },
            { nome: "Cristian De Santis", telefono: "3531112233", email: "cristian.desantis@example.com", codiceFiscale: "CF0027", contattoEmergenza: { nome: "Paolo De Santis", relazione: "Padre", telefono: "3534445566" } },
            { nome: "Monica Pini", telefono: "3532223344", email: "monica.pini@example.com", codiceFiscale: "CF0028", contattoEmergenza: { nome: "Carla Pini", relazione: "Madre", telefono: "3535556677" } },
            { nome: "Emanuele Vitali", telefono: "3533334455", email: "emanuele.vitali@example.com", codiceFiscale: "CF0029", contattoEmergenza: { nome: "Stefano Vitali", relazione: "Fratello", telefono: "3536667788" } },
            { nome: "Alice Bortolotti", telefono: "3541112233", email: "alice.bortolotti@example.com", codiceFiscale: "CF0030", contattoEmergenza: { nome: "Michela Bortolotti", relazione: "Madre", telefono: "3544445566" } },
            { nome: "Nicola Greco", telefono: "3542223344", email: "nicola.greco@example.com", codiceFiscale: "CF0031", contattoEmergenza: { nome: "Anna Greco", relazione: "Sorella", telefono: "3545556677" } },
            { nome: "Serena Morelli", telefono: "3543334455", email: "serena.morelli@example.com", codiceFiscale: "CF0032", contattoEmergenza: { nome: "Roberto Morelli", relazione: "Padre", telefono: "3546667788" } },
            { nome: "Giovanni Esposito", telefono: "3551112233", email: "giovanni.esposito@example.com", codiceFiscale: "CF0033", contattoEmergenza: { nome: "Mario Esposito", relazione: "Padre", telefono: "3554445566" } },
            { nome: "Francesca Barbieri", telefono: "3552223344", email: "francesca.barbieri@example.com", codiceFiscale: "CF0034", contattoEmergenza: { nome: "Lucia Barbieri", relazione: "Madre", telefono: "3555556677" } },
            { nome: "Massimo Fontana", telefono: "3553334455", email: "massimo.fontana@example.com", codiceFiscale: "CF0035", contattoEmergenza: { nome: "Alberto Fontana", relazione: "Fratello", telefono: "3556667788" } }]
    },
    {
        id: 5,
        meta: "Sydney",
        partenza: "2025-08-15",
        ritorno: "2025-09-05",
        immagine: "src/data/images/sydney.jpg",
        tutor: "Martina Ferrari",
        partecipanti: [
            { nome: 'Vincenza Sabbatini', telefono: '+39 12 8091509', email: 'drusoamalia@tiscali.it', codiceFiscale: 'WJYHWX02N30Y116S', contattoEmergenza: { nome: 'Gemma Verdone', relazione: 'Sorella', telefono: '+39 95 4228206' } },
            { nome: 'Sig.ra Rosina Speri', telefono: '+39 054 0027139', email: 'morgagnisonia@romiti-garzoni.com', codiceFiscale: 'MWQNCJ23E78D848F', contattoEmergenza: { nome: 'Pomponio Monicelli-Bianchi', relazione: 'Sorella', telefono: '+39 297 65266198' } },
            { nome: 'Donna Bongiorno', telefono: '+39 672 4033322', email: 'cmodiano@perini.it', codiceFiscale: 'KCDHDN90H63C720H', contattoEmergenza: { nome: 'Marcello Bettoni', relazione: 'Fratello', telefono: '+39 464 01188421' } },
            { nome: 'Donatello Lopresti', telefono: '+39 197 47996348', email: 'elmobarracco@poste.it', codiceFiscale: 'DSMLQA97Z80J392U', contattoEmergenza: { nome: 'Lorenzo Sobrero', relazione: 'Fratello', telefono: '+39 84 2054912' } },
            { nome: 'Pasqual Majorana', telefono: '+39 8424 4320691', email: 'dinacorcos@bembo-sraffa.it', codiceFiscale: 'KXTIOE78G28X900M', contattoEmergenza: { nome: 'Evangelista Lollobrigida-Romagnoli', relazione: 'Fratello', telefono: '+39 7951 60315881' } },
            { nome: 'Amadeo Tamburi', telefono: '+39 6776 64107504', email: 'lisa16@libero.it', codiceFiscale: 'TJGHKS13Z02C435T', contattoEmergenza: { nome: 'Roberta Marsili', relazione: 'Amico', telefono: '+39 390 70 31 5676' } },
            { nome: 'Dott. Luca Lancisi', telefono: '+39 50 3570545', email: 'bartolomeopacetti@live.com', codiceFiscale: 'EUEEHQ82P32A168C', contattoEmergenza: { nome: 'Pomponio Lercari', relazione: 'Partner', telefono: '+39 9038 2331717' } },
            { nome: 'Oreste Tamburini-Gilardoni', telefono: '+39 9226 7890932', email: 'ritapasolini@tele2.it', codiceFiscale: 'DTHZSD93H56Z913Q', contattoEmergenza: { nome: 'Sig. Paolo Cignaroli', relazione: 'Fratello', telefono: '+39 637 94 04 6430' } },
            { nome: 'Eleanora Montalti-Vigorelli', telefono: '+39 666 44668064', email: 'fiorinopugliese@poste.it', codiceFiscale: 'ZWKLKG65N27P059L', contattoEmergenza: { nome: 'Dina Mascheroni', relazione: 'Madre', telefono: '+39 34 7089402' } },
            { nome: 'Ivan Udinesi', telefono: '+39 34 7570567', email: 'cscaduto@condoleo.net', codiceFiscale: 'JCPKLM17X09I177H', contattoEmergenza: { nome: 'Flavia Sordi', relazione: 'Madre', telefono: '+39 6629 6330387' } },
            { nome: 'Ronaldo Ruberto-Boccherini', telefono: '+39 727 46950623', email: 'paride60@zampa.it', codiceFiscale: 'LUBQIZ32I57I182Z', contattoEmergenza: { nome: 'Dott. Annamaria Vigorelli', relazione: 'Madre', telefono: '+39 05 6368339' } },
            { nome: 'Domenico Barracco', telefono: '+39 3087 1844163', email: 'csabatini@virgilio.it', codiceFiscale: 'GZIKAU48V21F827G', contattoEmergenza: { nome: 'Susanna Trapanese', relazione: 'Sorella', telefono: '+39 541 06 49 4595' } },
            { nome: 'Pierluigi Tedesco', telefono: '+39 0124 13339765', email: 'vendittiettore@tele2.it', codiceFiscale: 'LNESPM31W64C450R', contattoEmergenza: { nome: 'Pierangelo Trapani-Doglioni', relazione: 'Padre', telefono: '+39 571 84182547' } },
            { nome: 'Aurora Dossi', telefono: '+39 8381 9675640', email: 'wtaccola@virgilio.it', codiceFiscale: 'YZNIFY71E55X418D', contattoEmergenza: { nome: 'Paolo Caironi', relazione: 'Sorella', telefono: '+39 471 39135121' } },
            { nome: 'Virginia Errigo', telefono: '+39 844 96 60 2237', email: 'alfio73@argento-botticelli.com', codiceFiscale: 'GCBKPI46L05T774S', contattoEmergenza: { nome: 'Teresa Scaramucci', relazione: 'Fratello', telefono: '+39 4283 4962773' } }]

    },
    {
        id: 6,
        meta: "Dubai",
        partenza: "2025-09-10",
        ritorno: "2025-09-30",
        immagine: "src/data/images/dubai.jpg",
        tutor: "Alessandro Moretti",
        partecipanti: [
            { nome: "Luca Bianchi", telefono: "3331112233", email: "luca.bianchi@example.com", codiceFiscale: "CFROMA01", contattoEmergenza: { nome: "Giulia Bianchi", relazione: "Sorella", telefono: "3334445566" } },
            { nome: "Marco Rossi", telefono: "3332223344", email: "marco.rossi@example.com", codiceFiscale: "CFROMA02", contattoEmergenza: { nome: "Anna Rossi", relazione: "Madre", telefono: "3335556677" } },
            { nome: "Sofia Verdi", telefono: "3333334455", email: "sofia.verdi@example.com", codiceFiscale: "CFROMA03", contattoEmergenza: { nome: "Paolo Verdi", relazione: "Padre", telefono: "3336667788" } },
            { nome: "Giuseppe Ferrari", telefono: "3334445566", email: "giuseppe.ferrari@example.com", codiceFiscale: "CFROMA04", contattoEmergenza: { nome: "Maria Ferrari", relazione: "Moglie", telefono: "3337778899" } },
            { nome: "Alessandra Romano", telefono: "3335556677", email: "alessandra.romano@example.com", codiceFiscale: "CFROMA05", contattoEmergenza: { nome: "Roberto Romano", relazione: "Fratello", telefono: "3338889900" } },
            { nome: "Davide Marino", telefono: "3336667788", email: "davide.marino@example.com", codiceFiscale: "CFROMA06", contattoEmergenza: { nome: "Laura Marino", relazione: "Sorella", telefono: "3339990011" } },
            { nome: "Elena Conti", telefono: "3337778899", email: "elena.conti@example.com", codiceFiscale: "CFROMA07", contattoEmergenza: { nome: "Marco Conti", relazione: "Marito", telefono: "3330001122" } },
            { nome: "Andrea Greco", telefono: "3338889900", email: "andrea.greco@example.com", codiceFiscale: "CFROMA08", contattoEmergenza: { nome: "Chiara Greco", relazione: "Madre", telefono: "3331112233" } },
            { nome: "Valentina Costa", telefono: "3339990011", email: "valentina.costa@example.com", codiceFiscale: "CFROMA09", contattoEmergenza: { nome: "Francesco Costa", relazione: "Padre", telefono: "3332223344" } },
            { nome: "Francesco Ricci", telefono: "3330001122", email: "francesco.ricci@example.com", codiceFiscale: "CFROMA10", contattoEmergenza: { nome: "Sara Ricci", relazione: "Moglie", telefono: "3333334455" } },
            { nome: "Martina Gallo", telefono: "3331112244", email: "martina.gallo@example.com", codiceFiscale: "CFROMA11", contattoEmergenza: { nome: "Luigi Gallo", relazione: "Fratello", telefono: "3334445577" } },
            { nome: "Lorenzo Bruno", telefono: "3332223355", email: "lorenzo.bruno@example.com", codiceFiscale: "CFROMA12", contattoEmergenza: { nome: "Sofia Bruno", relazione: "Sorella", telefono: "3335556688" } },
            { nome: "Chiara Fontana", telefono: "3333334466", email: "chiara.fontana@example.com", codiceFiscale: "CFROMA13", contattoEmergenza: { nome: "Marco Fontana", relazione: "Marito", telefono: "3336667799" } },
            { nome: "Roberto Mancini", telefono: "3334445577", email: "roberto.mancini@example.com", codiceFiscale: "CFROMA14", contattoEmergenza: { nome: "Laura Mancini", relazione: "Madre", telefono: "3337778800" } },
            { nome: "Sara Colombo", telefono: "3335556688", email: "sara.colombo@example.com", codiceFiscale: "CFROMA15", contattoEmergenza: { nome: "Andrea Colombo", relazione: "Padre", telefono: "3338889911" } }
        ]
    }
];

export default viaggi;