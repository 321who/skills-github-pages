// 基本功能实现 - Basic functionality implementation

// DOM加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 初始化所有功能
    initDarkModeToggle();
    initSmoothScrolling();
    initBlogPostInteractions();
    initProjectCardAnimations();
    initContactForm();
    
    console.log('个人主页基本功能已加载完成');
});

// 暗黑模式切换功能
function initDarkModeToggle() {
    const toggleButton = document.getElementById('toggle-dark-mode');
    const body = document.body;
    
    // 检查本地存储中的主题偏好
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        updateToggleButtonText(toggleButton, true);
    }
    
    // 切换按钮点击事件
    toggleButton.addEventListener('click', function() {
        body.classList.toggle('dark-mode');
        const isDarkMode = body.classList.contains('dark-mode');
        
        // 保存主题偏好到本地存储
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
        updateToggleButtonText(toggleButton, isDarkMode);
        
        // 添加切换动画效果
        toggleButton.style.transform = 'scale(0.95)';
        setTimeout(() => {
            toggleButton.style.transform = 'scale(1)';
        }, 150);
    });
}

// 更新切换按钮文字
function updateToggleButtonText(button, isDarkMode) {
    button.textContent = isDarkMode ? '浅色模式' : '暗黑模式';
}

// 平滑滚动导航功能
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                // 平滑滚动到目标区域
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // 添加视觉反馈
                highlightActiveSection(targetId);
            }
        });
    });
}

// 高亮当前活动的导航区域
function highlightActiveSection(targetId) {
    // 移除所有活动状态
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
    });
    
    // 添加当前活动状态
    const activeLink = document.querySelector(`a[href="${targetId}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
        
        // 2秒后移除高亮效果
        setTimeout(() => {
            activeLink.classList.remove('active');
        }, 2000);
    }
}

// 博客文章交互功能
function initBlogPostInteractions() {
    const readMoreButtons = document.querySelectorAll('.blog-post .btn');
    
    readMoreButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            const blogPost = this.closest('.blog-post');
            const title = blogPost.querySelector('h3').textContent;
            
            // 模拟打开博客文章
            showBlogPostPreview(title, blogPost);
        });
    });
}

// 显示博客文章预览
function showBlogPostPreview(title, blogPost) {
    // 创建模态窗口显示博客文章详情
    const modal = document.createElement('div');
    modal.className = 'blog-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h2>${title}</h2>
                <span class="close-modal">&times;</span>
            </div>
            <div class="modal-body">
                <p>这是一个示例博客文章的完整内容。在实际应用中，这里会显示文章的完整文本。</p>
                <p>您可以在这里添加更多的内容，包括图片、代码示例和其他多媒体元素。</p>
                <p>感谢您阅读我的博客文章！</p>
            </div>
            <div class="modal-footer">
                <button class="btn close-modal-btn">关闭</button>
            </div>
        </div>
    `;
    
    // 添加模态窗口样式
    if (!document.querySelector('#modal-styles')) {
        const style = document.createElement('style');
        style.id = 'modal-styles';
        style.textContent = `
            .blog-modal {
                position: fixed;
                z-index: 1000;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(0,0,0,0.5);
                display: flex;
                align-items: center;
                justify-content: center;
            }
            .modal-content {
                background: white;
                padding: 0;
                border-radius: 8px;
                max-width: 600px;
                width: 90%;
                max-height: 80vh;
                overflow-y: auto;
                box-shadow: 0 4px 20px rgba(0,0,0,0.3);
            }
            .modal-header {
                padding: 1.5rem;
                border-bottom: 1px solid #eee;
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
            .modal-body {
                padding: 1.5rem;
            }
            .modal-footer {
                padding: 1rem 1.5rem;
                border-top: 1px solid #eee;
                text-align: right;
            }
            .close-modal {
                font-size: 2rem;
                cursor: pointer;
                color: #999;
            }
            .close-modal:hover {
                color: #333;
            }
            .dark-mode .modal-content {
                background: #1e1e1e;
                color: #e0e0e0;
            }
            .dark-mode .modal-header,
            .dark-mode .modal-footer {
                border-color: #333;
            }
        `;
        document.head.appendChild(style);
    }
    
    // 添加到页面并显示
    document.body.appendChild(modal);
    
    // 关闭模态窗口功能
    const closeButtons = modal.querySelectorAll('.close-modal, .close-modal-btn');
    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            document.body.removeChild(modal);
        });
    });
    
    // 点击背景关闭
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            document.body.removeChild(modal);
        }
    });
}

