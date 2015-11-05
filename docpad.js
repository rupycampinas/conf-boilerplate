module.exports = {

  prompts: false,

  // These are variables will be accessible via our templates
  templateData: {

    // Conference info
    conf: {
      name: "RuPy Campinas",
      description: "Tudo sobre Ruby, Python, JavaScript e o que há de mais incrível",
      date: "20 de junho de 2015",
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
        text: "Veja como foi",
        //link: "http://eventick.com.br"
        link: "https://www.facebook.com/media/set/?set=a.1459820534312838.1073741830.1387301224898103&type=3"
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
        description: 'Consultor e desenvolvedor em Software Livre desde 2001. Trabalha com a linguagem de programação Python, e é contribuidor do projeto GNU Image Manipulation Program (GIMP) . Realizou projetos com várias empresas, ressaltando-se colaboração no desenvolvimento de portais web como o do Sebrae Nacional, Brasil.gov.br e da revista CartaCapital. Foi membro diretor da Associação Python Brasil de 2009 a 2013. Atualmente é desenvolvedor Python na Titans Group.',
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
      {
        time: "08:00",
        slots: [
          {
            name: "Credenciamento / café da manhã",
            description: '',
          }
        ]
      },
      {
        time: "08:40",
        slots: [
          {
            name: "Abertura oficial",
            description: '',
          }
        ]
      },
      {
        time: "09:00",
        slots: [
          {
            name: "AMS e Rails, construindo APIs com s2",
            description: 'Muitas pessoas tem utilizado Rails para construir APIs externas e internas, mas construir uma API de boa qualidade pode ser difícil, e performance é um elemento chave para esse objetivo. Gostaria de dividir algumas das minhas histórias construindo APIs, e compartilhar como o Active Model Serializer, component do Rails-API me ajudou nesse processo. AMS tem sido utilizado por milhares de aplicações ao redor do mundo, ajudando a trazer convenções para a criação de APIs e manipulações de JSON. Nessa palestra vou falar também sobre a nova versão do AMS, novas funcionalidades, o futuro e como temos nos esforçado pela possibilidade de estar integrado no Rails 5.',
            tags: ['Black'],
            speaker: 'João Moura',
            slides: 'https://speakerdeck.com/joaomdmoura/ams-api-rails-and-a-developer-a-love-story'
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
        time: "10:00",
        slots: [
          {
            name: "Ruby Além dos Trilhos",
            description: 'O Rails ao longo dos últimos anos se tornou uma plataforma bastante sólida e respeitada. E boa parte desse sucesso é atribuido a uma comunidade inovadora, vibrante e bem "opinionada". Como consequência, hoje temos um vasto leque de bibliotecas, padrões de projeto, convenções e boas práticas à nossa mão. Porém, quando não somos criteriosos, todos esses recursos podem facilmente trazer uma grande dor-de-cabeça: o inferno da manutenção. Complexidade desnecessária, alto acoplamento, indireção, todos esses fatores acabam nos atrapalhando quando estamos evoluindo nosso software. Nesta palestra visitaremos alguns exemplos reais desses problemas e aprenderemos como enxergar além para evitá-los, trazendo de volta a tranquilidade ao nosso dia-a-dia de desenvolvimento.',
            tags: ['Red'],
            speaker: 'Rafael França',
            slides: 'https://speakerdeck.com/rafaelfranca/ruby-alem-dos-trilhos',
            video: 'http://www.infoq.com/br/presentations/ruby-alem-dos-trilhos'
          },
          {
            name: "Python e a Invasão dos Objetos Inteligentes",
            description: 'A linguagem Python oferece vários mecanismos para personalizar a criação de objetos, bem como o acesso a seus atributos. Esta apresentação mostra exemplos ao vivo de alguns dos principais meios que o Python dispõe para acrescentar capacidades à hierarquias de classes - permitindo a criação de mapeadores objeto-relacionais, introspectar bibliotecas e objetos nativos mapeados para Python, permitir anotações e desenvolvimento "orientado a aspectos", computação "lazy" e matemática simbólica dentre outras funcionalidades. O trabalho passa pela demonstração e explicação dos "decorators" em Python, como funcionam as "properties", e o mecanismo utilizado pela linguagem para o uso de métodos de objetos: os "descriptors". Os objetivos da palestra são: esclarecer como os principais frameworks, ORMs, e bibliotecas em Python podem fazer suas  "mágicas", aparentemente  mudando o comportamento da linguagem;  e dar idéias de como se implementar técnicas semelhantes em sistemas próprios.',
            tags: ['Black'],
            speaker: 'João S. O. Bueno',
            slides: 'https://github.com/jsbueno/intelligent_objects/'
          }       
        ]
      },
      {
        time: "11:00",
        slots: [
          {
            name: "Desbravando Web Components",
            description: 'Descubra como esse conceito formado por cinco novas especificações (Templates, Decorators, Shadow DOM, Custom Elements, Imports) irá revolucionar o modo como desenvolvemos e interagimos na web. Com ferramentas como Polymer e X-Tag, podemos começar a tirar proveito desta nova tecnologia hoje. Vamos dar uma olhada em alguns dos elementos surpreendentes que já estão sendo produzidos, e explorar como você pode começar a aproveitar-los em seus próprios projetos.',
            tags: ['Black'],
            speaker: 'Mateus Ortiz',
            slides: 'https://speakerdeck.com/mateusortiz/desbravando-web-components',
            video: 'http://www.infoq.com/br/presentations/desbravando-web-components'
          },
          {
            name: "Tunando seu código Ruby",
            description: 'Você acha que não tem problemas de performance na sua aplicação? Nessa talk vou mostrar alguns métodos de benchmark/profilling para você descobrir como tunar a sua aplicação Ruby/Rails. Alem de mostrar códigos que utilizamos no dia-dia que podem comprometer a performance da sua aplicação.',
            tags: ['Black'],
            speaker: 'André Luis Anastácio',
            slides: 'https://speakerdeck.com/andreanastacio/tunando-o-seu-codigo-ruby'
          },
        ]
      },
      {
        time: "12:00",
        slots: [
          {
            name: "Almoço",
            description: '',
          }
        ]
      },
      {
        time: "13:30",
        slots: [  
          {
            name: "A evolução de uma arquitetura distribuída",
            description: 'Quando um produto cresce, um dos maiores desafios é como evoluir a arquitetura de maneira sustentável. Nesta palestra, será apresentado como a plataforma criada para o Globo.tv cresceu e evoluiu com o projeto Globosat Play. Entre os desafios, como permitir que mais de um time trabalhe na mesma plataforma, como compartilhar componentes e como atualizar um projeto sem quebrar o outro.',
            tags: ['Black'],
            speaker: 'Guilherme Garnier',
            slides: 'http://ggarnier.github.io/evolucao-arquitetura',
            video: 'http://www.infoq.com/br/presentations/a-evolucao-de-uma-arquitetura-distribuida'
          },    
          {                                                                                                                                                                                                                                                                                                                                                                           
            name: "Programando a Felicidade",
            description: 'Bate papo sobre envolvimento com a comunidade Python e como isso impactou minha vida de maneiras inesperadas, me levando a uma experiência de trabalhar apenas 2 dias por semana no último ano e meio, viajar para 5 estados do Brasil e estar com passagem marcada para conferência no Canadá. Afinal, é possível isso sem ser rico? Apareça e contribua com a discussão ;)',
            tags: ['Red'],
            speaker: 'Renzo Nuccitelli',
            slides: 'https://drive.google.com/file/d/0B2FeB263eKwkQVNYWDhEdF9Eclk/view?usp=sharing',
            video: 'http://www.infoq.com/br/presentations/programando-a-felicidade'
          }
        ]
      },
      {
        time: "14:30",
        slots: [    
          {
            name: "Novas linguagens: o que vem depois do Ruby",
            description: 'Mesmo sendo um Rubista não significa que não estamos prestando atenção às novas ondas de linguagens. Nos últimos anos vimos um crescimento no nascimento de novas linguagens, desde Groovy, Scala, Clojure, GoLang, Swift, Rust, Elixir, isso sem contar o renascimento do Javascript. De onde vem essas linguagens? Por que elas existem? Quais devemos prestar atenção? É impossível responder satisfatoriamente a todas essa perguntas, mas vamos tentar pelo menos trazer alguma perspectiva.',
            tags: ['Black'],
            speaker: 'Fabio Akita',
            slides: 'http://www.slideshare.net/akitaonrails/languagesmaplatestreducefuturesortfirst-rupy-campinas-2015'
          },                                                                                  
          {
            name: "Como aumentar o desempenho de sua aplicação com Python",
            description: 'Esta palestra irá abordar técnicas para identificar problemas e utilizar melhor o hardware que temos hoje utilizando Python bem como mostrar o que temos disponível atualmente auxiliando quem busca maior desempenho em sua aplicação.',
            tags: ['Black'],
            speaker: 'Leandro Zanotto',
            slides: 'http://www.slideshare.net/leandronz/palestra-hpc-python'
          }
        ]
      },
      {
        time: "15:30",
        slots: [    
          {
            name: "Coffee-break",
            description: '',
          },                                                                                  
        ]
      },
      {
        time: "16:00",
        slots: [                                                                                      
          {
            name: "Meteoro de pegasuuus! Desenvolvendo aplicações com Meteor.js",
            description: 'O que é esse framework que o pessoal anda falando por ai? É node mesmo ou bruxaria realtime? Nessa palestra vou explicar como funciona o Meteor com sua dinâmica própria e "inovadora", ensinar como criar uma aplicação, seus prós e contras e tirar dúvidas',
            tags: ['Red'],
            speaker: 'Julio Marins',
            slides: 'http://www.slideshare.net/JulioAntonioMendonad/palestra-meteor',
            video: 'http://www.infoq.com/br/presentations/desenvolvendo-aplicacoes-com-meteor-js'
          },
          {
            name: "Girando Pratos: Concorrência com Futures em Python",
            description: 'Novidades como o módulo `concurrent.futures`, delegação de co-rotinas com `yield from` e o módulo `asyncio` representam um capítulo novo na evolução de Python, e são as melhores razões para migrar para Python 3. Esta palestra mostrará como essas ferramentas tornam a programação concorrente acessível até mesmo para programadores casuais, com aumentos dramáticos de desempenho em clientes e servidores na rede.',
            tags: ['Black'],
            speaker: 'Luciano Ramalho',
            slides: 'https://speakerdeck.com/ramalho/girando-pratos-concorrencia-moderna-em-python',
            video: 'http://www.infoq.com/br/presentations/concorrencia-com-futures-em-python'
          }
        ]
      },
      {
        time: "17:00",
        slots: [  
          {
            name: "Usando Ruby em (quase) qualquer lugar",
            description: 'Ano passado foi lançada a primeira versão estável do mruby, um interpretador mais leve e embedável da linguagem de programação Ruby. No entanto, ainda é difícil encontrar tutoriais mais completos ou exemplos bem documentados, sobre como de fato utilizá-lo. O objetivo desta palestra, que será bem prática, é ensinar como criar extensões (mrbgems) e demonstrar uma aplicação completa que usa Ruby sem que a máquina do usuário precise ter um interpretador instalado.',
            tags: ['Red'],
            speaker: 'Oscar Esgalha',
            slides: 'https://speakerdeck.com/oesgalha/usando-ruby-em-quase-qualquer-lugar',
            video: 'http://www.infoq.com/br/presentations/usando-ruby-em-qualquer-lugar'
          },
          {
            name: "React e Flux: uma nova abordagem pra aplicações de alto desempenho",
            description: 'React é uma biblioteca JavaScript para criação de interfaces de alto desempenho baseadas em componentes. Flux é uma arquitetura para desenvolvimento de aplicações que complementa o React. O objetivo dessa palestra é apresentar as tecnologias de forma prática e mostrar como elas podem ser empregadas no seu próximo projeto.',
            tags: ['Red'],
            speaker: 'Cássio Zen',
            video: 'http://www.infoq.com/br/presentations/react-e-flux'
          }
        ]
      },
      {
        time: "18:00",
        slots: [  
          {
            name: 'Encerramento oficial',
            description: '',
          },
        ]
      }
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
      {
        name: "Caiena",
        logo: "themes/yellow-swan/img/caiena.jpg",
        url: "http://www.caiena.net"
      },
      {
        description: "Uma empresa de tecnologia que vem colocando vírgulas em histórias onde há finais que podem ser melhorados. Trabalhamos em projetos transformadores usando design e engenharia de software, aliados a uma metodologia ágil de desenvolvimento. A Caiena está inovando e transformando positivamente as áreas da educação e socioambiental."
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
        name: "InfoQ Brasil",
        logo: "themes/yellow-swan/img/infoq.jpg",
        url: "http://infoq.com.br/"
      },
      {
        name: "Eu Compraria",
        logo: "themes/yellow-swan/img/eucompraria.jpg",
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
