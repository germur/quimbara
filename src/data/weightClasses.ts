export interface WeightClass {
  slug: string
  nameEs: string
  nameEn: string
  limit: string
  description: string
  history: string
}

export const weightClasses: WeightClass[] = [
  {
    slug: 'peso-pesado',
    nameEs: 'Peso Pesado',
    nameEn: 'Heavyweight',
    limit: '93+ kg (205+ lb)',
    description: 'La división de peso pesado no tiene límite superior, donde compiten los atletas más grandes y poderosos del octágono.',
    history: 'La división ha sido hogar de leyendas como Randy Couture, Cain Velasquez, Stipe Miocic, y actualmente Jon Jones domina como campeón.'
  },
  {
    slug: 'peso-semipesado',
    nameEs: 'Peso Semipesado',
    nameEn: 'Light Heavyweight',
    limit: '84-93 kg (185-205 lb)',
    description: 'División que combina poder y velocidad, hogar de algunos de los peleadores más técnicos de UFC.',
    history: 'Jon Jones dominó esta división por años antes de moverse a peso pesado. Actualmente Alex Pereira es el campeón.'
  },
  {
    slug: 'peso-mediano',
    nameEs: 'Peso Mediano',
    nameEn: 'Middleweight',
    limit: '77-84 kg (170-185 lb)',
    description: 'Una de las divisiones más competitivas con un equilibrio perfecto entre técnica y poder.',
    history: 'Israel Adesanya y Dricus du Plessis han protagonizado épicas batallas por el título en esta división.'
  },
  {
    slug: 'peso-welter',
    nameEs: 'Peso Wélter',
    nameEn: 'Welterweight',
    limit: '70-77 kg (155-170 lb)',
    description: 'División histórica con algunos de los mejores peleadores libra por libra de todos los tiempos.',
    history: 'Georges St-Pierre, Kamaru Usman y León Edwards han dejado su marca en esta categoría legendaria.'
  },
  {
    slug: 'peso-ligero',
    nameEs: 'Peso Ligero',
    nameEn: 'Lightweight',
    limit: '66-70 kg (145-155 lb)',
    description: 'La división más profunda y competitiva de UFC con un nivel técnico excepcional.',
    history: 'Islam Makhachev actualmente reina, siguiendo el legado de Khabib Nurmagomedov, Charles Oliveira y Conor McGregor.'
  },
  {
    slug: 'peso-pluma',
    nameEs: 'Peso Pluma',
    nameEn: 'Featherweight',
    limit: '61-66 kg (135-145 lb)',
    description: 'División que combina velocidad extrema con técnica refinada y poder sorprendente.',
    history: 'Ilia Topuria ha sacudido la división tras vencer a Alexander Volkanovski, continuando el legado de José Aldo y Max Holloway.'
  },
  {
    slug: 'peso-gallo',
    nameEs: 'Peso Gallo',
    nameEn: 'Bantamweight',
    limit: '57-61 kg (125-135 lb)',
    description: 'División explosiva con peleadores increíblemente dinámicos y versátiles.',
    history: 'Sean O\'Malley representa la nueva generación tras el reinado de Aljamain Sterling y Petr Yan.'
  },
  {
    slug: 'peso-mosca',
    nameEs: 'Peso Mosca',
    nameEn: 'Flyweight',
    limit: '52-57 kg (115-125 lb)',
    description: 'La división más ligera masculina, caracterizada por velocidad vertiginosa y técnica excepcional.',
    history: 'Alexandre Pantoja lidera actualmente, tras memorables reinados de Deiveson Figueiredo y Brandon Moreno.'
  }
]

// Helper para mapear nombres en inglés a español
export const weightClassMap: Record<string, string> = {
  'Heavyweight': 'peso-pesado',
  'Light Heavyweight': 'peso-semipesado',
  'Middleweight': 'peso-mediano',
  'Welterweight': 'peso-welter',
  'Lightweight': 'peso-ligero',
  'Featherweight': 'peso-pluma',
  'Bantamweight': 'peso-gallo',
  'Flyweight': 'peso-mosca'
}

// Helper inverso
export const weightClassMapReverse: Record<string, string> = {
  'peso-pesado': 'Heavyweight',
  'peso-semipesado': 'Light Heavyweight',
  'peso-mediano': 'Middleweight',
  'peso-welter': 'Welterweight',
  'peso-ligero': 'Lightweight',
  'peso-pluma': 'Featherweight',
  'peso-gallo': 'Bantamweight',
  'peso-mosca': 'Flyweight'
}
