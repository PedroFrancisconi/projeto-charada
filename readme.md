🧩 Gerador de Charadas

readme

Um web app interativo que desafia o usuário com charadas aleatórias extraídas de um banco de dados via API. O projeto foca em uma experiência de usuário (UX) fluida, com feedbacks visuais instantâneos e um sistema de pontuação dinâmico.

✨ Funcionalidades
Busca de Charadas em Tempo Real: Consome uma API customizada integrada ao Firestore.

Sistema de Validação: Compara a resposta do usuário com a resposta correta, ignorando diferenças de maiúsculas/minúsculas ou espaços extras.

Feedback Visual Inteligente:

✅ Acerto: O fundo da tela fica verde, o card gira 180° revelando a resposta e a pontuação aumenta.

❌ Erro: O fundo fica vermelho temporariamente e o card executa um efeito de vibração (shake).

Segurança de Jogo: O card de resposta é bloqueado para cliques manuais, girando apenas quando o usuário acerta o palpite.

Navegação: Opção de pular a charada atual para carregar uma nova sem perder o progresso.

🛠️ Tecnologias Utilizadas
Frontend: Estrutura em HTML5 e lógica em JavaScript Vanilla (ES6+).

Estilização: Tailwind CSS para design responsivo e componentes modernos.

Backend: API Node.js hospedada na Vercel, conectada ao Google Firebase (Firestore).

Animações: Transições CSS suaves para cores e transformações 3D no card.

https://projeto-charada-pi.vercel.app/