export default {
  items: [
    {
      name: 'Visal geral',
      url: '/dashboard',
      icon: 'icon-speedometer'
    },
    {
      name: 'Agenda',
      url: '/schedule',
      icon: 'icon-calendar'
    },
    {
      name: 'Clientes',
      url: '/customers',
      icon: 'icon-user'
    },
    {
      name: 'Profissionais',
      url: '/professionals',
      icon: 'icon-star',
      children: [
        {
          name: 'Lista de profissionais',
          url: '/professionals/list'
        },
        {
          name: 'Grade de horários',
          url: '/professionals/schedule-grid'
        },
      ]
    },
    {
      name: 'Serviços',
      url: '/services',
      icon: 'icon-mustache'
    }
  ]
};
