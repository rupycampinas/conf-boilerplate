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
      price: "R$ 70",
      venue: "Faculdade de Engenharia Elétrica e de Computação (FEEC) - UNICAMP",
      address: "Avenida Albert Einstein, 400",
      city: "Campinas",
      state: "São Paulo",
      logo_path: 'themes/yellow-swan/img/logo.png'
    },

    social_midias: [
      {
        name: 'Facebook',
        url: 'https://www.facebook.com/rupycampinas'
      },
      {
        name: 'Twitter',
        url: 'https://twitter.com/rupycampinas'
      },
    ],

    // The Call To Action button at the header,
    // If you don't want this, just remove the callToAction property.
    // callToAction: {
    //     text: "Inscreva-se!",
    //     //link: "http://eventick.com.br"
    //     link: "javascript:void(0)"
    // },

    // "Fork me on GitHub", if you don't want this, just remove the forkButton property
    callForPapers: {
        url: "https://docs.google.com/forms/d/1aD2J4CzWbCcoK45fk9kYGCNd8paKt-3nAMTPPKieGUA/viewform?usp=send_form"
    },

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

    // The entire schedule
    schedule: [
      {
        time: "8h00",
        slots: [
          {
            name: "Credenciamento / Café da manhã",
            //description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultricies rhoncus metus. Vivamus nec elit in lacus tempor ullamcorper non eget diam. Nam vulputate non velit quis condimentum. Nulla elementum, tellus laoreet sagittis vulputate, dui tortor tincidunt lacus, eget suscipit arcu felis eget tortor. In posuere, erat quis facilisis consequat, ante ex blandit nibh, ac lobortis sapien ipsum id odio. Suspendisse finibus, neque in tempor volutpat, est massa aliquam dolor, in posuere turpis ante at neque. Aliquam nec cursus nibh. Praesent condimentum luctus magna ut tempus. ',
            description: '-',
            //tags: ['Red']
          },
          // {
          //   name: "Ciclo de Trabalho Ágil",
          //   description: 'Desenvolver sistemas que atendam as necessidades atuais do mercado vêm se tornado uma atividade cada vez mais desafiadora. Os desafios incluem alta escalabilidade, robustez, tolerância a falhas e distribuição, entre muitos outros e, claro, tudo isso tem de estar pronto o mais rápido possível. Nesta palestra, apresentarei alguns conceitos fundamentais de programação funcional e da linguagem Elixir que podem lhe ajudar a desenhar e implementar sistemas capazes de resolver estes e outros desafios.',
          //   tags: ['Black'],
          //   speaker: 'Henrique Bastos'
          // }
        ]
      },
      // {
      //   name: "Linus Torvalds",
      //   photo: "themes/yellow-swan/img/speaker.jpg",
      //   bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
      //   company: "Linux Foundation",
      //   link: {
      //     href: "http://twitter.com/linus",
      //     text: "@linus"
      //   },
      //   presentation: {
      //     title: "Digging into a Linux Kernel",
      //     description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
      //     time: "10h00"
      //   }
      // },
      // {
      //   name: "Bill Gates",
      //   photo: "themes/yellow-swan/img/speaker.jpg",
      //   bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
      //   company: "Microsoft",
      //   link: {
      //     href: "http://github.com/billy95",
      //     text: "@billy95"
      //   },
      //   presentation: {
      //     title: "Introducing Windows 12",
      //     description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
      //     time: "11h00"
      //   }
      // },
      {
        time: "12h00",
        slots: [
          {
            name: "Almoço",
            description: '-'
          }
        ]
      },
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
      {
        time: "15h30",
        slots: [
          {
            name: "Coffee-break",
            description: '-'
          }
        ]
      },
      // {
      //   name: "Mark Zuckerberg",
      //   photo: "themes/yellow-swan/img/speaker.jpg",
      //   bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
      //   company: "Facebook",
      //   link: {
      //     href: "http://twitter.com/zuck",
      //     text: "@zuck"
      //   },
      //   presentation: {
      //     title: "Revealing Facebook Secrets",
      //     description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
      //     time: "16h00"
      //   }
      // },
      // {
      //   name: "Steve Wozniak",
      //   photo: "themes/yellow-swan/img/speaker.jpg",
      //   bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
      //   company: "Apple, Inc.",
      //   link: {
      //     href: "http://twitter.com/woz",
      //     text: "@woz"
      //   },
      //   presentation: {
      //     title: "Why do I prefer Android over iPhone",
      //     description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
      //     time: "17h00"
      //   }
      // }
      {
        time: "18h00",
        slots: [
          {
            name: "Encerramento oficial",
            description: '-'
          }
        ]
      },
    ],

    // List of Sponsors
    sponsors: [
      {
        name: "Eventick",
        logo: "themes/yellow-swan/img/sponsor.png",
        url: "http://eventick.com.br"
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