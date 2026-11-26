import { Injectable, signal } from '@angular/core';
import { GalleryItem, CatalogPage, MetricItem, Organization, Entrepreneur, Workshop } from '../models/project.models';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  readonly metrics = signal<MetricItem[]>([
    { label: 'Páginas no catálogo', value: 35, icon: 'bi-file-earmark-richtext', isGreen: false },
    { label: 'Organizações coletivas', value: 4, icon: 'bi-people-fill', isGreen: true },
    { label: 'Empreendedores da feira', value: 8, icon: 'bi-shop', isGreen: false },
    { label: 'Oficinas ministradas', value: 2, icon: 'bi-easel-fill', isGreen: true },
    { label: 'FEMPA com estande', value: 12, suffix: 'ª', icon: 'bi-award-fill', isGreen: false }
  ]);

  readonly organizations = signal<Organization[]>([
    {
      name: 'COOAMA',
      origin: 'Amargosa',
      since: 'Desde 2009',
      description: 'Cooperativa de agricultura familiar e economia solidária do Vale do Jiquiriçá, referência em produção agroecológica.'
    },
    {
      name: 'Amigos da Arte',
      origin: 'Sto. Antônio de Jesus',
      since: 'Desde 2015',
      description: 'Coletivo de economia criativa reunindo artesãos, produtores de cosméticos naturais e culinaristas da nossa região.'
    },
    {
      name: 'AHORGSAJ',
      origin: 'Faz. Bom Jardim',
      since: 'Desde 2022',
      description: 'Associação de agricultores agroecológicos e orgânicos com comercialização sem intermediários direto ao consumidor.'
    },
    {
      name: 'AACS',
      origin: 'Sapucaia',
      since: 'Desde 1989',
      description: '118 associados e a renomada marca Sabor do Recôncavo, com moderna agroindústria comunitária de processamento.'
    }
  ]);

  readonly entrepreneurs = signal<Entrepreneur[]>([
    { name: 'José Roberto', specialty: 'Hortaliças frescas e frutas da estação' },
    { name: 'Rita de Cássia', specialty: 'Bordados artísticos e panos decorados' },
    { name: 'Eva e Nathália', specialty: 'Produtos naturais e sabonetes artesanais' },
    { name: 'Neia Guedes', specialty: 'Hortaliças, temperos e ervas aromáticas' },
    { name: 'Joanice Santos', specialty: 'Geleias artesanais com frutas nativas' },
    { name: 'Lídia Ramos', specialty: 'Empadas caseiras, doces e licores típicos' },
    { name: 'Joana Silva', specialty: 'Crochê sustentável, bolsas e bijuterias' },
    { name: 'Rosangela', specialty: 'Terços, peças religiosas e biojoias' }
  ]);

  readonly workshops = signal<Workshop[]>([
    {
      id: 1,
      title: 'Oficina 1',
      subtitle: 'Marketing Digital e Gestão de Estoques',
      date: '30 de Setembro',
      description: [
        'Os feirantes aprenderam o caminho "do produto à publicação": como transformar um item da banca em uma postagem clara e atrativa, com nome, descrição, preço, local de venda e contato para encomendas.',
        'Em grupos e com apoio individual dos discentes, organizaram as informações dos próprios produtos e refletiram sobre o controle consciente de estoque e aproveitamento da produção.'
      ],
      mainPhoto: {
        src: 'images/oficina1-auditorio-1.jpeg',
        alt: 'Oficina 1: Alunos e pessoas no auditório com poltronas vermelhas',
        caption: 'Oficina 1: Alunos e pessoas reunidos no auditório com poltronas vermelhas'
      },
      subPhotos: [
        {
          src: 'images/oficina1-auditorio-2.jpeg',
          alt: 'Participantes e estudantes no auditório com poltronas vermelhas',
          caption: 'Auditório do Campus V'
        },
        {
          src: 'images/oficina1-auditorio-3.jpeg',
          alt: 'Orientação aos feirantes nas poltronas vermelhas do auditório',
          caption: 'Orientação aos feirantes'
        },
        {
          src: 'images/oficina1-auditorio-4.jpeg',
          alt: 'Dinâmica no auditório com poltronas vermelhas',
          caption: 'Dinâmica no auditório'
        }
      ]
    },
    {
      id: 2,
      title: 'Oficina 2',
      subtitle: 'Pré-venda por WhatsApp e Formação de Preço Justo',
      date: '07 de Outubro',
      description: [
        'O aplicativo WhatsApp foi estruturado como a vitrine viva do empreendedor rural, sem custo e sem burocracia: primeiro o cliente faz o pedido antecipado, depois o produto fresco é colhido, preparado e entregue na feira.',
        'Também foram abordados os princípios da formação do preço justo e lançado oficialmente o perfil da feira no Instagram: @feiraagrouneb.'
      ],
      steps: ['Mostrar', 'Receber', 'Anotar', 'Confirmar', 'Preparar', 'Entregar'],
      mainPhoto: {
        src: 'images/oficina2-sala-1.jpeg',
        alt: 'Oficina 2: Alunos na sala de aula, com menino de camisa amarela, cadeiras azuis e parede branca',
        caption: 'Oficina 2: Alunos na sala de aula, com menino de camisa amarela, cadeiras azuis e parede branca'
      },
      subPhotos: [
        {
          src: 'images/oficina2-sala-2.jpeg',
          alt: 'Alunos na sala de aula com cadeiras azuis, parede branca e menino de camisa amarela',
          caption: 'Sala de aula e dinâmicas'
        },
        {
          src: 'images/oficina2-sala-3.jpeg',
          alt: 'Menino de camisa amarela e alunos durante dinamização na sala de aula com cadeiras azuis',
          caption: 'Interação na sala de aula'
        },
        {
          src: 'images/oficina2-sala-4.jpeg',
          alt: 'Alunos e participantes em sala de aula com cadeiras azuis e parede branca',
          caption: 'Cadeiras azuis e parede branca'
        }
      ]
    }
  ]);

  readonly catalogPages = signal<CatalogPage[]>([
    { pageNumber: 1, title: 'Capa e Apresentação do Catálogo', label: 'Página 1 (Capa)', src: 'images/preview/catalogo-pag-01.jpg' },
    { pageNumber: 4, title: 'Editorial e Princípios da Agroecologia', label: 'Página 4', src: 'images/preview/catalogo-pag-04.jpg' },
    { pageNumber: 6, title: 'Organizações Coletivas: COOAMA', label: 'Página 6', src: 'images/preview/catalogo-pag-06.jpg' },
    { pageNumber: 7, title: 'Amigos da Arte: Economia Criativa', label: 'Página 7', src: 'images/preview/catalogo-pag-07.jpg' },
    { pageNumber: 8, title: 'AHORGSAJ: Agricultores Orgânicos de SAJ', label: 'Página 8', src: 'images/preview/catalogo-pag-08.jpg' },
    { pageNumber: 9, title: 'AACS e Marca Sabor do Recôncavo', label: 'Página 9', src: 'images/preview/catalogo-pag-09.jpg' },
    { pageNumber: 11, title: 'Empreendedores: Frutas e Hortaliças', label: 'Página 11', src: 'images/preview/catalogo-pag-11.jpg' },
    { pageNumber: 17, title: 'Geleias, Biscoitos e Empadas', label: 'Página 17', src: 'images/preview/catalogo-pag-17.jpg' },
    { pageNumber: 20, title: 'Sabonetes Artesanais e Produtos Naturais', label: 'Página 20', src: 'images/preview/catalogo-pag-20.jpg' },
    { pageNumber: 30, title: 'Crochê, Bordados e Artesanato', label: 'Página 30', src: 'images/preview/catalogo-pag-30.jpg' },
    { pageNumber: 32, title: 'Marcenaria Sustentável e Utilitários', label: 'Página 32', src: 'images/preview/catalogo-pag-32.jpg' },
    { pageNumber: 35, title: 'Contatos, Encomendas e Contra-capa', label: 'Página 35', src: 'images/preview/catalogo-pag-35.jpg' }
  ]);

  readonly galleryItems = signal<GalleryItem[]>([
    {
      id: 1,
      src: 'images/foto-01.jpeg',
      alt: 'Estande da Feira Agroecológica na 12ª FEMPA',
      caption: 'Estande da Feira Agroecológica na 12ª FEMPA',
      category: 'feira'
    },
    {
      id: 2,
      src: 'images/foto-02.jpeg',
      alt: 'Painel com fotos dos feirantes e QR codes interativos',
      caption: 'Painel com fotos dos feirantes e QR codes interativos',
      category: 'feira'
    },
    {
      id: 3,
      src: 'images/oficina1-auditorio-1.jpeg',
      alt: 'Oficina 1: Alunos e pessoas no auditório com poltronas vermelhas',
      caption: 'Oficina 1: Alunos e pessoas no auditório com poltronas vermelhas',
      category: 'oficinas'
    },
    {
      id: 4,
      src: 'images/oficina1-auditorio-2.jpeg',
      alt: 'Auditório do Campus V: Orientação individual e troca de saberes',
      caption: 'Auditório do Campus V: Orientação aos feirantes',
      category: 'oficinas'
    },
    {
      id: 5,
      src: 'images/oficina1-auditorio-3.jpeg',
      alt: 'Participantes reunidos no auditório com poltronas vermelhas',
      caption: 'Participantes reunidos nas poltronas do auditório',
      category: 'oficinas'
    },
    {
      id: 6,
      src: 'images/oficina2-sala-1.jpeg',
      alt: 'Oficina 2: Alunos na sala de aula, com menino de camisa amarela, cadeiras azuis e parede branca',
      caption: 'Oficina 2: Alunos na sala de aula, com menino de camisa amarela, cadeiras azuis e parede branca',
      category: 'oficinas'
    },
    {
      id: 7,
      src: 'images/oficina2-sala-2.jpeg',
      alt: 'Alunos na sala de aula com cadeiras azuis, parede branca e menino de camisa amarela',
      caption: 'Apresentação de slides e dinâmica em sala de aula',
      category: 'oficinas'
    },
    {
      id: 8,
      src: 'images/oficina2-sala-3.jpeg',
      alt: 'Menino de camisa amarela e alunos durante dinamização na sala de aula com cadeiras azuis',
      caption: 'Interação dos alunos com feirantes em sala de aula',
      category: 'oficinas'
    },
    {
      id: 9,
      src: 'images/foto-08.jpeg',
      alt: 'Apresentação de produtos e identidade visual',
      caption: 'Apresentação de produtos e identidade visual',
      category: 'produtos'
    },
    {
      id: 10,
      src: 'images/foto-09.jpeg',
      alt: 'Divulgação digital e integração nas redes sociais',
      caption: 'Divulgação digital e integração nas redes sociais',
      category: 'produtos'
    },
    {
      id: 11,
      src: 'images/foto-10.jpeg',
      alt: 'Interação com a comunidade acadêmica no Campus V',
      caption: 'Interação com a comunidade acadêmica no Campus V',
      category: 'feira'
    },
    {
      id: 12,
      src: 'images/foto-11.jpeg',
      alt: 'Geleias artesanais, compotas e temperos naturais',
      caption: 'Geleias artesanais, compotas e temperos naturais',
      category: 'produtos'
    },
    {
      id: 13,
      src: 'images/foto-12.jpeg',
      alt: 'Artesanatos em crochê, bordados e utilitários',
      caption: 'Artesanatos em crochê, bordados e utilitários',
      category: 'produtos'
    },
    {
      id: 14,
      src: 'images/foto-13.jpeg',
      alt: 'Visão ampla da Feira Agroecológica e estande temático',
      caption: 'Visão ampla da Feira Agroecológica e estande temático',
      category: 'feira'
    },
    {
      id: 15,
      src: 'images/foto-14.jpeg',
      alt: 'Exposição de produtos agroecológicos e peças exclusivas',
      caption: 'Exposição de produtos agroecológicos e peças exclusivas',
      category: 'produtos'
    }
  ]);
}
