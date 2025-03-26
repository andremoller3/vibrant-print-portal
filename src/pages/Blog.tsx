
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Search } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const blogPosts = [
    {
      id: 1,
      title: "5 Dicas para Criar Banners Perfeitos com uma Gráfica em Caraguatatuba",
      excerpt: "Descubra as melhores práticas para criar banners que realmente chamam a atenção e transmitem sua mensagem de forma eficaz, com o suporte de uma gráfica profissional.",
      imageUrl: "https://images.unsplash.com/photo-1561398624-13ffe4a194b1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      author: "Carlos Silva",
      date: "12 de Maio, 2023",
      category: "Dicas"
    },
    {
      id: 2,
      title: "Por que Escolher a Vecinos Comunicação Visual como Sua Gráfica no Litoral Norte?",
      excerpt: "Conheça as vantagens de trabalhar com a Vecinos Comunicação Visual para seus projetos de impressão e comunicação visual em Caraguatatuba e todo o Litoral Norte de São Paulo.",
      imageUrl: "https://images.unsplash.com/photo-1587716949419-dc62e1fc1737?q=80&w=1106&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      author: "Ana Oliveira",
      date: "23 de Junho, 2023",
      category: "Empresa"
    },
    {
      id: 3,
      title: "Envelopamento de Veículos: Transforme seu Carro em uma Ferramenta de Marketing",
      excerpt: "Saiba como o envelopamento de veículos pode aumentar a visibilidade da sua marca e gerar mais negócios enquanto você se desloca pela cidade.",
      imageUrl: "https://images.unsplash.com/photo-1604705528621-83fdb3a0dccf?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      author: "Marcos Santos",
      date: "8 de Julho, 2023",
      category: "Marketing"
    },
    {
      id: 4,
      title: "A Importância das Cores na Comunicação Visual do seu Negócio",
      excerpt: "Entenda como a escolha correta das cores pode influenciar a percepção da sua marca e transmitir os valores corretos para seus clientes.",
      imageUrl: "https://images.unsplash.com/photo-1497091071254-cc9b2ba7c48a?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      author: "Juliana Costa",
      date: "15 de Agosto, 2023",
      category: "Design"
    },
    {
      id: 5,
      title: "Fachadas Comerciais: Como Atrair Mais Clientes para sua Loja em Caraguatatuba",
      excerpt: "Descubra como uma fachada bem projetada e executada pode ser um diferencial competitivo para seu negócio no comércio local de Caraguatatuba.",
      imageUrl: "https://images.unsplash.com/photo-1490810194309-344b3661ba39?q=80&w=1228&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      author: "Carlos Silva",
      date: "27 de Setembro, 2023",
      category: "Negócios"
    },
    {
      id: 6,
      title: "Materiais Promocionais: Estratégias para Eventos e Feiras no Litoral Norte",
      excerpt: "Aprenda a maximizar sua presença em eventos e feiras comerciais com materiais promocionais eficientes e de alta qualidade.",
      imageUrl: "https://images.unsplash.com/photo-1531973576160-7125cd663d86?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      author: "Ana Oliveira",
      date: "10 de Outubro, 2023",
      category: "Eventos"
    }
  ];

  const categories = [
    { name: "Dicas", count: 8 },
    { name: "Empresa", count: 5 },
    { name: "Marketing", count: 12 },
    { name: "Design", count: 10 },
    { name: "Negócios", count: 7 },
    { name: "Eventos", count: 6 }
  ];

  const recentPosts = [
    { id: 1, title: "5 Dicas para Criar Banners Perfeitos", date: "12 de Maio, 2023" },
    { id: 2, title: "Por que Escolher a Vecinos Comunicação Visual", date: "23 de Junho, 2023" },
    { id: 3, title: "Envelopamento de Veículos", date: "8 de Julho, 2023" },
    { id: 4, title: "A Importância das Cores na Comunicação Visual", date: "15 de Agosto, 2023" }
  ];

  const filteredPosts = blogPosts.filter(post => 
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Navbar />

      {/* Page Header */}
      <div className="pt-32 pb-16 px-4 bg-gray-50">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-vecinos-blue mb-4 animate-slide-in-top">
            Blog da Vecinos
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-slide-in-top" style={{ animationDelay: '0.2s' }}>
            Dicas, tendências e novidades sobre comunicação visual, design e impressão para seu negócio.
          </p>
        </div>
      </div>

      {/* Blog Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Blog Posts */}
            <div className="lg:col-span-2">
              {/* Search Mobile */}
              <div className="mb-10 lg:hidden">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Buscar artigos..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-vecinos-orange focus:border-transparent transition-all duration-300 pl-10"
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-12">
                {filteredPosts.length > 0 ? (
                  filteredPosts.map((post) => (
                    <div key={post.id} className="bg-white rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                      <div className="relative">
                        <img 
                          src={post.imageUrl} 
                          alt={post.title} 
                          className="w-full h-64 object-cover"
                        />
                        <div className="absolute top-4 right-4 bg-vecinos-orange text-white px-3 py-1 rounded-full text-sm">
                          {post.category}
                        </div>
                      </div>
                      <div className="p-6">
                        <h2 className="text-2xl font-bold text-vecinos-blue mb-3 hover:text-vecinos-orange transition-colors duration-300">
                          <Link to={`/blog/${post.id}`}>{post.title}</Link>
                        </h2>
                        <div className="flex items-center text-gray-500 text-sm mb-4">
                          <div className="flex items-center mr-4">
                            <User size={14} className="mr-1" />
                            <span>{post.author}</span>
                          </div>
                          <div className="flex items-center">
                            <Calendar size={14} className="mr-1" />
                            <span>{post.date}</span>
                          </div>
                        </div>
                        <p className="text-gray-600 mb-4">
                          {post.excerpt}
                        </p>
                        <Link 
                          to={`/blog/${post.id}`} 
                          className="inline-flex items-center text-vecinos-orange font-medium hover:underline group"
                        >
                          Ler mais{' '}
                          <ArrowRight size={16} className="ml-1 transform group-hover:translate-x-1 transition-transform duration-300" />
                        </Link>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-12">
                    <h3 className="text-xl font-semibold text-vecinos-blue mb-2">Nenhum resultado encontrado</h3>
                    <p className="text-gray-600">Tente uma busca diferente ou navegue pelas categorias.</p>
                  </div>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Search Desktop */}
              <div className="bg-white p-6 rounded-lg shadow-md mb-8 hidden lg:block">
                <h3 className="text-xl font-semibold text-vecinos-blue mb-4">Buscar</h3>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Buscar artigos..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-vecinos-orange focus:border-transparent transition-all duration-300 pl-10"
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                </div>
              </div>

              {/* Categories */}
              <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <h3 className="text-xl font-semibold text-vecinos-blue mb-4">Categorias</h3>
                <ul className="space-y-3">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <button 
                        onClick={() => setSearchQuery(category.name)}
                        className="flex items-center justify-between w-full text-left group"
                      >
                        <span className="text-gray-700 group-hover:text-vecinos-orange transition-colors duration-300">
                          {category.name}
                        </span>
                        <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs group-hover:bg-vecinos-orange group-hover:text-white transition-all duration-300">
                          {category.count}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Recent Posts */}
              <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <h3 className="text-xl font-semibold text-vecinos-blue mb-4">Posts Recentes</h3>
                <ul className="space-y-4">
                  {recentPosts.map((post) => (
                    <li key={post.id} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                      <Link 
                        to={`/blog/${post.id}`} 
                        className="text-gray-700 hover:text-vecinos-orange transition-colors duration-300"
                      >
                        {post.title}
                      </Link>
                      <div className="text-gray-500 text-sm mt-1 flex items-center">
                        <Calendar size={14} className="mr-1" />
                        <span>{post.date}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="bg-vecinos-blue p-6 rounded-lg shadow-md text-white">
                <h3 className="text-xl font-semibold mb-4">Precisa de uma Cotação?</h3>
                <p className="text-blue-100 mb-6">
                  Entre em contato hoje mesmo e receba um orçamento personalizado para seu projeto.
                </p>
                <a 
                  href="https://wa.me/5512979790618" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn bg-white text-vecinos-blue hover:bg-gray-100 w-full block text-center"
                >
                  Solicitar Orçamento
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Blog;
