document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const sidebar = document.querySelector('.left-sidebar');

    menuToggle.addEventListener('click', function () {
        this.classList.toggle('active');
        sidebar.classList.toggle('active');
    });

    // 点击菜单外部关闭菜单
    document.addEventListener('click', function (e) {
        if (!sidebar.contains(e.target) && e.target !== menuToggle) {
            menuToggle.classList.remove('active');
            sidebar.classList.remove('active');
        }
    });


    // 获取按钮元素
    const backToTopButton = document.getElementById('back-to-top');

    // 当页面滚动时显示或隐藏按钮
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 0) {  // 修改为>0，只要离开顶部就显示
            backToTopButton.classList.add('show');
        } else {
            backToTopButton.classList.remove('show');
        }
    });

    // 点击按钮回到顶部
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // 平滑滚动
        });
    });

    // 页面加载时检查一次（防止刷新后页面不在顶部）
    document.addEventListener('DOMContentLoaded', () => {
        if (window.pageYOffset > 0) {
            backToTopButton.classList.add('show');
        }
    });

    const backButton = document.getElementById('back-button');
    if (backButton) {
        backButton.addEventListener('click', function () {
            window.history.back();
        });
    }

    const articles = document.querySelectorAll('article.md_content');

    articles.forEach(article => {
        const firstElement = article.firstElementChild;
        if (firstElement && firstElement.tagName.toLowerCase() === 'p') {
            article.style.paddingTop = '2rem';
        }
    });

    const target_div = document.querySelectorAll('div.post_summary');

    target_div.forEach(target => {
        const firstElement = target.firstElementChild;
        if (firstElement && firstElement.tagName.toLowerCase() === 'p') {
            target.style.paddingTop = '1rem';
        }
    });
});

