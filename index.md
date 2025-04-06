<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>我的个人主页</title>
  <link rel="stylesheet" href="style.css">
  <!-- 引入 Google Fonts -->
  <link href="https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap" rel="stylesheet">
</head>
<body>
  <header>
    <nav>
      <div class="logo">我的主页</div>
      <ul class="nav-links">
        <li><a href="#hero">首页</a></li>
        <li><a href="#about">关于我</a></li>
        <li class="dropdown">
          <a href="#projects" class="dropbtn">项目 &#x25BC;</a>
          <div class="dropdown-content">
            <a href="#project1">项目1</a>
            <a href="#project2">项目2</a>
            <a href="#project-gallery">画廊</a>
          </div>
        </li>
        <li><a href="#blog">博客</a></li>
        <li><a href="#contact">联系</a></li>
      </ul>
      <button id="toggle-dark-mode">切换主题</button>
    </nav>
  </header>

  <section id="hero">
    <div class="hero-content">
      <h1>欢迎来到我的个人主页</h1>
      <p>探索我的项目、博客与更多精彩内容</p>
      <a href="#about" class="btn">了解我</a>
    </div>
  </section>

  <section id="about">
    <h2>关于我</h2>
    <p>我是一个全栈开发者，热爱创新与挑战。拥有多年的前端和后端开发经验，致力于打造高质量、安全、易用的应用。</p>
  </section>

  <section id="projects">
    <h2>我的项目</h2>
    <div class="projects-container">
      <article id="project1" class="project-card">
        <img src="https://via.placeholder.com/400x250" alt="项目1">
        <h3>项目名称1</h3>
        <p>一个令人惊叹的创新项目，展示了我在前端开发和用户体验设计上的能力。</p>
      </article>
      <article id="project2" class="project-card">
        <img src="https://via.placeholder.com/400x250" alt="项目2">
        <h3>项目名称2</h3>
        <p>利用最新技术打造的卓越项目，展现了我的全栈开发实力与解决复杂问题的能力。</p>
      </article>
      <!-- 更多项目卡片可以在此扩展 -->
    </div>
  </section>

  <section id="project-gallery">
    <h2>项目画廊</h2>
    <div class="gallery">
      <img src="https://via.placeholder.com/300x200" alt="画廊图片1">
      <img src="https://via.placeholder.com/300x200" alt="画廊图片2">
      <img src="https://via.placeholder.com/300x200" alt="画廊图片3">
      <img src="https://via.placeholder.com/300x200" alt="画廊图片4">
      <!-- 可添加更多图片 -->
    </div>
  </section>

  <section id="blog">
    <h2>博客</h2>
    <div class="blog-container">
      <article class="blog-post">
        <h3>博客文章标题1</h3>
        <small>2025-04-01</small>
        <p>这是一篇关于最新技术动态与开发心得的博客文章，欢迎阅读和交流。</p>
        <a href="#" class="btn">阅读全文</a>
      </article>
      <article class="blog-post">
        <h3>博客文章标题2</h3>
        <small>2025-03-20</small>
        <p>分享一些在开发过程中遇到的问题及解决方案，帮助你更好地理解前沿技术。</p>
        <a href="#" class="btn">阅读全文</a>
      </article>
      <!-- 更多博客文章可以在此扩展 -->
    </div>
  </section>

  <section id="contact">
    <h2>联系我</h2>
    <p>如果你对我的工作感兴趣，或有任何建议和合作意向，请通过以下方式联系我：</p>
    <ul class="contact-info">
      <li>Email: <a href="mailto:example@example.com">example@example.com</a></li>
      <li>GitHub: <a href="https://github.com/321who" target="_blank">321who</a></li>
      <li>LinkedIn: <a href="https://www.linkedin.com/in/yourprofile" target="_blank">我的LinkedIn</a></li>
    </ul>
  </section>

  <footer>
    <p>&copy; 2025 321who. 保留所有权利.</p>
  </footer>

  <script src="script.js"></script>
</body>
</html>