// 项目卡片动画效果
function initProjectCardAnimations() {
    const projectCards = document.querySelectorAll('.project-card');
    
    // 添加点击交互效果
    projectCards.forEach(card => {
        card.addEventListener('click', function() {
            // 添加点击效果
            this.style.transform = 'translateY(-12px) scale(1.02)';
            setTimeout(() => {
                this.style.transform = 'translateY(-8px)';
            }, 200);
            
            // 显示项目详情
            const projectTitle = this.querySelector('h3').textContent;
            showProjectDetail(projectTitle, this);
        });
        
        // 鼠标悬停效果增强
        card.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.boxShadow = '0 2px 12px rgba(0,0,0,0.1)';
        });
    });
}

// 显示项目详情
function showProjectDetail(title, card) {
    const description = card.querySelector('p').textContent;
    
    // 创建项目详情提示
    const tooltip = document.createElement('div');
    tooltip.className = 'project-tooltip';
    tooltip.innerHTML = `
        <h4>${title}</h4>
        <p>${description}</p>
        <p><strong>技术栈:</strong> HTML, CSS, JavaScript</p>
        <p><strong>状态:</strong> 开发中</p>
    `;
    
    // 添加提示样式
    if (!document.querySelector('#tooltip-styles')) {
        const style = document.createElement('style');
        style.id = 'tooltip-styles';
        style.textContent = `
            .project-tooltip {
                position: fixed;
                background: #333;
                color: white;
                padding: 1rem;
                border-radius: 8px;
                max-width: 300px;
                z-index: 1000;
                box-shadow: 0 4px 12px rgba(0,0,0,0.3);
                pointer-events: none;
                opacity: 0;
                transition: opacity 0.3s;
            }
            .project-tooltip.show {
                opacity: 1;
            }
            .project-tooltip h4 {
                margin: 0 0 0.5rem 0;
                color: #ffa500;
            }
            .dark-mode .project-tooltip {
                background: #444;
                border: 1px solid #666;
            }
        `;
        document.head.appendChild(style);
    }
    
    // 定位并显示提示
    document.body.appendChild(tooltip);
    
    // 获取鼠标位置并定位提示
    const rect = card.getBoundingClientRect();
    tooltip.style.left = (rect.left + rect.width / 2 - 150) + 'px';
    tooltip.style.top = (rect.top - tooltip.offsetHeight - 10) + 'px';
    
    // 显示动画
    setTimeout(() => {
        tooltip.classList.add('show');
    }, 10);
    
    // 3秒后自动隐藏
    setTimeout(() => {
        if (document.body.contains(tooltip)) {
            tooltip.classList.remove('show');
            setTimeout(() => {
                if (document.body.contains(tooltip)) {
                    document.body.removeChild(tooltip);
                }
            }, 300);
        }
    }, 3000);
}

// 添加滚动时的导航高亮效果
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});

// 添加活动状态的CSS样式
const activeStyle = document.createElement('style');
activeStyle.textContent = `
    .nav-links a.active {
        color: #ffa500 !important;
        background: rgba(255, 165, 0, 0.1);
        border-radius: 4px;
    }
`;
document.head.appendChild(activeStyle);

// 联系表单功能
function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // 获取表单数据
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // 基本验证
            if (!name || !email || !message) {
                showNotification('请填写所有必填字段', 'error');
                return;
            }
            
            if (!isValidEmail(email)) {
                showNotification('请输入有效的邮箱地址', 'error');
                return;
            }
            
            // 模拟发送消息
            showNotification('正在发送消息...', 'info');
            
            setTimeout(() => {
                showNotification('消息发送成功！我会尽快回复您。', 'success');
                contactForm.reset();
            }, 2000);
        });
    }
}

// 邮箱验证函数
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// 显示通知消息
function showNotification(message, type = 'info') {
    // 创建通知元素
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // 添加通知样式
    if (!document.querySelector('#notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
            .notification {
                position: fixed;
                top: 20px;
                right: 20px;
                padding: 1rem 1.5rem;
                border-radius: 8px;
                color: white;
                z-index: 1000;
                max-width: 400px;
                opacity: 0;
                transform: translateX(100%);
                transition: all 0.3s ease;
            }
            .notification.show {
                opacity: 1;
                transform: translateX(0);
            }
            .notification-success {
                background: #4CAF50;
            }
            .notification-error {
                background: #f44336;
            }
            .notification-info {
                background: #2196F3;
            }
        `;
        document.head.appendChild(style);
    }
    
    // 添加到页面
    document.body.appendChild(notification);
    
    // 显示动画
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    // 自动隐藏
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 4000);
}