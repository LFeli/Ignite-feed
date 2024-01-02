import { Header } from "./components/header/Header"
import { Sidebar } from './components/sidebar/Sidebar';
import { Post, PostType } from './components/post/Post';

import './global.css';
import styles from './App.module.css';

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/LFeli.png',
      name: 'Lucas Felipe',
      role: 'Front-end Developer',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋 Vou compartilhar uma dica valiosa para tornar seus layouts ainda mais incríveis: o Flexbox! 🚀💻' },
      { type: 'paragraph', content: 'Com apenas algumas propriedades CSS, você pode criar designs responsivos e flexíveis sem quebrar a cabeça.' },
      { type: 'paragraph', content: 'Experimente usar "display: flex" no container e explore as propriedades como "justify-content" e "align-items" para ajustar seus elementos. Quem mais ama a simplicidade do Flexbox?' },
      { type: 'link', content: '👉 <a href="#">jane.design/doctorcare</a>' },
    ],
    publishedAt: new Date('2023-12-24 14:00:00'),
    comments: [
      'Post muito bacana, hein?!',
    ],
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/LFeliDev.png',
      name: 'Lucas Araújo',
      role: 'Back-end Developer',
    },
    content: [
      { type: 'paragraph', content: 'Fala pessoal!' },
      { type: 'paragraph', content: 'Vamos falar sobre Docker, uma ferramenta poderosa para empacotar, distribuir e executar aplicações de forma consistente em qualquer ambiente. 🌐' },
      { type: 'paragraph', content: 'Se você ainda não explorou o Docker, está perdendo algo incrível! Com apenas um arquivo de configuração (Dockerfile), você pode criar containers isolados para suas aplicações, facilitando a implantação e escalabilidade.' },
      { type: 'paragraph', content: 'Mas me diz aí, você ja conhecia o Docker?' },
    ],
    publishedAt: new Date('2023-12-24 16:00:00'),
    comments: [
      'Concordo! Docker facilita muito o processo de deploy.',
      'Docker é uma ferramenta indispensável nos dias de hoje.',
    ],
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        
        <main>
          {posts.map(post => {
            return (
              <Post 
                key={post.id}
                post={post}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}