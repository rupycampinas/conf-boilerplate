module.exports = {

  prompts: false,

  // These are variables will be accessible via our templates
  templateData: {

    // Conference info
    conf: {
      name: "RuPy Campinas",
      description: "Tudo sobre Ruby, Python, JavaScript e o que há de mais incrível",
      date: "20 de junho",
      // If your event is free, just comment this line
      price: "R$ 50",
      venue: "Faculdade de Engenharia Elétrica e de Computação (FEEC) - UNICAMP",
      address: "Avenida Albert Einstein, 400",
      city: "Campinas",
      state: "São Paulo",
      logo_path: 'themes/yellow-swan/img/logo.png'
    },

    social_midias: [
      {
        name: 'Facebook',
        url: 'https://www.facebook.com/rupycampinas',
        title: 'Curta-nos no Facebook'
      },
      {
        name: 'Twitter',
        url: 'https://twitter.com/rupycampinas',
        title: 'Siga-nos no Twitter'
      },
      {
        name: 'Email',
        url: 'http://eepurl.com/-6P0f',
        title: 'Entre em nossa lista de emails'
      },
    ],

    // The Call To Action button at the header,
    // If you don't want this, just remove the callToAction property.
    callToAction: {
        text: "Inscreva-se!",
        //link: "http://eventick.com.br"
        link: "https://eventioz.com.br/e/rupy-campinas-2015"
    },

    // "Fork me on GitHub", if you don't want this, just remove the forkButton property
    // callForPapers: {
    //     url: "https://docs.google.com/forms/d/1aD2J4CzWbCcoK45fk9kYGCNd8paKt-3nAMTPPKieGUA/viewform?usp=send_form"
    // },

    // Site info
    site: {
      theme: "yellow-swan",
      url: "http://campinas.rupy.com.br",
      googleanalytics: "UA-18442511-18"
    },

    // Active sections on the website
    // to deactivate comment out with '//'
    // you can also change order here and it will reflect on page
    sections: [
      'about',
      'location',
      'speakers',
      'schedule',
      'sponsors',
      'partners'
      // 'contact'
    ],

    // Labels which you can translate to other languages
    labels: {
      about: "Sobre",
      location: "Localização",
      speakers: "Palestrantes",
      schedule: "Agenda",
      sponsors: "Patrocinadores",
      partners: "Parceiros",
      contact: "Contato"
    },

    speakers: [
      {
        name: 'André Luis Anastácio',
        description: 'Desenvolvedor Ruby, apaixonado por game development e Clojure.',
        photo: 'themes/yellow-swan/img/andre.jpg'
      },
      {
        name: 'Capi Etheriel',
        description: 'Contribuidor de diversas tecnologias livres e abertas para a web, entre elas Scrapy, Drupal e CasperJS. Como ativista por dados abertos, adora raspar dados da web junto à rede Transparência Hacker. Também desenvolve jogos de tabuleiro com a Quequeré Jogos e integra a trupe do Ônibus Hacker.',
        photo: 'themes/yellow-swan/img/capi.jpg'
      },
      {
        name: 'Cássio Zen',
        description: 'Trabalha com programação há mais de 10 anos tendo atuado no Brasil e nos EUA desenvolvendo projetos para grandes marcas como Google, Coca-Cola, Itaú, Unilever entre outros. Atualmente trabalha como consultor após ter sua startup adquirida no final de 2014 e até agora não decorou o caminho de casa pro trabalho.',
        photo: 'themes/yellow-swan/img/cassio.jpg'
      },
      {
        name: 'Fabio Akita',
        description: 'Co-fundador da Codeminer 42, empresa de desenvolvimento de software principalmente para startups. Desde 2008 é o criador e organizador do Rubyconf Brasil, uma das maiores conferências de tecnologia da América Latina. Tem experiência de 20 anos no mercado de software, tendo passado pelo mercado de grandes agências, consultoria SAP corporativo e pelo primeiro boom de startups em 2000.',
        photo: 'themes/yellow-swan/img/fabio-akita.jpg'
      },
      {
        name: 'Guilherme Garnier',
        description: 'Desenvolvedor de software com mais de 10 anos de experiência em linguagens como C++, Java, PHP e Perl. Atualmente, trabalha com Ruby on Rails na Globo.com. Mantém seu blog em http://blog.guilhermegarnier.com',
        photo: 'themes/yellow-swan/img/guilherme-garnier.jpg'
      },
      {
        name: 'João Moura',
        description: 'Co-Fouder da Gioco Pro, entusiasta das novas tecnologias, Startups e Open Source. Escritor para o SitePoint e palestrante de conferências internacionais e nacionais.',
        photo: 'themes/yellow-swan/img/joao.jpg'
      },
      {
        name: 'João S. O. Bueno',
        description: 'Consultor e desenvolvedor em Software Livre desde 2001. Trabalha com a linguagem de programação Python, e é contribuidor do projeto GNU Image Manipulation Program (GIMP) . Realizou projetos com várias empresas, ressaltando-se colaboração no desenvolvimento de portais web como o do Sebrae Nacional, Brasil.gov.br e da revista CartaCapital. Foi membro diretor da Associação Python Brasil de 2009 a 2013. Atualmente desenvolve um projeto de ERP e automação comercial para uma empresa privada em Campinas.',
        photo: 'themes/yellow-swan/img/joao-bueno.jpg'
      },
      {
        name: 'Julio Marins',
        description: 'Desenvolvedor, violinista e nômade digital. Formado no CEFET/RJ, é frequentador do Coding Dojo Rio e organizador de dojos apoiando a comunidade compartilhando código e conhecimento.',
        photo: 'themes/yellow-swan/img/julio-marins.jpg'
      },
      {
        name: 'Leandro Zanotto',
        description: "HPC System Engineer no Centro de Engenharia e Ciências Computacionais na Unicamp, com otimização de sistemas de dinâmica molecular e bioinformatica, utilizando tecnologias multicore e manycore.",
        photo: 'themes/yellow-swan/img/leandro.jpg'
      },
      {
        name: 'Luciano Ramalho',
        description: "Ramalho é autor do livro Fluent Python (O'Reilly, 2014) e sócio/professor em Python.pro.br, oferecendo cursos in-company e também online. Foi diretor técnico do Brasil Online, primeiro portal da Abril na Web, lançado uma semana antes do UOL. Depois liderou times para os sites IDG Now, BOL, UOL, AOL Brasil e outros, usando Python desde 1998. Palestrante em eventos internacionais como PyCon US, OSCON ajudou a criar a Associação Python Brasil e foi seu presidente. É membro da Python Software Foundation e fundador do Garoa Hacker Clube, o primeiro hackerspace do Brasil.",
        photo: 'themes/yellow-swan/img/luciano.jpg'
      },
      {
        name: 'Mateus Ortiz',
        description: 'Criador do Web Components the Right Way entre outros projetos. Front-end Developer, já trabalhou como Front-end na Megaranto.com e em outra agencia. Paranaense, gosta muito de open source e na maioria do tempo contribui.',
        photo: 'themes/yellow-swan/img/mateus.jpg'
      },
      {
        name: 'Oscar Esgalha',
        description: 'Hacker por hobby e profissão. Brinca de programar há 8 anos e há mais de 4 é pago para isso. Formou-se em Ciência da Computação pela Unicamp no fim do ano passado. Gosta de tecnologias novas, hackathons, FOSS, startups e recentemente adquiriu gosto por conferências como esta.',
        photo: 'themes/yellow-swan/img/oscar.jpg'
      },
      {
        name: 'Rafael França',
        description: 'Desenvolvedor de Software e membro do Rails Core Team.',
        photo: 'themes/yellow-swan/img/rafael.jpg'
      },
      {
        name: 'Renzo Nuccitelli',
        description: 'Engenheiro de Computação formado pelo ITA. Especialista em programação web no Google App Engine, usa Python desde 2009. Foi Diretor de Tecnologia na startup de educação QMagico, Apaixonado por dar aulas, é professor da Fatec onde ministra as matérias de Orientação a Objetos e "Applicações para Internet Utilizando Banco de Dados". Já palestrou em eventos como Google Developer Bus, DevFest, Rupy e Python Brasil. Escreve sobre tecnologia em seu blog.renzo.pro.br e no IMasters, onde é colunista.',
        photo: 'themes/yellow-swan/img/renzo.jpg'
      },
    ],

    // The entire schedule
    schedule: [
      // {
      //   time: "8h00",
      //   slots: [
      //     {
      //       name: "Credenciamento / Café da manhã",
      //       //description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultricies rhoncus metus. Vivamus nec elit in lacus tempor ullamcorper non eget diam. Nam vulputate non velit quis condimentum. Nulla elementum, tellus laoreet sagittis vulputate, dui tortor tincidunt lacus, eget suscipit arcu felis eget tortor. In posuere, erat quis facilisis consequat, ante ex blandit nibh, ac lobortis sapien ipsum id odio. Suspendisse finibus, neque in tempor volutpat, est massa aliquam dolor, in posuere turpis ante at neque. Aliquam nec cursus nibh. Praesent condimentum luctus magna ut tempus. ',
      //       description: '-',
      //       //tags: ['Red']
      //     }
      //   ]
      // },
      {
        time: "a definir",
        slots: [
          {
            name: "Tunando seu código Ruby",
            description: 'Você acha que não tem problemas de performance na sua aplicação? Nessa talk vou mostrar alguns métodos de benchmark/profilling para você descobrir como tunar a sua aplicação Ruby/Rails. Alem de mostrar códigos que utilizamos no dia-dia que podem comprometer a performance da sua aplicação.',
            tags: ['Black'],
            speaker: 'André Luis Anastácio'
          },
          {
            name: "React e Flux: uma nova abordagem pra aplicações de alto desempenho",
            description: 'React é uma biblioteca JavaScript para criação de interfaces de alto desempenho baseadas em componentes. Flux é uma arquitetura para desenvolvimento de aplicações que complementa o React. O objetivo dessa palestra é apresentar as tecnologias de forma prática e mostrar como elas podem ser empregadas no seu próximo projeto.',
            tags: ['Red'],
            speaker: 'Cássio Zen'
          }
        ]
      },
      {
        time: "a definir",
        slots: [
          {
            name: "Arquitetura distribuída: escalando projetos e times",
            description: 'Há alguns anos, muitas pessoas diziam que Rails não escalava. Atualmente, existem muitas aplicações grandes em Rails que mostram que isso não é verdade. Mas quando seu projeto cresce, até que ponto vale manter tudo numa única aplicação? Nesta apresentação, vou mostrar detalhes de uma arquitetura distribuída com serviços, apresentando os principais pontos positivos e negativos desta abordagem. Será apresentado o case dos projetos Globosat Play e Globo.tv...',
            tags: ['Black'],
            speaker: 'Guilherme Garnier'
          },
          {
            name: "Meteoro de pegasuuus! Desenvolvendo aplicações com Meteor.js",
            description: 'O que é esse framework que o pessoal anda falando por ai? É node mesmo ou bruxaria realtime? Nessa palestra vou explicar como funciona o Meteor com sua dinâmica própria e "inovadora", ensinar como criar uma aplicação, seus prós e contras e tirar dúvidas',
            tags: ['Red'],
            speaker: 'Julio Marins'
          }
        ]
      },
      {
        time: "a definir",
        slots: [
          {
            name: "Desbravando Web Components",
            description: 'Descubra como esse conceito formado por cinco novas especificações (Templates, Decorators, Shadow DOM, Custom Elements, Imports) irá revolucionar o modo como desenvolvemos e interagimos na web. Com ferramentas como Polymer e X-Tag, podemos começar a tirar proveito desta nova tecnologia hoje. Vamos dar uma olhada em alguns dos elementos surpreendentes que já estão sendo produzidos, e explorar como você pode começar a aproveitar-los em seus próprios projetos.',
            tags: ['Black'],
            speaker: 'Mateus Ortiz'
          },
          {                                                                                                                                                                                                                                                                                                                                                                           
            name: "Programando a Felicidade",
            description: 'Bate papo sobre envolvimento com a comunidade Python e como isso impactou minha vida de maneiras inesperadas, me levando a uma experiência de trabalhar apenas 2 dias por semana no último ano e meio, viajar para 5 estados do Brasil e estar com passagem marcada para conferência no Canadá. Afinal, é possível isso sem ser rico? Apareça e contribua com a discussão ;)',
            tags: ['Red'],
            speaker: 'Renzo Nuccitelli'
          }
        ]
      },
      {
        time: "a definir",
        slots: [                                                                                      
          {
            name: "Girando Pratos: Concorrência com Futures em Python",
            description: 'Novidades como o módulo `concurrent.futures`, delegação de co-rotinas com `yield from` e o módulo `asyncio` representam um capítulo novo na evolução de Python, e são as melhores razões para migrar para Python 3. Esta palestra mostrará como essas ferramentas tornam a programação concorrente acessível até mesmo para programadores casuais, com aumentos dramáticos de desempenho em clientes e servidores na rede.',
            tags: ['Black'],
            speaker: 'Luciano Ramalho'
          },
          {
            name: "O segredo dos Web Scrapers",
            description: 'Os dados estão todos na web. Alguns projetos oferecem APIs especializadas, mas você já tem toda a interface que precisa no HTML. Pegar os dados da web pode ser uma delícia usando tecnologias especializadas: nossas favoritas são o framework Scrapy (Python) e o browser programático CasperJS. Em ambas as tecnologias, veremos as linguagens dinâmicas dando o seu melhor para trabalhar com programação funcional e retornar os dados que nos interessam!',
            tags: ['Red'],
            speaker: 'Capi Etheriel'
          },
        ]
      },
      {
        time: "a definir",
        slots: [                                                                                      
          {
            name: "Como aumentar o desempenho de sua aplicação com Python",
            description: 'Esta palestra irá abordar técnicas para identificar problemas e utilizar melhor o hardware que temos hoje utilizando Python bem como mostrar o que temos disponível atualmente auxiliando quem busca maior desempenho em sua aplicação.',
            tags: ['Black'],
            speaker: 'Leandro Zanotto'
          },
          {
            name: "Usando Ruby em (quase) qualquer lugar",
            description: 'Ano passado foi lançada a primeira versão estável do mruby, um interpretador mais leve e embedável da linguagem de programação Ruby. No entanto, ainda é difícil encontrar tutoriais mais completos ou exemplos bem documentados, sobre como de fato utilizá-lo. O objetivo desta palestra, que será bem prática, é ensinar como criar extensões (mrbgems) e demonstrar uma aplicação completa que usa Ruby sem que a máquina do usuário precise ter um interpretador instalado.',
            tags: ['Red'],
            speaker: 'Oscar Esgalha'
          },
        ]
      },
      {
        time: "a definir",
        slots: [                                                                                      
          {
            name: "Python e a Invasão dos Objetos Inteligentes",
            description: 'A linguagem Python oferece vários mecanismos para personalizar a criação de objetos, bem como o acesso a seus atributos. Esta apresentação mostra exemplos ao vivo de alguns dos principais meios que o Python dispõe para acrescentar capacidades à hierarquias de classes - permitindo a criação de mapeadores objeto-relacionais, introspectar bibliotecas e objetos nativos mapeados para Python, permitir anotações e desenvolvimento "orientado a aspectos", computação "lazy" e matemática simbólica dentre outras funcionalidades. O trabalho passa pela demonstração e explicação dos "decorators" em Python, como funcionam as "properties", e o mecanismo utilizado pela linguagem para o uso de métodos de objetos: os "descriptors". Os objetivos da palestra são: esclarecer como os principais frameworks, ORMs, e bibliotecas em Python podem fazer suas  "mágicas", aparentemente  mudando o comportamento da linguagem;  e dar idéias de como se implementar técnicas semelhantes em sistemas próprios.',
            tags: ['Black'],
            speaker: 'João S. O. Bueno'
          },
        ]
      },
      // {
      //   time: "12h00",
      //   slots: [
      //     {
      //       name: "Almoço",
      //       description: '-'
      //     }
      //   ]
      // },
      // {
      //   name: "Chuck Norris",
      //   photo: "themes/yellow-swan/img/speaker.jpg",
      //   bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
      //   company: "Delta Command",
      //   link: {
      //     href: "http://twitter.com/littlechuck",
      //     text: "@littlechuck"
      //   },
      //   presentation: {
      //     title: "How to kill a elephant with one finger",
      //     description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
      //     time: "13h00"
      //   }
      // },
      // {
      //   name: "Steve Jobs",
      //   photo: "themes/yellow-swan/img/speaker.jpg",
      //   bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
      //   company: "Apple, Inc.",
      //   link: {
      //     href: "http://github.com/stevie",
      //     text: "@stevie"
      //   },
      //   presentation: {
      //     title: "Presenting iPad",
      //     description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
      //     time: "14h00"
      //   }
      // },
      // {
      //   time: "15h30",
      //   slots: [
      //     {
      //       name: "Coffee-break",
      //       description: '-'
      //     }
      //   ]
      // },
      // {
      //   time: "18h00",
      //   slots: [
      //     {
      //       name: "Encerramento oficial",
      //       description: '-'
      //     }
      //   ]
      // },
    ],

    gold_sponsors: [
      {
        name: "Eventioz",
        logo: "themes/yellow-swan/img/eventioz.jpg",
        url: "http://eventioz.com.br/"
      },
    ],

    // List of Sponsors
    sponsors: [
      // {
      //   name: "Eventick",
      //   logo: "themes/yellow-swan/img/sponsor.png",
      //   url: "http://eventick.com.br"
      // },
      // {
      //   name: "Eventioz",
      //   logo: "themes/yellow-swan/img/eventioz.svg",
      //   url: "http://eventioz.com.br/"
      // },
      {
        name: "Editora Novatec",
        logo: "themes/yellow-swan/img/novatec.jpg",
        url: "http://www.novatec.com.br/"
      },
      {
        name: "Caelum",
        logo: "themes/yellow-swan/img/caelum-logo.jpg",
        url: "https://www.caelum.com.br/"
      },
      {
        name: "Casa do Código",
        logo: "themes/yellow-swan/img/cdc-logo.svg",
        url: "http://www.casadocodigo.com.br"
      },
      {
        name: "TreinaWeb",
        logo: "themes/yellow-swan/img/treinaweb.jpg",
        url: "https://www.treinaweb.com.br/"
      }
    ],

    // List of Partners
    partners: [
      {
        name: "Designa",
        logo: "themes/yellow-swan/img/designa.jpg",
        url: "http://designa.com.br/"
      },
      {
        name: "Conpec",
        logo: "themes/yellow-swan/img/conpec.jpg",
        url: "http://www.conpec.com.br/"
      },
      {
        name: "Eu Compraria",
        logo: "themes/yellow-swan/img/eucompraria.png",
        url: "http://eucompraria.com.br"
      },
      {
        name: "BrazilJS",
        logo: "themes/yellow-swan/img/partner.png",
        url: "http://braziljs.org"
      }
    ],

    // Theme path
    getTheme: function() {
      return "themes/" + this.site.theme;
    },

    // Site Path
    getUrl: function() {
    	return this.site.url;
    }
  }
};
